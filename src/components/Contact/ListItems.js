import React, { useState, useRef } from "react";
import { ListGroup, Container } from "react-bootstrap";
import ListItem from "./ListItem";

function ListItems(props) {
  const listArr = props.contacts.map(function(item) {
    return (
      <div className="bg-dark">
        <Container>
          <ListItem
            key={item.id}
            item={item}
            remove={props.remove}
            update={props.update}
          />
        </Container>
      </div>
    );
  });

  return <ListGroup>{listArr}</ListGroup>;
}

export default ListItems;
