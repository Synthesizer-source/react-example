import React, { Component } from "react";
const navItems = ["Home", "About", "Instructors", "Solutions", "Collaborators"];

function NavBarItems(index) {
  return navItems.map(item => (
    <li class="nav-item active">
      <a class="nav-link" href={"#" + item.toLowerCase()}>
        {item}
      </a>
    </li>
  ));
}

function NavBar() {
  return (
    <nav class="navbar navbar-expand-sm navbar-dark  text-center d-flex justify-content-center">
      <div className="container">
        <div className="row">
          <div className="col">
            <div class="navbar-header">
              <a class="navbar-brand brand-text-color" href="#">
                <span className="brand-text-color">DeveloperX</span>
              </a>
            </div>
          </div>
          <div className="col">
            <ul class="navbar-nav">
              <NavBarItems />
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
