import React, {useState, useEffect} from 'react';
import axios from "axios";
import '../../form.css';


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Table from 'react-bootstrap/Table';

import Alert from 'react-bootstrap/Alert';



import Header from '../Header/Header';
import Footer from '../Footer/Footer';
    
    /**
     * Component for showing generating the html for admin page.
     *
     * @component
     * @example
     * return (
     *   <Admin/>
     * )
     */
    function Admin(props) {
        const zoneInfo = {
            "gymkhana":1,
            "hospital":2,
            "hostel10":3,
            "central library":4,
            "hostel12":5,
            "hostel14":6,
            "hostel13":7,
            "hostel6":8,
            "hostel7":9,
            "hostel9":10,
            "hostel18":11,
            "hostel4":12,
            "hostel5":13,
            "hostel3":14,
            "hostel2":15,
            "hostel1":16,
            "devi temple":17,
            "lakeside road":18,
            "main gate":19,
            "convocation hall":20,
            "tennis court":21,
            "kendriya vidyalaya":22,
            "main building":23,
            "infinity corridoor":24,
            "aerospace department":25,
            "mech":26,
            "csre building":27,
            "vidya nivas":28,
            "campus school":29,
            "white house":30,
            "sameer hill":31,
            "hostel15":32,
            "hostel16":33
            }

        const baseURL = "http://localhost:8080"
        const [name, setName] = useState("");
        const [email, setEmail] = useState("");
        const [pid, setPID] = useState(0);
        const [allRecords, setAllRecords] = useState([
            
        ]);
        const [isCreated, setIsCreated] = useState(false);
        const [createForm, setCreateForm] = useState(true);
        const [updateForm, setUpdateForm] = useState(false);
        const [isUpdated, setIsUpdated] = useState(false);
        const [zones, setZones] = useState({
            z1: false,
            z2: false,
            z3: false,
            z4: false,
            z5: false,
            z6: false,
            z7: false,
            z8: false,
            z9: false,
            z10: false,
            z11: false,
            z12: false,
            z13: false,
            z14: false,
            z15: false,
            z16: false,
            z17: false,
            z18: false,
            z19: false,
            z20: false,
            z21: false,
            z22: false,
            z23: false,
            z24: false,
            z25: false,
            z26: false,
            z27: false,
            z28: false,
            z29: false,
            z30: false,
            z31: false,
            z32: false,
        });

    
        /**
         * Function for creating a new patient entry into DB.
         * @example
         * const evt
         * return ()
         */
        const handleCreateSubmit = (evt) => {
            evt.preventDefault();
            setIsCreated(false);
            setIsUpdated(false);
            axios
            .post(baseURL + "/new-patient", {
                name: name,
                email: email,
                zones: zones
            })
            .then((response) => {
                console.log(response.data);
                setName("");
                setEmail("");
                setZones({
                    z1: false,
                    z2: false,
                    z3: false,
                    z4: false,
                    z5: false,
                    z6: false,
                    z7: false,
                    z8: false,
                    z9: false,
                    z10: false,
                    z11: false,
                    z12: false,
                    z13: false,
                    z14: false,
                    z15: false,
                    z16: false,
                    z17: false,
                    z18: false,
                    z19: false,
                    z20: false,
                    z21: false,
                    z22: false,
                    z23: false,
                    z24: false,
                    z25: false,
                    z26: false,
                    z27: false,
                    z28: false,
                    z29: false,
                    z30: false,
                    z31: false,
                    z32: false,
                });
                setIsCreated(true);
                fetchAllRecords();
            });
        }

        /**
        * @description Update the patient record in DB.
        * @param  {object} evt - Event object for button press.
        * @returns {}
        */
        
        const handleUpdateSubmit = (evt) => {
            evt.preventDefault();
            setIsCreated(false);
            setIsUpdated(false);
            axios
            .post(baseURL + "/update-patient", {
                pid: pid
            })
            .then((response) => {
                console.log(response.data);
                setPID("");
                setIsUpdated(true);
                fetchAllRecords();
            });
        }
        /**
        * @description Update the patient's checkboxes - {hotspot details}.
        * @param  {object} evt - Event object for button press.
        * @returns {}
        */
        const handleInputChange = (event) => {
            const target = event.target;
            const value = target.checked;
            const name = target.name;

            setZones({
                ...zones,
                [name]: value
            });
            
        }

        /**
        * @description toggles between update and create form for patients.
        * @param  {object} evt - Event object for button press.
        * @returns {}
        */
        const handleFormToggle = (event) => {
            event.preventDefault();
            setCreateForm(!createForm);
            setUpdateForm(!updateForm);
            
        }
        /**
        * @description Fetches all patient records from DB.
        * @returns {}
        */
        const fetchAllRecords = () => {
            axios
            .post(baseURL + "/fetch-all-records", {
            })
            .then((response) => {
                console.log(response.data);
                setAllRecords(response.data.records);
            });
        };


        useEffect(() => {
            return fetchAllRecords();
        }, []);



        return (
            /* Reference for fluid container https://react-bootstrap.github.io/layout/grid/ */
            <Container fluid>
            <Row>
                <Header />
            </Row>
            <Row style={{"margin-top": "100px", "margin-bottom": "100px"}}>
                <Container fluid> 

                <Row className="justify-content-center mt-5">
                        <Col md={4} sm={8} xs={12}>
                        {/* Reference : https://react-bootstrap.github.io/components/buttons/ */}
                            <Button variant={createForm ? "success" : "outline-success"} onClick={handleFormToggle} disabled={createForm}>CREATE</Button>
                            <Button variant={updateForm ? "danger" : "outline-danger"} onClick={handleFormToggle} disabled={updateForm}>UPDATE</Button>
                        </Col>
                </Row>
                    <Row className="justify-content-center mt-5">
                        {
                            createForm && <Col md={4} sm={8} xs={12} className="formContainer">
    
                            {/* Reference : https://react-bootstrap.github.io/components/forms/ */}
                            <Form  onSubmit={handleCreateSubmit}>
                                <h3 align="center">Add New Patient</h3><br/>
    {/* 
                                <Form.Group className="mb-3" controlId="formBasicName">
                                        <Form.Check 
                                            type="checkbox"
                                            id={`default-checkbox`}
    
                                            inline
                                        />
                                    <Form.Label>Existing Patient</Form.Label>
                                </Form.Group> */}
    
                                <Form.Group className="mb-3" controlId="formBasicName">
                                    <Form.Label>Patient Name </Form.Label>
                                    <Form.Control type="text" placeholder="Enter name" value={name} onChange={e => setName(e.target.value)} required/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter Email"  value={email} onChange={e => setEmail(e.target.value)} required/>
                                    <Form.Text className="text-muted">
                                    Your email is secure.
                                    </Form.Text>
                                </Form.Group>
    
    
                            
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        {Object.keys(zoneInfo).map((zone, i) => {
                            var zoneName = "z" + zoneInfo[zone];
                            return <Form.Check type="checkbox" inline style={{"margin": "2%"}}>
                                <Form.Check.Input style={{"color": "#107302"}} name={zoneName} type="checkbox" checked={zones[zoneName]} isValid onChange={handleInputChange}/>
                                <Form.Check.Label style={{"padding-left": "3px", "color": "#107302"}}>{zone.toUpperCase()}</Form.Check.Label>
                            </Form.Check>
                        })}
    
                        </Form.Group>
    
    
                        <Button variant="primary" type="submit">
                                    Add Patient
                                </Button>
                            </Form>
                    
                            </Col>
                        }
                        {
                            updateForm && <Col md={4} sm={8} xs={12} className="formContainer">
                            
                            <Form onSubmit={handleUpdateSubmit}>
                                <h3 align="center">Update Patient Record</h3><br/>
    
                                <Form.Group className="mb-3" controlId="formBasicName">
                                    <Form.Label>Patient ID</Form.Label>
                                    <Form.Control type="number" placeholder="Enter Patient ID" value={pid} onChange={e => setPID(e.target.value)} required/>
                                </Form.Group>
    
    
                        <Button variant="warning" type="submit">
                                    Tested Negative
                                </Button>
                            </Form>
                    
                            </Col>
                        }
                    </Row>
                    <Row className="justify-content-center mt-5">
                        <Col md={6} sm={8} xs={12}>
                            <h4 align="center">All Patient Records</h4> <br/>
                    <Table bordered responsive>

                        <thead>
                            <tr>
                                <th>PatientID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            allRecords.map((record, idx) => {
                                return <tr>
                                    <td>{record.patient_id}</td>
                                    <td>{record.name}</td>
                                    <td>{record.email}</td>
                                    <td>{record.ispositive ? "Positive" : "Negative"}</td>
                                </tr>
                            })
                        }
                        </tbody>
                    {/* Reference : https://react-bootstrap.github.io/components/table/ */}
                    </Table></Col>
                    </Row>
                    <Row className="justify-content-center mt-5">
                    <Col md={4} sm={8} xs={12}>
                        {/* Reference : https://react-bootstrap.github.io/components/alerts/ */}
                        <Alert variant="success" style ={{display: isCreated ? "block" : "none"}} >
                            Patient record added successfully!
                        </Alert>
                        <Alert variant="success" style ={{display: isUpdated ? "block" : "none"}} >
                            Patient record updated successfully!
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
    
    export default Admin;