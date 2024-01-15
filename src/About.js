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
          Cirillo in the late 1980s. It uses a timer to break work into
          intervals, typically 25 minutes in length, separated by short breaks.
          Each interval is known as a pomodoro, from the Italian word for
          tomato, after the tomato-shaped kitchen timer Cirillo used as a
          university student. Pomodoro technique increases productivity by
          taking short scheduled breaks regularly.
          <br />
          <br />
          <strong>How to use Pomodoro timer</strong>
          <br />
          <ul>
            <li>Decide on the task to be done </li>
            <li>Set the Pomodoro timer (typically for 25 minutes)</li>
            <li>Work on the task </li>
            <li>
              End work when the timer rings and take a short break (typically
              5–10 minutes)
            </li>
            <li>
              Go back to Step 2 and repeat until you complete four pomodoros.
            </li>
            <li>
              After four pomodoros are done, take a long break (typically 20 to
              30 minutes) instead of a short break.
              <br />
              Once the long break is finished, return to step 2.
            </li>
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
