import {OrderBook} from "../../../types/OrderBook";
import Axios from "axios";
import {ProviderError} from "../../Error/ProviderError";
import BigNumber from "bignumber.js";
import {SellOrderBookProviderInterface} from "../../Interface/SellOrderBookProviderInterface";
import {CoinbaseProvider} from "../CoinbaseProvider";

export default class CoinbaseSellOrderBook extends CoinbaseProvider implements SellOrderBookProviderInterface {

    async getSellOrderBooks(baseCurrency: string, exchangeSymbol: string): Promise<OrderBook[]> {
        const orderBookResponse = await Axios.get(`${this.uri}/products/${baseCurrency}-${exchangeSymbol}/book?level=2`);

        if (!orderBookResponse.data.asks || orderBookResponse.data.asks.length === 0) {
            throw new ProviderError('Provider failed to retrieve sell order books');
        }

        const orderBook: OrderBook[] = [];

        orderBookResponse.data.asks.forEach((orderBookRow: string[]) => {
            const currencyAmount = orderBookRow[2] ? new BigNumber(orderBookRow[1]).times(orderBookRow[2]).toString() : orderBookRow[1];

            orderBook.push({ exchangeSymbolPrice: orderBookRow[0], currencyAmount: currencyAmount });
        });

        return orderBook;
    }
}
