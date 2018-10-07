import React, { Component } from 'react';
import style from '../css/boxes.css';

class Boxes extends Component {
  render() {
   const { data } = this.props; 
    return (
      <div className = 'boxes'>
        { data.map(e => 
          <div key = { e.title } >
            <h3> { e. title } </h3>
            { e.descrip.map(points =>
              <p key = { points }> { points } </p>
            )}
          </div>)
        }
      </div>
    )
  }
}




export default Boxes;
