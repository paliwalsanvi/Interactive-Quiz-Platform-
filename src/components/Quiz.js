import React, { useState } from "react";
import { quizData } from "../utils/data";
import Question from "./Question";
import IntegerQuestion from "./IntegerQuestion";
import Timer from "./Timer";

const Quiz = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const currentQuestion = quizData[currentIndex];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    if (option === currentQuestion.answer) {
      setScore(score + 1);
    }

    setTimeout(() => {
      setSelectedOption(null);
      moveToNextQuestion();
    }, 1500);
  };

  const handleIntegerSubmit = (isCorrect) => {
    if (isCorrect) setScore(score + 1);
    moveToNextQuestion();
  };

  const moveToNextQuestion = () => {
    if (currentIndex < quizData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setQuizFinished(true);
    }
  };

  return (
    <div className="quiz-container">
      {quizFinished ? (
        <div className="scoreboard">
          <h2>Quiz Finished!</h2>
          <p>Your Score: {score} / {quizData.length}</p>
          <button onClick={() => window.location.reload()}>Restart Quiz</button>
        </div>
      ) : (
        <>
          <Timer timeLimit={30} onTimeUp={moveToNextQuestion} />
          {currentQuestion.type === "mcq" ? (
            <Question
              question={currentQuestion.question}
              options={currentQuestion.options}
              selectedOption={selectedOption}
              handleOptionClick={handleOptionClick}
              correctAnswer={currentQuestion.answer}
            />
          ) : (
            <IntegerQuestion
              question={currentQuestion.question}
              correctAnswer={currentQuestion.answer}
              onSubmit={handleIntegerSubmit}
            />
          )}
        </>
      )}
    </div>
  );
};

export default Quiz;
