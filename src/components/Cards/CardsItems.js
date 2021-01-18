import React, { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

import CardItem from "./CardItem";

const cardImages = [
  "//upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/150px-ISO_C%2B%2B_Logo.svg.png",
  "//upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/70px-Unofficial_JavaScript_logo_2.svg.png",
  "//upload.wikimedia.org/wikipedia/tr/thumb/2/2e/Java_Logo.svg/140px-Java_Logo.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/110px-Python-logo-notext.svg.png"
];

const colorValues = ["lightblue", "teal", "coral", "purple"];
function getRandomColor(colorValues) {
  return colorValues[Math.floor(Math.random() * colorValues.length)];
}

function CardsItems() {
  let arr = colorValues.slice();
  return (
    <div id="cards" className="my-5">
      <Container>
        <Row className="text-center text-light mb-5">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Row>
        <Row>
          {cardImages.map(function(item, index) {
            let bg = getRandomColor(arr);
            arr = arr.filter(item => item !== bg);
            return (
              <Col
                sm={12}
                md={6}
                lg={3}
                className="custom-card"
                style={{ backgroundColor: bg }}
              >
                <CardItem src={item} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default CardsItems;
