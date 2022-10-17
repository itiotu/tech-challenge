import { ProviderInterface } from '../Interface/ProviderInterface';
import BaseProvider from '../BaseProvider';

export class BinanceProvider extends BaseProvider implements ProviderInterface {
    public uri = 'https://api.binance.com';
    public identifier = 'binance';
}
