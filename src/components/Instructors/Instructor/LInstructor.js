import React, { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

function LInstructor(props) {
  return (
    <Row>
      <Col
        sm={12}
        md={2}
        className="p-2"
        style={{ backgroundColor: props.item.style.backgroundColor }}
      >
        <Image
          src={props.item.imgUrl}
          className="img-fluid d-block m-auto"
          style={{ height: props.item.style.height }}
          alt="..."
        />
      </Col>
      <Col
        sm={12}
        md={8}
        className="text-light text-center p-2"
        style={{ backgroundColor: props.item.style.backgroundColor }}
      >
        <h4 className="mb-4">{props.item.name}</h4>
        <p>{props.item.context}</p>
      </Col>
      <Col sm={2} />
    </Row>
  );
}

export default LInstructor;
