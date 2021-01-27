import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NotFound from "./NotFound";
import { links } from "./data/links.js";

export default function App() {
  const routeMaps = links.map((item, index) => (
    <Route
      key={index}
      path={item.link}
      exact={item.isExact}
      component={item.component}
    />
  ));
  return (
    <Router>
      <Switch>
        {routeMaps}
        <Route path="/404" component={NotFound} />
        <Route path="*">
          <Redirect to={"/404"} />
        </Route>
      </Switch>
    </Router>
  );
}
