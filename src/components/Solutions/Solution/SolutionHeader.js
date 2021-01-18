import React, { Component } from "react";
import { Container, Row, Col, Image, Card } from "react-bootstrap";

function SolutionHeader(props) {
  return <h4 class="card-title">{props.name}</h4>;
}

export default SolutionHeader;
