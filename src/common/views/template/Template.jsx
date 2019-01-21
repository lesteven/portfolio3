import React, { Component } from 'react';
import NavBar from './components/NavBar';

class Template extends Component {

  render() {
    return (
      <>
        <NavBar />
        { this.props.children }
      </>
    )
  }  
}

export default Template;
