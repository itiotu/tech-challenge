import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket } from '@fortawesome/free-solid-svg-icons'


const Home = () => {

    return (
        <Container fluid>
            <Row>
                <Col>Welcome to the homepage <FontAwesomeIcon icon={faRocket} /></Col>
            </Row>
        </Container>
    );
}

export default Home;
