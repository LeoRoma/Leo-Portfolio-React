import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class LandingPage extends Component {
    render(){
        return(
            <div style={{width:'100%', margin:'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                            src="./images/makersprofilepic.jpg" 
                            style={{height:'25em', width: '25em'}}
                            alt="avatar"
                            className="avatar-img"   
                        />
                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>
                            <hr />
                            <p>
                                HTML/CSS | Bootstrap | Javascript | React | C# | SQL |
                            </p>
                            <div className="social-links">
                                {/*Linkedin*/}
                                <a href="https://www.linkedin.com/in/jiatian-leo-xia-9b2490191/" rel="noopenr noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>    
                                {/*Github*/}
                                <a href="https://github.com/LeoRoma" rel="noopenr noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>   
                            </div>
                        </div>
                    </Cell>
                </Grid>
                <h1>LandingPage Page</h1>
            </div>
        )
    }
}
export default LandingPage;