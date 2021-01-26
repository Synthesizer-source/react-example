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
import { Image, Container } from "react-bootstrap";

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
          <li key={item.id} class="list-group-item">
            <Link to={`/courses/${item.id}`}>{item.title}</Link>
          </li>
        ));

      setSearchResult(productResults);
    }
  }, [q]);
  return <ul>{searchResult}</ul>;
}

export default Search;
