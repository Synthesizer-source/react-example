import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Form, Container, Row, Col, Button } from "react-bootstrap";
import SearchBar from "./components/Search/SearchBar";
import Course from "./components/Course/Course";
import courses from "./data/courses.json";

function Courses() {
  const listCourses = courses.courses
    .filter(item => item.isActive)
    .map((item, index) => (
      <Col sm={4} className="mb-3">
        <Course key={index} item={item} />
      </Col>
    ));
  return (
    <div>
      <SearchBar />
      <Container className="w-75">
        <Row>{listCourses}</Row>
      </Container>
    </div>
  );
}

export default Courses;
