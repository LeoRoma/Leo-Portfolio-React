import React from 'react';
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
                    <li><a href="#about">About Me /</a></li>
                    <li><a href="#resume">Resume /</a></li>
                    <li><a href="#projects">Projects /</a></li>
                    <li><a href="#contact">Contact /</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;