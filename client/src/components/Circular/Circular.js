
import React from 'react';

import '../../form.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Figure from 'react-bootstrap/Figure';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';


import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default function Circular() {
    return (
        /* Reference for fluid container https://react-bootstrap.github.io/layout/grid/ */
        <Container fluid>
            <Row>
                <Header />
            </Row>

            <Row style={{"margin-top": "100px", "margin-bottom": "100px"}}>
                <Container fluid>
                <Row  style={{"margin-left": "5%", "margin-right": "5%"}}>
                    <h3>Important Circulars</h3>
                </Row>
                <Row  style={{"margin": "0 5% 5% 5%"}}>
                {/* Reference for Table https://react-bootstrap.github.io/components/table/ */}
                
                <Table style={{"width": "100%", color: "#555"}} bordered>
                    <tbody>
                        <tr style={{"background-color": "#ddd"}}>
                            <th>SR.NO.</th>
                            <th>DATE</th>
                            <th>CIRCULAR/ Notification No.</th>
                            <th>DESCRIPTION</th>
                            <th>REPORT</th>
                        </tr>
                        
                        
                        <tr align="left" valign="top" style={{"background-color": "#F5D081"}}>
                            <td><p>1.</p>
                            </td>
                            <td><p>30th March 2020</p></td>
                            <td><p>Contact details&nbsp; of Student Counsellors&nbsp;&nbsp;</p></td>
                            <td><p>The document containing contact details (in the next column 'REPORT') of Student Counsellors is password protected. Please check student-notices for the same.&nbsp;</p></td>
                            <td><p><a href="/sites/www.iitb.ac.in/files/StudentCounsellors.docx" target="_blank">Clicking here will download a password-protected file with the required information to your disk. The password has been mailed to you on student notices</a></p></td>
                        </tr>
                        <tr align="left" valign="top" style={{"background-color": "#FBBDBD"}}>
                            <td><p>2.</p></td>
                            <td><p>20th April 2020</p></td>
                            <td><p>Approved reimbursement policy for buying&nbsp; medicines</p></td>
                            <td><p>The document contains 'OPD reimbursement policy with the rollout of telemedicine services in IIT Hospital'</p></td>
                            <td><p><a href="http://www.iitb.ac.in/sites/www.iitb.ac.in/files/OPD%20reimbursement%20circular.pdf" target="_blank">Click here to view the file</a></p></td>
                            </tr>
                        <tr align="left" valign="top" style={{"background-color": "#F5D081"}}>
                            <td><p>3.</p></td>
                            <td><p>6th April 2020</p></td>
                            <td><p>Information for students from IIT Hospital</p></td>
                            <td><p>'COVID-10: What can you do?'</p></td>
                            <td><p><a href="http://www.iitb.ac.in/sites/www.iitb.ac.in/files/COVID_IITB_From_Hospital.pdf" target="_blank">Click here to view the file</a></p></td></tr>
                        <tr align="left" valign="top" style={{"background-color": "#FBBDBD"}}>
                            <td><p>4.</p></td>
                            <td><p>31st March 2020</p></td>
                            <td><p>FAQs</p></td>
                            <td><p>FAQs regarding academic and other matters during COVID-19</p></td>
                            <td><p><a href="http://www.iitb.ac.in/sites/www.iitb.ac.in/files/FAQs.pdf" target="_blank">Click here to view the FAQs regarding academic and other matters during COVID-19</a>&nbsp;</p></td></tr>
                        <tr align="left" valign="top" style={{"background-color": "#F5D081"}}>
                            <td><p>5.</p></td>
                            <td><p>30th March 2020</p></td>
                            <td><p>To Students from Dean (Academic Programme)</p></td>
                            <td><p>Academic Matters - Spring Semester 2019-20</p><p>April 18, 2020: The issue of summer internship of external students to IIT Bombay&nbsp; is&nbsp; reviewed by the&nbsp; concerned authority.&nbsp; It is now&nbsp; decided that external students can be offered summer internship&nbsp; opportunities from IIT&nbsp; Bombay only remotely, which will require no&nbsp; physical presence at IIT Bombay. All other terms and conditions will remain the&nbsp; same.</p></td>
                            <td><p><a href="http://www.iitb.ac.in/sites/www.iitb.ac.in/files/FromDeanAP.pdf" target="_blank">Click here to view the email and revised academic calendar for Spring Semester 2019-20</a></p></td></tr>
                        <tr align="left" valign="top" style={{"background-color": "#FBBDBD"}}>
                            <td><p>6.</p></td>
                            <td><p>29th March 2020</p></td>
                            <td><p>Survey for Students for compiling FAQ from Institute General Secretary</p></td>
                            <td><p>Letter for student notices on FAQ by Institute General Secretary</p></td>
                            <td><p><a href="http://www.iitb.ac.in/sites/www.iitb.ac.in/files/IGS.pdf" target="_blank">Click here to view copy of letter</a></p></td></tr>
                        <tr align="left" valign="top" style={{"background-color": "#F5D081"}}>
                            <td><p>7.</p></td>
                            <td><p>20th March 2020</p></td>
                            <td><p>No. REG/ C-11/ 2020</p></td>
                            <td><p>Staff deployment policy in view of the COVID-19 virus situation and Institute facilities being used for quarantine and DoPT circular from Registrar's Office</p></td>
                            <td><p><a href="http://www.iitb.ac.in/sites/www.iitb.ac.in/files/Circularstaffdeploymentpolicy.pdf" target="_blank">Click here to view copy of circulars</a></p></td></tr>
                        <tr align="left" valign="top" style={{"background-color": "#FBBDBD"}}>
                            <td><p>8.</p></td>
                            <td><p>19th March 2020</p></td>
                            <td><p>&nbsp;</p></td>
                            <td><p>IITB Guidelines on home quarantine</p></td>
                            <td><p><a href="http://www.iitb.ac.in/sites/www.iitb.ac.in/files/IITBGuidelinesOnHomeQuarantine.pdf" target="_blank">Click here to view copy of guidelines on home quarantine</a></p></td></tr>
                        <tr align="left" valign="top" style={{"background-color": "#F5D081"}}>
                            <td><p>9.</p></td>
                            <td><p>19th March 2020</p></td>
                            <td><p>&nbsp;</p></td>
                            <td><p>Guidelines for home quarantine given by the Government of India</p></td>
                            <td><p><a href="http://www.iitb.ac.in/sites/www.iitb.ac.in/files/DraftGuidelinesforhomequarantine.pdf" target="_blank">Click here to view copy of guidelines on home quarantine by the Govt. of India</a></p></td></tr>
                        <tr align="left" valign="top" style={{"background-color": "#FBBDBD"}}>
                            <td><p>10.</p></td>
                            <td><p>18th March 2020</p></td>
                            <td><p>No. REG/C-11/2020</p></td>
                            <td><p>This circular is in continuation to the earlier circular No. AO/Admin. V/2020 dated March 16, 2020 on the preventive measures against the spread of Corona Virus in the IIT Bombay campus from the Registrar's Office</p></td>
                            <td><p><a href="http://www.iitb.ac.in/sites/www.iitb.ac.in/files/PreventiveMeasuresII.pdf" target="_blank">Click here to view copy of the circular</a></p></td></tr>
                        <tr align="left" valign="top" style={{"background-color": "#F5D081"}}>
                            <td><p>11.</p></td>
                            <td><p>18th March 2020</p></td>
                            <td><p>&nbsp;</p></td>
                            <td><p>Article from Science on the best practices for sanitising hands etc.</p></td>
                            <td><p><a href="http://www.sciencemag.org/news/2020/03/does-disinfecting-surfaces-really-prevent-spread-coronavirus" target="_blank">Click here to read the article</a></p></td></tr>
                        <tr align="left" valign="top" style={{"background-color": "#FBBDBD"}}>
                            <td><p>12.</p></td>
                            <td><p>18th March 2020</p></td>
                            <td><p>&nbsp;</p></td>
                            <td><p>The origin, transmission and clinical therapies on coronavirus disease 2019 (COVID-19) outbreak - an update on the status</p></td>
                            <td><p><a href="http://www.iitb.ac.in/sites/www.iitb.ac.in/files/TheOrigin.pdf" target="_blank">Click here to view the review report</a></p></td></tr>
                        <tr align="left" valign="top" style={{"background-color": "#F5D081"}}>
                            <td><p>13.</p></td>
                            <td><p>17th March 2020</p></td>
                            <td><p>&nbsp;</p></td>
                            <td><p>Further measures to contain the spread of novel Corona Virus in IITB Campus from Director's Office</p></td>
                            <td><p><a href="http://www.iitb.ac.in/sites/www.iitb.ac.in/files/FurtherMeasuresA.pdf" target="_blank">Click here to view copy of the notification</a></p></td></tr>
                        <tr align="left" valign="top" style={{"background-color": "#FBBDBD"}}>
                            <td><p>14.</p></td>
                            <td><p>16th March 2020</p></td>
                            <td><p>&nbsp;</p></td>
                            <td><p>Updates from the Task Force Committee</p></td>
                            <td><p><a href="http://www.iitb.ac.in/sites/www.iitb.ac.in/files/TaskForce1.pdf" target="_blank">Click here to view copy of the notification</a></p></td></tr>
                        <tr align="left" valign="top" style={{"background-color": "#F5D081"}}>
                            <td><p>15.</p></td>
                            <td><p>16th March 2020</p></td>
                            <td><p>No. AO/Admin.V/2020</p></td>
                            <td><p>Preventive measures against the spread of Corona Virus from Registrar's Office</p></td>
                            <td><p><a href="http://www.iitb.ac.in/sites/www.iitb.ac.in/files/PreventiveMeasuresagianstCovid19.pdf" target="_blank">Click here to view copy of the notification</a></p></td></tr>
                        <tr style={{"background-color": "#FBBDBD"}}>
                            <td><p>16.</p></td>
                            <td><p>14th March 2020</p></td>
                            <td><p>No. Corona-2020/ CR-58/ Aarogya-5</p></td>
                            <td><p>Whereas State Government has decided to invoke provisions of Epidemic Disease Act, 1897 vide Notification No. Corona 2020/ CR 58/ Aarogya-5, dated 13th March, 2020 from the date of issue of the notification,</p></td>
                            <td><p><a href="http://www.iitb.ac.in/sites/www.iitb.ac.in/files/CoronaRegulationNotification.pdf" target="_blank">Click here to view copy of the notification</a></p></td>
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