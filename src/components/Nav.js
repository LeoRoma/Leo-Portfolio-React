import React, {Component} from 'react';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import {Link} from 'react-router-dom';

import Main from './Main';

export default class Nav extends Component{
    render(){
        return(
            <div className="demo-big-content">
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
                            <Link to="/">Home</Link>
                            <Link to="/aboutme">About Me</Link> 
                            <Link to="/resume">Resume</Link>
                            <Link to="/projects">Projects</Link>
                            <Link to="/contact">Contact</Link>
                        </Navigation>
                    </Drawer>
                    <Content>
                        <div className="page-content" />
                        <Main />
                    </Content>
                </Layout>
            </div>
        )
    }
}