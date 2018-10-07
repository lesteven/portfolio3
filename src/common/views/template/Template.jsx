import React, { Component } from 'react';
//import Banner from './components/Banner';
import Banner from './components/Banner2';
import NavBar from './components/NavBar';


class Template extends Component {

  render() {
    return (
      <div className = 'template-wrapper'>
        <Banner />
        <NavBar />
        <div className = 'page-wrapper'>
          { this.props.children }
        </div>
      </div>
    )
  }  
}

export default Template;
