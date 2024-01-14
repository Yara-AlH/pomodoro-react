import React from "react";
import About from "./About.js";
import Customize from "./Customize.js";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="container text-center">
        <div className="row mt-3">
          <div className="col-lg-8text-center ">
            <div className="btn mx-3 ">
              <Customize />
            </div>
            <div className="btn mx-3 ">
              <About />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
