import React, { Component } from 'react';
import style from '../css/boxes.css';
import Box from './Box';

class MappedBoxes extends Component {
  render() {
   const { data } = this.props; 
    return (
      <div className = 'boxes'>
        { data.map(each => 
          <Box key = { each.title } data = { each } />)
        }
      </div>
    )
  }
}




export default MappedBoxes;
