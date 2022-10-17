import {Currency, CurrencyResponse} from "../../types/Currency";
import Axios from "axios";

export const CurrencyListProvider = async () : Promise<Currency[]> => {
    const response = await Axios.get<CurrencyResponse[]>('https://api.moonpay.com/v3/currencies');
    const currencies: Currency[] = [];

    response.data.forEach(responseCurrency => currencies.push({
        isSupportedInUS: responseCurrency.isSupportedInUS ?? true,
        supportsLiveMode: responseCurrency.supportsLiveMode ?? true,
        supportsTestMode: responseCurrency.supportsTestMode ?? true,
        code: responseCurrency.code,
        name: responseCurrency.name
    }))

    return currencies;
}
