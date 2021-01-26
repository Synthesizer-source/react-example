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
import { Form, Container, Row, Col, Button } from "react-bootstrap";
import Search from "../../Search";

function SearchBar() {
  let { path, url } = useRouteMatch();
  const inputValue = useRef();
  const history = useHistory();
  function handleSubmit() {
    history.push(`courses/search?q=${inputValue.current.value}`);
    // <Switch>
    //   <Route exact path={path}>
    //     <Search />
    //   </Route>
    // </Switch>;
  }

  return (
    <>
      <Form
        onSubmit={handleSubmit}
        className="mb-4 align-self-center mr-3"
        bg={"dark"}
      >
        <Form.Group controlid="fromNameSurname" className="mb-4">
          <Container fluid>
            <Row>
              <Col className="m-auto text-center" sm={4}>
                <Form.Label>Search</Form.Label>
                <Form.Control
                  name="q"
                  ref={inputValue}
                  placeholder="What do you want it ?"
                />
                <Button
                  variant="primary"
                  className=" my-3 w-100"
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
              </Col>
            </Row>
          </Container>
        </Form.Group>
      </Form>
    </>
  );
}

export default SearchBar;
