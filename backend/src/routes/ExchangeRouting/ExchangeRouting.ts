import { Context } from 'koa';
import Router from 'koa-router';
import { SellOrderBookLoader } from '../../loader/OrderBook/SellOrderBookLoader';
import { amountMiddleware } from '../../middleware/AmountMiddleware';
import FulfillOrderManager from '../../manager/OrderBook/FulfillOrderManager';
import BinanceSellOrderBook from "../../providers/Binance/OrderBook/BinanceSellOrderBook";
import CoinbaseSellOrderBook from "../../providers/Coinbase/OrderBook/CoinbaseSellOrderBook";
import KrakenSellOrderBook from "../../providers/Kraken/OrderBook/KrakenSellOrderBook";

const router = new Router();

router.get('exchange-routing', '/:buy/:exchange/:amount', amountMiddleware, async (ctx: Context) => {
    const buyAmount = ctx.params.amount as string;
    const buySymbol = ctx.params.buy as string;
    const exchangeSymbol = ctx.params.exchange as string;

    const sellOrderBookLoader = new SellOrderBookLoader([new BinanceSellOrderBook(), new CoinbaseSellOrderBook(), new KrakenSellOrderBook()]);
    const orderBooks = await sellOrderBookLoader.loadOrderBook(buySymbol, exchangeSymbol);

    const fulfillOrderManager = new FulfillOrderManager(orderBooks);
    const dryRunFulfilments = await fulfillOrderManager.dryFulfill(buyAmount);
    const bestSolutionProvider = dryRunFulfilments[0];
        console.log(dryRunFulfilments);
    if (!bestSolutionProvider) {
        throw new Error('No available providers could match the total amount with their order books.');
    }

    ctx.body = {
        buyCurrency: buySymbol,
        buyAmount: bestSolutionProvider.amount,
        exchangeCurrency: exchangeSymbol,
        exchangeAmount: bestSolutionProvider.cost,
        provider: bestSolutionProvider.provider
    };
});

export default router;
