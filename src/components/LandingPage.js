import React, {Component} from "react";
import {Grid, Cell} from 'react-mdl';
import Image from 'react-bootstrap/Image';
import {FaGithub, FaLinkedin} from 'react-icons/fa';

class LandingPage extends Component {
  render(){
      return(
          <div style={{width:'100%', margin:'auto'}}>
              <Grid className="landing-grid">
                  <Cell col={12}>
                      {/* <Image
                          
                          src="../images/makersprofilepic.jpg" 
                          rounded
                          alt="avatar"
                          className="avatar-img" 
                      /> */}
                      <div className="banner-text">
                          <h1>I am Jia Tian Xia</h1>
                          <hr />
                          <p>
                            In my previous experience within Makers Academy and Sparta Global, I have learnt different coding languages such as C#, Ruby and Javascript where I have built full-stack applications using OOP and TDD, Agile, and version control. As an aspiring Junior Developer, I would like to challenge myself and my end-to-end critical thinking in a fast-paced environment.
                          </p>
                          <div className="social-links">
                              {/*Linkedin*/}
                              <a href="https://www.linkedin.com/in/jiatian-leo-xia-9b2490191/" rel="noopenr noreferrer" target="_blank">
                                  <FaLinkedin size='3em' color='white' />
                              </a>    
                              
                              {/*Github*/}
                              <a href="https://github.com/LeoRoma" rel="noopenr noreferrer" target="_blank">
                                <FaGithub size='3em' color='white'/>
                              </a>   
                          </div>
                      </div>
                      
                  </Cell>
              </Grid>
          </div>
      )
  }
}
export default LandingPage;