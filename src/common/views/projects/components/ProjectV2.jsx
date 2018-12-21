import React, { Component } from 'react';
import styles from '../css/projectv2.css';


class ProjectV2 extends Component {
  render() {
    return (
      <section className = 'project'>
        <div className = 'project-pix'>
          <img src = 'instagram.jpg' />
        </div>
        <div>
          <h2> title </h2>
          <p> description </p>
        </div> 
      </section>
    )
  }
}




export default ProjectV2;
