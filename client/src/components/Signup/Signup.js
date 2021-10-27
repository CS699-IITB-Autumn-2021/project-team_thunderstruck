import React, {useState } from 'react';
import axios from "axios";


import '../../form.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';


import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Signup(props) {

    const baseURL = "http://localhost:8080";
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [pwError, setPwerror] = useState(false);
    const [email, setEmail] = useState("");

    const handleSubmit = (evt) => {
        evt.preventDefault();

        if (password !== password2) {
            setPwerror(true);
        } else {
            setPwerror(false);
            axios
            .post(baseURL + "/new-admin", {
              name: name,
              password: password,
              email: email
            })
            .then((response) => {
              console.log(response.data);
              setPassword("");
              setName("");
              setEmail("");
            });
        }

    }

    return (
        <Container fluid>
            <Row>
                <Header />
            </Row>
            <Row style={{"margin-top": "100px", "margin-bottom": "100px"}}>
                <Container fluid>

                <Row  className="justify-content-center">
                    <Col md={4} sm={8} xs={12} className="formContainer">
                    <Form onSubmit={handleSubmit}>
                        <h3 align="center">Admin SignUp</h3><br/>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Admin Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your name" value={name} onChange={e => setName(e.target.value)} />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control type="email" placeholder="Enter your Email address" value={email} onChange={e => setEmail(e.target.value)} />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasiccPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" placeholder="Confirm your Password" value={password2} onChange={e => setPassword2(e.target.value)}/>
                        </Form.Group>
                        
                        <Button variant="primary" type="submit">
                            Sign up!
                        </Button>
                    </Form>
                    </Col>
                </Row>

                <Row className="justify-content-center mt-5">
                    <Col md={4} sm={8} xs={12}>
                        <Alert variant="danger" style ={{display: pwError ? "block" : "none"}} >
                            Passwords do not match!
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

export default Signup;