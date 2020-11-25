import React, {Component} from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import { Link } from "react-scroll";
// import { MDBSmoothScroll } from "mdbreact";

class NavigationBar extends Component{
    render(){
        return(
            <div className="navigation-bar">
                <Navbar className="navbar" collapseOnSelect expand="lg" variant="dark">
                    <Navbar.Brand href="#home">My Portfolio</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        </Nav>
                        <Nav>
                        <Nav.Link>
                            <Link
                                href="#home"
                                to="home"
                                activeClass="active"
                                className="nav-link"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={1000}
                                >
                                Home
                            </Link>
                        </Nav.Link>
                        <Nav.Link eventKey={2}>
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
                        </Nav.Link>
                        <Nav.Link eventKey={3}>
                            <Link
                                href="#resume"
                                to="resume"
                                activeClass="active"
                                className="nav-link"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={1000}
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
                                duration={1000}
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
                                duration={1000}
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