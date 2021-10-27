import React from 'react';

import '../../form.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Figure from 'react-bootstrap/Figure';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';

import advice from './advice.png';
import reopen from './reopen.png';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default function StudentAdv() {
    return (
        <Container fluid>
            <Row>
                <Header />
            </Row>

            <Row style={{"margin-top": "100px", "margin-bottom": "100px"}}>
                <Container fluid>
                <Row  style={{"margin-left": "5%", "margin-right": "5%"}}>
                    <h3>Student Covid Advisory</h3>
                    <p>The institute and student functionaries are seeking to minimise the damage caused to academics and careers of registered students of IIT Bombay due to Covid-19. This page has all that you need to know about the current situation on the campus.</p>
                </Row>
                <Row  style={{"margin": "0 5% 5% 5%"}}>
                <Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="1">
    <Accordion.Header>    New rules amid covid-19 Pandemic on campus:</Accordion.Header>
    <Accordion.Body>
    <p>
    The pandemic has forced all of us follow the rules that save not ours but lives of those around us. Below  
    <ol>
        <li>
            Within the campus, please follow the below mentioned covid-19 rules to keep yourself and others safe.
            <ol type="i">
                <li>
                    Masks must be worn in public at all times. If the flying squad finds you without the mask, a fine of INR 1000 will be imposed.
                    </li>
                    <li>
                    At least 6 feet of space must be maintained between people at all times (in offices, labs etc). 
                    </li>
                    <li>
                    Do not gather in cafeterias or coffee rooms (they likely are not even open).
                    </li>
                    <li>
                    Meetings should be conducted by VC unless absolutely essential. If in-person meetings have to be conducted, then large rooms with good ventilation (no AC) should be used and 6 feet of distance must be maintained. 
                    </li>
                    <li>
                    Everyone should be mindful of hygiene, including washing hands with soap and water frequently.
                    </li>
                    <li>
                    If you have any symptoms such as dry cough, fever, headache, report to the hospital immediately, and also inform your supervisor.
                    </li>
                    <li>
                    Those with underlying health conditions that may put them at a higher risk due to COVID 19, should not come or be asked to come to the office or lab. 
                    </li>
                    <li>
                    Since we expect reduced housekeeping staff in the initial period at least, people are expected to keep their surroundings as clean as possible.
                    </li>
                    <li>
                    Avoid ordering food from outside. If you have ordered something from outside, you will have to call from the hostel landline at the main gate to provide your details after that the delivery person is allowed to come inside. After 11 pm, you will have to collect your delivery at the main gate.
                    </li>
                    <li>
                    No visitors are allowed in the campus. 
                    </li>
                    <li>
                    On-campus students are not allowed to go outside the campus; without prior permission from ADean/Dean SA.
                    </li>
                    <li>
                    Inter hostel movements are restricted.
                    </li>
                    
            </ol>
        </li>
        <li>
            For availing the mess facility, please follow the mess guidelines <a href="https://drive.google.com/file/d/1C4tnLDK6ivJOXZV-6OTd4_DRLZKFcNyY/view?usp=sharing" target="_blank"> Click Here</a>.
        </li>
        <li>
            To familiarize with the new campus lifestyle, <a hreaf="https://docs.google.com/document/d/1Lnb7SkVjtCFXTIILsFNl-EmlVKQQ2vMeByKuCX-bJx4/edit?usp=sharing" target="_blank">click here </a>.
        </li>
        </ol>

    </p>
    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="2">
    <Accordion.Header> When will the campus completely reopen?</Accordion.Header>
    <Accordion.Body>
    <Figure align="center">
        <Figure.Image
            width="40%"
            alt=""
            src={reopen}
        />
        <Figure.Caption>
            Welcome Back!?
        </Figure.Caption>
    </Figure>

    
    <ul>
        <li>
            The institute functionaries are closely monitoring the situation. The institute is planning the rebooting of the campus in stages.
        </li>
        <li>
            The information about each stage will be conveyed at the beginning of each stage via individual emailing (and student notices). 
        </li>
        <li>
            To check which batches are called back in the current phase, please <a href="https://docs.google.com/document/d/13Naavv3B7cYnYP5Uar086WhOIztCOvqxZtMgiDXcwrM/edit?usp=sharing" target="_blank">click here</a>.
        </li>
    </ul>

    </Accordion.Body>
    </Accordion.Item>

    <Accordion.Item eventKey="3">
    <Accordion.Header>Returning to campus guidelines:
    </Accordion.Header>
    <Accordion.Body>
    <ul>
        <li>
            Most students are not eligible to return to campus. If you are eligible, you should have or would receive an email with a request to fill a form. The institute authorities will process this form, and the status of your application will be sent to you by email.
        </li>
        <li>
            In case you are permitted to return to campus, follow the procedure as shown below: <br/>
            
            <Figure>
                <Figure.Image
                    width="60%"
                    alt=""
                    src={advice}
                />
                <Figure.Caption>
                    Advice for returning students
                </Figure.Caption>
            </Figure>
            
        </li>
        <li>
            The Institute strongly recommends that all students returning to campus must buy COVID insurance (valid for at least 6 months), and will reimburse Rs. 500 upon submission of receipt of premium paid. <a href="https://docs.google.com/document/d/1H97_F9eehVpBM09ByOSoYKizdlOj2LsVIsvh69Bgp38/edit?usp=sharing" target="_blanl">Click here</a> to see information about some good insurance schemes.
        </li>
        <li>
            <a href="https://www.cleartrip.com/travelsafe/" target="_blank">Click here</a> for Covid guidelines for air travelling. Please fill your origin and destination airport/city on the website and click on get information to see the advisory.

        </li>
    </ul>

    </Accordion.Body>
    </Accordion.Item>

    <Accordion.Item eventKey="4">
    <Accordion.Header> I am feeling anxious, what should I do?</Accordion.Header>
    <Accordion.Body>
    <p>
    We suggest you approach the Student Wellness Centre counsellor, Ms Anjali Gadgeel on 9920289195 from 11 am to 1 pm and 4 pm to 6 pm or drop an email at wellness@iitb.ac.in
    </p>

    </Accordion.Body>
    </Accordion.Item>

    <Accordion.Item eventKey="5">
    <Accordion.Header>    Steps to follow if you suspect that you have coronavirus or have some other medical emergency:
    </Accordion.Header>
    <Accordion.Body>
    <ul>
        <li>
            If you are on campus and suspect that you have coronavirus, first don’t panic. We are all here to help you. Please follow the below guidelines:
            <ul>
                <li>
                    Any person with COVID like symptoms must report to the hospital immediately.
                    </li>
                    <li>
                    Depending on the symptoms, the hospital will observe, admit and do a Covid 19 swab test.
                    </li>
                    <li>
                    Once testing is recommended the person will be admitted in the hospital.
                    </li>
                    <li>
                    Isolate the person in isolation rooms available in the hospital (15 numbers), or in Van Vihar (40 rooms for quarantine), or in Hostel 12-14 basement (100 single rooms).
                    </li>
                    <li>
                    If the swab test comes positive, and the person has mild symptoms (fever, cold, sore throat, cough, loss of smell, body ache) he/she will be treated at the IITB hospital.
                    </li>
                    <li>
                    If the person has moderate to severe symptoms (covid pneumonia with dropping Oxygen saturation levels, hemodynamic instability, mental confusion, continuous fever) then he/she will be transferred to tertiary care set up such as Shushrusha Hospital or any other hospital. Transfer to a particular hospital is under the purview of BMC and as per bed availability.
                    </li>
                    <li>
                    As per BMC guidelines on Discharge of mild cases - 10 days from symptom onset and 3 days without fever. Following discharge, the person will be sent to institutional quarantine for 7 days.
                    </li>
                    <li>
                    Guidelines issued by BMC are updated from time to time and will be incorporated in the hospital protocol.
                    </li>
                    
            </ul>
        </li>
        <li>
            For the following reasons please use telemedicine facility, to avail the facility dial 022 45811236 from mobile with What’s App facility and to see guidelines <a href="https://drive.google.com/file/d/1y0lp32wGzVf2M3OEBrOajz0n2DWqnzbB/view?usp=sharing" target="_blank">click here</a>
            <ul>
                <li>
                    Prescription of regular medicines and tests
                    </li>
                    <li>
                    Recommendation for minor, non-urgent health issues
                    </li>
                    <li>
                    Specialist consultation for non-urgent health issues
                    </li>
                    <li>
                    Reference to an outside hospital, if applicable
                    </li>
                    <li>
                    Follow up advice when required
                    </li>
            </ul>
        </li>

        <li>
            To call an ambulance and for emergency health needs please call 1110 from internal phone lines.
            </li>
            <li>
            You can contact your Hall Manager/Student Task Force (STF), in case of any emergency inside the hostel. STF team contact details - Mr Akshay Nair (H-13): 82915 85637; Ms Nisha Chikkara (H-10): 98995 54899.
            </li>
            <li>
            In case you are admitted to the hospital and your guardians are unable to contact you then they can contact your Project In-charge/Guide to get to know about your health condition.  
            </li>
    </ul>


    </Accordion.Body>
    </Accordion.Item>

    <Accordion.Item eventKey="6">
    <Accordion.Header>Supervisors for the execution of necessary steps and measures after the occurrence of a covid infection in the hostel?</Accordion.Header>
    <Accordion.Body>
    <ul>
        <li>
            The Student Task Force and Hall Managers will take charge of the situation. Will immediately inform Wardens, A.Dean and Dean SA. Further instructions, if required will be given by the Deans SA.
            </li>
            <li>
            The sanitization will be done by PHO of the room, lobby, lift, staircase and mess area.
            </li>
            <li>
            The contact tracing will be done by the Institute Contact Tracing Team and necessary isolation/quarantine steps will be taken.
            </li>        
    </ul>

    </Accordion.Body>
    </Accordion.Item>
</Accordion>
</Row>

                <Row  style={{"margin": "5%"}}>
                <Table bordered>
                    <thead>
                        <tr>
                        <th>Document</th>
                        <th>Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style={{"background-color": "#F5D081"}}>
                            <td>SOP for Higher Education from Ministry of Health and Family Welface (8/9/2020)</td>
                            <td><a href="https://www.mohfw.gov.in/pdf/FinalSOPonSkillinstitutions&PGinstitutes08092020.pdf" target="_blank"> Click here</a></td>
                        </tr>
                        <tr style={{"background-color": "#FBBDBD"}}>
                            <td>Batches called back in the current phase.</td>
                            <td><a href="https://docs.google.com/document/d/13Naavv3B7cYnYP5Uar086WhOIztCOvqxZtMgiDXcwrM/edit?usp=sharing" target="_blank"> Click here</a></td>
                        </tr>
                        <tr style={{"background-color": "#F5D081"}}>
                            <td>Information about some good insurance schemes</td>
                            <td><a href="https://docs.google.com/document/d/1H97_F9eehVpBM09ByOSoYKizdlOj2LsVIsvh69Bgp38/edit?usp=sharing" target="_blank"> Click here</a></td>
                        </tr><tr style={{"background-color": "#FBBDBD"}}>
                            <td>Covid guidelines for air travelling</td>
                            <td><a href="https://www.cleartrip.com/travelsafe/" target="_blank"> Click here</a></td>
                        </tr>
                        <tr style={{"background-color": "#F5D081"}}>
                            <td>COVID-19 rules</td>
                            <td><a href="https://docs.google.com/document/d/1IohoMobaioTs2lpzWNy-3Ge1tUDLKtIAvv_l6OOj5go/edit?usp=sharing" target="_blank"> Click here</a></td>
                        </tr>
                        <tr style={{"background-color": "#FBBDBD"}}>
                            <td>Mess guidelines</td>
                            <td><a href="https://drive.google.com/file/d/1C4tnLDK6ivJOXZV-6OTd4_DRLZKFcNyY/view?usp=sharing" target="_blank"> Click here</a></td>
                        </tr>
                        <tr style={{"background-color": "#F5D081"}}>
                            <td>Telemedicine facility</td>
                            <td><a href="https://drive.google.com/file/d/1y0lp32wGzVf2M3OEBrOajz0n2DWqnzbB/view?usp=sharing" target="_blank"> Click here</a></td>
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
