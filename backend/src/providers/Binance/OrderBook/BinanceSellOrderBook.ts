import {OrderBook} from "../../../types/OrderBook";
import Axios from "axios";
import {ProviderError} from "../../Error/ProviderError";
import {BinanceProvider} from "../BinanceProvider";
import {SellOrderBookProviderInterface} from "../../Interface/SellOrderBookProviderInterface";

export default class BinanceSellOrderBook extends BinanceProvider implements SellOrderBookProviderInterface {

    async getSellOrderBooks(baseCurrency: string, exchangeSymbol: string): Promise<OrderBook[]> {
        const orderBookResponse = await Axios.get(`${this.uri}/api/v3/depth?symbol=${baseCurrency}${exchangeSymbol}`);
        if (!orderBookResponse.data.asks || orderBookResponse.data.asks.length === 0) {
            throw new ProviderError('Provider failed to retrieve sell order books');
        }

        return super.formatSellOrderResponse(orderBookResponse.data.asks);
    }
}
