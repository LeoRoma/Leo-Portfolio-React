import React, {Component} from 'react';
import {Container, Col, Row} from 'react-bootstrap';

class Resume extends Component {
    render(){
        return(
            <section id="resume">
                <div className="resume">
                    <Container>
                        <Row>
                            <Col md={3} className="work-section"><h1>PROFESSIONAL EXPERIENCE <hr /></h1></Col>
                            <Col md={9}>
                                <Col sm={12}>
                                    <Row>
                                            <div className="resume-experience">
                                                <h1>Sparta Global</h1>
                                                <h4>London</h4>
                                                <h4><i>C# Developer Trainee</i></h4>
                                                <h4>June 2020 - September 2020</h4>
                                                <br />
                                                <p>
                                                    A 12-week intensive training program designed to supply key skills in C# Development and to practice throughout the academy, the mind-set, ceremonies, and continuous integration of Agile.
                                                    <br />
                                                    <br />
                                                    Being taught C# programming language and ensuring a strong understanding of OOP programming, SOLID principles, through to building robust testable C# code with TDD and NUnit.
                                                    <br />
                                                    <br />
                                                    Being able to work on team projects using ASP .NET to create full-stack applications, interacting with SQL databases using the Entity Framework and Microsoft Azure.
                                                    <br />
                                                    <br />
                                                    Built a CV viewing tool for internal use using ASP .NET, AWS, Azure and Bootstrap working in an Agile environment in a team of seven. Coordinated with the Talent Management and Resource Management teams to ensure the product was meeting the business needs with weekly sprint reviews.
                                                </p>
                                            </div>   
                                    </Row>
                                    <Row>
                                            <div className="resume-experience">
                                                <h1>Restaurants: Sushi Hiroba, 4 Degree, Tokimeite, Kouzu</h1>
                                                <h4>London</h4>
                                                <h4><i>Sous Chef</i></h4>
                                                <h4>September 2013 - December 2019</h4>
                                                <br />
                                                <p>
                                                    Conducted  training functions, ensuring that individual performance met the highest possible culinary standards.
                                                    <br />
                                                    <br />
                                                    Supervised and managed employees. Manages all day-to-day operations. Understand employee positions well enough to perform duties in employees' absence.
                                                    <br />
                                                    <br />
                                                    Worked collaboratively within the team and established and maintained open communication to ensure smooth operations.
                                                    <br />
                                                    <br />
                                                    Delivering  tailor-made experiences through Omakase (traditional Japanese customer-facing service).
                                                </p>
                                            </div> 
                                    </Row>
                                </Col>                           
                            </Col>
                        </Row>
                        <Row>
                            <Col md={3} className="education-section"><h1>EDUCATION<hr /></h1></Col>
                            <Col md={9}>
                                <Col sm={12}>
                                    <Row>
                                            <div className="resume-experience">
                                                <h1>Makers Academy</h1>
                                                <h4>London</h4>
                                                <h4><i>Graduate Degree</i></h4>
                                                <h4>May 2019 - September 2019</h4>
                                                <br />
                                                <p>
                                                    ●	Test-Driven Development (TDD), Object-Oriented Design (OOD)
                                                    <br />
                                                    ●	Agile, XP, Pair Programming
                                                    <br />
                                                    ●	Full-stack development
                                                    <br />
                                                    ●	Frontend: HTML, CSS, Javascript, JQuery, Angular, React
                                                    <br />
                                                    ●	Backend: Ruby, Rails, Sinatra
                                                    <br />
                                                    ●	Testing frameworks: RSpec, Jasmine, Capybara
                                                </p>
                                            </div>   
                                    </Row>
                                    <Row>
                                            <div className="resume-experience">
                                                <h1>Sapienza University Of Rome</h1>
                                                <h4><i>Rome</i></h4>
                                                <h4>Bachelor Degree</h4>
                                                <h4>September 2007 - December 2010</h4>
                                                <br />
                                                <p>
                                                    ●	Faculty of East Asian Languages and Cultures
                                                    <br />
                                                    ●	I have studied History, Philosophy, Religion, Literature, Philology, 
                                                    Art  History, Contemporary History, Chinese and Japanese Language.
                                                </p>
                                            </div> 
                                    </Row>
                                </Col>                           
                            </Col>
                        </Row>
                        <Row>
                            <Col md={3} className="achievements-section"><h1>ACHIEVEMENTS <hr /></h1></Col>
                            <Col md={9}>
                            <div className="resume-experience">
                                    <p>
                                        Winner of Global Sushi Challenge UK 2015 representing Kouzu Restaurant, after that I went to Tokyo, Japan to represent the UK in the Grand Final (<a href ="http://sushichallenge.global/uk-sushi-chef-xia-tia-jian-set-for-global-sushi-stardom/" rel="noopenr noreferrer" target="_blank">see link</a>). 
                                    </p>
                                    <br />
                                    <p>
                                        In 2010 I won a scholarship from Sapienza Università di Roma to study abroad at the Beijing Foreign Studies University for three months to improve Chinese language skills.
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>     
        )
    }
}
export default Resume;