import React, { useEffect, useState, useRef } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
  useHistory
} from "react-router-dom";
import courses from "./data/courses.json";
import Course from "./components/Course/Course";
import { Image, Container, Row, Col } from "react-bootstrap";

function Search() {
  const location = useLocation();
  const history = useHistory();
  const params = new URLSearchParams(location.search);
  const q = params.get("q");
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    if (q) {
      const productResults = courses.courses
        .filter(item => item.title.toLowerCase().includes(q.toLowerCase()))
        .map(item => (
          <Col sm={4} className="mb-3">
            <Course key={item.id} item={item} />
          </Col>
        ));

      setSearchResult(productResults);
    }
  }, [q]);

  return (
    <>
      <Container>
        <Row>{searchResult}</Row>
      </Container>
    </>
  );
}

export default Search;
