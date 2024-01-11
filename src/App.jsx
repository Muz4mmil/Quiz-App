import React, { useState } from 'react';
import './App.css'

const quizData = [
  {
    question: 'Which programming language is used for React development?',
    options: ['Java', 'Python', 'JavaScript', 'C++'],
    correctAnswer: 'JavaScript',
  },
  {
    question: 'What does HTML stand for?',
    options: ['Hyper Text Markup Language', 'Highly Typed Machine Learning', 'Hyper Transfer Markup Language', 'Hyperlink and Text Markup Language'],
    correctAnswer: 'Hyper Text Markup Language',
  },
  {
    question: 'Which programming language is primarily used for developing Android applications?',
    options: ['Java', 'Python', 'C#', 'Swift'],
    correctAnswer: 'Java',
  },
  {
    question: 'What is the maximum transmission speed of USB 3.0?',
    options: ['480 Mbps', '1 Gbps', '5 Gbps', '10 Gbps'],
    correctAnswer: '5 Gbps',
  },
  {
    question: 'What does VPN stand for?',
    options: ['Virtual Private Network', 'Virtual Public Network', 'Virtual Personal Network', 'Visible Private Network'],
    correctAnswer: 'Virtual Private Network',
  },
];

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerClick = (selectedOption) => {
    if (selectedOption === quizData[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  const resultImage = `/${score}.png`;

  return (
    <div className="quiz-container">
      {showScore ? (
        <div className="score-section">
          <h2>Your Score: {score} out of {quizData.length}</h2>
          <img src={resultImage} alt={`Result for ${score}`} />
          <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
      ) : (
        <div className="question-section">
          <h2>Question {currentQuestion + 1}</h2>
          <p>{quizData[currentQuestion].question}</p>
          <div className="options">
            {quizData[currentQuestion].options.map((option, index) => (
              <button key={index} onClick={() => handleAnswerClick(option)}>
                {option}
              </button>
            ))}
          </div>
        </div>
      )}

      <a href="https://muz4mmil.vercel.app" target='_blank' className="credit">- Made by Muzammil</a>
    </div>
  );
};

export default App;
