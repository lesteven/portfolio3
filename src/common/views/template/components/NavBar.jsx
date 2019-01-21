import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/navbar.css';


class NavBar extends Component {
  render() {
    return (
      <div className = 'nav-wrapper'>
        <nav className = 'nav-bar max-width'>
          <Link to = '/'> Home </Link>
          <Link to = '/projects'> Projects </Link>
          <Link to = '/about'> About </Link>
        </nav>
      </div>
    )
  }
}

export default NavBar;
