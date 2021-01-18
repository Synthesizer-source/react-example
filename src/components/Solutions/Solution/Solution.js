import React, { Component } from "react";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import SolutionHeader from "./SolutionHeader";
import SolutionFooter from "./SolutionFooter";

function Solution(props) {
  let item = props.item;
  return (
    <div className="solution-card">
      <Card.Body class="p-3 bg-transparent text-center">
        <SolutionHeader name={item.name} />
        <Card.Text>
          <span>
            With supporting text below as a natural lead-in to additional
            content. With supporting text below as a natural lead-in to
            additional content. With supporting text below as a natural lead-in
            to additional content.
          </span>
        </Card.Text>
        <SolutionFooter price={item.price} />
      </Card.Body>
    </div>
  );
}

export default Solution;
