import React, {useContext} from 'react';
import {ButtonGroup, Col, Form, Row} from "react-bootstrap";
import FilterSwitch from "../Forms/FilterSwitch";
import SortButton from "../Forms/SortButton";
import {FilterTypes} from "../../types/Filters";
import {
    CurrencyListControlsContext,
    CurrencyListControlsContextType
} from "../../pages/CurrencyList/CurrencyListControlsContext";


const CurrencyListControls = () => {
    const context = useContext<CurrencyListControlsContextType>(CurrencyListControlsContext);
    
    return (
        <Row>
            <Col lg={4} sm={12} className={'p-2'}>
                <Form>
                    <FilterSwitch handleFilterChange={context.handleFilterChange} filterType={FilterTypes.SUPPORT_US} label={'Disable currencies not supported in US'}/>
                    <FilterSwitch handleFilterChange={context.handleFilterChange} filterType={FilterTypes.SUPPORT_TEST} label={'Disable currencies not supported in test mode'}/>
                </Form>
            </Col>

            <Col lg={{span: 4, offset: 4}} sm={{span: 12, offset: 0}} className={'p-2'}>
                <ButtonGroup className="mb-2">
                    <SortButton sortBy={'name'} sort={context.sort} handleSort={context.handleSort} description={'Sort by Name'}/>
                    <SortButton sortBy={'code'} sort={context.sort} handleSort={context.handleSort} description={'Sort by Code'}/>
                    <SortButton sortBy={'random'} sort={context.sort} handleSort={context.handleSort} description={'Randomize'}/>
                </ButtonGroup>
            </Col>
        </Row>
    );
}

export default CurrencyListControls;
