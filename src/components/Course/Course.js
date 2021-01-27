import React, { useRef } from "react";
import { Col, Card, Button, Image } from "react-bootstrap";
import { BrowserRouter as Router, Link } from "react-router-dom";

function Course(props) {
  const item = props.item;

  return (
    <Card className="rounded-0 mx-auto">
      <Card.Img
        src={item.cardImage}
        className="card-img-top rounded-0 img-fluid d-block m-auto"
        style={{ height: "180px" }}
        alt="..."
      />
      <Card.Body style={{ backgroundColor: "#edf2f4" }}>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>{item.instructor}</Card.Text>
        <Link className="btn btn-primary w-100" to={`/courses/${item.id}`}>
          View
        </Link>
      </Card.Body>
    </Card>
  );
}

export default Course;
