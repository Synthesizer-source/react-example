import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import NavBarItems from "./NavBarItems";

function NavBar() {
  return (
    <Navbar bg="dark" fixed="top" expand="lg">
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
