import React, { Component, Fragment } from 'react';
import ProjectV2 from './components/ProjectV2';
import data from './data2';

class ProjectsPage extends Component {
  render() {
    return (
      <Fragment>
        { data.map((each, index) => 
            <ProjectV2 key = { index } data = { each } />) }
      </Fragment>
    )
  }
}




export default ProjectsPage;
