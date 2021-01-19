import React, { useState, useRef } from "react";
import { Form, Button, Row, Col, Accordion, Card } from "react-bootstrap";
import ListItem from "./components/Contact/ListItem";

export default function Contact() {
  const nameInput = useRef();
  const lastNameInput = useRef();
  const eMailInput = useRef();
  const textAreaInput = useRef();
  const [arr, setArr] = useState([]);
  const [id, setID] = useState(0);
  function submit(event) {
    event.preventDefault();
    const name = nameInput.current.value;
    const lastName = lastNameInput.current.value;
    const eMail = eMailInput.current.value;
    const textArea = textAreaInput.current.value;
    if (name) {
      setArr([
        ...arr,
        {
          id: id,
          name: name,
          lastName: lastName,
          eMail: eMail,
          textArea: textArea,
          date: Date().toString()
        }
      ]);
      setID(id + 1);
    }
  }

  function remove(event) {
    const itemID = event.target.value;
    console.log(itemID);
    if (itemID > -1) {
      setArr([
        ...arr.filter(function(item) {
          return item.id != itemID;
        })
      ]);
    }
  }

  function edit(event) {
    console.log(arr);
  }

  function handleUpdate(param) {
    const updatedItem = JSON.parse(param);
    let arrX = arr.slice();
    arrX.map(function(item, index) {
      if (item.id === updatedItem.id) {
        item.name = updatedItem.name;
        item.lastName = updatedItem.lastName;
        item.eMail = updatedItem.eMail;
        item.textArea = updatedItem.textArea;
      }
    });

    setArr([...arrX]);

    console.log(arr);
  }

  return (
    <div className="bg-light">
      <h2>Contact</h2>
      <Form>
        <Form.Group controlID="fromNameSurname">
          <Row>
            <Col>
              <Form.Control ref={nameInput} placeholder="First name" />
            </Col>
            <Col>
              <Form.Control ref={lastNameInput} placeholder="Last name" />
            </Col>
          </Row>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            ref={eMailInput}
            type="email"
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control ref={textAreaInput} as="textarea" rows={3} />
        </Form.Group>
        <Button variant="primary" onClick={submit}>
          Submit
        </Button>
      </Form>
      <Row>
        <Col>
          {arr.map(function(item, index) {
            return (
              <ListItem
                key={index}
                item={item}
                index={index}
                remove={remove}
                edit={edit}
                update={handleUpdate}
              />
            );
          })}
        </Col>
      </Row>
    </div>
  );
}
