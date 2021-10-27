import React,  {useState, useEffect } from 'react';
import axios from "axios";

import background from './background.jpeg';


import '../../form.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';


import Header from '../Header/Header';
import Footer from '../Footer/Footer';


function Home(props) {

    const baseURL = "http://localhost:8080";
    const [count1, setCount1] = useState("");
    const [count2, setCount2] = useState("");
    const [count3, setCount3] = useState("");
    const [count4, setCount4] = useState("");

    const handleUpdateHotspots = (evt) => {
        evt.preventDefault();
        axios
        .post(baseURL + "/update-hotspot-graph", {})
        .then((response) => {
            console.log(response.data);
            window.location.reload();
        });
    }


    const handleUpdatePlots = (evt) => {
        if(evt)
            evt.preventDefault();
        axios
        .post(baseURL + "/update-covid-plots", {})
        .then(response => {
            console.log(response.data.data);
            setCount1(response.data.data["National Total Active Cases"]);
            setCount2(response.data.data["National Total Deaths"]);
            setCount3(response.data.data["Global Total Confirmed Cases"]);
            setCount4(response.data.data['National Global Deaths']);
            console.log(count1);
            console.log(count2);
            console.log(count3);
            console.log(count4);
            // window.location.reload();
        });
    }

    useEffect(() => {
        handleUpdatePlots();    
      }, []);

    return (
        <Container fluid>
            <Row>
                <Header />
            </Row>
            <Row style={{"margin-top": "100px", "margin-bottom": "100px" , "margin-left": "0%" , "margin-right": "5%" }}>
                <Container fluid>

                {/* <Row className="justify-content-center">

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
                </Row> */}
                <Row>
                <h1>CAMPUS COVID INFORMATION PORTAL </h1>
                    <p>This website is designed to provide you with all covid related updates of the iit bombay campus.
                    Below is the heat map of campus meant to help you take precautions and avoid covid hotspot area on the campus and be safe.
                    you may also see the latest international as well as national covid statistics below.

                    You may navigate to student specific information,campus resident information ,task force comitee of iit bombay for covid and all important circulars from the links in the header.</p>
                </Row>
                
                <Row className="carousel">
                
                <Carousel >
                    <Carousel.Item>
                        <img src={background} className="carousel" />
                        <Carousel.Caption>
                        <h1 className="cards_heading">{count1}</h1>

                        <h2 className="cards_sub_heading">National Total Active Cases</h2>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={background} className="carousel"/>

                        <Carousel.Caption>
                        <h1 className="cards_heading">{count2}</h1>
                        <h2 className="cards_sub_heading">National Total Deaths</h2>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={background} className="carousel"/>
                            
                        <Carousel.Caption>
                        <h1 className="cards_heading">{count3}</h1>
                        <h2 className="cards_sub_heading">Global Total Confirmed Cases</h2>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={background} className="carousel"/>
                        <Carousel.Caption>
                        <h1 className="cards_heading">{count4}</h1>
                        <h2 className="cards_sub_heading">Global Total Deaths</h2>
                        </Carousel.Caption>
                    </Carousel.Item>
                    </Carousel>
                </Row>
                <Row className="justify-content-center">

                    <Col md={12} sm={12} xs={12}>
                    <iframe width="100%" height="800" frameborder="0" scrolling="no" src="//plotly.com/~Param_iitb/1.embed"></iframe>
                    </Col>
                    <Col md={12} sm={12} xs={12} align="center">
                        <form onSubmit={handleUpdateHotspots}>
                            <Button variant="outline-success" type="submit">Update Heatmap</Button>
                        </form>
                    </Col>
                </Row>

                <Row className="justify-content-center">
                    <Col md={6} sm={12} xs={12}>
                        <iframe width="100%" height="800" frameborder="0" scrolling="no" src="https://plotly.com/~Param_iitb/3.embed"></iframe>
                    </Col>
                    <Col md={6} sm={12} xs={12}>
                    <iframe width="100%" height="800" frameborder="0" scrolling="no" src="https://plotly.com/~Param_iitb/5.embed"></iframe>
                    </Col>
                </Row>

                <Row className="justify-content-center">
                    <Col md={6} sm={12} xs={12}>
                    <iframe width="100%" height="800" frameborder="0" scrolling="no" src="https://plotly.com/~Param_iitb/7.embed"></iframe>
                    </Col>
                    <Col md={6} sm={12} xs={12}>
                        <iframe width="100%" height="800" frameborder="0" scrolling="no" src="https://plotly.com/~Param_iitb/9.embed"></iframe>
                    </Col>
                </Row>

                <Row className="justify-content-center">
                    <Col md={12} sm={12} xs={12} align="center">
                        <form onSubmit={handleUpdatePlots}>
                            <Button variant="outline-success" type="submit">Update Covid Plots</Button>
                        </form>
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