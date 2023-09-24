import React, { useCallback, useContext, useState } from 'react';
import '../Styling/Questions.scss';
import { Question } from '../Helper/Question';
import { QuizContext } from '../Helper/Context';

const Questions = () => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const { score, setGameState, setScore } = useContext(QuizContext);
  const [choseOption, setChoseOption] = useState('');
  // const [isActive, setIsAcive] = useState(false);
  const handleNextQuestion = () => {
    if (Question[questionNumber].asnwer === choseOption) {
      setScore(score + 1);
    }
    setQuestionNumber(questionNumber + 1);
  };
  const handleFinish = () => {
    if (Question[questionNumber].asnwer === choseOption) {
      setScore(score + 1);
    }

    setGameState('finish');
  };

  const option = (ans) => {
    console.log(ans);
    setChoseOption(ans);
  };

  return (
    <div className="questions-container">
      <h2>{Question[questionNumber].prompt}</h2>
      <div className="options-container">
        <button
          id="1"
          className="option"
          onClick={() => {
            option('A');
          }}
        >
          {Question[questionNumber].optionA}
        </button>
        <button
          id="2"
          className="option"
          onClick={() => {
            option('B');
          }}
        >
          {Question[questionNumber].optionB}
        </button>
        <button
          id="3"
          className="option"
          onClick={() => {
            option('C');
          }}
        >
          {Question[questionNumber].optionC}
        </button>
        <button
          id="4"
          className="option"
          onClick={() => {
            option('D');
          }}
        >
          {Question[questionNumber].optionD}
        </button>
      </div>
      {questionNumber === Question.length - 1 ? (
        <button className="next-option" onClick={handleFinish}>
          Finish
        </button>
      ) : (
        <button className="next-option" onClick={handleNextQuestion}>
          Next Question
        </button>
      )}
    </div>
  );
};

export default Questions;
