import React, {Component} from "react";
import {Container, Col, Row} from 'react-bootstrap';
// import {FaGithub, FaLinkedin} from 'react-icons/fa';


class LandingPage extends Component {
  render(){
      return(
          <section id="home">
            <div className="landingpage" style={{width:'100%', margin:'auto'}}>
                <Container className="landingpage-container" style={{width:"79%"}} fluid>
                    <Row style={{width:"100%"}}>
                        <h1>
                            Portfolio of Jia Tian Xia, 
                            <br />
                            a former Sous Chef who now cooks digital products.
                        </h1>
                    </Row>
                    <Row>
                        <Col className="description-col" sm={4}>
                            <p>
                                I am a full stack engineer driven by curiosity and a passion to learn. This passion led me to join a Bootcamp, where I built full stack applications using OOP and TDD, Agile and version control. I enjoy problem solving and I consider it a good way to stimulate and express my creativity. 
                            </p>
                        </Col>
                        <Col className="description-col" sm={4}>
                            <p>
                                As an aspiring Junior Developer, I would like to challenge myself and my end-to-end critical thinking in a fast-paced environment.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
          </section>
          
      )
  }
}
export default LandingPage;