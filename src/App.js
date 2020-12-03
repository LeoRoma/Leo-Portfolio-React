import React, {Component} from 'react';
import './App.css';

import AboutMe from './components/AboutMe';
import Backdrop from './components/Backdrop/Backdrop';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import Projects from './components/Projects';
import Resume from './components/Resume';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Toolbar from './components/Toolbar';

class App extends Component {
  state ={
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    })
  };

  backdropClickHandler = () =>{
    this.setState({sideDrawerOpen: false});
  };

  render(){
    let backdrop;

    if(this.state.sideDrawerOpen){
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <div style={{height:'100%'}}>
        <Toolbar drawerToggleClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer 
          show={this.state.sideDrawerOpen} 
          drawerToggleClickHandler={this.drawerToggleClickHandler} 
        />
        {backdrop}
        <LandingPage />
        <AboutMe />
        <Resume />
        <Projects />
        <Contact />
        <Footer />
      </div>
    );
  }

}

  


export default App;
