import React, {Component} from 'react';
import {Col, Row} from 'react-bootstrap';
import Achievements from '../images/achievements.png';

class Resume extends Component {
    render(){
        return(
            <section id="resume">
                <div className="resume">
                    <div className="resume-container">
                        <Row>
                            <Col lg={6} className="card-col">
                                <div className="card-o" style={{backgroundColor:"#FFC94D"}}>
                                    <h5>WORK EXPERIENCE</h5>
                                    <h1>Sparta Global</h1>
                                    <h3>C# Developer Trainee</h3>
                                    <h4>London, June 2020 - September 2020</h4>      
                                    <br />
                                    <p>
                                         A 12-week intensive training program designed to supply key skills in C# Development and continuous integration of Agile.
                                        <br />
                                        <br />
                                        C# programming language while ensuring a strong understanding of OOP programming, SOLID principles, through to building robust testable C# code with TDD and NUnit.
                                        <br />
                                        <br />
                                        Being able to work on team projects using ASP .NET to create full-stack applications, interacting with SQL databases using the Entity Framework and Microsoft Azure.
                                        <br />
                                        <br />
                                        Built a CV viewing tool for internal use using ASP.NET, AWS, Azure and Bootstrap working in an Agile environment in a team of seven. Coordinated with the Talent Management and Resource Management teams to ensure the product was meeting the business needs with weekly sprint review.
                                    </p>
                                </div>                               
                            </Col>
                            <Col lg={6} className="card-col">
                                <div className="card-o text-white" style={{backgroundColor:'#282C35'}}>
                                    <h5>WORK EXPERIENCE</h5>
                                    <h1>Restaurants: Sushi Hiroba, 4 Degree, Tokimeite, Kouzu</h1>
                                    <h3>Sous Chef</h3>
                                    <h4>London, September 2013 - December 2019</h4>
                                    <br />
                                    <p>
                                        Conducted  training functions, ensuring that individual performance met the highest possible culinary standards.
                                        <br />
                                        <br />
                                        Supervised and managed employees. Organised all day-to-day Operations. Efficiently capable to perform duties in employees absence.
                                        <br />
                                        <br />
                                        Worked collaboratively within the team and established and maintained open communication to ensure smooth operations.
                                        <br />
                                        <br />
                                        Delivering  tailor-made experiences through Omakase (traditional Japanese customer-facing service).
                                    </p>      
                                </div>               
                            </Col>
                        </Row>
                        <Row className="resume-row">
                            <Col lg={6} className="card-col">
                                <div className="card-o text-white" style={{backgroundColor:"#6C58E8"}}>
                                    <h5>EDUCATION</h5>
                                    <h1>Makers Academy</h1>
                                    <h3>Graduate Degree</h3>
                                    <h4>London, May 2019 - September 2019</h4>
                                    <br />
                                    <p>
                                        Test-Driven Development (TDD), Object-Oriented Design (OOD)
                                        <br />
                                        <br />
                                        Agile, XP, Pair Programming
                                        <br />
                                        <br />
                                        Full-stack development
                                        <br />
                                        <br />
                                        Frontend: HTML, CSS, Javascript, JQuery, Angular, React
                                        <br />
                                        <br />
                                        Backend: Ruby, Rails, Sinatra
                                        <br />
                                        <br />
                                        Testing frameworks: RSpec, Jasmine, Capybara
                                    </p>
                                </div>                               
                            </Col>

                            <Col lg={6} className="card-col">
                                <div className="card-o" style={{backgroundColor:'#FFFFFF'}}>
                                    <h5>EDUCATION</h5>
                                    <h1>Sapienza University Of Rome</h1>
                                    <h3>Bachelor Degree</h3>
                                    <h4>Rome, September 2007 - December 2010</h4>
                                    <br />
                                    <p>
                                        Faculty of East Asian Languages and Cultures
                                        <br />
                                        <br />
                                        I have studied History, Philosophy, Religion, Literature, Philology, 
                                        Art  History, Contemporary History, Chinese and Japanese Language.
                                    </p>     
                                </div>               
                            </Col>
                        </Row>
                        <Row className="card-row" style={{marginLeft:'0%'}}>
                            {/* <div className="resume-experience achievements" style={{backgroundColor:'#D1CCC5'}}> */}
                                <Col lg={6}>
                                    <img src={Achievements} alt="profilepic"></img>
                                </Col>
                                <Col lg={6}>
                                    <div className="card-o" >
                                        <h1>Achievements</h1>
                                        <p>
                                            Winner of Global Sushi Challenge UK 2015 representing Kouzu Restaurant, after that I went to Tokyo, Japan to represent the UK in the Grand Final (<a href ="http://sushichallenge.global/uk-sushi-chef-xia-tia-jian-set-for-global-sushi-stardom/" rel="noopenr noreferrer" target="_blank">see link</a>). 
                                        </p>
                                        <br />
                                        <p>
                                            In 2010 I won a scholarship from Sapienza Università di Roma to study abroad at the Beijing Foreign Studies University for three months to improve Chinese language skills.
                                        </p>
                                    </div>
                                </Col>    
                            {/* </div>                        */}
                        </Row>
                    </div>
                </div>
            </section>     
        )
    }
}
export default Resume;