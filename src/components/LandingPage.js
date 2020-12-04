import React, {Component} from "react";
// import {Grid, Cell} from 'react-mdl';

class LandingPage extends Component {
  render(){
      return(
          <section id="home">
            <div className="landingpage">
                <div className="banner-text">
                    <h1>
                        Portfolio of Jia Tian Xia,
                        <br />
                        a former Sous Chef who now 
                        <br />
                        cooks digital products.
                    </h1>
                    <div className="banner-text-col">
                        <p>
                            Junior full-stack engineer driven by curiosity and a passion to learn. This passion led me to join a Bootcamp, where I built full-stack applications using OOP, TDD, Agile, and version control. I enjoy problem-solving and I consider it a good way to stimulate and express my creativity. I have developed strong interpersonal skills through a wide range of work experience. 
                        </p>
                    </div>
                    <div className="banner-text-col">
                        <p>
                            As an aspiring Junior Software Developer, I would like to challenge myself and my end-to-end critical thinking in a fast-paced environment.
                        </p>
                    </div>
                </div>  
                                 
            </div>
          </section>
          
      )
  }
}
export default LandingPage;