import { ProviderInterface } from '../Interface/ProviderInterface';
import BaseProvider from '../BaseProvider';

export class CoinbaseProvider extends BaseProvider implements ProviderInterface {
    public uri = 'https://api.exchange.coinbase.com';
    public identifier = 'coinbase';
}
