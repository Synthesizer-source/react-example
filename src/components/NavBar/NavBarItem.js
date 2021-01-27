import React, { Component } from "react";
import { Nav } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function NavBarItem(props) {

  return (
    <Nav.Link
      className="text-light"
      href={isContact == true ? "/courses" : "#" + props.item.toLowerCase()}
    >
      {props.item}
    </Nav.Link>
  );
}

export default NavBarItem;
