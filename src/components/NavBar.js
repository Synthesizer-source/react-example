import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
const navItems = ["Home", "About", "Instructors", "Solutions", "Collaborators"];

function NavBarItems(index) {
  return navItems.map(item => (
    // <li class="nav-item active">
    //   <a class="nav-link" href={"#" + item.toLowerCase()}>
    //     {item}
    //   </a>
    // </li>
    <Nav.Link className="text-light" href={"#" + item.toLowerCase()}>
      {item}
    </Nav.Link>
  ));
}

function NavBar() {
  return (
    <Navbar bg="dark" expand="lg">
      <Navbar.Brand className="offset-1" href="#home">
        <span className="brand-text-color">DeveloperX</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavBarItems />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
