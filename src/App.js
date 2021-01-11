import React from "react";
import "./style.css";
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

export default function App() {
  return (
    <div>
      <NavBar />
      <Carousel />
    </div>
  );
}
