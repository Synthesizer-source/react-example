import React, { Component } from "react";
import NavBarItem from "./NavBarItem";

const navItems = [
  "Home",
  "About",
  "Instructors",
  "Solutions",
  "Collaborators",
  "Contact",
  "Courses"
];

function NavBarItems() {
  return navItems.map((item, index) => <NavBarItem key={index} item={item} />);
}

export default NavBarItems;
