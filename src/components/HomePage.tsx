import React from 'react';
import {Container, Row, Col, Button, Tab, Nav, Table} from 'react-bootstrap';
import profileImage from '../assets/simpler_logo_transparent.png';
import "../styles/styles.css";
import godzilla from "../assets/GodzillaSleep.jpg";
import kratos from "../assets/Kratos_peri_zoomedOut.jpg";
import medusa from "../assets/Medusa_HangingOut.jpg";
import nagini from "../assets/Nagini_Long.jpg";
import zuzu from "../assets/ZuzuTongueOut.jpg";
import mufasa from "../assets/Mufasa_cattower.jpg";


function HomePage(){
    return (
        <div className="home">
            <Container className="hero-section text-center">
                <Row>
                    <Col>
                        <img
                            src={profileImage}
                            alt="Juan Mendoza"
                            className="profile-img"
                        />
                        <h1 className="mt-3">Welcome to My Personal Website</h1>
                        <p>Hi, I'm Juan Mendoza. I love reptiles, video games, and working on my home lab.</p>
                    </Col>
                </Row>
            </Container>

            <Container className="mini-tab-section mt-5">
                <Tab.Container defaultActiveKey="resume">
                    <div className="custom-pill-container">
                        <Nav variant="pills" className="custom-nav-pills">
                            <Nav.Item>
                                <Nav.Link eventKey="resume">Resume</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="pets">Pets</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </div>
                    <Row className="mt-3 justify-content-center">
                        <Col md={8} className="content-section">
                            <Tab.Content>
                                <Tab.Pane eventKey="resume">
                                    <h2>Resume</h2>
                                    <p>Here you can add detailed information about your professional background, skills, and experiences.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="pets">
                                    <h2>Pets</h2>
                                    <Row className="justify-content-center">
                                        <Col md={4} className="text-center">
                                            <img src={mufasa} alt="Pet 1" className="img-fluid" />
                                        </Col>
                                        <Col md={4} className="text-center">
                                            <img src={zuzu} alt="Pet 2" className="img-fluid" />
                                        </Col>
                                        <Col md={4} className="text-center">
                                            <img src={kratos} alt="Pet 1" className="img-fluid" />
                                        </Col>
                                        <Col md={4} className="text-center">
                                            <img src={medusa} alt="Pet 1" className="img-fluid" />
                                        </Col>
                                        <Col md={4} className="text-center">
                                            <img src={nagini} alt="Pet 1" className="img-fluid" />
                                        </Col>
                                        <Col md={4} className="text-center">
                                            <img src={godzilla} alt="Pet 1" className="img-fluid" />
                                        </Col>
                                        {/* Add more pet images as needed */}
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        </div>
    );
}


export default HomePage;