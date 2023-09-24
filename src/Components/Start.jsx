import React, { useContext, useState } from 'react';
import '../Styling/Start.scss';
import { QuizContext } from '../Helper/Context';
const Start = () => {
  const { setGameState, name, setName } = useContext(QuizContext);
  const handleChange = (e) => {
    setName(e.target.value);
  };
  return (
    <div className="start-container">
      <h1>Lets see how much you know about me!</h1>
      <input
        type="text"
        placeholder="Enter Your name"
        value={name}
        onChange={handleChange}
      />
      <button
        className="btn"
        onClick={() => {
          console.log(name);
          setGameState('questions');
        }}
      >
        Start Quiz
      </button>
    </div>
  );
};

export default Start;
