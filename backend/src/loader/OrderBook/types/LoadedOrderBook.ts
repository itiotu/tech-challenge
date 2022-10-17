import { OrderBook } from '../../../types/OrderBook';

export type LoadedOrderBook = {
    provider: string;
    orderBook: OrderBook[];
};
