import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import ProfilePic from '../images/profilepic.jpg';
import {FaGithub, FaLinkedin} from 'react-icons/fa';

class AboutMe extends Component {
    render(){
        return(
            <section id="about">
                <div className="aboutme" style={{width:'100%', margin:'auto'}}>
                    <Container className="aboutme-container" fluid style={{width:"80%", margin:"auto"}}>
                        <Row>
                            <Col sm={6} style={{margin:"auto"}}>
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
                                        {/*Linkedin*/}
                                        <a href="https://www.linkedin.com/in/jiatian-leo-xia-9b2490191/" rel="noopenr noreferrer" target="_blank">
                                            <FaLinkedin />
                                        </a>    
                                        
                                        {/*Github*/}
                                        <a href="https://github.com/LeoRoma" rel="noopenr noreferrer" target="_blank">
                                            <FaGithub />
                                        </a>   
                                </div>
                            </Col>
                            <Col sm={4}>
                                <img src={ProfilePic} style={{width:"100%", margin:"auto"}}></img>
                            </Col>
                        </Row>
                    </Container>
                    </div>
            </section>    
        )
    }
}
export default AboutMe;