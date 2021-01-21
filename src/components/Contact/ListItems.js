import React, { useState, useRef } from "react";
import { ListGroup, Container } from "react-bootstrap";
import ListItem from "./ListItem";

function ListItems(props) {
  const listArr = props.contacts.map(function(item) {
    return (
      <div>
        <ListItem
          key={item.id}
          item={item}
          remove={props.remove}
          update={props.update}
        />
      </div>
    );
  });

  return <ListGroup className="py-5">{listArr}</ListGroup>;
}

export default ListItems;
