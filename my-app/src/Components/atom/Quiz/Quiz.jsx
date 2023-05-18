import React, { useState, useEffect } from "react";
import styles from "./Quiz.module.css";
import { Timer } from "C:/Users/tshub/Desktop/react/my-app/src/Components/atom/Timer/Timer";
export const Quiz = (props) => {
  const [correctOptions, setcorrectOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [next, setNext] = useState(0);
  const [count, setCount] = useState(0);
  const [start, setStart] = useState("start");
  const [timeLeft, setTimeLeft] = useState(null);
  const [autoChangeOuestion, setAutoChangeOuestion] = useState(null);

  useEffect(() => {
    if (next === questions.length) {
      score();
    }
  }, [next]);

  let questions = props.data;

  const handleClick = () => {
    if (next < questions.length) {
      setNext(next + 1);
      setSelectedOption(null);
      setTimeLeft(30);
    }
  };

  const handleStartClick = () => {
    setStart("stop");
    let timeOut = setTimeout(() => {
      setTimeLeft(30);
    }, 1000);
    return () => clearTimeout(timeOut);
  };

  const handleOptionSelect = (id) => {
    setSelectedOption(Number(id));
    let answer = questions[next].answerOptions.filter(
      (item, index) => index === Number(id)
    );
    if (answer[0].isCorrect === true) {
      setcorrectOptions([...correctOptions, answer[0]]);
    }
  };

  const score = () => {
    correctOptions.forEach((answer, index) => {
      if (answer.isCorrect === true) {
        setCount((count) => count + 1);
      }
    });
  };

  return (
    <>
      {next === questions.length && (
        <div className={`${styles["score-section"]}`}>
          You scored {count} out of {questions.length}
        </div>
      )}
      {start === "start" && (
        <div className={`${styles["score-section"]}`}>
          <button className="btn btn-outline-light" onClick={handleStartClick}>
            Start Quiz
          </button>
        </div>
      )}
      {next < questions.length && start === "stop" && (
        <>
          <div className={`${styles["question-section"]}`}>
            <div className={`${styles["question-count"]}`}>
              <span>
                Question{" "}
                {next + 1 > questions.length ? questions.length : next + 1}/
                {questions.length}
              </span>
            </div>
            <div className={`${styles["question-text"]}`}>
              {questions[next] && questions[next].questionText}
            </div>
            <Timer timeLeft={timeLeft} setTimeLeft={setTimeLeft} />
          </div>
          <div
            className="d-flex justify-content-center align-items-center flex-column"
            style={{ width: "100%" }}
          >
            <div className={`${styles["answer-section"]}`}>
              {questions[next] &&
                questions[next].answerOptions.map((ans, index) => (
                  // <button key={index} id={index} onClick={handleOptionClick}>
                  //   {ans.answerText}
                  // </button>
                  <div
                    key={index}
                    className={`${styles["radio-button"]}`}
                    onClick={() => handleOptionSelect(index)}
                  >
                    <input
                      type="radio"
                      id={index}
                      checked={selectedOption === index}
                      onChange={() => handleOptionSelect(index)}
                    />
                    <label
                      htmlFor={index}
                      onClick={() => handleOptionSelect(index)}
                    >
                      {ans.answerText}{" "}
                    </label>
                  </div>
                ))}
            </div>

            <button className="btn btn-outline-light" onClick={handleClick}>
              Next
            </button>
          </div>
        </>
      )}
    </>
  );
};
