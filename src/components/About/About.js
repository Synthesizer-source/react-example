import React, { Component } from "react";

function About() {
  return (
    <div id="about" className="bg-about">
      <div className="container p-5 text-light text-center">
        <div className="ml-5">
          <h2>About</h2>
          <p className="mx-5">
            <q>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </q>
          </p>
          <p>
            <i
              className="blockquote-footer text-dark"
              style={{ fontWeight: "700" }}
            >
              "Bjarne Stroustrup (2077)"
            </i>
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
