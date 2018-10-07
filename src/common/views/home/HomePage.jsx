import React, { Component } from 'react';
import MappedBoxes from './components/MappedBoxes';


const data = [
  {
    title: 'Languages',
    descrip: ['JavaScript', 'HTML/CSS', 'Java'],
  },
  {
    title: 'Skills',
    descrip: [
      'Full stack web development',
      'Test driven development'
    ],
  },
];

const data2 = [
  {
    title: 'Web Frameworks',
    descrip: ['React', 'React-Router', 'Redux', 'Express', 'Node'],
  },
  {
    title: 'Databases',
    descrip: ['Postgresql', 'MongoDB'],
  },

]
class HomePage extends Component {
  render() {
    return (
      <div className = 'page-wrapper'> 
        <MappedBoxes data = { data } />
        <MappedBoxes data = { data2 } />
      </div>
    )
  }
}




export default HomePage;
