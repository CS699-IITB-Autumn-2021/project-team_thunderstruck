import React from 'react'

import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

import '../../form.css';

import {Link} from 'react-router-dom';


export default
/**
 * Component for showing generating the html for Header element.
 *
 * @component
 * @example
 * return (
 *   <Header/>
 * )
 */ function Header() {
    return (
        /* Reference : https://react-bootstrap.github.io/components/navbar/ */
        <Navbar bg="dark" expand="lg" variant="dark" fixed="top" >
            {/* Reference for fluid container https://react-bootstrap.github.io/layout/grid/ */}
            <Container fluid>
                <Navbar.Brand href="#">IITB Covid Center</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link href="#" as={Link} to="/">Home</Nav.Link>
                    {/* Reference : <Nav.Link href="#" as={Link} to="/signup">Signup</Nav.Link>
                    <Nav.Link href="#" as={Link} to="/admin-panel">Admin Panel</Nav.Link> */}
                    <Nav.Link href="#" as={Link} to="/studentadv">Student Advisory</Nav.Link>
                    <Nav.Link href="#" as={Link} to="/campusadv">Campus Advisory</Nav.Link>
                    <Nav.Link href="#" as={Link} to="/circular">Covid Circulars</Nav.Link>
                    <Nav.Link href="#" as={Link} to="/contacts">Task Force</Nav.Link>
                </Nav>
                {/* Reference : https://react-bootstrap.github.io/components/forms/ */}
                <Form className="d-flex">
                    <Button variant="danger" as={Link} to="/login">Admin Login</Button>
                </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}