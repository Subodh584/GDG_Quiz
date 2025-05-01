
import React from 'react';
import { Button } from "@/components/ui/button";

const Results = ({ score, totalQuestions, onRestartQuiz }) => {
  const percentage = (score / totalQuestions) * 100;
let message = "";
  let messageClass = "";
  
if (percentage === 100) {
message = "Perfect! You're a genius!";messageClass = "text-quiz-primary";
  } else if (percentage >= 80) {
  message = "Excellent! You really know your stuff!";
    messageClass = "text-quiz-primary";
  } else if (percentage >= 60) {
    message = "Good job! You have solid knowledge!";
  messageClass = "text-green-500";
  } else if (percentage >= 40) {
    message = "Not bad! You're on the right track!";
  messageClass = "text-yellow-500";
  } else {
    message = "Keep learning! You'll do better next time!";
    messageClass = "text-quiz-incorrect";
  }
  
  return (
    <div className="animate-fade-in max-w-md w-full mx-auto">
      <div className="quiz-card p-8 text-center">
    <h2 className="text-2xl font-bold text-quiz-primary mb-6">Quiz Completed!</h2>
        
    <div className="mb-8">
      <div className="flex items-center justify-center mb-4">
    <div className="relative w-36 h-36">
              <svg className="w-36 h-36 transform -rotate-90" viewBox="0 0 100 100">
         <circle
               className="text-quiz-neutral"
            strokeWidth="10"
            stroke="currentColor"
            fill="transparent"
            r="40"
              cx="50"
             cy="50"
                />
                <circle
                  className="text-quiz-primary"
         strokeWidth="10"
                  strokeDasharray={`${percentage * 2.51} 251.2`}
              strokeLinecap="round"
                  stroke="currentColor"
                  fill="transparent"
                  r="40"
                  cx="50"
                  cy="50"
                />
              </svg>
      <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-4xl font-bold">{score}/{totalQuestions}</span>
              </div>
            </div>
          </div>
          
    <p className={`text-xl font-semibold ${messageClass} mb-4`}>
       {message}
    </p>
          
          <p className="text-gray-600">
            You scored {score} out of {totalQuestions} questions correctly.
     </p>
        </div>
        
        <Button
   onClick={onRestartQuiz}
          className="w-full bg-quiz-primary hover:bg-quiz-secondary transition-all duration-300"
        >
          Take Quiz Again    </Button>
 </div>
    </div>
  );
};

export default Results;
