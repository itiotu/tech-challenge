import { OrderBook } from '../types/OrderBook';

export default class BaseProvider {
    formatSellOrderResponse(buyData: string[][]): OrderBook[] {
        const orderBook: OrderBook[] = [];

        buyData.forEach((orderBookRow: string[]) => {
            orderBook.push({ exchangeSymbolPrice: orderBookRow[0], currencyAmount: orderBookRow[1] });
        });

        return orderBook;
    }
}
