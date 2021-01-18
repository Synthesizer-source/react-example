import React, { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

function Collaborator(props) {
  return (
    <div className="col-sm-2 col-md-2 mx-auto mt-5">
      <a href={props.item.url}>
        <img
          src={props.item.imgUrl}
          className="d-block img-fluid w-50 m-auto"
        />
      </a>
    </div>
  );
}

export default Collaborator;
