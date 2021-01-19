import React, { Component } from "react";
import { Nav } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function NavBarItem(props) {
  const isContact = props.item == "Contact" ? true : false;

  return (
    <Nav.Link
      className="text-light"
      href={isContact == true ? "/contact" : "#" + props.item.toLowerCase()}
    >
      {props.item}
    </Nav.Link>
  );
}

export default NavBarItem;
