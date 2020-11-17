import React, {Component} from 'react';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import {Link} from 'react-router-dom';

import Main from './Main';

class Nav extends Component{

    hideToggle(){
        var selectorId = document.querySelector('.mdl-layout');
        selectorId.MaterialLayout.toggleDrawer();
    }

    render(){
        return(
            <div className="fixed-header">
                <Layout>
                    <Header className="header-colour position-fixed" title="My Portfolio" scroll>
                        <Navigation>
                            <Link to="/">Home</Link>
                            <Link to="/aboutme">About Me</Link>
                            <Link to="/resume">Resume</Link>
                            <Link to="/projects">Projects</Link>
                            <Link to="/contact">Contact</Link>
                        </Navigation>
                    </Header>
                    <Content>
                        <div className="page-content" />
                        <Main />
                    </Content>
                     <Drawer className="drawer-position" title="My Portfolio">
                            <Navigation>
                            <Link to="/" onClick = {() => this.hideToggle()}>Home</Link>
                            <Link to="/aboutme" onClick = {() => this.hideToggle()}>About Me</Link>
                            <Link to="/resume" onClick = {() => this.hideToggle()}>Resume</Link>
                            <Link to="/projects" onClick = {() => this.hideToggle()}>Projects</Link>
                            <Link to="/contact" onClick = {() => this.hideToggle()}>Contact</Link>
                            </Navigation>
                        </Drawer>
                </Layout>
                    
            </div>
        )
    }
}

export default Nav;