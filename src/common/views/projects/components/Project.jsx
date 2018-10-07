import React, { Component } from 'react';
import styles from '../css/projects.css';

class Project extends Component {
  render() {
   const { imgname, className, title, descrip } = this.props.data; 
    return (
      <div className = { className }>
        <h3> { title } </h3>
        { descrip.map(points =>
          <p key = { points }> { points } </p>
        )}
      </div>
    )
  }
}




export default Project;
