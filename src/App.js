import React, { Component } from "react";

import "./style.css";

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
