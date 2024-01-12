import React from "react";
import "./SessionTracker.css";

function SessionTracker() {
  return (
    <div className="SessionTracker">
      <div className="row mt-5">
        <div className="col indicator ">
          <i class="fa-regular fa-circle fa-2xs me-2"></i>
        </div>
        <div className="col indicator ">
          <i class="fa-regular fa-circle fa-2xs mx-2"></i>
        </div>
        <div className="col indicator ">
          <i class="fa-regular fa-circle fa-2xs mx-2"></i>
        </div>
        <div className="col indicator ">
          <i class="fa-regular fa-circle fa-2xs ms-2"></i>
        </div>
      </div>
    </div>
  );
}

export default SessionTracker;
