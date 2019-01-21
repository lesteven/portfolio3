import React, { Component } from 'react';
import ProjectV2 from './components/ProjectV2';
import data from './data2';

class ProjectsPage extends Component {
  render() {
    return (
      <div className = 'max-width pad'>
        { data.map((each, index) => 
            <ProjectV2 key = { index } data = { each } />) }
      </div>
    )
  }
}




export default ProjectsPage;
