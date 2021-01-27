import React, { useRef } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
  useHistory
} from "react-router-dom";
import {
  Form,
  Container,
  Row,
  Col,
  Button,
  Dropdown,
  InputGroup
} from "react-bootstrap";
import Search from "../../Search";

const DD_OPTIONS = ["Option 1", "Option 2", "Option 3"];

function SearchBar() {
  let { path, url } = useRouteMatch();
  const inputValue = useRef();
  const history = useHistory();
  function handleSubmit() {
    history.push(`/courses/search?q=${inputValue.current.value}`);
  }

  const dropdownOptions = DD_OPTIONS.map(item => (
    <Dropdown.Item>{item}</Dropdown.Item>
  ));

  return (
    <div>
      <Form
        onSubmit={handleSubmit}
        className="my-5 align-self-center mr-3"
        bg={"dark"}
      >
        <Form.Group controlid="fromNameSurname">
          <Container fluid>
            <Row>
              <Col sm={4}>
                <Dropdown className="text-center my-3 ml-md-5 w-100">
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Dropdown Button
                  </Dropdown.Toggle>

                  <Dropdown.Menu>{dropdownOptions}</Dropdown.Menu>
                </Dropdown>
              </Col>
              <Col className=" text-center" sm={4}>
                <Form.Control
                  name="q"
                  ref={inputValue}
                  placeholder="What do you want it ?"
                />
                <Button
                  variant="secondary"
                  className=" my-3 w-100"
                  onClick={handleSubmit}
                >
                  Search
                </Button>
              </Col>
            </Row>
          </Container>
        </Form.Group>
      </Form>
    </div>
  );
}

export default SearchBar;
