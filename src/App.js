import React, { Component } from "react";

import "./style.css";

import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Cards from "./components/Cards";
import About from "./components/About";
import Instructors from "./components/Instructors";
import Solutions from "./components/Solutions";
import Collaborators from "./components/Collaborators";
import Footer from "./components/Footer";

export default function App() {
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
