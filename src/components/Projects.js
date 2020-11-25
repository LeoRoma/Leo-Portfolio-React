import React, {Component} from 'react';
import {Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText} from 'react-mdl';
import {Container, Row, Col} from 'react-bootstrap';
import Dwitter from '../images/dwitter.jpg';
import SpartaGlobal from '../images/spartaglobalprofile.jpg';
import LeoBay from '../images/leobay.jpg';
import StrawberryAlarmClock from '../images/strawberry.jpg';
import LeoPortfolioReact from '../images/leoportfolioreact.jpg';
import MakersBnB from '../images/makersbnb.jpg';
class Projects extends Component {
    render(){
        return(
            <section id="projects">
                <div className="project-bg">
                    <Container className="projects-container">
                    <h1 style={{textAlign:"center",fontWeight:"bold", paddingBottom:"40px"}}>MY PROJECTS</h1>
                        <Row>
                            <Col sm={4} className="project-col"> {/* Dwitter Project */}
                                <Card className="mdl-card--responsive project-card" shadow={1} style={{width: "100%", margin: "auto"}}>
                                    <CardTitle style={{color: 'black', height: '176px', background:`url(${Dwitter}) center/cover`}} />
                                    <CardTitle>D-Witter</CardTitle>
                                    <CardText>
                                        A frontend project built with React, the application uses an API from Makers Academy. The web-application is able to register/login, once logged in is able to send a peep, delete a own peep and like other users peeps.
                                    </CardText>
                                    <CardActions border>
                                        <Button colored>
                                            <a href="https://github.com/LeoRoma/D-witter-react" rel="noopenr noreferrer" target="_blank">GitHub</a> 
                                        </Button>
                                        {/* <Button colored>Live Demo</Button> */}
                                    </CardActions>
                                    <CardMenu style={{color:'#fff'}}>
                                        <IconButton name='share' />
                                    </CardMenu>
                                </Card>

                            </Col>
                            <Col sm={4} className="project-col">
                                {/* Sparta Global Profile */}
                                <Card className="mdl-card--responsive project-card" shadow={1} style={{width: "100%", margin: "auto"}}>
                                    <CardTitle style={{color: 'black', height: '176px', background:`url(${SpartaGlobal}) center/cover`}} />
                                    <CardTitle>Sparta Global Profile</CardTitle>
                                    <CardText>
                                    Sparta Global would like to create a portal system that would display all spartan profiles. The project is built with ASP.Net MVC, for the backend used C# and Entity Framework to connect with the SQL database is deployed on Azure, as front end HTML, CSS, and Razor.
                                    </CardText>
                                    <CardActions border>
                                        <Button colored>
                                            <a href="https://gist.github.com/LeoRoma/fa6663bd06a05cfcf8515b3033a23a6e" rel="noopenr noreferrer" target="_blank">GitHub</a> 
                                        </Button>
                                    </CardActions>
                                    <CardMenu style={{color:'#fff'}}>
                                        <IconButton name='share' />
                                    </CardMenu>
                                </Card>
                            </Col>
                            <Col sm={4} className="project-col">
                                {/* LeoBay */}
                                <Card className="mdl-card--responsive project-card" shadow={1} style={{width: "100%", margin: "auto"}}>
                                    <CardTitle style={{color: '#fff', height: '176px', background:`url(${LeoBay}) center/cover`}} />
                                    <CardTitle>LeoBay</CardTitle>
                                    <CardText>
                                        Personal project, an application for users that want to sell their own items. The application let the users to signup and login. The backend is built with C# and Entity Framework connected with the SQL database, and the front end is built with WPF.
                                    </CardText>
                                    <CardActions border>
                                        <Button colored>
                                            <a href="https://github.com/LeoRoma/LeoBay" rel="noopenr noreferrer" target="_blank">GitHub</a> 
                                        </Button>
                                    </CardActions>
                                    <CardMenu style={{color:'#fff'}}>
                                        <IconButton name='share' />
                                    </CardMenu>
                                </Card>
                            </Col>
                        </Row>
                        <Row className="second-row-projects">
                            <Col sm={4} className="project-col">
                                {/* Strawberry Alarm Clock */}
                                <Card className="mdl-card--responsive project-card" shadow={1} style={{width: "100%", margin: "auto"}}>
                                    <CardTitle style={{color: '#fff', height: '176px', background:`url(${StrawberryAlarmClock}) center/cover`}} />
                                    <CardTitle>Strawberry Alarm Clock</CardTitle>
                                    <CardText>
                                        Final group project in Makers Academy. My team and I built a smart alarm clock in React Native and Android Studio for an Android App which sets the alarm by calculating deducting the time of travel between the distance of two specific points and sets different music based on the weather.
                                    </CardText>
                                    <CardActions border>
                                        <Button colored>
                                            <a href="https://github.com/ckettell/strawberry-alarm-clock" rel="noopenr noreferrer" target="_blank">GitHub</a> 
                                        </Button>
                                    </CardActions>
                                    <CardMenu style={{color:'#fff'}}>
                                        <IconButton name='share' />
                                    </CardMenu>
                                </Card>
                            </Col>
                            <Col sm={4} className="project-col">
                                {/* LeoPortfolioReact */}
                                <Card className="mdl-card--responsive project-card" shadow={1} style={{width: "100%", margin: "auto"}}>
                                    <CardTitle style={{color: '#fff', height: '176px', background:`url(${LeoPortfolioReact}) center/cover`}} />
                                    <CardTitle>Leo Portfolio React</CardTitle>
                                    <CardText>
                                        A frontend project built with React, the application showcase my resume and projects.
                                    </CardText>
                                    <CardActions border>
                                        <Button colored>
                                            <a href="https://github.com/LeoRoma/Leo-Portfolio-React" rel="noopenr noreferrer" target="_blank">GitHub</a> 
                                        </Button>
                                        <Button colored>
                                            <a href="https://leo-portfolio-react.netlify.app/" rel="noopenr noreferrer" target="_blank">Live Demo</a> 
                                        </Button>
                                    </CardActions>
                                    <CardMenu style={{color:'#fff'}}>
                                        <IconButton name='share' />
                                    </CardMenu>
                                </Card>
                            </Col>
                            <Col sm={4} className="project-col">
                                {/* MakerBNB */}
                                <Card className="mdl-card--responsive project-card" shadow={1} style={{width: "100%", margin: "auto"}}>
                                    <CardTitle style={{color: '#fff', height: '176px', background:`url(${MakersBnB}) center/cover`}} />
                                    <CardTitle>Crouching Python B'n'B</CardTitle>
                                    <CardText>
                                        First group project in Makers Academy, inspired by Air bnb. We incorporated features which allowed users to sign up, list a property, book other users' properties and manage their bookings. Tech-stack used for this project are Ruby, PostgreSQL and Sinatra for the backend. HTML and CSS for the frontend. Capybara and RSpec for the test.
                                    </CardText>
                                    <CardActions border>
                                        <Button colored>
                                            <a href="https://github.com/LeoRoma/Makersbnb" rel="noopenr noreferrer" target="_blank">GitHub</a> 
                                        </Button>
                                        <Button colored>
                                            <a href="https://snakebnb.herokuapp.com/index" rel="noopenr noreferrer" target="_blank">Live Demo</a> 
                                        </Button>
                                    </CardActions>
                                    <CardMenu style={{color:'#fff'}}>
                                        <IconButton name='share' />
                                    </CardMenu>
                                </Card>
                            </Col>
                        </Row>
                    </Container>    
                </div>    
            </section>
        )
    }
}
export default Projects;