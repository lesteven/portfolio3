import React, { Component, Fragment } from 'react';
import MappedProjects from './components/MappedProjects';
import { rowOneData, rowTwoData } from './data';
import ProjectV2 from './components/ProjectV2';

class ProjectsPage extends Component {
  render() {
    return (
      <Fragment>
        <ProjectV2 />
      </Fragment>
    )
  }
}




export default ProjectsPage;
