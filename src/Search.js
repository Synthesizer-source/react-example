import React, { useEffect, useState, useRef } from "react";
import { useLocation, useHistory } from "react-router-dom";
import courses from "./data/courses.json";
import Course from "./components/Course/Course";
import { Container, Row, Col } from "react-bootstrap";
import NavBar from "./components/NavBar/NavBar";
import SearchBar from "./components/Search/SearchBar";
function Search() {
  const location = useLocation();
  const history = useHistory();
  const params = new URLSearchParams(location.search);
  const q = params.get("q");
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    if (q) {
      console.log(q);
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
    <div className="bg-dark" style={{ minHeight: "100vh" }}>
      <NavBar />
      <div style={{ height: "50px" }} />
      <SearchBar />
      <Container className="mt-5">
        <Row>{searchResult}</Row>
      </Container>
    </div>
  );
}

export default Search;
