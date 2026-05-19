import React from 'react';
import './GameOverScreen.css';

const GameOverScreen = ({ score, difficultyLabel, onRestart, onBackToMenu }) => {
  return (
    <div className="glass-panel game-over-screen">
      <h2 className="title game-over">¡Juego Terminado!</h2>
      <div className="stats">
        <p>Puntaje Final: <span className="highlight">{score}</span></p>
        <p>Dificultad: <span className="highlight">{difficultyLabel}</span></p>
      </div>
      <div className="action-buttons">
        <button className="primary restart-btn" onClick={onRestart}>Jugar de Nuevo</button>
        <button className="secondary menu-btn" onClick={onBackToMenu}>Volver al Menú</button>
      </div>
    </div>
  );
};

export default GameOverScreen;
