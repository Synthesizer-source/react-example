import React, { Component } from "react";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import Solution from "./Solution/Solution";
const SOLUTIONS = [
  { name: "BASIC", color: "#f15152", price: "29.99 $" },
  { name: "PREMIUM", color: "#4b8f8c", price: "59.99 $" },
  { name: "ULTIMATE", color: "#0c78c0", price: "109.99 $" }
];

function Solutions() {
  return (
    <div id="solutions">
      <h2 className="text-center text-white-50">SOLUTIONS</h2>
      <div className="bg-bar mb-5" style={{ width: "100%", height: "2px" }} />

      <Container>
        <Row className="text-center text-light mb-5">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Row>
        <Row>
          {SOLUTIONS.map(function(item, index) {
            return (
              <Col
                sm={12}
                md={4}
                className="text-center"
                style={{ backgroundColor: item.color, height: "100%" }}
              >
                <Solution item={item} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );

  // return (
  //   <div id="solutions">
  //     <h2 className="text-center text-white-50">SOLUTIONS</h2>
  //     <div className="bg-light mb-5" style={{ width: "100%", height: "2px" }} />

  //     <div className="container">
  //       <div className="row text-center text-light mb-5">
  //         <p>
  //           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  //           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
  //           ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
  //           aliquip ex ea commodo consequat. Duis aute irure dolor in
  //           reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
  //           pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
  //           culpa qui officia deserunt mollit anim id est laborum.
  //         </p>
  //       </div>
  //       <div className="row">
  //         <div
  //           className="col-sm-12 col-md-4 bg-primary text-center"
  //           style={{ height: "100%" }}
  //         >
  //           <div class="text-center bg-transparent">
  //             <div class="card-body bg-transparent">
  //               <h4 class="card-title">Solution One</h4>

  //               <p class="card-text">
  //                 With supporting text below as a natural lead-in to additional
  //                 content. With supporting text below as a natural lead-in to
  //                 additional content. With supporting text below as a natural
  //                 lead-in to additional content.
  //               </p>
  //               <a
  //                 href="#"
  //                 class="card-link text-light"
  //                 style={{ fontSize: "20px" }}
  //               >
  //                 View Details
  //               </a>
  //             </div>
  //           </div>
  //         </div>
  //         <div
  //           className="col-sm-12 col-md-4 bg-secondary text-center"
  //           style={{ height: "100%" }}
  //         >
  //           <div class="text-center bg-transparent">
  //             <div class="card-body bg-transparent">
  //               <h4 class="card-title">Solution One</h4>

  //               <p class="card-text">
  //                 With supporting text below as a natural lead-in to additional
  //                 content. With supporting text below as a natural lead-in to
  //                 additional content. With supporting text below as a natural
  //                 lead-in to additional content.
  //               </p>
  //               <a
  //                 href="#"
  //                 class="card-link text-light"
  //                 style={{ fontSize: "20px" }}
  //               >
  //                 View Details
  //               </a>
  //             </div>
  //           </div>
  //         </div>
  //         <div
  //           className="col-sm-12 col-md-4 bg-warning text-center"
  //           style={{ height: "100%" }}
  //         >
  //           <div class="text-center bg-transparent">
  //             <div class="card-body bg-transparent">
  //               <h4 class="card-title">Solution One</h4>

  //               <p class="card-text">
  //                 With supporting text below as a natural lead-in to additional
  //                 content. With supporting text below as a natural lead-in to
  //                 additional content. With supporting text below as a natural
  //                 lead-in to additional content.
  //               </p>
  //               <a
  //                 href="#"
  //                 class="card-link text-light"
  //                 style={{ fontSize: "20px" }}
  //               >
  //                 View Details
  //               </a>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
}

export default Solutions;
