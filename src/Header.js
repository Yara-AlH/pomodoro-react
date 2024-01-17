import React from "react";
import Customize from "./Customize.js";

function Header() {
  return (
    <div className="header">
      <div className="container text-center">
        <div className="col-lg-8text-center ">
          <div className="btn mx-3 ">
            <Customize />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
