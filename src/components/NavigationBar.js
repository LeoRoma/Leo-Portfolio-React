import React, {Component} from 'react';
import {Nav, Navbar} from 'react-bootstrap';

class NavigationBar extends Component{
    render(){
        return(
            <div className="navigation-bar">
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="#home">My Portfolio</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        {/* <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                        </Nav>
                        <Nav>
                        <Nav.Link href="#about">About Me</Nav.Link>
                        <Nav.Link eventKey={2} href="#resume">
                            Resume
                        </Nav.Link>
                        <Nav.Link eventKey={3} href="#projects">
                            Projects
                        </Nav.Link>
                        {/* <Nav.Link eventKey={4} href="#contact">
                            Contact
                        </Nav.Link> */}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default NavigationBar;