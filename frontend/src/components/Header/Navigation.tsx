import React from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';

const Navigation = () => {

    return (
        <Navbar>
            <Container>
                <Navbar.Brand href="/">Amazing Application</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/list">Currency List</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;
