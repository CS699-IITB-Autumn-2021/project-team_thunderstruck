import React from 'react'
import '../../form.css';

import Button from 'react-bootstrap/Button';
/* https://react-bootstrap.github.io/components/navbar/ */
import Navbar from 'react-bootstrap/Navbar';

/* Reference for fluid container https://react-bootstrap.github.io/layout/grid/ */


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
/*https://react-bootstrap.github.io/components/forms/*/
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

import {Link} from 'react-router-dom';
    
export default /**
* Component for showing generating the html for Footer element.
*
* @component
* @example
* return (
*   <Footer/>
* )
*/ function Footer() {
    return (
        
        <Navbar bg="light" expand="lg" variant="light" fixed="bottom" >
        {/* Reference for fluid container https://react-bootstrap.github.io/layout/grid/ */}

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