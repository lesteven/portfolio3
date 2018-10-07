import React, { Component } from 'react';
import MappedProjects from './components/MappedProjects';
import { rowOneData, rowTwoData } from './data';


class ProjectsPage extends Component {
  render() {
    return (
      <div>
        <MappedProjects data = { rowOneData } />
        <MappedProjects data = { rowTwoData } />
      </div>
    )
  }
}




export default ProjectsPage;
