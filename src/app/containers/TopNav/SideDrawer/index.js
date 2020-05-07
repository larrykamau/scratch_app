import React from "react";
import Card from "./Card";
import "./style.scss";

const SideDrawer = props => {
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }
  return (
    <nav className={drawerClasses}>
      {/* <div className="container"> */}
      <Card />
      <ul>
        <li>
          <a href="/">Products</a>
        </li>
        <li>
          <a href="/">Users</a>
        </li>
      </ul>
      {/* </div> */}
    </nav>
  );
};

export default SideDrawer;
