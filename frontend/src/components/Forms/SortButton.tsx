import React from 'react';
import {ToggleButton} from "react-bootstrap";

const SortButton = (props: {sortBy: string, sort: string, handleSort: Function, description: string}) => {
    return (
        <ToggleButton
            id={props.sortBy}
            type="radio"
            variant="secondary"
            name={props.sortBy}
            value={props.sortBy}
            checked={props.sort === props.sortBy}
            onChange={(e) => props.handleSort(e.currentTarget.value)}
        >
            {props.description}
        </ToggleButton>
    );
}

export default SortButton;
