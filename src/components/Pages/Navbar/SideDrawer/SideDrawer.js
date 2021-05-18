import React from 'react';

import './SideDrawer.css';
import { Link } from 'react-router-dom';

const sideDrawer = props => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <Link to="/about-us">About Us</Link>
        </li>
        <li>
          <Link to="/contact-us">Contact Us</Link>
        </li>
        <li>
          <Link to="/hiring">We are hiring</Link>
        </li>
      </ul>
    </nav>
  );
};

export default sideDrawer;