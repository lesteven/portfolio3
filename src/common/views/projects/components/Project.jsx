import React, { Component } from 'react';


class Project extends Component {
  render() {
   const { title, descrip } = this.props.data; 
    return (
      <div>
        <h3> { title } </h3>
        { descrip.map(points =>
          <p key = { points }> { points } </p>
        )}
      </div>
    )
  }
}




export default Project;
