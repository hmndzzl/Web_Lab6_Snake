import React from 'react';
import './Board.css';
import Snake from './Snake';
import Food from './Food';

const Board = ({ snakeDots, food, gridSize }) => {
  return (
    <div 
      className="game-board" 
      style={{
        gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
        gridTemplateRows: `repeat(${gridSize}, 1fr)`
      }}
    >
      <Snake snakeDots={snakeDots} />
      <Food dot={food} />
    </div>
  );
};

export default Board;
