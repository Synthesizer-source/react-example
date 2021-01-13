import React, { Component } from "react";
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
        <div className="row " />
        <div class="row">
          {cardImages.map(function(item, index) {
            let bg = getRandomColor(arr);
            arr = arr.filter(item => item !== bg);
            return (
              <div
                className="col-sm-12 col-md-6 col-lg-3 p-2 custom-card"
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
                    />
                    <p
                      className="text-gray"
                      style={{ marginTop: "auto", fontWeight: "600" }}
                    >
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

function Cards() {
  return (
    <div className="bg-dark">
      <CardsItems />
    </div>
  );
}

export default Cards;
