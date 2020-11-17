import React, {Component} from 'react';
import {Layout, Header, Navigation, Drawer} from 'react-mdl';
// import {Link} from 'react-router-dom';

// import Main from './Main';

class Nav extends Component{
    render(){
        return(
            <div className="fixed-header">
                <Layout>
                    <Header className="header-colour" title="My Portfolio" scroll>
                        <Navigation>
                            {/* <Link to="/">Home</Link>
                            <Link to="/aboutme">About Me</Link>
                            <Link to="/resume">Resume</Link>
                            <Link to="/projects">Projects</Link>
                            <Link to="/contact">Contact</Link> */}
                            <a className="smoothscroll" href="#home">Home</a>
                            <a className="smoothscroll" href="#about">About Me</a>
                            <a className="smoothscroll" href="#resume">Resume</a>
                            <a className="smoothscroll" href="#projects">Projects</a>
                            <a className="smoothscroll" href="#contact">Contact</a>
                        </Navigation>
                    </Header>
                    <Drawer title="My Portfolio">
                        <Navigation>
                            <a className="smoothscroll" href="#home">Home</a>
                            <a className="smoothscroll" href="#about">About Me</a>
                            <a className="smoothscroll" href="#resume">Resume</a>
                            <a className="smoothscroll" href="#projects">Projects</a>
                            <a className="smoothscroll" href="#contact">Contact</a>
                        </Navigation>
                    </Drawer>
                    {/* <Content>
                        <div className="page-content" />

                    </Content> */}
                </Layout>
            </div>
        )
    }
}

export default Nav;