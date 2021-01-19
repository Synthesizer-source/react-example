import React, { useState, useRef } from "react";
import { Form, Button, Row, Col, Container, Card } from "react-bootstrap";
import ListItem from "./ListItem";

function AddForm(props) {
  const nameInput = useRef();
  const lastNameInput = useRef();
  const eMailInput = useRef();
  const textAreaInput = useRef();

  const [id, setID] = useState(0);

  function submit() {
    const name = nameInput.current.value;
    const lastName = lastNameInput.current.value;
    const eMail = eMailInput.current.value;
    const textArea = textAreaInput.current.value;
    if (name && lastName && eMail && textArea) {
      setID(id + 1);
      return {
        id: id,
        name: name,
        lastName: lastName,
        eMail: eMail,
        textArea: textArea,
        date: Date().toString()
      };
    }
  }

  return (
    <div className="bg-dark text-muted py-5">
      <Container>
        <Form className="pt-5">
          <Form.Group controlID="fromNameSurname">
            <Row>
              <Col>
                <Form.Label>Name</Form.Label>
                <Form.Control ref={nameInput} placeholder="First name" />
              </Col>
              <Col>
                <Form.Label>Lastname</Form.Label>
                <Form.Control ref={lastNameInput} placeholder="Last name" />
              </Col>
            </Row>
          </Form.Group>
          <Form.Group controlId="formBasicEmail" className="pt-3">
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
          <Form.Group controlId="exampleForm.ControlTextarea1" className="pt-3">
            <Form.Label>Message</Form.Label>
            <Form.Control ref={textAreaInput} as="textarea" rows={3} />
          </Form.Group>
          <Button
            variant="primary"
            className="mt-3"
            onClick={() => {
              props.addContact(submit());
            }}
          >
            Submit
          </Button>
        </Form>
        <Row>
          <Col />
        </Row>
      </Container>
    </div>
  );
}

export default AddForm;
