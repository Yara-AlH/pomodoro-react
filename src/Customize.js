import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { SettingsContext } from "./SettingsProvider.js";

function Customize() {
  const { setSettings } = React.useContext(SettingsContext);

  const [show, setShow] = useState(false);
  const [pomodoro, setPomodoro] = useState("");
  const [shortBreak, setShotBreak] = useState("");
  const [longBreak, setLongBreak] = useState("");

  function handleClose() {
    setShow(false);
  }

  function handleShow() {
    setShow(true);
  }

  function handleSaveButtonClick(event) {
    event.preventDefault();
    setSettings({
      pomodoro,
      shortBreak,
      longBreak,
    });

    handleClose();
  }

  return (
    <div className="customize">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Enter custome timer:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <label className="form-label fw-bold"> POMODORO</label>
            <input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
              value={pomodoro}
              onChange={(event) => {
                setPomodoro(event.target.value);
              }}
            ></input>
            <label className="form-label fw-bold mt-3"> SHORT BREAK</label>
            <input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
              value={shortBreak}
              onChange={(event) => {
                setShotBreak(event.target.value);
              }}
            ></input>
            <label className="form-label fw-bold mt-3"> LONG BREAK</label>
            <input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
              value={longBreak}
              onChange={(event) => {
                setLongBreak(event.target.value);
              }}
            ></input>
          </form>
          <button
            className="btn btn-secondary d-block ms-auto mt-4"
            onClick={handleSaveButtonClick}
          >
            SAVE
          </button>
        </Modal.Body>
      </Modal>

      <button
        className="btn btn-outline-secondary text-light"
        onClick={handleShow}
      >
        CUSTOMIZE
      </button>
    </div>
  );
}

export default Customize;
