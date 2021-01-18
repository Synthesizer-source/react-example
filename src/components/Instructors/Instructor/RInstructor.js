import React, { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

function RInstructor(props) {
  return (
    <Row>
      <Col sm={2} />
      <Col
        sm={12}
        md={8}
        className="order-2 order-md-1 col-sm-pull text-light text-center p-2"
        style={{ backgroundColor: props.item.style.backgroundColor }}
      >
        <h4 className="mb-4">{props.item.name}</h4>
        <p>{props.item.context}</p>
      </Col>
      <Col
        sm={12}
        md={2}
        className="order-1 order-md-2 p-2"
        style={{ backgroundColor: props.item.style.backgroundColor }}
      >
        <Image
          src={props.item.imgUrl}
          className="img-fluid d-block m-auto"
          style={{ height: props.item.style.height }}
          alt="..."
        />{" "}
      </Col>
    </Row>
  );
}

export default RInstructor;
