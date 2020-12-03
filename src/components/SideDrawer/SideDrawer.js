import React from 'react';
import Link from 'react-scroll';

const sideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if(props.show){
        drawerClasses = 'side-drawer open';
    }

    return(
        <nav className={drawerClasses}>
            <ul>
                <li><a href="#about" onClick={props.drawerToggleClickHandler}>About Me</a></li>
                <li><a href="#resume" onClick={props.drawerToggleClickHandler}>Resume</a></li>
                <li><a href="#projects" onClick={props.drawerToggleClickHandler}>Projects</a></li>
                <li><a href="#contact" onClick={props.drawerToggleClickHandler}>Contact</a></li>
            </ul>
        </nav>
    );   
};
    


export default sideDrawer;