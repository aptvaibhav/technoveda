import React from "react";

import logo from "../../../../assets/blood.png";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import "../ToolBar/ToolBar.css";
import { Link,NavLink } from "react-router-dom";

const toolbar = (props) => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div className="toolbar__toggle-button">
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className="toolbar__logo">
        <Link to="/">
          <img src={logo} alt="logo" height="40" width="100" style={{marginTop:"10px"}}/>
        </Link>
        
      </div>
      <div className="toolbar_navigation-items">
      <div className="tech">
        <ul>
          <li>
          <Link to="/">
            TechnoVeda
            </Link>
          </li>
        </ul>
        </div>
      </div>
      <div className="spacer" />
      <div className="toolbar_navigation-items">
        <ul>
          <li>
            <NavLink to="/diseases">Diagnose Diseases</NavLink>
          </li>

          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/signup">Signup</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default toolbar;