import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import { Form, Container, Row, Col, Button } from "react-bootstrap";
import Search from "../../Search";

function SearchBar() {
  let { path, url } = useRouteMatch();
  function handleSubmit() {
    // <Switch>
    //   <Route exact path={path}>
    //     <Search />
    //   </Route>
    // </Switch>;
  }

  return (
    <>
      <Form sm={{ offset: 5 }}>
        <Form.Group controlid="fromNameSurname">
          <Row>
            <Col sm={(6, { span: 3, offset: 3 })}>
              <Form.Label>Search</Form.Label>
              <Form.Control placeholder="What do you want it ?" />
            </Col>
          </Row>
          <Link to={`${url}/search`}>
            <Button variant="primary" className="mt-3" onClick={handleSubmit}>
              Submit
            </Button>
          </Link>
        </Form.Group>
      </Form>
    </>
  );
}

export default SearchBar;
