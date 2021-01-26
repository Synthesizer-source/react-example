import React, { useRef } from "react";
import { Col, Card, Button } from "react-bootstrap";
import { BrowserRouter as Router, Link } from "react-router-dom";
function Course(props) {
  const item = props.item;

  return (
    <Card className="rounded-0 w-50">
      <Card.Img
        src={`https://picsum.photos/id/${item.id}/400/300`}
        className="card-img-top"
        alt="..."
      />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>Some quick example text to build</Card.Text>
        <Link className="btn btn-primary" to={`/courses/${item.id}`}>
          Incele
        </Link>
      </Card.Body>
    </Card>
  );
}

export default Course;
