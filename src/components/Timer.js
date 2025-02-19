import React, { useState, useEffect } from "react";

const Timer = ({ timeLimit, onTimeUp }) => {
  const [timeLeft, setTimeLeft] = useState(timeLimit);

  useEffect(() => {
    if (timeLeft === 0) {
      onTimeUp(); // Automatically move to next question when time is up
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, onTimeUp]);

  const progressPercentage = (timeLeft / timeLimit) * 100;

  return (
    <div className="timer-container">
      <div className="progress-bar" style={{ width: `${progressPercentage}%` }}></div>
      <p className="timer-text">Time Left: {timeLeft}s</p>
    </div>
  );
};

export default Timer;
