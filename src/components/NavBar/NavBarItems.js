import React, { Component } from "react";
import NavBarItem from "./NavBarItem";

const navItems = ["Home", "About", "Instructors", "Solutions", "Collaborators"];

function NavBarItems() {
  return navItems.map(item => <NavBarItem item={item} />);
}

export default NavBarItems;
