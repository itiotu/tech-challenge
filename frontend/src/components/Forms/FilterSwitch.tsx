import React from 'react';
import {Form} from "react-bootstrap";
import {FilterTypes} from "../../types/Filters";

const FilterSwitch = (props: {handleFilterChange: Function, filterType: FilterTypes, label: string}) => {
    return (
        <Form.Check
            type="switch"
            id={props.filterType}
            label={props.label}
            onChange={(e) => props.handleFilterChange(props.filterType, e.currentTarget.checked)}
        />
    );
}

export default FilterSwitch;
