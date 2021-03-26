import React, { useState } from "react";

function App() {
  const questions = [
    {
      questionText: "Linux was developed by?",
      answerOptions: [
        { answerText: "Mike Matas", isCorrect: false },
        { answerText: "Dennis Crowley", isCorrect: false },
        { answerText: "Linus Torvalds", isCorrect: true },
        { answerText: "Loren Brichter", isCorrect: false },
      ],
    },
    {
      questionText: "?",
      answerOptions: [
        { answerText: "Elon Musk", isCorrect: false },
        { answerText: "Jordan Walke", isCorrect: true },
        { answerText: "Bill Gates", isCorrect: false },
        { answerText: "Tony Stark", isCorrect: false },
      ],
    },
    {
      questionText: "How many seconds are there in one minute?",
      answerOptions: [
        { answerText: "60", isCorrect: true },
        { answerText: "30", isCorrect: false },
        { answerText: "45", isCorrect: false },
        { answerText: "90", isCorrect: false },
      ],
    },
    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { answerText: "1", isCorrect: false },
        { answerText: "4", isCorrect: false },
        { answerText: "6", isCorrect: false },
        { answerText: "7", isCorrect: true },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  console.log(currentQuestion);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
          <button onClick={() => window.location.reload(false)}>
            Play Again!
          </button>
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
