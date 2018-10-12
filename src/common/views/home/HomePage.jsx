import React, { Component, Fragment } from 'react';
import MappedBoxes from './components/MappedBoxes';


const data = [
  {
    className: 'languages',
    title: 'Languages',
    descrip: ['JavaScript', 'HTML/CSS', 'Java'],
  },
  {
    className: 'skills',
    title: 'Skills',
    descrip: [
      'Full stack web development',
      'Test driven development'
    ],
  },
];

const data2 = [
  {
    className: 'frameworks',
    title: 'Web Frameworks',
    descrip: ['React', 'Redux', 'Express', 'Node'],
  },
  {
    className: 'databases',
    title: 'Databases',
    descrip: ['Postgresql', 'MongoDB'],
  },

]
class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <MappedBoxes data = { data } />
        <MappedBoxes data = { data2 } />
      </Fragment>
    )
  }
}




export default HomePage;
