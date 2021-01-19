import React, { useState, useRef } from "react";
import { Form, Button, Row, Col, Accordion, Card } from "react-bootstrap";

function ListItem(props) {
  const cardBody = useRef();

  function edit(event) {
    console.log(event.target.value);
  }

  return (
    <Accordion>
      <Card key={props.index}>
        <Card.Header>
          <span>{props.item.date + " " + "ID : " + props.item.name}</span>
          <Accordion.Toggle as={Button} variant="link" eventKey="0">
            Click me!
          </Accordion.Toggle>
          <Button
            variant="warning"
            value={props.item.id}
            onClick={props.remove}
          >
            Delete
          </Button>
          <Button variant="danger" onClick={edit}>
            Edit
          </Button>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body ref={cardBody}>
            <EditContainer
              item={props.item}
              save={props.edit}
              update={props.update}
            />
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}

function BasicContainer(props) {
  return <>{props.textArea}</>;
}

function EditContainer(props) {
  let item = props.item;
  let js = "";
  const nameInput = useRef();
  const lastNameInput = useRef();
  const eMailInput = useRef();
  const textAreaInput = useRef();

  function Save() {
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
  }

  return (
    <>
      <Form>
        <Form.Group controlID="fromNameSurname">
          <Row>
            <Col>
              <Form.Control
                ref={nameInput}
                defaultValue={item.name}
                placeholder="First name"
              />
            </Col>
            <Col>
              <Form.Control
                ref={lastNameInput}
                defaultValue={item.lastName}
                placeholder="Last name"
              />
            </Col>
          </Row>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            ref={eMailInput}
            defaultValue={item.eMail}
            type="email"
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control
            ref={textAreaInput}
            defaultValue={item.textArea}
            as="textarea"
            rows={3}
            readOnly={true}
          />
        </Form.Group>
        <Button
          variant="primary"
          onClick={() => {
            Save();
            props.update(js);
          }}
        >
          Save
        </Button>
        <Button variant="primary" onClick={Save}>
          Temp
        </Button>
      </Form>
    </>
  );
}

export default ListItem;
