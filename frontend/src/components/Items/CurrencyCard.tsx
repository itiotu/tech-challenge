import React from 'react';
import {Card} from "react-bootstrap";
import {Currency} from "../../types/Currency";

const CurrencyCard = (props: {currency: Currency}) => {
    return (
        <Card>
            <Card.Body >
                <Card.Title>{props.currency.name} ({props.currency.code.toUpperCase()})</Card.Title>
                <Card.Text>
                    <span className={'d-block'}>Is supported in US : {String(props.currency.isSupportedInUS)}</span>
                    <span className={'d-block'}>Is supported in Production : {String(props.currency.supportsLiveMode)}</span>
                    <span className={'d-block'}>Is supported in Test : {String(props.currency.supportsTestMode)}</span>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default CurrencyCard;
