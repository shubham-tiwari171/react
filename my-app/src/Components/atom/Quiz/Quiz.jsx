import React, { useState, useEffect } from "react";
import styles from "./Quiz.module.css";

export const Quiz = (props) => {
  const [correctOptions, setcorrectOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [next, setNext] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (next === questions.length) {
      score();
    }
  }, [next]);

  let questions = props.data;
  console.log(questions.length);

  const handleClick = () => {
    if (next < questions.length) {
      setNext(next + 1);
      setSelectedOption(null);
    }
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

      {next < questions.length && (
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
