import React, { Component } from 'react';
import Banner from './components/Banner';
import NavBar from './components/NavBar';


class Template extends Component {

  render() {
    return (
      <div>
        <Banner />
        <NavBar />
        { this.props.children }
      </div>
    )
  }  
}

export default Template;
