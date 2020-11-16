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
                                            <h4>London</h4>
                                            <h4>C# Developer Trainee</h4>
                                            <h4>June 2020 - September 2020</h4>
                                            <br />
                                            <p>
                                                ●	A 12-week intensive training program designed to supply key skills in C# Development and to practice throughout the academy, the mind-set, ceremonies, and continuous integration of Agile.
                                                <br />
                                                ●	Being taught C# programming language and ensuring a strong understanding of OOP programming, SOLID principles, through to building robust testable C# code with TDD and NUnit.
                                                <br />
                                                ●	Being able to work on team projects using ASP .NET to create full-stack applications, interacting with SQL databases using the Entity Framework and Microsoft Azure.
                                                <br />
                                                ●	Built a CV viewing tool for internal use using ASP .NET, AWS, Azure and Bootstrap working in an Agile environment in a team of seven. Coordinated with the Talent Management and Resource Management teams to ensure the product was meeting the business needs with weekly sprint reviews.
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