import React, {useState} from 'react';

import {Nav, Navbar} from 'react-bootstrap';
import Hello from '../images/hello.jpg';

const NavigationBar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <div className="navigation-bar">
       
        </div>
    )
}
            


export default NavigationBar;