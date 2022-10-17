import React from "react";

export type CurrencyListControlsContextType = {handleFilterChange: Function, handleSort: Function, sort: string}

export const CurrencyListControlsContext = React.createContext<CurrencyListControlsContextType>({
    handleFilterChange: () => {},
    handleSort: () => {},
    sort: ''
});
