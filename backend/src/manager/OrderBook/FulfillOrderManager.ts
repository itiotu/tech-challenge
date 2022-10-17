import { LoadedOrderBook } from '../../loader/OrderBook/types/LoadedOrderBook';
import { FulfilledInstruction } from './types/FulfillOrderManager';
import BigNumber from 'bignumber.js';

export default class FulfillOrderManager {
    constructor(private loadedOrderBook: LoadedOrderBook[]) {}

    async dryFulfill(amount: string): Promise<FulfilledInstruction[]> {
        const dryRunFulfilments = await Promise.all(
            this.loadedOrderBook.map((providerOrderBook) => {
                return FulfillOrderManager.dryFulfillProvider(providerOrderBook, amount);
            })
        );

        return dryRunFulfilments
            .filter((fulfilledInstruction) => new BigNumber(fulfilledInstruction.amount).isEqualTo(amount))
            .sort((a, b) => (new BigNumber(a.cost).isGreaterThan(b.cost) ? 0 : -1));
    }

    private static dryFulfillProvider(providerOrderBook: LoadedOrderBook, amount: string): FulfilledInstruction {
        let amountLeftToFulfill = new BigNumber(amount);
        let amountFulfilled = new BigNumber(0);
        let totalOrdersUsedToFulfill = 0;
        let totalCostToFulfill = new BigNumber(0);

        for (const orderBook of providerOrderBook.orderBook) {
            if (amountLeftToFulfill.isLessThanOrEqualTo(orderBook.currencyAmount)) {
                amountFulfilled = amountFulfilled.plus(amountLeftToFulfill);
                totalCostToFulfill = totalCostToFulfill.plus(amountLeftToFulfill.times(orderBook.exchangeSymbolPrice));
                totalOrdersUsedToFulfill++;
                break;
            }

            const currentOrderBookAmount = new BigNumber(orderBook.currencyAmount);

            amountFulfilled = amountFulfilled.plus(currentOrderBookAmount);
            totalCostToFulfill = totalCostToFulfill.plus(currentOrderBookAmount.times(orderBook.exchangeSymbolPrice));
            amountLeftToFulfill = amountLeftToFulfill.minus(currentOrderBookAmount);
            totalOrdersUsedToFulfill++;
        }

        return {
            amount: amountFulfilled.toString(),
            cost: totalCostToFulfill.toString(),
            totalOrders: totalOrdersUsedToFulfill,
            provider: providerOrderBook.provider
        };
    }
}
