import React, {Component} from "react";
import {Grid, Cell} from 'react-mdl';
import {FaGithub, FaLinkedin} from 'react-icons/fa';


class LandingPage extends Component {
  render(){
      return(
          <section id="home">
            <div style={{width:'100%', margin:'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <div className="banner-text">
                            <h1>I am Jia Tian Xia</h1>
                            <hr />
                            <p>
                                I am a full stack engineer driven by curiosity and a passion to learn. This passion led me to join a Bootcamp, where I built full stack applications using OOP and TDD, Agile and version control. I enjoy problem solving and I consider it a good way to stimulate and express my creativity. As an aspiring Junior Developer, I would like to challenge myself and my end-to-end critical thinking in a fast-paced environment.
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
          </section>
          
      )
  }
}
export default LandingPage;