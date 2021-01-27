import React, { Component, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";
import { Container, Row, Col, Image } from "react-bootstrap";
import Course from "../Course/Course";
import courses from "../../data/courses.json";
import NavBar from "../NavBar/NavBar";

function ProductDetail() {
  const { id } = useParams();
  const course = courses.courses.filter(item => item.id == id)[0];
  console.log(course.detail);
  const courseDetails = course.detail.map(item => <li>{item}</li>);
  return (
    <div className="bg-dark" style={{ minHeight: "100vh" }}>
      <NavBar />
      <Container>
        <Row className="mt-5">
          <Col sm={4} className="bg-secondary">
            <p className="text-center my-3">{course.instructor}</p>
            <Image
              src={course.url}
              className="img-fluid d-block m-auto h-75 w-75"
              alt="..."
            />
          </Col>
          <Col sm={8} className="bg-info">
            <h3 className="mt-3 text-center">{course.instructor}</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <ul>{courseDetails}</ul>
          </Col>
        </Row>
        <Row>
          <Col sm={4} className="bg-secondary" />
          <Col sm={8} className="bg-info">
            <Row>
              <Col sm={4}>
                <h4 className="mt-3">{course.title}</h4>
                <Image
                  src={course.cardImage}
                  className="img-fluid m-auto h-50 w-75"
                  alt="..."
                />
              </Col>
              <Col className="mt-5">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ProductDetail;
