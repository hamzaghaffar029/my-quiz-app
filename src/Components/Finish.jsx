import React, { useContext } from 'react';
import '../Styling/Finish.scss';
import { QuizContext } from '../Helper/Context';
import { Question } from '../Helper/Question';

const Finish = () => {
  const { score, name, setGameState, setScore, setName } =
    useContext(QuizContext);
  console.log(score);
  return (
    <div className="finish-container">
      {score === 10 && (
        <h1>
          Congratulations!! <span>{name}</span> you are my best friend!
        </h1>
      )}
      {score >= 5 && score < 10 && (
        <h1>
          Well!! <span>{name}</span> you are my good friend but for best you
          have to score 10!!
        </h1>
      )}
      {score < 5 && (
        <h1>
          What a loss!! <span>{name}</span> it seems that you are not my
          friend!!
        </h1>
      )}

      <div className="score-container">
        <h2>
          You Got {score} / {Question.length}
        </h2>
      </div>
      <button
        className="btn"
        onClick={() => {
          setGameState('start');
          setScore(0);
          setName('');
        }}
      >
        Restart Quiz
      </button>
    </div>
  );
};

export default Finish;
