import React from 'react'
import '../../form.css';

import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

import {Link} from 'react-router-dom';

export default function Footer() {
    return (
        <Navbar bg="light" expand="lg" variant="light" fixed="bottom" >
            <Container fluid>
                <Navbar.Brand href="#">Contact Us</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link href="https://www.iitb.ac.in/" target="_blank">Official Website</Nav.Link>
                    <Nav.Link href="https://www.facebook.com/iitbombay/"  target="_blank">Facebook</Nav.Link>
                    <Nav.Link href="mailto:pio@iitb.ac.in">Email</Nav.Link>
                </Nav>
                <Form className="d-flex">
                    <a href="mailto:nvsabhishek.india@gmail.com"><Button variant="outline-success">Contact Developers</Button></a>
                </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
