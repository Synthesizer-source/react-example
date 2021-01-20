import React, { useState, useRef } from "react";
import { Form, Button, Row, Col, Accordion, Card } from "react-bootstrap";

function ListItem(props) {
  return (
    <Accordion>
      <Card>
        <CardHeader item={props.item} remove={props.remove} />
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <CardBody item={props.item} update={props.update} />
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}

function CardHeader(props) {
  return (
    <Card.Header>
      <span>{props.item.date}</span>
      <span className="offset-1">
        <b>{"ID : " + props.item.id}</b>
      </span>
      <Accordion.Toggle
        className="text-black offset-4"
        as={Button}
        variant="link"
        eventKey="0"
      >
        Show Details
      </Accordion.Toggle>
      <Button
        variant="danger"
        className="offset-1"
        onClick={() => props.remove(props.item)}
      >
        Delete
      </Button>
    </Card.Header>
  );
}

function CardBody(props) {
  const nameInput = useRef();
  const lastNameInput = useRef();
  const eMailInput = useRef();
  const textAreaInput = useRef();
  const [disable, setDisable] = useState(true);
  const [editButtonText, setEditButtonText] = useState("Edit");

  let js = "";
  function save() {
    const name = nameInput.current.value;
    const lastName = lastNameInput.current.value;
    const eMail = eMailInput.current.value;
    const textArea = textAreaInput.current.value;

    js = JSON.stringify({
      id: props.item.id,
      name: name,
      lastName: lastName,
      eMail: eMail,
      textArea: textArea,
      date: props.item.date
    });

    setEditButtonText("Edit");
    setDisable(true);
  }

  function edit(event) {
    let isDisable = disable;

    if (!isDisable) {
      setEditButtonText("Edit");
      nameInput.current.value = props.item.name;
      lastNameInput.current.value = props.item.lastName;
      eMailInput.current.value = props.item.eMail;
      textAreaInput.current.value = props.item.textArea;
    } else {
      setEditButtonText("Cancel");
    }

    setDisable(!isDisable);
  }

  return (
    <>
      <Form>
        <Form.Group controlID="fromNameSurname">
          <Row>
            <Col>
              <Form.Label>Name</Form.Label>
              <Form.Control
                ref={nameInput}
                defaultValue={props.item.name}
                placeholder="First name"
                disabled={disable}
              />
            </Col>
            <Col>
              <Form.Label>Lastname</Form.Label>
              <Form.Control
                ref={lastNameInput}
                defaultValue={props.item.lastName}
                placeholder="Last name"
                disabled={disable}
              />
            </Col>
          </Row>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            ref={eMailInput}
            defaultValue={props.item.eMail}
            type="email"
            placeholder="Enter email"
            disabled={disable}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Message</Form.Label>
          <Form.Control
            ref={textAreaInput}
            defaultValue={props.item.textArea}
            as="textarea"
            rows={3}
            disabled={disable}
          />
        </Form.Group>
        <Form.Group className="mt-3 d-flex justify-content-between">
          <Button
            variant="primary"
            disabled={disable}
            onClick={() => {
              save();
              props.update(js);
            }}
          >
            Save
          </Button>
          <Button variant="warning" onClick={edit}>
            {editButtonText}
          </Button>
        </Form.Group>
      </Form>
    </>
  );
}

export default ListItem;
