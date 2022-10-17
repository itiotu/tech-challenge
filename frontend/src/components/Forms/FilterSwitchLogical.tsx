import {Filters, FilterTypes} from "../../types/Filters";
import {Currency} from "../../types/Currency";

export function applyFilters(filters: Filters, currencies: Currency[]) {
    let filteredList = [...currencies];

    Object.keys(filters).forEach((filterKey: string) => {
        const filterEnabled = filters[filterKey];
        if (filterEnabled) {
            filteredList = applyFilter(filterKey, filteredList);
        }
    })

    return filteredList;
}

function applyFilter(filterKey: string, currencies: Currency[]) {
    switch (filterKey) {
        case FilterTypes.SUPPORT_US:
            return currencies.filter(currency => currency.isSupportedInUS);
        case FilterTypes.SUPPORT_TEST:
            return currencies.filter(currency => currency.supportsTestMode)
        default:
            throw new Error('Filter not mapped');
    }
}
