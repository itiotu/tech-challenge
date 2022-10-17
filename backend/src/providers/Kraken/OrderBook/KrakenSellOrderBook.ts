import {SellOrderBookProviderInterface} from "../../Interface/SellOrderBookProviderInterface";
import {OrderBook} from "../../../types/OrderBook";
import Axios from "axios";
import {ProviderError} from "../../Error/ProviderError";
import {KrakenProvider} from "../KrakenProvider";

export default class KrakenSellOrderBook extends KrakenProvider implements SellOrderBookProviderInterface {
    async getSellOrderBooks(baseCurrency: string, exchangeSymbol: string): Promise<OrderBook[]> {
        const orderBookResponse = await Axios.get(`${this.uri}/0/public/Depth?pair=${baseCurrency}${exchangeSymbol}`);

        if (orderBookResponse.data.error.length !== 0) {
            throw new ProviderError(`Kraken provider failed to retrieve sell order books, Error: ${orderBookResponse.data.error.join(',')}`);
        }

        const orderBook = Object.values(orderBookResponse.data.result)[0] as KrakenOrderBookResponse;
        if (!orderBook) {
            throw new ProviderError('Kraken provider failed to locate order book data in response.');
        }

        return super.formatSellOrderResponse(orderBook.asks);
    }
}

type KrakenOrderBookResponse = {
    asks: string[][];
    bids: string[][];
};
