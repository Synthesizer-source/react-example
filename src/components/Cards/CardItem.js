import React, { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

function CardItem(props) {
  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        height: "350px"
      }}
    >
      <Image
        src={props.src}
        className="card-img-top d-block m-auto"
        alt="..."
      />
      <p className="text-gray" style={{ marginTop: "auto", fontWeight: "600" }}>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
    </Container>
  );
}

export default CardItem;
