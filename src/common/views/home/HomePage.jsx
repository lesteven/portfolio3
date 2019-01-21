import React, { Component } from 'react';
import Banner from './components/Banner';
import MappedBoxes from './components/MappedBoxes';
import data from './data';
import style from './css/home.css';

class HomePage extends Component {
  render() {
  const bg = {
    background: "url('./palm.jpg') no-repeat center",
    backgroundSize: 'cover',
  }
    return (
      <div className = 'home' >
        <div className = 'max-width'>
          <Banner />
          <MappedBoxes data = { data } />
        </div>
      </div>
    )
  }
}




export default HomePage;
