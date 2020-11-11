import React, {Component} from 'react';
import {Container, Col, Row} from 'react-bootstrap';

class Resume extends Component {
    render(){
        return(
            <div className="resume">
                <Container>
                    <Row>
                        <Col md={3} className="education-section"><h1>Professional Experience</h1></Col>
                        <Col md={9}>
                            <Col sm={12}>
                                <Row>
                                        <div className="resume-experience">
                                            <h1>Sparta Global</h1>
                                            <br />
                                            <p>
                                                Something about Sparta
                                            </p>
                                        </div>   
                                </Row>
                                <Row>
                                        <div className="resume-experience">
                                            <h1>Restaurants</h1>
                                            <br />
                                            <p>Something about Chef</p>
                                        </div> 
                                </Row>
                            </Col>                           
                        </Col>
                    </Row>
                    <Row>
                        <Col md={3} className="education-section"><h1>Education</h1></Col>
                        <Col md={9}>
                            <Col sm={12}>
                                <Row>
                                        <div className="resume-experience">
                                            <h1>Makers</h1>
                                            <br />
                                            <p>
                                                Something about Makers
                                            </p>
                                        </div>   
                                </Row>
                                <Row>
                                        <div className="resume-experience">
                                            <h1>University</h1>
                                            <br />
                                            <p>Something about Uni</p>
                                        </div> 
                                </Row>
                            </Col>                           
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
export default Resume;