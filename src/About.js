import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

function About() {
  const [show, setShow] = useState(false);

  function handleClose() {
    setShow(false);
  }

  function handleShow() {
    setShow(true);
  }

  return (
    <div className="about">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>What is a Pomodoro timer?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <strong>About Pomodoro Technique 🍎</strong>
          <br />
          Pomodoro Technique is a time management method developed by Francesco
          Cirillo in the late 1980s. This technique use timer to break down
          works into a set of intervals separated by breaks. Pomodoro technique
          increases productivity by taking short scheduled breaks regularly.
          <br />
          <br />
          <strong>How to use Pomodoro timer</strong>
          <br />
          <ul>
            <li>Choose a task and work on it for 25 minutes </li>
            <li>After the 25 minutes session is over, take a 5 minute break</li>
            <li>Repeat </li>
            <li>After 4 Pomodoro sessions, take a 15 minutes long break</li>
            <li>Go back to step one and repeat</li>
          </ul>
        </Modal.Body>
      </Modal>

      <button
        className="btn btn-outline-secondary text-light"
        onClick={handleShow}
      >
        WHAT IS POMODORO?
      </button>
    </div>
  );
}

export default About;
