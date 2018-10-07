import React, { Component } from 'react';
import Project from './Project';


class MappedProjects extends Component {
  render() {
   const { data } = this.props; 
    return (
      <div className = 'boxes'>
        { data.map(each => 
          <Project key = { each.title } data = { each } />)
        }
      </div>
    )
  }
}




export default MappedProjects;
