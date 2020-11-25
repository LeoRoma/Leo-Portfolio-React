import React, {Component} from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import { Link } from "react-scroll";
// import { MDBSmoothScroll } from "mdbreact";

class NavigationBar extends Component{
    render(){
        return(
            <div className="navigation-bar">
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="#home">My Portfolio</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        </Nav>
                        <Nav>
                        <Nav>
                            <Link
                                href="#home"
                                to="home"
                                activeClass="active"
                                className="nav-link"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                >
                                Home
                            </Link>
                        </Nav>
                        <Nav eventKey={2}>
                            <Link
                                href="#about"
                                to="about"
                                activeClass="active"
                                className="nav-link"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={1000}
                                >
                                About Me
                            </Link>
                        </Nav>
                        <Nav.Link eventKey={3}>
                            <Link
                                href="#resume"
                                to="resume"
                                activeClass="active"
                                className="nav-link"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                >
                                Resume
                            </Link>
                        </Nav.Link>
                        <Nav.Link eventKey={4}>
                            <Link
                                href="#projects"
                                to="projects"
                                activeClass="active"
                                className="nav-link"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                >
                                Projects
                            </Link>
                        </Nav.Link>
                        <Nav.Link eventKey={5}>
                            <Link
                                href="#contact"
                                to="contact"
                                activeClass="active"
                                className="nav-link"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                >
                                Contact
                            </Link>
                        </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default NavigationBar;