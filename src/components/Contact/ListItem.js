import React, { useState, useRef } from "react";
import { Form, Button, Row, Col, Accordion, Card } from "react-bootstrap";

function ListItem(props) {
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
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <EditContainer item={props.item} update={props.update} />
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}

function EditContainer(props) {
  console.log(props.item);
  let js = "";
  const nameInput = useRef();
  const lastNameInput = useRef();
  const eMailInput = useRef();
  const textAreaInput = useRef();
  const [disable, setDisable] = useState(true);
  const [editButtonText, setEditButtonText] = useState("Edit");

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
              <Form.Control
                ref={nameInput}
                defaultValue={props.item.name}
                placeholder="First name"
                disabled={disable}
              />
            </Col>
            <Col>
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
          <Form.Label>Example textarea</Form.Label>
          <Form.Control
            ref={textAreaInput}
            defaultValue={props.item.textArea}
            as="textarea"
            rows={3}
            disabled={disable}
          />
        </Form.Group>
        <Button
          variant="primary"
          onClick={() => {
            save();
            props.update(js);
          }}
        >
          Save
        </Button>
        <Button variant="primary" onClick={edit}>
          {editButtonText}
        </Button>
      </Form>
    </>
  );
}

export default ListItem;
