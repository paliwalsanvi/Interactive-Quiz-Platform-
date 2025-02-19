import React, { useState } from "react";

const IntegerQuestion = ({ question, correctAnswer, onSubmit }) => {
  const [userInput, setUserInput] = useState("");

  const handleSubmit = () => {
    const isCorrect = parseInt(userInput) === correctAnswer;
    onSubmit(isCorrect);
  };

  return (
    <div className="question-box">
      <h3>{question}</h3>
      <input
        type="number"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder="Enter your answer"
        className="integer-input"
      />
      <button onClick={handleSubmit} className="submit-button">Submit</button>
    </div>
  );
};

export default IntegerQuestion;
