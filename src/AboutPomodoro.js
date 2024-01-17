import React from "react";
import "./AboutPomodoro.css";

function AboutPomodoro() {
  return (
    <div className="aboutPomodoro ">
      <h3 className="text-center mb-5 dark-green">
        An online Pomodoro Timer to boost your productivity
      </h3>
      <div className="container">
        <strong className="fs-5 dark-green">
          What is the Pomodoro Technique?
        </strong>
        <div className="underliner mb-3"></div>
        Pomodoro Technique is a time management method developed by Francesco
        Cirillo in the late 1980s. It uses a timer to break work into intervals,
        typically 25 minutes in length, separated by short breaks. Each interval
        is known as a pomodoro, from the Italian word for tomato, after the
        tomato-shaped kitchen timer Cirillo used as a university student.
        Pomodoro technique increases productivity by taking short scheduled
        breaks regularly.
        <br />
        <a
          className="wikiLink"
          href="https://en.wikipedia.org/wiki/Pomodoro_Technique"
        >
          〜 Wikipedia
        </a>
      </div>
      <div className="container mt-4">
        <strong className="fs-5 dark-green">
          How to use the Pomodoro Timer?
        </strong>
        <div className="underliner mb-3"></div>
        <ul>
          <li>Decide on the task to be done </li>
          <li>Set the Pomodoro timer (typically for 25 minutes)</li>
          <li>Work on the task </li>
          <li>
            End work when the timer rings and take a short break (typically 5–10
            minutes)
          </li>
          <li>
            Go back to Step 2 and repeat until you complete four pomodoros.
          </li>
          <li>
            After four pomodoros are done, take a long break (typically 20 to 30
            minutes) instead of a short break. Once the long break is finished,
            return to step 2.
          </li>
        </ul>
      </div>
      <div className="mt-5 line"></div>
      <div className="text-center fs-2 mt-3 ">
        <a
          href="https://www.linkedin.com/in/yara-alhawari/"
          target="_blank"
          rel="noreferrer"
        >
          <i
            className="fa-brands fa-linkedin mx-1 reach"
            style={{ color: "#09322d" }}
          ></i>
        </a>{" "}
        <a href="https://github.com/Yara-AlH" target="_blank" rel="noreferrer">
          <i
            className="fa-brands fa-github mx-1 reach"
            style={{ color: "#09322d" }}
          ></i>
        </a>
      </div>
      <div className="text-center ">Made with 💚 by Yara</div>
    </div>
  );
}

export default AboutPomodoro;
