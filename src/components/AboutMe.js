import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import ProfilePic from '../images/makersprofilepic.jpg';
import {FaGithub, FaLinkedin} from 'react-icons/fa';

class AboutMe extends Component {
    render(){
        return(
            <section id="about">
                   <div className="aboutme about-grid" style={{width:'100%', margin:'auto'}}>
                    <Container>
                        <Row>
                            <Col sm={4} className="aboutme-row">
                                {/* <div style={{height:'425px', width:'100%', margin:'auto', textAlign: 'right'}}> */}
                                    <img src={ProfilePic} className="profilepic" alt="avatar" />
                                {/* </div> */}
                            
                            </Col>
                            <Col sm={8} className="aboutme-row">
                                <Row>
                                    <h1>About Me</h1>
                                    <hr />
                                    <p style={{fontSize:'16px', color:"#C0C0C0"}}>My primary goal is to apply my technical expertise all throughout the full software life cycle to ensure production and delivery of products and services that meet client specifications. Along with a competent software developing team, and with strong personal knowledge, skills, and experience in software engineering, I am positive that this goal can be achieved. My experience as junior software developer enhanced my abilities in designing, implementing, testing, and upgrading software. One of my objectives is to keep updated with the latest IT trends and technologies. I am confident that if given the opportunity, I can be a useful talent to the company.</p>
                                </Row>
                                <Row>
                                    <h1>Contact</h1>
                                </Row>
                                <Row>
                                    <p>
                                        <span>Jia Tian Xia</span>
                                        <br />
                                        <span>
                                            175 Greyhound Road
                                            <br />
                                            London, UK, W68NL
                                        </span>
                                        <br />
                                        <span>+44 7915450386</span>
                                        <br />
                                        <span>xiajtn@gmail.com</span>
                                    </p>                 
                                </Row>
                            </Col>
                        </Row>
                    </Container>
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
                </div>
            </section>    
        )
    }
}
export default AboutMe;