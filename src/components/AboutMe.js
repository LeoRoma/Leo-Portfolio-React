import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import ProfilePic from '../images/profilepic.jpg';
import {FaGithub, FaLinkedin} from 'react-icons/fa';

class AboutMe extends Component {
    render(){
        return(
            <section id="about">
                <div className="aboutme" style={{width:'100%', margin:'auto'}}>
                    {/* <div className="aboutme-container">
                        <div className="aboutme-text">
                            <h1>About Me</h1>
                                <hr />
                                <p>
                                    My primary goal is to apply my technical expertise all throughout the full software life cycle to ensure production and delivery of products and services that meet client specifications. 
                                    <br />
                                    <br />
                                    Along with a competent software developing team, and with strong personal knowledge, skills, and experience in software engineering, I am positive that this goal can be achieved. 
                                    <br />
                                    <br />
                                    My experience as junior software developer enhanced my abilities in designing, implementing, testing, and upgrading software. One of my objectives is to keep updated with the latest IT trends and technologies. I am confident that if given the opportunity, I can be a useful talent to the company.
                                </p>
                            <div className="social-links">
                                <h5>FIND ME ON</h5>
                                <a href="https://www.linkedin.com/in/jiatian-leo-xia-9b2490191/" rel="noopenr noreferrer" target="_blank">
                                    <FaLinkedin />
                                </a>    
                                <a href="https://github.com/LeoRoma" rel="noopenr noreferrer" target="_blank">
                                    <FaGithub />
                                </a>   
                            </div>
                        </div>
                        <div className="aboutme-profilepic">
                            <img src={ProfilePic} alt="profilepic"></img>
                        </div>
                    </div> */}
                    <div className="aboutme-container">
                        <Row className="aboutme-row">
                            <Col xl={5} className="aboutme-text">
                                <h1>About Me</h1>
                                    <hr />
                                    <p>
                                        My primary goal is to apply my technical expertise all throughout the full software life cycle to ensure production and delivery of products and services that meet client specifications. 
                                        <br />
                                        <br />
                                        Along with a competent software developing team, and with strong personal knowledge, skills, and experience in software engineering, I am positive that this goal can be achieved. 
                                        <br />
                                        <br />
                                        My experience as junior software developer enhanced my abilities in designing, implementing, testing, and upgrading software. One of my objectives is to keep updated with the latest IT trends and technologies. I am confident that if given the opportunity, I can be a useful talent to the company.
                                    </p>
                                <div className="social-links">
                                    <h5>FIND ME ON</h5>
                                    <a href="https://www.linkedin.com/in/jiatian-leo-xia-9b2490191/" rel="noopenr noreferrer" target="_blank">
                                        <FaLinkedin />
                                    </a>    
                                    <a href="https://github.com/LeoRoma" rel="noopenr noreferrer" target="_blank">
                                        <FaGithub />
                                    </a>   
                                </div>
                            </Col>
                            <Col xl={6} className="aboutme-profilepic">
                                <img src={ProfilePic} alt="profilepic"></img>
                            </Col>
                        </Row>
                    </div>
                       
                    {/* <Container className="aboutme-container" style={{width:'100%'}}>
                        <Row>
                            <Col className="aboutme-text">
                                <h1>About Me</h1>
                                    <hr />
                                    <p>
                                        My primary goal is to apply my technical expertise all throughout the full software life cycle to ensure production and delivery of products and services that meet client specifications. 
                                        <br />
                                        <br />
                                        Along with a competent software developing team, and with strong personal knowledge, skills, and experience in software engineering, I am positive that this goal can be achieved. 
                                        <br />
                                        <br />
                                        My experience as junior software developer enhanced my abilities in designing, implementing, testing, and upgrading software. One of my objectives is to keep updated with the latest IT trends and technologies. I am confident that if given the opportunity, I can be a useful talent to the company.
                                    </p>
                                <div className="social-links">
                                    <h5>FIND ME ON</h5>
                                    <a href="https://www.linkedin.com/in/jiatian-leo-xia-9b2490191/" rel="noopenr noreferrer" target="_blank">
                                        <FaLinkedin />
                                    </a>    
                                    <a href="https://github.com/LeoRoma" rel="noopenr noreferrer" target="_blank">
                                        <FaGithub />
                                    </a>   
                                </div>
                            </Col>
                            <Col className="aboutme-profilepic">
                                <img src={ProfilePic} alt="profilepic"></img>
                            </Col>
                        </Row>
                    </Container> */}
                </div>
            </section>    
        )
    }
}
export default AboutMe;