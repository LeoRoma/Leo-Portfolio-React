import React, {Component} from 'react';
import {Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText} from 'react-mdl';
import {Container, Row, Col} from 'react-bootstrap';
import Dwitter from '../images/dwitter.jpg';

class Projects extends Component {
    render(){
        return(
            <Container className="projects-container">
                <Row>
                    <Col sm={4}> {/* Dwitter Project */}
                        <Card className="mdl-card--responsive" shadow={5} style={{width: "400px", margin: "auto"}}>
                            <CardTitle style={{color: '#fff', height: '176px', background:`url(${Dwitter}) center/cover`}}>React Project</CardTitle>
                            <CardText>
                                A frontend project built with React, the application uses an API from Makers Academy. The web-application is able to register/login, send/like/delete a peep.
                            </CardText>
                            <CardActions border>
                                <Button colored>
                                    <a href="https://github.com/LeoRoma/D-witter-react" rel="noopenr noreferrer" target="_blank">GitHub</a> 
                                </Button>
                                <Button colored>Live Demo</Button>
                            </CardActions>
                            <CardMenu style={{color:'#fff'}}>
                                <IconButton name='share' />
                            </CardMenu>
                        </Card>
                    </Col>
                    <Col sm={4}>
                        {/* Sparta Global Profile */}
                        <Card className="mdl-card--responsive" shadow={5} style={{width: "300px", margin: "auto"}}>
                            <CardTitle style={{color: '#fff', height: '176px', background:`url(${Dwitter}) center/cover`}}>React Project</CardTitle>
                            <CardText>
                                A frontend project built with React, the application uses an API from Makers Academy. The web-application is able to register/login, send/like/delete a peep.
                            </CardText>
                            <CardActions border>
                                <Button colored>
                                    <a href="https://github.com/LeoRoma/D-witter-react" rel="noopenr noreferrer" target="_blank">GitHub</a> 
                                </Button>
                                <Button colored>Live Demo</Button>
                            </CardActions>
                            <CardMenu style={{color:'#fff'}}>
                                <IconButton name='share' />
                            </CardMenu>
                        </Card>
                    </Col>
                    <Col sm={4}>
                        {/* LeoBay */}
                        <Card className="mdl-card--responsive" shadow={5} style={{width: "300px", margin: "auto"}}>
                            <CardTitle style={{color: '#fff', height: '176px', background:`url(${Dwitter}) center/cover`}}>React Project</CardTitle>
                            <CardText>
                                A frontend project built with React, the application uses an API from Makers Academy. The web-application is able to register/login, send/like/delete a peep.
                            </CardText>
                            <CardActions border>
                                <Button colored>
                                    <a href="https://github.com/LeoRoma/D-witter-react" rel="noopenr noreferrer" target="_blank">GitHub</a> 
                                </Button>
                                <Button colored>Live Demo</Button>
                            </CardActions>
                            <CardMenu style={{color:'#fff'}}>
                                <IconButton name='share' />
                            </CardMenu>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col sm={4}>
                        {/* Strawberry Alarm Clock */}
                        <Card className="mdl-card--responsive" shadow={5} style={{width: "300px", margin: "auto"}}>
                            <CardTitle style={{color: '#fff', height: '176px', background:`url(${Dwitter}) center/cover`}}>React Project</CardTitle>
                            <CardText>
                                A frontend project built with React, the application uses an API from Makers Academy. The web-application is able to register/login, send/like/delete a peep.
                            </CardText>
                            <CardActions border>
                                <Button colored>
                                    <a href="https://github.com/LeoRoma/D-witter-react" rel="noopenr noreferrer" target="_blank">GitHub</a> 
                                </Button>
                                <Button colored>Live Demo</Button>
                            </CardActions>
                            <CardMenu style={{color:'#fff'}}>
                                <IconButton name='share' />
                            </CardMenu>
                        </Card>
                    </Col>
                    <Col sm={4}>
                        {/* LeoPortfolioReact */}
                        <Card className="mdl-card--responsive" shadow={5} style={{width: "300px", margin: "auto"}}>
                            <CardTitle style={{color: '#fff', height: '176px', background:`url(${Dwitter}) center/cover`}}>React Project</CardTitle>
                            <CardText>
                                A frontend project built with React, the application uses an API from Makers Academy. The web-application is able to register/login, send/like/delete a peep.
                            </CardText>
                            <CardActions border>
                                <Button colored>
                                    <a href="https://github.com/LeoRoma/D-witter-react" rel="noopenr noreferrer" target="_blank">GitHub</a> 
                                </Button>
                                <Button colored>Live Demo</Button>
                            </CardActions>
                            <CardMenu style={{color:'#fff'}}>
                                <IconButton name='share' />
                            </CardMenu>
                        </Card>
                    </Col>
                    <Col sm={4}>
                        {/* MakerBNB */}
                        <Card className="mdl-card--responsive" shadow={5} style={{width: "300px", margin: "auto"}}>
                            <CardTitle style={{color: '#fff', height: '176px', background:`url(${Dwitter}) center/cover`}}>React Project</CardTitle>
                            <CardText>
                                A frontend project built with React, the application uses an API from Makers Academy. The web-application is able to register/login, send/like/delete a peep.
                            </CardText>
                            <CardActions border>
                                <Button colored>
                                    <a href="https://github.com/LeoRoma/D-witter-react" rel="noopenr noreferrer" target="_blank">GitHub</a> 
                                </Button>
                                <Button colored>Live Demo</Button>
                            </CardActions>
                            <CardMenu style={{color:'#fff'}}>
                                <IconButton name='share' />
                            </CardMenu>
                        </Card>
                    </Col>
                </Row>
            </Container>
  
        )
    }
}
export default Projects;