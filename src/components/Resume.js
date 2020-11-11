import React, {Component} from 'react';
import {Container, Col, Row} from 'react-bootstrap';

class Resume extends Component {
    render(){
        return(
            <div className="resume">
                <Container>
                    <Row>
                        <Col><h1>Education</h1></Col>
                        <Col>
                              <Row>
                                    <div>
                                        <h1>Makers</h1>
                                        <br />
                                        <p>
                                            Something about Makers
                                        </p>
                                    </div>   
                              </Row>
                              <Row>
                                    <div>
                                        <h1>University</h1>
                                        <br />
                                        <p>Something about Uni</p>
                                    </div> 
                              </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
export default Resume;