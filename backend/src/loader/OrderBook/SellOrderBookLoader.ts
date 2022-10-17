import { OrderBookLoaderInterface } from './OrderBookLoaderInterface';
import { LoadedOrderBook } from './types/LoadedOrderBook';
import {SellOrderBookProviderInterface} from "../../providers/Interface/SellOrderBookProviderInterface";
import {ProviderInterface} from "../../providers/Interface/ProviderInterface";

export class SellOrderBookLoader implements OrderBookLoaderInterface {
    constructor(private providers: (SellOrderBookProviderInterface & ProviderInterface)[]) {}

    async loadOrderBook(currencySymbol: string, exchangeSymbol: string): Promise<LoadedOrderBook[]> {
        return Promise.all(
            this.providers.map(async (provider) => {
                return {
                    provider: provider.identifier,
                    orderBook: await provider.getSellOrderBooks(currencySymbol, exchangeSymbol)
                };
            })
        );
    }
}
