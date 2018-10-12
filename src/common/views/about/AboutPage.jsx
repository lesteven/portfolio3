import React, { Component } from 'react';
import styles from './css/aboutPage.css';
import Matrix from '../animations/components/Matrix';
import data from './data2';

class AboutPage extends Component {
  render() {
    return (
      <div className = 'about-me'>
        { data.map((line, index) => <p key = { index }> { line } </p>)}
      </div>  
    )
  }
}

export default AboutPage;
