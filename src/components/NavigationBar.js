import React, {Component} from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import Hello from '../images/hello.jpg';
// import Ellipse from '../images/ellipse.jpg';

class NavigationBar extends Component{
    render(){
        return(
            <div className="navigation-bar">
                <Navbar className="navbar" collapseOnSelect expand="lg">
                    <Navbar.Brand className="navbar-header" href="#home" style={{backgroundImage:`url("${Hello}")`, width:"187px", height:"50px"}}></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className="navbar-items" id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        </Nav>
                        <Nav>
                            <Nav.Link href="#about" style={{color:'black'}}>
                                About Me /
                            </Nav.Link>
                            <Nav.Link eventKey={2} href="#resume" style={{color:'black'}}>
                                Resume /
                            </Nav.Link>
                            <Nav.Link eventKey={3} href="#projects" style={{color:'black'}}>
                                Projects /
                            </Nav.Link>
                            <Nav.Link eventKey={4} href="#contact" style={{color:'black'}}>
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