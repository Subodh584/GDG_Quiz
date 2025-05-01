
import React, { useState, useEffect } from "react";
import Welcome from "../components/Welcome";
import Question from "../components/Question";
import Results from "../components/Results";
import quizData from "../data/quizData";

const Index = () => {

  const [quizStarted, setQuizStarted] = useState(false);
  const [quizEnded, setQuizEnded] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(1);
  const [score, setScore] = useState(0);
  const [quizAnimation, setQuizAnimation] = useState("");


  const handleStartQuiz = () => {
    setQuizAnimation("animate-fade-out");
    setTimeout(() => {
      setQuizStarted(true);
      setCurrentQuestionIndex(1);
      setScore(0);
      setQuizEnded(false);
      setQuizAnimation("animate-fade-in");
    }, 300);
  };

  const handleAnswerSubmit = (isCorrect) => {
    if (isCorrect) {
      setScore(prevScore => prevScore + 1);
    }

    setQuizAnimation("animate-fade-out");
    
    setTimeout(() => {
      if (currentQuestionIndex < quizData.length) {
        setCurrentQuestionIndex(prevIndex => prevIndex + 1);
      } else {
        setQuizEnded(true);
      }
      setQuizAnimation("animate-fade-in");
    }, 300);
  };


  const handleRestartQuiz = () => {
    setQuizAnimation("animate-fade-out");
    setTimeout(() => {
      setQuizStarted(false);
      setQuizEnded(false);
      setCurrentQuestionIndex(1);
      setScore(0);
      setQuizAnimation("animate-fade-in");
    }, 300);
  };

  return (
    <div className="quiz-container min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8">
      <div className={`w-full max-w-2xl transition-opacity duration-300 ${quizAnimation}`}>
        {!quizStarted ? (
          <Welcome onStartQuiz={handleStartQuiz} />
        ) : !quizEnded ? (
          <Question
            question={quizData[currentQuestionIndex - 1]}
            totalQuestions={quizData.length}
            currentQuestionIndex={currentQuestionIndex}
            onAnswerSubmit={handleAnswerSubmit}
          />
        ) : (
          <Results
            score={score}
            totalQuestions={quizData.length}
            onRestartQuiz={handleRestartQuiz}
          />
        )}
      </div>

      <div className="fixed bottom-4 text-center w-full text-sm text-gray-500">
        <p>GDGSRM_Quiz By Subodh Chauhan</p>
      </div>
    </div>
  );
};

export default Index;
