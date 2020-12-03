import React from 'react';
import {Link} from 'react-scroll';
import DrawerToggleButton from './SideDrawer/DrawerToggleButton';
import Hello from '../images/hello.jpg';

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar-navigation">
            
            <div className="toolbar-logo">
                <a href="#home">
                    <img src={Hello} alt="hello" />
                </a>
            </div>
            <div className="spacer" />
            <div className="toolbar-toggle-button">
                <DrawerToggleButton click={props.drawerToggleClickHandler} />
            </div>
            <div className="toolbar-navigation-items">
                <ul>
                    <li>
                        <Link activeClass="active" to="about" spy={true} smooth={false} offset={50} duration={500}>
                            About Me /
                        </Link>
                        {/* <a href="#about">About Me /</a> */}
                    </li>
                    <li>
                        <Link activeClass="active" to="resume" spy={true} smooth={false} offset={50} duration={500}>
                            Resume /
                        </Link>
                    </li>
                    <li>
                        <Link activeClass="active" to="projects" spy={true} smooth={false} offset={50} duration={500}>
                            Projects /
                        </Link>
                    </li>
                    <li>
                        <Link activeClass="active" to="contact" spy={true} smooth={false} offset={50} duration={500}>
                            Contact /
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;