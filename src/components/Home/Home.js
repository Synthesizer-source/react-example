import React, { Component } from "react";
import NavBar from "../NavBar/NavBar";
import Header from "../Header";
import Cards from "../Cards/Cards";
import About from "../About/About";
import Instructors from "../Instructors/Instructors";
import Solutions from "../Solutions/Solutions";
import Collaborators from "../Collaborators/Collaborators";
import Footer from "../Footer";

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
