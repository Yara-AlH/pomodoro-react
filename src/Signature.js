import React from "react";
import "./Signature.css";

function Signature() {
  return (
    <div className="signature ms-5">
      <div>
        React Pomodoro timer by{" "}
        <a
          className="my-name"
          href="https://github.com/Yara-AlH"
          target="_blank "
        >
          Yara
        </a>
      </div>
    </div>
  );
}

export default Signature;
