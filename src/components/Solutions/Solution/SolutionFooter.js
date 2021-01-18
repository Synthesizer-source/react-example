import React, { Component } from "react";
import { Container, Row, Col, Image, Card } from "react-bootstrap";

function SolutionFooter(props) {
  return (
    <>
      <div>
        <p style={{ fontSize: "30px", fontWeight: "600" }}>{props.price}</p>
      </div>
      <Card.Link href="#" class="text-light" style={{ fontSize: "20px" }}>
        View Details
      </Card.Link>
    </>
  );
}

export default SolutionFooter;
