import React from 'react';
import './Score.css';

const Score = ({ score, difficultyLabel }) => {
  return (
    <div className="score-board">
      <div className="score-item">
        <span className="label">Puntaje</span>
        <span className="value">{score}</span>
      </div>
      <div className="score-item">
        <span className="label">Dificultad</span>
        <span className="value diff">{difficultyLabel}</span>
      </div>
    </div>
  );
};

export default Score;
