import { LoadedOrderBook } from './types/LoadedOrderBook';

export interface OrderBookLoaderInterface {
    loadOrderBook(currencySymbol: string, exchangeSymbol: string): Promise<LoadedOrderBook[]>;
}
