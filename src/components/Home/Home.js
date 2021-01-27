import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import Contact from "./Contact";
import Courses from "./Courses";
import Search from "./Search";
import NotFound from "./NotFound";
import NavBar from "../NavBar/NavBar";
import Header from "../Header";
import Cards from "../Cards/Cards";
import About from "../About/About";
import Instructors from "../Instructors/Instructors";
import Solutions from "../Solutions/Solutions";
import Collaborators from "../Collaborators/Collaborators";
import Footer from "../Footer";
import ProductDetail from "../ProductDetail/ProductDetail";
import links from "./data/links.js";

function Home() {
  return (
    <div className="bg-dark">
      <NavBar />
      <Header />
      <Cards />
      <About />
      <Instructors />
      <Solutions />
      <Collaborators />
      <Footer />
    </div>
  );
}

export default Home;
