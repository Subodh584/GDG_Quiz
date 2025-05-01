
import React from 'react';
import { Button } from "@/components/ui/button";

const Welcome = ({ onStartQuiz }) => {
  return (
    <div className="animate-fade-in max-w-md w-full mx-auto">
  <div className="quiz-card p-8">
    <h1 className="text-3xl font-bold text-center text-quiz-primary mb-6">
GDGSRM_Quiz
   </h1>
        
    <div className="space-y-4 mb-8">
          <h2 className="text-xl font-semibold text-gray-800">
            Welcome to the Quiz!
          </h2 >
          <p className="text-gray-600">
            Test your General knowledge with 10 MCQs. Select the correct ans., hit submit to go to the next question.
          </p>
          <div className="bg-quiz-neutral p-4 rounded-lg">
     <h3 className="font-semibold text-gray-800 mb-2">How it works:</h3>
      <ul className="list-disc pl-5 space-y-1 text-gray-600">
              <li>10 MCQs</li>
        <li>Rapid feedback after each answer</li>
        <li>Track your score as you go</li>
        <li>See your final score at the end</li>
            </ul>
          </div>
        </div>
        
        <Button 
          onClick={onStartQuiz} className="w-full bg-quiz-primary hover:bg-quiz-secondary transition-all duration-300"
        >
    Start Quiz
        </Button>
      </div>
    </div>
  );
};
export default Welcome;
