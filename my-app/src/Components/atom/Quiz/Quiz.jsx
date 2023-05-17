import React from "react";
import styles from "./Quiz.module.css";
export const Quiz = () => {
  return (
    <>
      <div className={`${styles["question-section"]}`}>
        <div className={`${styles["question-count"]}`}>
          <span>Question 1</span>
        </div>
        <div className={`${styles["question-text"]}`}>
          This is where the question text should go
        </div>
      </div>
      <div className={`${styles["answer-section"]}`}>
        <button>Answer 1</button>
        <button>Answer 2</button>
        <button>Answer 3</button>
        <button>Answer 4</button>
      </div>
    </>
  );
};
