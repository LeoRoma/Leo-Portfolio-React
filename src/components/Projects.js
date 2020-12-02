import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import Dwitter from '../images/dwitter.jpg';
import SpartaGlobal from '../images/spartaglobalprofile.jpg';
import LeoBay from '../images/leobay.jpg';
import StrawberryAlarmClock from '../images/strawberry.jpg';
import LeoPortfolioReact from '../images/portfolio.jpg';
import MakersBnB from '../images/makersbnb.jpg';

class Projects extends Component {
    render(){
        return(
            <section id="projects">
                <div className="project">
                    <div className="project-container">
                        <Row>
                            <Col className="card-col">
                                <div className="card-o" style={{backgroundColor:'#67A4FF'}}>
                                    <h1>D-Witter</h1>
                                    <p>
                                      A frontend project built with React, the application uses an API from Makers Academy. The web-application is able to register/login, once logged in is able to send a peep, delete a own peep and like other users peeps.
                                    </p>
                                    <h5>
                                        <a href="https://github.com/LeoRoma/D-witter-react" rel="noopenr noreferrer" target="_blank">CHECK IT ON GITHUB</a> 
                                    </h5>
                                    <div className="project-img-container">
                                        <img src={Dwitter} alt="project"></img>
                                    </div>
                                </div>
                               
                            </Col>
                            <Col className="card-col">
                                <div className="card-o" style={{backgroundColor:'#FFC94D'}}>
                                    <h1>Sparta Global Profile</h1>
                                    <p>
                                        Sparta Global would like to create a portal system that would display all spartan profiles. The project is built with ASP.Net MVC, for the backend used C# and Entity Framework to connect with the SQL database is deployed on Azure, as front end HTML, CSS, and Razor.
                                    </p>
                                    <h5>
                                        <a href="https://gist.github.com/LeoRoma/fa6663bd06a05cfcf8515b3033a23a6e" rel="noopenr noreferrer" target="_blank">CHECK IT ON GITHUB</a> 
                                    </h5>
                                    <div className="project-img-container">
                                        <img src={SpartaGlobal} alt="project"></img>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="card-col">
                                <div className="card-o" style={{backgroundColor:'#FFFFFF'}}>
                                    <h1>LeoBay</h1>
                                    <p>
                                        Personal project, an application for users that want to sell their own items. The application let the users to signup and login. The backend is built with C# and Entity Framework connected with the SQL database, and the front end is built with WPF.
                                    </p>
                                    <h5>
                                        <a href="https://github.com/LeoRoma/LeoBay" rel="noopenr noreferrer" target="_blank">CHECK ON GITHUB</a> 
                                    </h5>
                                    <div className="project-img-container">
                                        <img src={LeoBay} alt="project"></img>
                                    </div>
                                </div>
                            </Col>
                            <Col className="card-col text-white">
                                <div className="card-o" style={{backgroundColor:'#6C58E8'}}>
                                    <h1>Strawberry Alarm Clock</h1>
                                    <p>
                                        Final group project in Makers Academy. My team and I built a smart alarm clock in React Native and Android Studio for an Android App which sets the alarm by calculating deducting the time of travel between the distance of two specific points and sets different music based on the weather.
                                    </p>
                                    <h5>
                                        <a href="https://github.com/ckettell/strawberry-alarm-clock" rel="noopenr noreferrer" target="_blank">CHECK IT ON GITHUB</a>
                                    </h5>
                                    <div className="project-img-container">
                                        <img src={StrawberryAlarmClock} alt="project"></img>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="card-col">
                                <div className="card-o" style={{backgroundColor:'#90CE62'}}>
                                    <h1>Crouching Python B'n'B</h1>
                                    <p>
                                        First group project in Makers Academy, inspired by Air bnb. We incorporated features which allowed users to sign up, list a property, book other users' properties and manage their bookings. Tech-stack used for this project are Ruby, PostgreSQL and Sinatra for the backend. HTML and CSS for the frontend. Capybara and RSpec for the test.
                                    </p>
                                    <h5>
                                        <a href="https://github.com/LeoRoma/Makersbnb" rel="noopenr noreferrer" target="_blank">CHECK IT ON GITHUB</a>
                                    </h5>
                                    <div className="project-img-container">
                                        <img src={MakersBnB} alt="project" style={{width:'25%'}}></img>
                                    </div>
                                </div>
                            </Col>
                            <Col className="card-col">
                                <div className="card-o" style={{backgroundColor:'#D1CCC5'}}>
                                    <h1>Leo Portfolio</h1>
                                    <p>
                                        A frontend project built with React, the application showcase my resume and projects.
                                    </p>
                                    <h5>
                                        <a href="https://github.com/LeoRoma/Leo-Portfolio-React" rel="noopenr noreferrer" target="_blank">CHECK IT ON GITHUB</a> 
                                    </h5>
                                    <div className="project-img-container">
                                        <img src={LeoPortfolioReact} alt="project" style={{width:'100%'}}></img>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>   
                </div>    
            </section>
        )
    }
}
export default Projects;