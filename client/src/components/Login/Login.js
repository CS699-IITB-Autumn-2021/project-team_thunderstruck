import React, {useState } from 'react';
import axios from "axios";

import './Login.css';

import '../../form.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';


import {
    Redirect
  } from "react-router-dom";



import Header from '../Header/Header';
import Footer from '../Footer/Footer';

    /**
     * Component for showing generating the html for Login page.
     *
     * @component
     * @example
     * return (
     *   <Login/>
     * )
     */
function Login(props) {

    const baseURL = "http://localhost:8080";
    const [aid, SetAid] = useState("");
    const [loginFail, setLoginFail] = useState(false);
    const [password, setPassword] = useState("");

    /**
     * @description Logic for admin login.
     * @param  {object} evt - Event object for login button click.
     * @returns {}
     */
    const handleSubmit = (evt) => {
        evt.preventDefault();
        setLoginFail(false);
        axios
        .post(baseURL + "/login", {
          aid: aid,
          password: password
        })
        .then((response) => {
          console.log(response.data);
          if (response.data.status === 0) {
            //   alert("hoora");
            window.location.href = '../admin-panel';
          } else {
          }
          setPassword("");
          SetAid("");
          setLoginFail(true);
        });
    }

    return (
        // /* Reference for fluid container https://react-bootstrap.github.io/layout/grid/ */
        <Container fluid>
            <Row>
                <Header />
            </Row>
            <Row style={{"margin-top": "100px", "margin-bottom": "100px"}}>
                <Container fluid>

                    <Row className="justify-content-center mt-5">
                        <Col md={4} sm={8} xs={12} className="formContainer">
                            {/* Reference : https://react-bootstrap.github.io/components/forms/ */}
                            <Form  onSubmit={handleSubmit}>
                        <h3 align="center">Admin LogIn</h3><br/>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Admin ID</Form.Label>
                                    <Form.Control type="text" placeholder="Enter your admin id" value={aid} onChange={e => SetAid(e.target.value)}/>
                                    <Form.Text className="text-muted">
                                    Your email is secure.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
                                </Form.Group>
                                {/* Reference : https://react-bootstrap.github.io/components/buttons/ */}
                                <Button variant="primary" type="submit">
                                    Login
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                    <Row className="justify-content-center mt-5">
                    <Col md={4} sm={8} xs={12}>
                        {/* Reference : https://react-bootstrap.github.io/components/alerts/ */}
                        <Alert variant="danger" style ={{display: loginFail ? "block" : "none"}} >
                            Login failed!
                        </Alert>
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

export default Login;