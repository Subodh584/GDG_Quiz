import React, { useState } from 'react';


import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";


const Question = ({ question,   totalQuestions, currentQuestionIndex, onAnswerSubmit,}) => 
  {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const handleOptionSelect = (option) => {
    if (isAnswerChecked) return;
    setSelectedOption(option);
  };



  const handleSubmitButton = () => {
    if (!selectedOption || isAnswerChecked) return;
    

    const correct = selectedOption === question.correctAnswer;
    setIsCorrect(correct);
    setIsAnswerChecked(true);


    setTimeout(() => {
      onAnswerSubmit(correct);


      setSelectedOption(null);
      setIsAnswerChecked(false);
    }, 1500);
  };

  return (
    <div className="animate-scale-in max-w-lg w-full mx-auto">
      <div className="quiz-card">

        <div className="h-2 bg-quiz-neutral">
    <div 
            className="h-full bg-quiz-primary transition-all duration-500" 
            style={{ width: `${((currentQuestionIndex) / totalQuestions) * 100}%` }}
          ></div>
        </div>
        
        <div className="p-6">

          <div className="flex justify-between items-center mb-6">
            <span className="text-sm font-medium text-gray-500">
           Question {currentQuestionIndex} of {totalQuestions}
            </span>
          </div>
          
          <h3 className="text-xl font-semibold mb-6">{question.question}</h3>
          
          <div className="space-y-3 mb-6">

        {question.options.map((option, index) => {
              let buttonClass = "option-button";
              
              if (isAnswerChecked) {
                if (option === question.correctAnswer) {
             buttonClass += " correct";
                } else if (option === selectedOption && option !== question.correctAnswer) {
                  buttonClass += " incorrect";

                }
              } else if (option === selectedOption) {
                buttonClass += " selected";
              }
              

           return (
                <button
                  key={index}
                  className={buttonClass}
             onClick={() => handleOptionSelect(option)}
                  disabled={isAnswerChecked}
                >
                  <span>{option}</span>
              {isAnswerChecked && option === question.correctAnswer && (
                    <Check className="absolute right-3 top-1/2 transform -translate-y-1/2 text-quiz-correct" />
           )}
                  {isAnswerChecked && option === selectedOption && option !== question.correctAnswer && (
                    <X className="absolute right-3 top-1/2 transform -translate-y-1/2 text-quiz-incorrect" />
                  )}
                </button>
              );
            })}

          </div>
          
          {isAnswerChecked ? (
            <div className={`p-4 rounded-lg mb-6 transition-all duration-300 ${isCorrect ? 'bg-quiz-correct/20' : 'bg-quiz-incorrect/20'}`}>
           <p className="text-center font-medium">
                {isCorrect 
             ? "Correct! Well done!" 

               : `Incorrect! The correct answer is: ${question.correctAnswer}`}
              </p>
            </div>
          ) : (
            <Button
              className="w-full bg-quiz-primary hover:bg-quiz-secondary transition-all duration-300"
              onClick={handleSubmitButton}

        disabled={!selectedOption}
            >
         Submit Answer
            </Button>
          )}

        </div>

      </div>
    </div>

  );
};
export default Question;
