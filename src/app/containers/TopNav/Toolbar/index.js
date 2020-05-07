import React from "react";
import DrawerToggleButton from "../DrawerToggleButton";
import Logo from "../Icons/Logo";
import "./style.scss";

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div className="toolbar__toggle-button">
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className="toolbar__logo">
        <a className="app_logo_text" href="/">
          Kiu Delivery
        </a>
        <div className="app_logo">
          <Logo />
        </div>
      </div>
      <div className="spacer" />
      <div className="toolbar_navigation-items">
        <ul>
          <li>
            <a href="/">Products</a>
          </li>
          <li>
            <a href="/">Users</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default toolbar;
