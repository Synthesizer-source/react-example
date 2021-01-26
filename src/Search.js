import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
  useHistory
} from "react-router-dom";
import { Image, Container } from "react-bootstrap";

function Search() {
  const location = useLocation();
  const history = useHistory();
  const params = new URLSearchParams(location.search);
  const q = params.get("q");

  return <h1>{q}</h1>;
}

export default Search;
