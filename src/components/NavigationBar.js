import React, {Component} from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import Hello from '../images/hello.jpg';
import Ellipse from '../images/ellipse.jpg';

class NavigationBar extends Component{
    render(){
        return(
            <div className="navigation-bar">
                <Navbar className="navbar" collapseOnSelect expand="lg" bg="light" variant="light">
                    <Navbar.Brand className="navbar-header" href="#home" style={{backgroundImage:`url("${Hello}")`, width:"187px", height:"50px"}}></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className="navbar-items" id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        </Nav>
                        
                        <Nav>
                            <Nav.Link className="navbar-item" href="#about">
                                About Me /
                            </Nav.Link>
                            <Nav.Link eventKey={2} href="#resume">
                                Resume /
                            </Nav.Link>
                            <Nav.Link eventKey={3} href="#projects">
                                Projects /
                            </Nav.Link>
                            <Nav.Link eventKey={4} href="#contact">
                                Contact /
                            </Nav.Link>
                            <Nav.Link eventKey={4} href="#contact">
                                Contact /
                            </Nav.Link>
                            {/* <Nav.Link eventKey={5} style={{backgroundImage:`url("${Ellipse}")`, width:"3px", height:"20px"}}>
                                
                            </Nav.Link> */}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default NavigationBar;