import React, { Component } from 'react';
import styles from './css/aboutPage.css';
import Matrix from '../animations/components/Matrix';
import data from './data';

class AboutPage extends Component {
  render() {
    return (
      <div className = 'about-wrapper max-width pad'>
        <div className = 'about-img'>
          <div className = 'images'>
            <img src = '/banner2.jpg'/>
            <a href = 'https://www.linkedin.com/in/stevennle'>
              <img src = '/linkedin.svg'/>
            </a>
            <a href = 'https://github.com/lesteven'>
              <img src = '/gh.svg'/>
            </a>
            <p> Le_steven@outlook.com </p>
          </div>
        </div>
        <div className = 'about-me'>
          { data.map((line, index) =>
              <p key = { index }> { line } </p> )}
        </div>  
      </div>
    )
  }
}

export default AboutPage;
