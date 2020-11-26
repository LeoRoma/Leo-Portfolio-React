import React, {Component} from 'react';
import {Nav, Navbar} from 'react-bootstrap';

class NavigationBar extends Component{

    render(){
        return(
            <div className="navigation-bar">
                <Navbar className="navbar" collapseOnSelect expand="lg" variant="dark">
                    <Navbar.Brand href="#home">My Portfolio</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        </Nav>
                        <Nav>
                        <Nav.Link href="#home">
                            Home
                        </Nav.Link>
                        <Nav.Link eventKey={2} href="#about">
                            About Me
                        </Nav.Link>
                        <Nav.Link eventKey={3} href="#resume">
                            Resume
                        </Nav.Link>
                        <Nav.Link eventKey={4} href="#projects">                           
                            Projects
                        </Nav.Link>
                        <Nav.Link eventKey={5} href="#contact">
                            Contact
                        </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default NavigationBar;