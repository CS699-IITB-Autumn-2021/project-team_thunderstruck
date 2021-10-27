import React from 'react';


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Figure from 'react-bootstrap/Figure';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';

// import advice from './advice.png';
// import reopen from './reopen.png';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default function Contacts() {
    return (
        /* Reference for fluid container https://react-bootstrap.github.io/layout/grid/ */
        <Container fluid>
            <Row>
                <Header />
            </Row>
            {/* https://www.w3schools.com/css/css_margin.asp
            https://www.w3schools.com/css/css_font_size.asp */}
            <Row style={{"margin-top": "100px", "font-size": "0.8rem"}}>
                <Container fluid>
                <Row  style={{"margin-left": "5%", "margin-right": "5%"}}>
                    <h3>COVID Task-Force</h3>
                </Row>
                
                <Row  style={{"margin": "0 5% 5% 5%"}}>
                {/* Reference for Accordian https://react-bootstrap.github.io/components/accordion/ */}
                <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                <Accordion.Header>Main Task Force Committee</Accordion.Header>
                <Accordion.Body>
                {/* Reference for Table https://react-bootstrap.github.io/components/table/ */}
                
                <Table bordered responsive>
                    <tbody>
                    <tr style={{"background-color" : "#82c0e7"}}>
                        <td>     Prof. S. Sudarshan, Dy. Director (AIA)</td>
                        <td>Convener</td>
                        </tr><tr style={{"background-color" : "#82c0e7"}}>
                        <td>      Prof. A. K. Suresh,</td>
                        <td>Member</td>
                        </tr><tr style={{"background-color" : "#82c0e7"}}>
                        <td>Prof. T. Kundu, Dean (Student Affairs)</td>
                        <td>Member</td>
                        </tr><tr style={{"background-color" : "#82c0e7"}}>
                        <td>Prof. George Mathew, Associate Dean (Student Affairs)</td>
                        <td>Member</td>
                        </tr><tr style={{"background-color" : "#82c0e7"}}>
                        <td>Prof. Amitava De, Dean (Academic Programme)</td>
                        <td>Member</td>
                        </tr><tr style={{"background-color" : "#82c0e7"}}>
                        <td>Prof. Prita Pant, Associate Dean (Academic Programme)</td>
                        <td>Member</td>
                        </tr><tr style={{"background-color" : "#82c0e7"}}>
                        <td>Prof. B.V.S. Vishwanadham, Dean (Infrastructure Planning and Support)</td>
                        <td>Member</td>
                        </tr><tr style={{"background-color" : "#82c0e7"}}>
                        <td>Dr. R. Premkumar, Registrar</td>
                        <td>Member</td>
                        </tr><tr style={{"background-color" : "#82c0e7"}}>
                        <td>Dr. Nisha Shah, Chief Medical Officer</td>
                        <td>Member</td>
                        </tr><tr style={{"background-color" : "#82c0e7"}}>
                        <td>Mr. K.R.P. Unnithan, Superintending Engineer</td>
                        <td>Member</td>
                        </tr><tr style={{"background-color" : "#82c0e7"}}>
                        <td>Dr. N. Dabholkar, Chief Manager (Hospitality)</td>
                        <td>Member</td>
                        </tr><tr style={{"background-color" : "#82c0e7"}}>
                        <td>Chief Security Officer (CSO)</td>
                        <td>Member</td>
                        </tr><tr style={{"background-color" : "#82c0e7"}}>
                        <td>Mrs. Falguni Banerjee Naha, Public Relations Officer</td>
                        <td>Member</td>
                        </tr><tr style={{"background-color" : "#82c0e7"}}>
                        <td>Public Health Officer (PHO)</td>
                        <td>Member</td>
                        </tr><tr style={{"background-color" : "#82c0e7"}}>
                        <td>General Secretary - Hostel Affairs (Mohd Zakir Hussain)</td>
                        <td>Member</td>
                        </tr><tr style={{"background-color" : "#82c0e7"}}>
                        <td>General Secretary - Academic Affairs/ Under-Graduate (Varshit Kumar and Madhav Gupta)</td>
                        <td>Member</td>
                        </tr><tr style={{"background-color" : "#82c0e7"}}>
                        <td>General Secretary - Academic Affairs/ Post-Graduate (Aditya Chalishazar)</td>
                        <td>Member</td>
                        </tr><tr style={{"background-color" : "#82c0e7"}}>
                        </tr>
                    </tbody>
                </Table>

                </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                <Accordion.Header>Student Task Force</Accordion.Header>
                <Accordion.Body>
                <Table bordered responsive>
                    <tbody>
                        <tr style={{"background-color" : "#82c0e7"}}>
                            <td>Designation</td>
                            <td><p>Name</p></td>
                            <td><p>Contact Number</p></td>
                            <td><p>Email ID</p></td>
                        </tr>
                        <tr style={{"background-color" : "#82c0e7"}}>
                            <td>GS, H16</td>
                            <td>Gurpreet Singh </td>
                            <td>9464208257</td>
                            <td>&nbsp;</td>
                        </tr>
                        <tr style={{"background-color" : "#82c0e7"}}>
                            <td>GS, H13</td>
                            <td>Akshay Nair </td>
                            <td>8291585637</td>
                            <td>&nbsp;</td>
                        </tr>
                        <tr style={{"background-color" : "#82c0e7"}}>
                            <td>GSAA-PG Elect</td>
                            <td>Radhik Rammohan </td>
                            <td>9712132512</td>
                            <td>&nbsp;</td>
                        </tr>
                        <tr style={{"background-color" : "#82c0e7"}}>
                            <td><p>General Secretary Academic Affairs (PG)</p></td>
                            <td><p>2019-20: Aditya Chalishazar</p></td>
                            <td><p>9930626982</p></td>
                            <td><p>  gsecaapg@iitb.ac.in</p></td>
                        </tr><tr style={{"background-color" : "#82c0e7"}}>
                            <td>&nbsp;</td>
                            <td><p>2020-21: Radhik Rammohan</p></td>
                            <td><p>7907268355</p></td>
                            <td>&nbsp;</td></tr>
                        <tr style={{"background-color" : "#82c0e7"}}>
                            <td><p>General Secretary Academic Affairs (UG)</p></td>
                            <td><p>2019-20: Varshit Kumar</p></td>
                            <td><p>9571376030</p></td>
                            <td><p>  gsecaaug@iitb.ac.in</p></td></tr>
                        <tr style={{"background-color" : "#82c0e7"}}>
                            <td>&nbsp;</td>
                            <td><p>2020-21: Madhav Gupta</p></td>
                            <td><p>8860138450</p></td>
                            <td>&nbsp;</td></tr>
                        <tr style={{"background-color" : "#82c0e7"}}>
                            <td><p>General Secretary Hostel Affairs</p></td>
                            <td><p>2019-20: Arbaj Ahmed</p></td>
                            <td><p>9987096721</p></td>
                            <td><p>  gsecha@iitb.ac.in</p></td></tr>
                        <tr style={{"background-color" : "#82c0e7"}}>
                            <td>&nbsp;</td>
                            <td><p>2020-21: Mohd Zakir Hussain</p></td>
                            <td><p>9144880055</p></td>
                            <td>&nbsp;</td></tr>
                        <tr style={{"background-color" : "#82c0e7"}}>
                            <td><p>General Secretary Technical Affairs</p></td>
                            <td><p>2019-20: Shobhna Misra</p></td>
                            <td><p>8169818278&nbsp;</p></td>
                            <td><p>  gsectech@iitb.ac.in</p></td></tr>
                        <tr style={{"background-color" : "#82c0e7"}}>
                            <td>&nbsp;</td>
                            <td><p>2020-21: Anirudh Mittal</p></td>
                            <td><p>9352032003</p></td>
                            <td>&nbsp;</td></tr>
                        <tr style={{"background-color" : "#82c0e7"}}>
                            <td><p>General Secretary Cultural Affairs</p></td>
                            <td><p>2019-20: Raghav Goyal</p></td>
                            <td><p>9930362091</p></td>
                            <td><p>  gseccult@iitb.ac.in</p></td>
                            </tr>
                        <tr style={{"background-color" : "#82c0e7"}}>
                            <td><p>General Secretary Sport Affairs</p></td>
                            <td><p>2019-20: Vinay Venkat Dadi</p></td>
                            <td><p>7013009369</p></td>
                            <td><p>  gsecsport@iitb.ac.in</p></td></tr>
                        <tr style={{"background-color" : "#82c0e7"}}>
                            <td>&nbsp;</td>
                            <td><p>2020-21: Yogender Singh</p></td>
                            <td><p>9321299294</p></td>
                            <td>&nbsp;</td>
                        </tr>
                    </tbody>
                </Table>       

                </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                <Accordion.Header>Task force on security matters</Accordion.Header>
                <Accordion.Body>
                <Table bordered responsive>
                    <tbody>
                        <tr style={{"background-color" : "#82c0e7"}}>
                            <td>
                                <p>Incumbent Chairman, Security Advisory Committee (Prof. T. Kundu, Dean of Student Affairs)</p>
                            </td>
                            <td>
                                <p>Convener</p>
                            </td>
                        </tr>
                        <tr style={{"background-color" : "#82c0e7"}}>
                            <td>
                                <p>Chairman-designate, Security Advisory Committee (Prof. Sanjeev Chaudhuri, Department of Environmental Science &amp; Engineering)</p>
                            </td>
                            <td>
                                <p>Member</p>
                            </td>
                        </tr>
                        <tr style={{"background-color" : "#82c0e7"}}>
                            <td>
                                <p>Chief Security Officer (CSO)</p>
                            </td>
                            <td>
                                <p>Member</p>
                            </td>
                        </tr>
                        <tr style={{"background-color" : "#82c0e7"}}>
                            <td>
                                <p>Asst. Security Officer (ASO)-1</p>
                            </td>
                            <td>
                                <p>Member</p>
                            </td>
                        </tr>
                        <tr style={{"background-color" : "#82c0e7"}}>
                            <td>
                                <p>Asst. Security Officer (ASO)-2</p>
                            </td>
                            <td>
                                <p>Member</p>
                            </td>
                        </tr>
                        <tr style={{"background-color" : "#82c0e7"}}>
                            <td>
                                <p>Asst. Security Officer (ASO)-3</p>
                            </td>
                            <td>
                                <p>Member</p>
                            </td>
                        </tr>
                        <tr style={{"background-color" : "#82c0e7"}}>
                            <td>
                                <p>Student Representative (Gurpreet Singh Dhillon)</p>
                            </td>
                            <td>
                                <p>Member</p>
                            </td>
                        </tr>
                        <tr style={{"background-color" : "#82c0e7"}}>
                            <td>
                                <p>Student Representative (Nisha Chikkara)</p>
                            </td>
                            <td>
                                <p>Member</p>
                            </td>
                        </tr>
                    </tbody>
                </Table>

                </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                <Accordion.Header>The Committee for rebooting the campus post lockdown</Accordion.Header>
                <Accordion.Body>

                <Table bordered responsive>
                    <tbody>
                        <tr style={{"background-color" : "#82c0e7"}}>
                            <td>
                                <p>Prof. Prita Pant, Asso. Dean (Academic Programme)</p>
                            </td>
                            <td>
                                <p>Convener</p>
                            </td>
                        </tr>
                        <tr style={{"background-color" : "#82c0e7"}}>
                            <td>
                                <p>Prof. George Mathew, Associate Dean (Student Affairs)</p>
                            </td>
                            <td>
                                <p>Member</p>
                            </td>
                        </tr>
                        <tr style={{"background-color" : "#82c0e7"}}>
                            <td>
                                <p>Prof. Ruchi Anand, Chairperson HHAC</p>
                            </td>
                            <td>
                                <p>Member</p>
                            </td>
                        </tr>
                        <tr style={{"background-color" : "#82c0e7"}}>
                            <td>
                                <p>Prof. Kiran Kondabagil, Department of Bioscience &amp; Bioengineering</p>
                            </td>
                            <td>
                                <p>Member</p>
                            </td>
                        </tr>
                        <tr style={{"background-color" : "#82c0e7"}}>
                            <td>
                                <p>Dr. Banumathy Srikant, IIT Hospital (for Clinical inputs)</p>
                            </td>
                            <td>
                                <p>Member</p>
                            </td>
                        </tr>
                        <tr style={{"background-color" : "#82c0e7"}}>
                            <td>
                                <p>Prof. Kameshwari Chebrolu, Department of Computer Science &amp; Engineering</p>
                            </td>
                            <td>
                                <p>Member</p>
                            </td>
                        </tr>
                        <tr style={{"background-color" : "#82c0e7"}}>
                            <td>
                                <p>General Secretary - Hostel Affairs (Mohd Zakir Hussain)</p>
                            </td>
                            <td>Member</td>
                        </tr>
                    </tbody>
                </Table>

                </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="4">
                <Accordion.Header>The Subcommittee of the Covid-19 task force to address the issue of infrastructural modifications that may be needed/desirable in the campus for the post-lockdown period</Accordion.Header>
                <Accordion.Body>
                <Table bordered responsive>
                    <tbody>
                        <tr style={{"background-color" : "#82c0e7"}}>
                            <td>
                                <p>Prof. Soumyo Mukherjee&nbsp;</p>
                            </td>
                            <td>
                                <p>Convener</p>
                            </td>
                        </tr>
                        <tr style={{"background-color" : "#82c0e7"}}>
                            <td>
                                <p>Prof. Santanu Bandopadhyay, Assoc. Dean2 (IPS)</p>
                            </td>
                            <td>
                                <p>Member</p>
                            </td>
                        </tr>
                        <tr style={{"background-color" : "#82c0e7"}}>
                            <td>
                                <p>Prof. Kishore Chatterjee</p>
                            </td>
                            <td>
                                <p><span>Member</span></p>
                            </td>
                        </tr>
                        <tr style={{"background-color" : "#82c0e7"}}>
                            <td>
                                <p>Prof. Sarika Mehra&nbsp;</p>
                            </td>
                            <td>
                                <p>Member</p>
                            </td>
                        </tr>
                        <tr style={{"background-color" : "#82c0e7"}}>
                            <td>
                                <p>Mr. Bhonsale, Public&nbsp; Health Officer</p>
                            </td>
                            <td>
                                <p>Member</p>
                            </td>
                        </tr>
                        <tr style={{"background-color" : "#82c0e7"}}>
                            <td>
                                <p>Mr. K.R.P. Unnithan, Superintending Engineer</p>
                            </td>
                            <td>
                                <p>Member</p>
                            </td>
                        </tr>
                        <tr style={{"background-color" : "#82c0e7"}}>
                            <td>
                                <p>Mr. Rajendra N., EE (EMD)</p>
                            </td>
                            <td>
                                <p>Member</p>
                            </td>
                        </tr>
                        <tr style={{"background-color" : "#82c0e7"}}>
                            <td>
                                <p>General Secretary - Hostel Affairs (Mohd Zakir Hussain)&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p>
                            </td>
                            <td>
                                <p>Member</p>
                            </td>
                        </tr>
                        <tr style={{"background-color" : "#82c0e7"}}>
                            <td>
                                <p>General Secretary H16 (Gurpreet Singh Dhillon)</p>
                            </td>
                            <td>
                                <p>Member</p>
                            </td>
                        </tr>
                        <tr style={{"background-color" : "#82c0e7"}}>
                            <td>
                                <p>Mr. Pankaj Chachadi, AR (MM)</p>
                            </td>
                            <td>
                                <p>Member</p>
                                <div>&nbsp;</div>
                            </td>
                        </tr>
                    </tbody>
                </Table>

                </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="5">
                <Accordion.Header>Contact Tracing Team</Accordion.Header>
                <Accordion.Body>
                <Table bordered responsive>
                    <tbody>
                        <tr style={{"background-color" : "#82c0e7"}}>
                            <td>
                                <p>Prof. A. M. Pradeep&nbsp;</p>
                            </td>
                            <td>
                                <p>Convener</p>
                            </td>
                        </tr>
                        <tr style={{"background-color" : "#82c0e7"}}>
                            <td>
                                <p>Prof. Debjani Paul</p>
                            </td>
                            <td>
                                <p>Co-Convenor</p>
                            </td>
                        </tr>
                        <tr style={{"background-color" : "#82c0e7"}}>
                            <td>
                                <p>Mr. Sajith, Safety Officer</p>
                            </td>
                            <td>
                                <p>Member</p>
                            </td>
                        </tr>
                    </tbody>
                </Table>
                </Accordion.Body>
                </Accordion.Item>
                </Accordion>
            </Row>
            </Container>
            </Row>
            <Row>
                <Footer />
            </Row>
        </Container>
    )
}
