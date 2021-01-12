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
    <div class="container">
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
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
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
        <i>"Bjarne Stroustrup (2077)"</i>
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

export default function App() {
  return (
    <div className="bg-dark">
      <NavBar />
      <Carousel />
      <Cards />
      <About />
      <Footer />
    </div>
  );
}
