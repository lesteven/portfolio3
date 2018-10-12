import React, { Component, Fragment } from 'react';
import styles from '../css/matrix.css';



const data = [
  ' 01         1 10        10 10 1     101 0      101 00 1 10101',
  '   010     01 01                      1010 1 1        10 1010 1',
  ' 010 10                          10 10              01 0 1   10',
  '             10 0 10 10               100 10 1        10 101  10',
  '                        101001 010 0101              10 010 1010',
  ' 101001           01 010            10 0         10 01       100',
  '     01         1 10        10 10 1  10101',
  '   010     01 01               1010 1 1        10 1010 1',
  ' 010 10                          10 10              01 0 1   10',
  '       10010          100 10 1        10 101  10',
  '         101001 010 0101              10 010 1010',
  '     10100101 010            10 0         10 01       100',

]

class Matrix extends Component {

  render() {
    const { className } = this.props;
    return (
      <div className = 'matrix'>
        <div className = 'line'>
          { data.map((line, index) =>
            <p key = { index }> { line } </p>)
          }
        </div>
      </div>
    )
  }  
}

export default Matrix;


