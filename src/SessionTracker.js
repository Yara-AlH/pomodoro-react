import React from "react";
import "./SessionTracker.css";

function SessionTracker(props) {
  const currentBreakNumber = props.breakNumber;
  const totalNumberOfBreaks = 4;
  let breaks = [];

  for (let i = 0; i < totalNumberOfBreaks; i++) {
    const isChecked = i < currentBreakNumber;

    breaks.push(
      <div className="col indicator ">
        <i
          className={`${
            isChecked
              ? "fa-regular fa-circle-check fa-2xs me-2"
              : "fa-regular fa-circle fa-2xs me-2"
          }`}
        ></i>
      </div>
    );
  }
  return (
    <div className="SessionTracker">
      <div className="row mt-5">{breaks}</div>
    </div>
  );
}

export default SessionTracker;
