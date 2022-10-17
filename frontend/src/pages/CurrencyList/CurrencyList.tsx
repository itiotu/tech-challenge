import React from 'react';
import {Row, Col} from "react-bootstrap";
import CurrencyListControls from "../../components/ListControls/CurrencyListControls";
import CurrencyCard from "../../components/Items/CurrencyCard";
import {CurrencyListLogical} from "./CurrencyListLogical";
import {CurrencyListControlsContext} from './CurrencyListControlsContext';

const CurrencyList = () => {
    const {
        handleFilterChange,
        handleSort,
        sort,
        filteredCurrencies
    } = CurrencyListLogical();

    return (
        <>
            <CurrencyListControlsContext.Provider value={{handleFilterChange, handleSort, sort}}>
                <CurrencyListControls/>
            </CurrencyListControlsContext.Provider>

            <Row>
                {filteredCurrencies.map((currency, index) => {
                    return <Col lg={4} sm={6} xs={12} className={'p-2'} key={index}>
                        <CurrencyCard currency={currency}/>
                    </Col>
                })}
            </Row>
        </>
    );
}




export default CurrencyList;



