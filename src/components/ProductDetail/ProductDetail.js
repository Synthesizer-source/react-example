import React, { Component, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";
import { Container } from "react-bootstrap";
import Course from "../Course/Course";
import courses from "../../data/courses.json";

function ProductDetail() {
  const { id } = useParams();
  const course = courses.courses.filter(item => item.id == id);
  return (
    <Container>
      <Course key={course.id} item={course[0]} />
    </Container>
  );
}

export default ProductDetail;
