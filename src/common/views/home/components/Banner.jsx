import React, { Component } from 'react';
import style from '../css/banner.css';

class Banner extends Component {
  render() {
    return (
      <div className = 'banner-wrapper'>
        <div className = 'banner max-width'>
          <div className = 'name-img'>
            <h1> Steven Le </h1>
            <img src = '/me.jpg'/>
          </div>
          <h2> JavaScript Developer </h2>
        </div>
      </div>
    )
  }
}




export default Banner;
