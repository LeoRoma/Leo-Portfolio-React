import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import ProfilePic from '../images/makersprofilepic.jpg';

class AboutMe extends Component {
    render(){
        return(
            <div style={{width:'100%', margin:'auto'}}>
                <Container className="about-grid">
                    <Row>
                        <Col md={4} className="aboutme-row">
                            {/* <div style={{height:'425px', width:'100%', margin:'auto', textAlign: 'right'}}> */}
                                <img src={ProfilePic} className="profilepic" alt="avatar" />
                            {/* </div> */}
                           
                        </Col>
                        <Col md={8} className="aboutme-row">
                            <Row>
                                <h1>About Me</h1>
                                <hr />
                                <p>My primary goal is to apply my technical expertise all throughout the full software life cycle to ensure production and delivery of products and services that meet client specifications. Along with a competent software developing team, and with strong personal knowledge, skills, and experience in software engineering, I am positive that this goal can be achieved. My experience as junior software developer enhanced my abilities in designing, implementing, testing, and upgrading software. One of my objectives is to keep updated with the latest IT trends and technologies. I am confident that if given the opportunity, I can be a useful talent to the company.</p>
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
            </div>
        )
    }
}
export default AboutMe;