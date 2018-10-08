import React, { Component } from 'react';
import styles from '../css/projects.css';

class Project extends Component {
  render() {
   const { imgname, className, title, descrip, links } = this.props.data; 
    return (
      <div className = { className }>
        <h3> { title } </h3>
        { descrip.map(points =>
          <p key = { points }> { points } </p>
        )}
        <h4> Links: </h4>
        { links.map(each =>
          <a key = { each.link } href = { each.link }>
            { each.title }
          </a>)
        }
      </div>
    )
  }
}




export default Project;
