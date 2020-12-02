import React, {Component} from 'react';
import Lens from '../images/lens.jpg';

class Footer extends Component{
    render(){
        return(
            <div className="footer">
                <div className="footer-text">
                    <p className="align-left"><img src={Lens} alt="lens" style={{mixBlendMode:"multiply"}}></img>Cooked with care in London, UK</p>
                    <p className="align-right">&#169; 2020-All rights reserved</p> 
                </div>
            </div>
        )
    }
}

export default Footer;