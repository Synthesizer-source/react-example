import React, { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import LInstructor from "./Instructor/LInstructor";
import RInstructor from "./Instructor/RInstructor";
const DATA = [
  {
    name: "Bjarne Stroustrup",
    imgUrl:
      "//upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Bjarne-stroustrup_%28cropped%29.jpg/220px-Bjarne-stroustrup_%28cropped%29.jpg",
    context:
      "In 1979, Stroustrup began his career as a member of technical staff in the Computer Science Research Center of Bell Labs in Murray Hill, New Jersey, USA. There, he began his work on C++ and programming techniques. Stroustrup was the head of AT&T Bell Labs' Large-scale Programming Research department, from its creation until late 2002. In 1993, he was made a Bell Lab's fellow and in 1996, an AT&T Fellow.",
    style: {
      height: "300px",
      backgroundColor: "#294c60"
    }
  },
  {
    name: "James Gosling",
    imgUrl:
      "//upload.wikimedia.org/wikipedia/commons/thumb/1/14/James_Gosling_2008.jpg/220px-James_Gosling_2008.jpg",
    context:
      "Gosling was with Sun Microsystems between 1984 and 2010 (26 years). At Sun he invented an early Unix windowing system called NeWS, which became a lesser-used alternative to the still used X Window, because Sun did not give it an open source license.",
    style: {
      height: "200px",
      backgroundColor: "#e76f51"
    }
  },
  {
    name: "Guido van Rossum",
    imgUrl:
      "https://alchetron.com/cdn/guido-van-rossum-c37d26d7-eae4-462f-838a-98a68fa1a20-resize-750.jpeg",
    context:
      " He has worked for various research institutes, including the Centrum Wiskunde & Informatica (CWI) in the Netherlands, the U.S. National Institute of Standards and Technology (NIST), and the Corporation for National Research Initiatives (CNRI). From 2000 until 2003 he worked for Zope corporation. In 2003 Van Rossum left Zope for Elemental Security. While there he worked on a custom programming language for the organization.[18] From 2005 to December 2012, he worked at Google, where he spent half of his time developing the Python language. In January 2013, he started working for Dropbox.[19] In October 2019, Van Rossum officially retired before coming out of the retirement the following year to join Microsoft.",
    style: {
      height: "300px",
      backgroundColor: "#b56576"
    }
  }
];

function Instructors() {
  return (
    <div id="instructors" className="my-5">
      <h2 className="text-center text-white-50">INSTRUCTORS</h2>
      <div className="bg-bar mb-5" style={{ width: "100%", height: "2px" }} />
      <div className="offset-sm-0 offset-md-1">
        <div className="container-fluid bg-instructors p-5">
          <div className="row text-center text-light mb-5 mr-sm-0 mr-md-5 pr-sm-5">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>

          {DATA.map(function(item, index) {
            if (index % 2 == 0) {
              return <LInstructor item={item} />;
            } else {
              return <RInstructor item={item} />;
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default Instructors;
