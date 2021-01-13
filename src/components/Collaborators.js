import React, { Component } from "react";

const COLLABORATORS = [
  {
    name: "Microsoft",
    url: "https://www.microsoft.com/tr-tr",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/1920px-Microsoft_logo_%282012%29.svg.png"
  },
  {
    name: "Tesla",
    url: "https://www.tesla.com/",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Tesla_Motors.svg/800px-Tesla_Motors.svg.png"
  },
  {
    name: "Intel",
    url: "https://www.intel.com.tr/content/www/tr/tr/homepage.html",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Intel_logo_%282006%29.svg/166px-Intel_logo_%282006%29.svg.png"
  },
  {
    name: "Oracle",
    url: "https://www.oracle.com/index.html",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/1920px-Oracle_logo.svg.png"
  },
  {
    name: "Google",
    url: "https://about.google/",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1920px-Google_2015_logo.svg.png"
  },
  {
    name: "IBM",
    url: "https://www.ibm.com/tr-tr",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/1280px-IBM_logo.svg.png"
  }
];

function Collaborators() {
  return (
    <div id="collaborators" className="my-5">
      <h2 className="text-center text-white-50">COLLABORATORS</h2>
      <div className="container">
        <div className="bg-bar mb-5" style={{ width: "100%", height: "2px" }} />
        <div className="row">
          {COLLABORATORS.map(function(item, index) {
            return (
              <div className="col-sm-2 col-md-2 mx-auto mt-5">
                <a href={item.url}>
                  <img
                    src={item.imgUrl}
                    className="d-block img-fluid w-50 m-auto"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Collaborators;
