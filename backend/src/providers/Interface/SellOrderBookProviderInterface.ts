import { OrderBook } from '../../types/OrderBook';

export interface SellOrderBookProviderInterface {
    getSellOrderBooks(baseCurrency: string, exchangeSymbol: string): Promise<OrderBook[]>;
    formatSellOrderResponse(buyData: string[][]): OrderBook[];
}
