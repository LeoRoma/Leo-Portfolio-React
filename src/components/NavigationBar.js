import React, {Component} from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import Hello from '../images/hello.jpg';

class NavigationBar extends Component{
    render(){
        return(
            <div className="navigation-bar">
                <Navbar className="navbar" collapseOnSelect expand="lg">
                    <Navbar.Brand className="navbar-brand" href="#home" style={{backgroundImage:`url("${Hello}")`, width:"188px", height:"50px"}}></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className="navbar-items" id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        </Nav>
                        <Nav>
                        <Nav.Link href="#about" style={{color:"black"}}>
                            About Me |
                        </Nav.Link>
                        <Nav.Link eventKey={2} href="#resume" style={{color:"black"}}>
                            Resume |
                        </Nav.Link>
                        <Nav.Link eventKey={3} href="#projects" style={{color:"black"}}>
                            Projects |
                        </Nav.Link>
                        <Nav.Link eventKey={4} href="#contact" style={{color:"black"}}>
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