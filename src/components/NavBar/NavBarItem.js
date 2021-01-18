import React, { Component } from "react";
import { Nav } from "react-bootstrap";

function NavBarItem(props) {
  return (
    <Nav.Link className="text-light" href={"#" + props.item.toLowerCase()}>
      {props.item}
    </Nav.Link>
  );
}

export default NavBarItem;
