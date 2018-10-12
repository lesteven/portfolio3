import React, { Component, Fragment } from 'react';
//import Banner from './components/Banner';
import Banner from './components/Banner2';
import NavBar from './components/NavBar';


class Template extends Component {

  render() {
    return (
      <Fragment>
        <div className = 'banner-wrapper'>
          <Banner />
        </div>
        <div className = 'max-width'>
          <NavBar />
          <div className = 'page-wrapper'>
            { this.props.children }
          </div>
        </div>
        <div className = 'bottom'></div>
      </Fragment>
    )
  }  
}

export default Template;
