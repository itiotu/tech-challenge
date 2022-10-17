import {useEffect, useState} from "react";
import {sortCurrencies} from "../../utils/SortingUtils";
import {Currency} from "../../types/Currency";
import {Filters, FilterTypes} from "../../types/Filters";
import {CurrencyListProvider} from "./CurrencyListProvider";
import {applyFilters} from "../../components/Forms/FilterSwitchLogical";

export const CurrencyListLogical = () => {
    const [currencies, setCurrencies] = useState<Currency[]>([]);
    const [filteredCurrencies, setFilteredCurrencies] = useState<Currency[]>([]);

    const [sort, setSort] = useState<string>('');
    const [filters, setFilters] = useState<Filters>({});

    useEffect(() => {
        const fetchCurrencies = async () => {
            try {
                setCurrencies([]);
                setCurrencies(await CurrencyListProvider());
            } catch (e) {
                throw new Error('Could not retrieve currencies.');
            }
        };
        fetchCurrencies();
    }, []);

    useEffect(() => {
        setFilteredCurrencies(currencies);
    }, [currencies]);

    useEffect(() => {
        setFilteredCurrencies(applyFilters(filters, currencies));
    }, [filters, currencies]);

    const handleFilterChange = (filter: FilterTypes, value: boolean) => {
        filters[filter] = value;
        setFilters({...filters});
    }

    const handleSort = (sortValue: string) => {
        setSort(sortValue);
        setCurrencies(sortCurrencies(sortValue, currencies))
    }

    return {
        handleFilterChange,
        handleSort,
        sort,
        filteredCurrencies
    }
}
