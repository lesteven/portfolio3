import React, { Component, Fragment } from 'react';
import MappedProjects from './components/MappedProjects';
import { rowOneData, rowTwoData } from './data';


class ProjectsPage extends Component {
  render() {
    return (
      <Fragment>
        <MappedProjects data = { rowOneData } />
        <MappedProjects data = { rowTwoData } />
      </Fragment>
    )
  }
}




export default ProjectsPage;
