import React, { Component } from "react";
import NavBarItem from "./NavBarItem";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { links } from "../../data/links.js";

function NavBarItems() {
  const navItems = links
    .filter(item => item.isLink == true)
    .map((linkItem, index) => (
      <Link className={"nav-link text-light"} key={index} to={linkItem.link}>
        {linkItem.title}
      </Link>
    ));

  return <>{navItems}</>;
}

export default NavBarItems;
