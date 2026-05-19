import React, { useState } from 'react';
import './StartScreen.css';

const StartScreen = ({ onStart }) => {
  const [selectedDiff, setSelectedDiff] = useState('medio');

  return (
    <div className="glass-panel start-screen">
      <h1 className="title">Snake</h1>
      <p className="subtitle"></p>

      <div className="difficulty-selector">
        <p>Selecciona Dificultad:</p>
        <div className="diff-buttons">
          <button
            className={`diff-btn ${selectedDiff === 'facil' ? 'active' : ''}`}
            onClick={() => setSelectedDiff('facil')}
          >Fácil</button>
          <button
            className={`diff-btn ${selectedDiff === 'medio' ? 'active' : ''}`}
            onClick={() => setSelectedDiff('medio')}
          >Medio</button>
          <button
            className={`diff-btn ${selectedDiff === 'dificil' ? 'active' : ''}`}
            onClick={() => setSelectedDiff('dificil')}
          >Difícil</button>
        </div>
      </div>

      <button className="primary start-btn" onClick={() => onStart(selectedDiff)}>Comenzar Juego</button>
    </div>
  );
};

export default StartScreen;
