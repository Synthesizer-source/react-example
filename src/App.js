import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./style.css";

import Contact from "./Contact";
import Courses from "./Courses";
import Search from "./Search";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header";
import Cards from "./components/Cards/Cards";
import About from "./components/About/About";
import Instructors from "./components/Instructors/Instructors";
import Solutions from "./components/Solutions/Solutions";
import Collaborators from "./components/Collaborators/Collaborators";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/contact">
          <ContactPage />
        </Route>
        <Route exact path="/courses">
          <Courses />
        </Route>
        <Route exact path="/courses/search">
          <Search />
        </Route>
      </Switch>
    </Router>
  );
}

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

function ContactPage() {
  return <Contact />;
}
