import React, { Component } from 'react';
import styles from '../css/projectv2.css';


class ProjectV2 extends Component {
  render() {
    const { img, title, link, descrip, github } = this.props.data;
    const imgStyle = {
      backgroundImage: `url(${img})`,
    }
    return (
      <section className = 'project'>
        <div className = 'project-pix' style = { imgStyle }>
          <a href = { link }> { title } </a>
        </div>
        <div>
          <h2> { title }</h2>
          <a href = { link }> Click here to visit!  </a>
          <a href = { github }> GitHub repository </a>
          <ul>
          { descrip.map((each,index) => 
              <li key = { index }> { each } </li>) }
          </ul>
        </div> 
      </section>
    )
  }
}




export default ProjectV2;
