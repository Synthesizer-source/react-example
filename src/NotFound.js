import React from "react";
import { Form, Container, Row, Col, Button } from "react-bootstrap";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Link } from "react-router-dom";
function NotFound() {
  return (
    <div className="bg-dark" style={{ minHeight: "100vh" }}>
      <div />
      <Container>
        <h1 className="text-center text-muted">Oops...</h1>
        <Row>
          <Col sm={4}>
            <iframe
              src="https://giphy.com/embed/bZmFlbPoX7WyHTzhuV"
              width="100%"
              height="100%"
              frameBorder="0"
              class="giphy-embed"
              allowFullScreen
            />
          </Col>
          <Col sm={4}>
            <div>
              <iframe
                src="https://giphy.com/embed/tvGOBZKNEX0ac"
                width="100%"
                height="100%"
                frameBorder="0"
                class="giphy-embed"
                allowFullScreen
              />
            </div>
          </Col>
          <Col sm={4}>
            <div>
              <iframe
                src="https://giphy.com/embed/Wq4XuPC9gFzR6"
                width="100%"
                height="100%"
                frameBorder="0"
                class="giphy-embed"
                allowFullScreen
              />
            </div>
          </Col>
        </Row>
        <Row className="mt-4">
          <Link className="btn btn-secondary w-100" to={`/`}>
            Go to Home
          </Link>
        </Row>
      </Container>
    </div>
  );
}

export default NotFound;
