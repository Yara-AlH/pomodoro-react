import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { SettingsContext } from "./SettingsProvider.js";
import "./Customize.css";

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

    if (!pomodoro.trim() || !shortBreak.trim() || !longBreak.trim()) {
      return;
    }

    setSettings({
      pomodoro,
      shortBreak,
      longBreak,
    });

    setPomodoro("");
    setShotBreak("");
    setLongBreak("");
    handleClose();
  }

  return (
    <div className="customize">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="fw-bold">Enter custome timer:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <label className="form-label fw-bold">POMODORO</label>
            <input
              type="text"
              required
              className="form-control"
              value={pomodoro}
              onChange={(event) => {
                setPomodoro(event.target.value);
              }}
            ></input>
            <label className="form-label fw-bold mt-3"> SHORT BREAK</label>
            <input
              type="text"
              required
              className="form-control"
              value={shortBreak}
              onChange={(event) => {
                setShotBreak(event.target.value);
              }}
            ></input>
            <label className="form-label fw-bold mt-3"> LONG BREAK</label>
            <input
              type="text"
              required
              className="form-control"
              value={longBreak}
              onChange={(event) => {
                setLongBreak(event.target.value);
              }}
            ></input>
            <button
              type="submit"
              className="btn btn-secondary d-block ms-auto mt-4"
              onClick={handleSaveButtonClick}
            >
              SAVE
            </button>
          </form>
        </Modal.Body>
      </Modal>

      <i className="fa-solid fa-gear customize" onClick={handleShow}></i>
    </div>
  );
}

export default Customize;
