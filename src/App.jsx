import React, { useState } from 'react';
import './App.scss';
import { QuizContext } from './Helper/Context';
import Start from './Components/Start';
import Questions from './Components/Questions';
import Finish from './Components/Finish';

function App() {
  const [gameState, setGameState] = useState('start');
  const [name, setName] = useState('');
  const [score, setScore] = useState(0);
  return (
    <QuizContext.Provider
      value={{ gameState, setGameState, name, setName, score, setScore }}
    >
      {gameState === 'start' && <Start />}
      {gameState === 'questions' && <Questions />}
      {gameState === 'finish' && <Finish />}
    </QuizContext.Provider>
  );
}

export default App;
