import React from "react";
import styles from "./Timer.module.css";
import { useState, useEffect } from "react";
export const Timer = ({ timeLeft, setTimeLeft }) => {
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(
        () => setTimeLeft((timeLeft) => timeLeft - 1),
        1000
      );
      //   autoChangeOue();
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);
  return (
    <>
      <div
        className={`d-flex justify-content-center align-items-center ${styles["timer"]}`}
      >
        <span>{timeLeft}</span>
      </div>
    </>
  );
};
