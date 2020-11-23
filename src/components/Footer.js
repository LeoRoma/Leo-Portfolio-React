import React, {Component} from 'react';
import {FaGithub, FaLinkedin} from 'react-icons/fa';

class Footer extends Component{
    render(){
        return(
            <div className="footer" style={{margin:"auto", width:"100%", background:"black", textAlign:"center"}}>
                {/*Linkedin*/}
                <a href="https://www.linkedin.com/in/jiatian-leo-xia-9b2490191/" rel="noopenr noreferrer" target="_blank">
                    <FaLinkedin />
                </a>    
                
                {/*Github*/}
                <a href="https://github.com/LeoRoma" rel="noopenr noreferrer" target="_blank">
                    <FaGithub />
                </a>  
            </div>
        )
    }
}

export default Footer;