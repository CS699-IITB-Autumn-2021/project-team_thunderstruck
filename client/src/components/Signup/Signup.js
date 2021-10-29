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


/**
 * Component for showing generating the html for home page.
 *
 * @component
 * @example
 * return (
 *   <Home/>
 * )
 */

function Signup(props) {

    const baseURL = "http://localhost:8080";
    const [name, setName] = useState("");
    const [adminID, setAdminID] = useState(-1);
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [pwError, setPwerror] = useState(false);
    const [isCreated, setIsCreated] = useState(false);
    const [email, setEmail] = useState("");

    /**
     * @description Creates new admin account.
     * @param  {object} evt - Event object for sign-up button press.
     * @returns {}
     */
    const handleSubmit = (evt) => {
        evt.preventDefault();
        setIsCreated(false);

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
              setAdminID(response.data.admin_id);
              setPassword("");
              setPassword2("");
              setName("");
              setEmail("");
              setIsCreated(true);
            });
        }

    }

    return (
        // /* Reference for fluid container https://react-bootstrap.github.io/layout/grid/ */
        <Container fluid>
            <Row>
                <Header />
            </Row>
            <Row style={{"margin-top": "100px", "margin-bottom": "100px"}}>
                <Container fluid>

                <Row  className="justify-content-center">
                    <Col md={4} sm={8} xs={12} className="formContainer">
                    {/* Reference : https://react-bootstrap.github.io/components/forms/ */}
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
                        {/* Reference : https://react-bootstrap.github.io/components/buttons/ */}
                        <Button variant="primary" type="submit">
                            Sign up!
                        </Button>
                    </Form>
                    </Col>
                </Row>

                <Row className="justify-content-center mt-5">
                    <Col md={4} sm={8} xs={12}>
                        {/* Reference : https://react-bootstrap.github.io/components/alerts/ */}
                        <Alert variant="danger" style ={{display: pwError ? "block" : "none"}} >
                            Passwords do not match!
                        </Alert>
                        <Alert variant="success" style ={{display: isCreated ? "block" : "none"}} >
                            Admin account created successfully! Your Admin ID is {adminID}!
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