import React,  {useState } from 'react';
import axios from "axios";


import '../../form.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';


import Header from '../Header/Header';
import Footer from '../Footer/Footer';


function Home(props) {

    const baseURL = "http://localhost:8080";

    const handleSubmit = (evt) => {
        evt.preventDefault();
        axios
        .post(baseURL + "/update-hotspot-graph", {
        })
        .then((response) => {
          console.log(response.data);
          window.location.reload();
        });
    }

    return (
        <Container fluid>
            <Row>
                <Header />
            </Row>
            <Row style={{"margin-top": "100px", "margin-bottom": "100px"}}>
                <Container fluid>

                <Row className="justify-content-center">

                <h4>Latest Campus Covid Updates</h4>
                {[
                    1, 4, 2, 8, 10, 2
                ].map((cases, idx) => (
                    <Col md={4} sm={8} xs={12}>
                        <Alert key={idx} variant="warning">
                        We had {cases} cases this week!
                        </Alert>
                    </Col>
                ))}
                </Row>
                
                <Row className="justify-content-center">

                    <Col md={12} sm={12} xs={12}>
                        <iframe title="heatmap" width="100%" height="800"  frameborder="0" scrolling="no" src="https://plotly.com/~divyank_iitb/3.embed"></iframe>
                    </Col>
                    <Col md={12} sm={12} xs={12} align="center">
                        <form onSubmit={handleSubmit}>
                            <Button variant="outline-success" type="submit">Update Heatmap</Button>
                        </form>
                    </Col>
                </Row>

                <Row className="justify-content-center">
                    <Col md={6} sm={12} xs={12}>
                        <iframe title="country_cases" width="100%" height="800" frameborder="0" scrolling="no" src="https://plotly.com/~divyank_iitb/7.embed"></iframe>
                    </Col>
                    <Col md={6} sm={12} xs={12}>
                        <iframe title="country_deaths" width="100%" height="800" frameborder="0" scrolling="no" src="https://plotly.com/~divyank_iitb/9.embed"></iframe>
                    </Col>
                </Row>

                <Row className="justify-content-center">
                    <Col md={6} sm={12} xs={12}>
                        <iframe title="india_cases" width="100%" height="800" frameborder="0" scrolling="no" src="https://plotly.com/~divyank_iitb/11.embed"></iframe>
                    </Col>
                    <Col md={6} sm={12} xs={12}>
                        <iframe title="india_deaths" width="100%" height="800" frameborder="0" scrolling="no" src="https://plotly.com/~divyank_iitb/13.embed"></iframe>
                    </Col>
                </Row>




                
            
            
                </Container>
            </Row>
            <Row>
                <Footer />
            </Row>

      </Container>
    );
}

export default Home;