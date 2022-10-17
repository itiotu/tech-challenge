import { ProviderInterface } from '../Interface/ProviderInterface';
import BaseProvider from '../BaseProvider';

export class KrakenProvider extends BaseProvider implements ProviderInterface {
    public uri = 'https://api.kraken.com';
    public identifier = 'kraken';
}


