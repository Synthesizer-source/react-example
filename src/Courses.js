import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Form, Container, Row, Col, Button } from "react-bootstrap";
import SearchBar from "./components/Search/SearchBar";

function Courses() {
  return (
    <>
      <SearchBar />
    </>
  );
}

export default Courses;
