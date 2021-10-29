import React from 'react';


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default 
/**
 * Component for showing generating the html for Campus Advisory page.
 *
 * @component
 * @example
 * return (
 *   <CampusAdv/>
 * )
 */ function CampusAdv() {
    return (
       /* Reference : https://react-bootstrap.github.io/layout/grid/ */
        <Container fluid>
            <Row>
                <Header />
            </Row>

            <Row style={{"margin-top": "100px"}}>
                <Container fluid>
                <Row>
                {/* Reference : https://react-bootstrap.github.io/components/accordion/ */}
                <Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
  <Accordion.Header>Several restrictions have been put on entry/exit from the IIT Campus to minimize entry/exits that could result in covid infection spread, while ensuring essential activities are not disrupted. Details of what is not permitted/permitted with approval/permitted without approval, are provided below:</Accordion.Header>
    <Accordion.Body>
    <p>
    The institute and student functionaries are seeking to minimise the damage caused to academics and careers of registered students of IIT Bombay due to Covid-19. This page has all that you need to know about the current situation on the campus.
    <ol>
        <li>
        Entry into IIT: Section 1
        </li>
        <li>
        Exit from IIT: Section 2
        </li>
        <li>
        Entry of delivery/supply vehicles: Section 3
        </li>
        <li>
        Quarantine/Home Isolation policies: Section 4
        </li>
        <li>
        Household Help policies: Section 5
        </li>
     </ol>

    </p>

    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
  <Accordion.Header>Documents and permissions required are listed below for each category:</Accordion.Header>
    <Accordion.Body>
    <p>
    All IIT Staff/Faculty and their family members residing in IITB
    <ol>
        <li>
        Keep your IIT ID card with you to allow entry
        </li>
        <li>
        No need for any permission for reentry if IITB residents after trips within Mumbai, or for people commuting to work at IITB.
        </li>
        <li>
        for more details click the link : https://docs.google.com/document/d/18ofRuycalILhjU9d4gavm3yN7dA5jsowY-0ookx54P4/edit#
        </li>
        
     </ol>

    </p>

    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
  <Accordion.Header>Exit From IIT</Accordion.Header>
    <Accordion.Body>
    <p>
    Normally there are no curbs on exit from IIT.  However, to minimize risk of covid infection spread, exit from IIT is temporarily restricted in some ways.  Details of what is not permitted/permitted with approval/permitted without approval, are provided below.
    <ol>
        <li>
        Students staying in hostels:  Exit needs permission from Warden/Dean SA/ADean SA.  This is required to keep the hostels in a relatively safe bubble.
         On return, if the visit involves overnight stay, either soft quarantine or full quarantine may apply depending on the nature of the visit.  Dean SA will share the rules with students.
        </li>
        <li>
        Students with approval to commute: Scan your ID card to enter/exit
        </li>
        <li>
        for more details click the link : https://docs.google.com/document/d/18ofRuycalILhjU9d4gavm3yN7dA5jsowY-0ookx54P4/edit#
        </li>
        
     </ol>

    </p>

    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="3">
  <Accordion.Header>Entry Policy for Delivery/Supply Vehicles</Accordion.Header>
    <Accordion.Body>
    <p>
    The following details should be recorded at the main gate for all goods vehicles that are allowed to enter IIT Bombay.
    <ol>
        <li>
        Date and Time of Entry
        </li>
        <li>
        Vehicle Registration Number
        </li>
        <li>
        Name of the company/shop they represent
        </li>
        <li>
        for more details click the link : https://docs.google.com/document/d/18ofRuycalILhjU9d4gavm3yN7dA5jsowY-0ookx54P4/edit#
        </li>
        
     </ol>

    </p>

    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="4">
  <Accordion.Header> Quaratine rules:</Accordion.Header>
    <Accordion.Body>
    <p>
    Travel Quarantine
    <ol>
        <li>
        For Hostel residents:  soft quarantine rules apply for 1 week, but can work in shared labs/offices, similar to those commuting to IITB.
        </li>
        <li>
        For others: no restrictions.
        </li>
        <li>
            Local government rules on quarantine as applicable at the time of quarantine must be followed. Any IIT specific rules  below are on top of the government rules.
        </li>
        <li>
        for more details click the link : https://docs.google.com/document/d/18ofRuycalILhjU9d4gavm3yN7dA5jsowY-0ookx54P4/edit#
        </li>
        
     </ol>

    </p>

    </Accordion.Body>
  </Accordion.Item>
  </Accordion>
</Row>

                <Row>
                {/* Reference : https://react-bootstrap.github.io/components/table/  */}
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>Document</th>
                        <th>Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Several restrictions have been put on entry/exit from the IIT Campus to minimize entry/exits that could result in covid infection spread, while ensuring essential activities are not disrupted. Details of what is not permitted/permitted with approval/permitted without approval, are provided below:</td>
                            <td><a href="https://docs.google.com/document/d/18ofRuycalILhjU9d4gavm3yN7dA5jsowY-0ookx54P4/edit#" target="_blank"> Click here</a></td>
                        </tr>
                        <tr>
                            <td>Documents and permissions required are listed below for each category:</td>
                            <td><a href="https://docs.google.com/document/d/18ofRuycalILhjU9d4gavm3yN7dA5jsowY-0ookx54P4/edit#" target="_blank"> Click here</a></td>
                        </tr>
                        <tr>
                            <td>Exit From IIT</td>
                            <td><a href="https://docs.google.com/document/d/18ofRuycalILhjU9d4gavm3yN7dA5jsowY-0ookx54P4/edit#" target="_blank"> Click here</a></td>
                        </tr><tr>
                            <td>Entry Policy for Delivery/Supply Vehicles</td>
                            <td><a href="https://docs.google.com/document/d/18ofRuycalILhjU9d4gavm3yN7dA5jsowY-0ookx54P4/edit#" target="_blank"> Click here</a></td>
                        </tr>
                        <tr>
                            <td>Quaratine rules:</td>
                            <td><a href="https://docs.google.com/document/d/18ofRuycalILhjU9d4gavm3yN7dA5jsowY-0ookx54P4/edit#" target="_blank"> Click here</a></td>
                        </tr>
                       
                    </tbody>
                </Table>
                </Row>
                </Container>
            </Row>



            <Row>
                <Footer />
            </Row>
        </Container>
    )
}