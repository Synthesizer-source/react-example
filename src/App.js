import React, { Component } from "react";

import "./style.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const navItems = ["Home", "Products", "About", "Contact"];
const carouselUrls = [
  "https://picsum.photos/id/12/1200/340?grayscale",
  "https://picsum.photos/id/13/1200/340?grayscale",
  "https://picsum.photos/id/12/1200/340?grayscale",
  "https://picsum.photos/id/13/1200/340?grayscale",
  "https://picsum.photos/id/12/1200/340?grayscale",
  "https://picsum.photos/id/13/1200/340?grayscale",
  "https://picsum.photos/id/14/1200/340?grayscale"
];

const cardImages = [
  "//upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/150px-ISO_C%2B%2B_Logo.svg.png",
  "//upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/70px-Unofficial_JavaScript_logo_2.svg.png",
  "//upload.wikimedia.org/wikipedia/tr/thumb/2/2e/Java_Logo.svg/140px-Java_Logo.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/110px-Python-logo-notext.svg.png"
];

const colorValues = ["lightblue", "teal", "coral", "purple"];
function getRandomColor(colorValues) {
  return colorValues[Math.floor(Math.random() * colorValues.length)];
}

function NavBarItems(index) {
  return navItems.map(item => (
    <li class="nav-item active">
      <a class="nav-link" href="#">
        {item}
      </a>
    </li>
  ));
}

function NavBar() {
  return (
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
      <ul class="navbar-nav">
        <NavBarItems />
      </ul>
    </nav>
  );
}

function CarouselItems() {
  return carouselUrls.map(function(item, index) {
    let carouselItemClass =
      index > 0 ? "carousel-item" : "carousel-item active";

    return (
      <div class={carouselItemClass}>
        <img src={item} class="d-block w-100" alt="..." />
      </div>
    );
  });
}

function CarouselIndicators() {
  return carouselUrls.map(function(item, index) {
    return (
      <li
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to={index}
        class={index == 0 ? "active" : ""}
        style={{ width: "18%", height: "12%", border: "2px solid gray" }}
      >
        <img src={item} class="d-block w-100 h-100" />
      </li>
    );
  });
}

function Carousel() {
  return (
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="bg-dark">
        <div class="container bg-dark">
          <div class="carousel-inner">
            <CarouselItems />
          </div>
        </div>
      </div>

      <div class="bg-dark" style={{ width: "100%", height: "50px" }}>
        <ol class="carousel-indicators">
          <CarouselIndicators />
        </ol>
      </div>
    </div>
  );
}

function CardsItems() {
  // <div
  //           key={index}
  //           className="col-sm-12 col-md-6 col-lg-3 p-2 bg-warning w-100"
  //         >
  //           <div key={index} className="card">
  //             <img
  //               src={item}
  //               className="card-img-top mt-3 mx-auto"
  //               alt="..."
  //               style={{
  //                 width: "100px",
  //                 height: "100px",
  //                 borderRadius: "50%"
  //               }}
  //             />
  //             <div className="card-body">
  //               <p className="card-text">
  //                 Some quick example text to build on the card title and make up
  //                 the bulk of the card's content.
  //               </p>
  //             </div>
  //           </div>
  //         </div>;
  let arr = colorValues.slice();
  return (
    <div id="cards" className="my-5">
      <div class="container">
        <div className="row text-center text-light mb-5">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div class="row">
          {cardImages.map(function(item, index) {
            let bg = getRandomColor(arr);
            arr = arr.filter(item => item !== bg);
            return (
              <div
                className="col-sm-12 col-md-6 col-lg-3 p-2"
                style={{ backgroundColor: bg }}
              >
                <div className="bg-transparent">
                  <div
                    className="container"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      height: "350px"
                    }}
                  >
                    <img
                      src={item}
                      className="card-img-top d-block m-auto"
                      alt="..."
                      style={{ width: "120px" }}
                    />
                    <p className="text-gray" style={{ marginTop: "auto" }}>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function CarouselTemplate() {
  return (
    <div
      id="carouselExampleIndicators"
      class="carousel slide mb-5"
      data-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          class="active"
        />
        <li data-target="#carouselExampleIndicators" data-slide-to="1" />
        <li data-target="#carouselExampleIndicators" data-slide-to="2" />
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="https://picsum.photos/id/12/1200/340?grayscale"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://picsum.photos/id/13/1200/340?grayscale"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://picsum.photos/id/14/1200/340?grayscale"
            class="d-block w-100"
            alt="..."
          />
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true" />
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true" />
        <span class="sr-only">Next</span>
      </a>
    </div>
  );
}

// function Cards() {
//   return (
//     <div className="bg-dark">
//       <div className="container">
//         <div className="row">
//           <div className="col-sm-12 col-md-6 col-lg-3 p-2 bg-warning">
//             <div className="card">
//               <img
//                 src="https://picsum.photos/id/13/1200/340?grayscale"
//                 className="card-img-top mt-3 mx-auto"
//                 alt="..."
//                 style={{
//                   width: "100px",
//                   height: "100px",
//                   borderRadius: "50%"
//                 }}
//               />
//               <div className="card-body">
//                 <p className="card-text">
//                   Some quick example text to build on the card title and make up
//                   the bulk of the card's content.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="col-sm-12 col-md-6 col-lg-3 p-2 bg-warning">
//             <div className="card">
//               <img
//                 src="https://picsum.photos/id/13/1200/340?grayscale"
//                 className="card-img-top mt-3 mx-auto"
//                 alt="..."
//                 style={{
//                   width: "100px",
//                   height: "100px",
//                   borderRadius: "50%"
//                 }}
//               />
//               <div className="card-body">
//                 <p className="card-text">
//                   Some quick example text to build on the card title and make up
//                   the bulk of the card's content.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="col-sm-12 col-md-6 col-lg-3 p-2 bg-warning">
//             <div className="card">
//               <img
//                 src="https://picsum.photos/id/13/1200/340?grayscale"
//                 className="card-img-top mt-3 mx-auto"
//                 alt="..."
//                 style={{
//                   width: "100px",
//                   height: "100px",
//                   borderRadius: "50%"
//                 }}
//               />
//               <div className="card-body">
//                 <p className="card-text">
//                   Some quick example text to build on the card title and make up
//                   the bulk of the card's content.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="col-sm-12 col-md-6 col-lg-3 p-2 bg-warning">
//             <div className="card">
//               <img
//                 src="https://picsum.photos/id/13/1200/340?grayscale"
//                 className="card-img-top mt-3 mx-auto"
//                 alt="..."
//                 style={{
//                   width: "100px",
//                   height: "100px",
//                   borderRadius: "50%"
//                 }}
//               />
//               <div className="card-body">
//                 <p className="card-text">
//                   Some quick example text to build on the card title and make up
//                   the bulk of the card's content.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

function Cards() {
  return (
    <div className="bg-dark">
      <CardsItems />
    </div>
  );
}

function About() {
  return (
    <div className="container p-5 text-light text-center">
      <h2>About</h2>
      <p className="mx-5">
        <q>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </q>
      </p>
      <p>
        <i className="blockquote-footer">"Bjarne Stroustrup (2077)"</i>
      </p>
    </div>
  );
}

function Footer() {
  return (
    <footer class="mt-5 bg-dark text-muted text-center text-small">
      <p class="mt-2">© 2017–2020 Company Name</p>
      <ul class="list-inline">
        <li class="list-inline-item">
          <a href="#">Privacy</a>
        </li>
        <li class="list-inline-item">
          <a href="#">Terms</a>
        </li>
        <li class="list-inline-item">
          <a href="#">Support</a>
        </li>
      </ul>
    </footer>
  );
}
function Instructors() {
  let color = colorValues[1];
  return (
    <div id="partners" className="my-5">
      <h2 className="text-center text-white-50">INSTRUCTORS</h2>
      <div className="bg-light mb-5" style={{ width: "100%", height: "2px" }} />
      <div className="container">
        <div className="row text-center text-light mb-5">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="row my-2">
          <div
            className="col-sm-12 col-md-2 p-2"
            style={{ backgroundColor: color }}
          >
            <img
              src="//upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Bjarne-stroustrup_%28cropped%29.jpg/220px-Bjarne-stroustrup_%28cropped%29.jpg"
              className="img-fluid d-block m-auto"
              style={{ height: "300px" }}
              alt="..."
            />
          </div>
          <div
            className="col-sm-12 col-md-8 text-light text-center p-2"
            style={{ backgroundColor: color }}
          >
            <h4 className="mb-4">Bjorne Stroustrup</h4>
            <p>
              In 1979, Stroustrup began his career as a member of technical
              staff in the Computer Science Research Center of Bell Labs in
              Murray Hill, New Jersey, USA. There, he began his work on C++ and
              programming techniques. Stroustrup was the head of AT&T Bell Labs'
              Large-scale Programming Research department, from its creation
              until late 2002. In 1993, he was made a Bell Lab's fellow and in
              1996, an AT&T Fellow.
            </p>
          </div>
          <div className="col-2" />
        </div>
        <div className="row my-2">
          <div className="col-2" />
          <div
            className="col-sm-12 order-2 col-md-8 order-md-1 col-sm-pull text-light text-center p-2"
            style={{ backgroundColor: color }}
          >
            <h4 className="mb-4">James Gosling</h4>
            <p>
              Gosling was with Sun Microsystems between 1984 and 2010 (26
              years). At Sun he invented an early Unix windowing system called
              NeWS, which became a lesser-used alternative to the still used X
              Window, because Sun did not give it an open source license.
            </p>
          </div>
          <div
            className="col-sm-12 order-1 col-md-2 order-md-2 p-2"
            style={{ backgroundColor: color }}
          >
            <img
              src="//upload.wikimedia.org/wikipedia/commons/thumb/1/14/James_Gosling_2008.jpg/220px-James_Gosling_2008.jpg"
              className="img-fluid d-block m-auto"
              style={{ height: "200px" }}
              alt="..."
            />{" "}
          </div>
        </div>
        <div className="row my-2">
          <div
            className="col-sm-12 col-md-2 p-2"
            style={{ backgroundColor: color }}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Guido_van_Rossum_at_Google_IO_2008.jpg/320px-Guido_van_Rossum_at_Google_IO_2008.jpg"
              className="img-fluid d-block m-auto"
              style={{ height: "300px" }}
              alt="..."
            />
          </div>
          <div
            className="col-sm-12 col-md-8 text-light text-center p-2"
            style={{ backgroundColor: color }}
          >
            <h4 className="mb-4">Guido van Rossum</h4>
            <p>
              He has worked for various research institutes, including the
              Centrum Wiskunde & Informatica (CWI) in the Netherlands, the U.S.
              National Institute of Standards and Technology (NIST), and the
              Corporation for National Research Initiatives (CNRI). From 2000
              until 2003 he worked for Zope corporation. In 2003 Van Rossum left
              Zope for Elemental Security. While there he worked on a custom
              programming language for the organization.[18] From 2005 to
              December 2012, he worked at Google, where he spent half of his
              time developing the Python language. In January 2013, he started
              working for Dropbox.[19] In October 2019, Van Rossum officially
              retired before coming out of the retirement the following year to
              join Microsoft.
            </p>
          </div>
          <div className="col-2" />
        </div>
      </div>
    </div>
  );
}

function Products() {
  return (
    <div id="solutions">
      <h2 className="text-center text-white-50">SOLUTIONS</h2>
      <div className="bg-light mb-5" style={{ width: "100%", height: "2px" }} />

      <div className="container">
        <div className="row text-center text-light mb-5">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="row">
          <div
            className="col-sm-12 col-md-4 bg-primary text-center"
            style={{ height: "100%" }}
          >
            <div class="text-center bg-transparent">
              <div class="card-body bg-transparent">
                <h4 class="card-title">Solution One</h4>

                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content. With supporting text below as a natural lead-in to
                  additional content. With supporting text below as a natural
                  lead-in to additional content.
                </p>
                <a
                  href="#"
                  class="card-link text-light"
                  style={{ fontSize: "20px" }}
                >
                  View Details
                </a>
              </div>
            </div>
          </div>
          <div
            className="col-sm-12 col-md-4 bg-secondary text-center"
            style={{ height: "100%" }}
          >
            <div class="text-center bg-transparent">
              <div class="card-body bg-transparent">
                <h4 class="card-title">Solution One</h4>

                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content. With supporting text below as a natural lead-in to
                  additional content. With supporting text below as a natural
                  lead-in to additional content.
                </p>
                <a
                  href="#"
                  class="card-link text-light"
                  style={{ fontSize: "20px" }}
                >
                  View Details
                </a>
              </div>
            </div>
          </div>
          <div
            className="col-sm-12 col-md-4 bg-warning text-center"
            style={{ height: "100%" }}
          >
            <div class="text-center bg-transparent">
              <div class="card-body bg-transparent">
                <h4 class="card-title">Solution One</h4>

                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content. With supporting text below as a natural lead-in to
                  additional content. With supporting text below as a natural
                  lead-in to additional content.
                </p>
                <a
                  href="#"
                  class="card-link text-light"
                  style={{ fontSize: "20px" }}
                >
                  View Details
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Partners() {
  return (
    <div id="partners" className="my-5">
      <h2 className="text-center text-white-50">PARTNERS</h2>
      <div className="bg-light mb-5" style={{ width: "100%", height: "2px" }} />

      <div className="container">
        <div className="row">
          <div
            className="col-sm-2 col-md-2"
            style={{ width: "100px", height: "50px" }}
          >
            <div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/1920px-Microsoft_logo_%282012%29.svg.png"
                className="d-block img-fluid w-50 m-auto p-auto"
              />
            </div>
          </div>
          <div
            className="col-sm-2 col-md-2"
            style={{ width: "100px", height: "50px" }}
          >
            <div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Tesla_Motors.svg/800px-Tesla_Motors.svg.png"
                className="d-block img-fluid w-25 m-auto p-auto"
              />
            </div>
          </div>
          <div
            className="col-sm-2 col-md-2"
            style={{ width: "100px", height: "50px" }}
          >
            <div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Intel_logo_%282006%29.svg/166px-Intel_logo_%282006%29.svg.png"
                className="d-block img-fluid w-50 m-auto  p-auto"
              />
            </div>
          </div>
          <div
            className="col-sm-2 col-md-2"
            style={{ width: "100px", height: "50px" }}
          >
            <div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/1920px-Oracle_logo.svg.png"
                className="d-block img-fluid w-75 m-auto p-auto"
              />
            </div>
          </div>
          <div
            className="col-sm-2 col-md-2"
            style={{ width: "100px", height: "50px" }}
          >
            <div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1920px-Google_2015_logo.svg.png"
                className="d-block img-fluid w-50 m-auto p-auto"
              />
            </div>
          </div>
          <div
            className="col-sm-2 col-md-2"
            style={{ width: "100px", height: "50px" }}
          >
            <div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/1280px-IBM_logo.svg.png"
                className="d-block img-fluid w-50 m-auto p-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="bg-dark">
      <NavBar />
      <CarouselTemplate />
      <Cards />
      <About />
      <Instructors />
      <Products />
      <Partners />
      <Footer />
    </div>
  );
}
