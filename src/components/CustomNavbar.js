import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function CustomNavbar({ handleMenuClick }) {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#">Red Hat SRE Workshop</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="#" onClick={() => handleMenuClick('home')}>Home</Nav.Link>
                    <Nav.Link href="#" onClick={() => handleMenuClick('logs')}>Logs</Nav.Link>
                    <Nav.Link href="#" onClick={() => handleMenuClick('config')}>Config</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default CustomNavbar;
