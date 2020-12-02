// Customize this 'myform.js' script and add it to your JS bundle.
// Then import it with 'import MyForm from "./myform.js"'.
// Finally, add a <MyForm/> element whereever you wish to display the form.

import React, {Component} from "react";
import {FaGithub, FaLinkedin} from 'react-icons/fa';
import {Row, Col} from 'react-bootstrap';
import Manella from '../images/manella.jpg';

class Contact extends Component{
  render() {

    return (
      <section id="contact">
         <div className="contact" style={{width:'80%', margin:'auto'}}>
            <Row className="card-row" style={{marginLeft:'0%'}}>
              <Col lg={6}>
                
                <div className="card-o" >
                  <h1>Contact</h1>
                  <p>
                    For any projects, enquiries, or if you just want to say hi, drop me an email at: xiajtn@gmail.com
                  </p>  
                  <p>
                    Or check me out on socials:
                  </p>
                  <div className="social-links-contact">
                        <a href="https://www.linkedin.com/in/jiatian-leo-xia-9b2490191/" rel="noopenr noreferrer" target="_blank">
                            <FaLinkedin />
                        </a>    
                        <a href="https://github.com/LeoRoma" rel="noopenr noreferrer" target="_blank" style={{paddingLeft:"30px"}}>
                            <FaGithub />
                        </a>   
                  </div>
                </div>
              </Col>
              <Col lg={6} className="contact-img">
                <img src={Manella} alt="contact"></img>
              </Col>  
            </Row>
         </div>
      </section>
    );
  }
}

export default Contact;


