import React from "react";

const Question = ({ question, options, selectedOption, handleOptionClick, correctAnswer }) => {
  return (
    <div className="question-box">
      <h3>{question}</h3>
      <div className="options">
        {options.map((option, index) => {
          let buttonClass = "";
          if (selectedOption) {
            if (option === correctAnswer) {
              buttonClass = "correct"; // ✅ Green for the correct answer
            } else if (option === selectedOption) {
              buttonClass = "incorrect"; // ❌ Red for wrong selection
            }
          }

          return (
            <button
              key={index}
              className={`option-button ${buttonClass}`}
              onClick={() => handleOptionClick(option)}
              disabled={selectedOption !== null} // 🔒 Disable buttons after selecting
            >
              {option}
            </button>
          );
        })}
      </div>
      {selectedOption && (
        <p className="feedback">
          {selectedOption === correctAnswer ? "✅ Correct!" : `❌ Incorrect! The right answer is ${correctAnswer}`}
        </p>
      )}
    </div>
  );
};

export default Question;
