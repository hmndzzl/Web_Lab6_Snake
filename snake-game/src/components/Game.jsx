import React, { useState, useEffect, useCallback, useRef } from 'react';
import Board from './Board';
import Score from './Score';
import StartScreen from './StartScreen';
import GameOverScreen from './GameOverScreen';
import './Game.css';

const GRID_SIZE = 20;

const DIFFICULTIES = {
  facil: { speed: 200, label: 'Fácil' },
  medio: { speed: 120, label: 'Medio' },
  dificil: { speed: 70, label: 'Difícil' }
};

const getRandomCoordinates = () => {
  let min = 0;
  let max = GRID_SIZE - 1;
  let x = Math.floor(Math.random() * (max - min + 1) + min);
  let y = Math.floor(Math.random() * (max - min + 1) + min);
  return [x, y];
};

const INITIAL_SNAKE = [
  [8, 10],
  [9, 10],
  [10, 10]
];

const Game = () => {
  const [snakeDots, setSnakeDots] = useState(INITIAL_SNAKE);
  const [food, setFood] = useState([15, 10]);
  const [direction, setDirection] = useState([1, 0]); // Right
  const [dirQueue, setDirQueue] = useState([]); // Input queue to prevent stuck keys
  const [gameState, setGameState] = useState('START'); // START, PLAYING, GAME_OVER
  const [score, setScore] = useState(0);
  const [difficulty, setDifficulty] = useState('medio');
  const [speed, setSpeed] = useState(DIFFICULTIES.medio.speed);

  const startGame = (selectedDiff) => {
    const diff = selectedDiff || difficulty;
    setDifficulty(diff);
    setSnakeDots(INITIAL_SNAKE);
    setFood([15, 10]);
    setDirection([1, 0]);
    setDirQueue([]);
    setScore(0);
    setSpeed(DIFFICULTIES[diff].speed);
    setGameState('PLAYING');
  };

  const handleKeyDown = useCallback((e) => {
    if (gameState !== 'PLAYING') return;
    
    // Prevent default scrolling for arrow keys
    if(['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'w', 'a', 's', 'd', 'W', 'A', 'S', 'D'].includes(e.key)) {
      e.preventDefault();
    }

    setDirQueue(prevQueue => {
      // The last intended direction by the user
      const lastDir = prevQueue.length > 0 ? prevQueue[prevQueue.length - 1] : direction;
      
      let newDir = null;
      switch (e.key) {
        case 'ArrowUp':
        case 'w':
        case 'W':
          if (lastDir[1] === 0) newDir = [0, -1];
          break;
        case 'ArrowDown':
        case 's':
        case 'S':
          if (lastDir[1] === 0) newDir = [0, 1];
          break;
        case 'ArrowLeft':
        case 'a':
        case 'A':
          if (lastDir[0] === 0) newDir = [-1, 0];
          break;
        case 'ArrowRight':
        case 'd':
        case 'D':
          if (lastDir[0] === 0) newDir = [1, 0];
          break;
        default:
          break;
      }
      
      // Limit queue size to 3 to prevent huge buffered delays
      if (newDir && prevQueue.length < 3) {
        return [...prevQueue, newDir];
      }
      return prevQueue;
    });
  }, [direction, gameState]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown, { passive: false });
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const moveSnake = useCallback(() => {
    if (gameState !== 'PLAYING') return;

    let nextDir = direction;
    if (dirQueue.length > 0) {
      nextDir = dirQueue[0];
      setDirQueue(prev => prev.slice(1));
    }

    const currentHead = snakeDots[snakeDots.length - 1];
    const newHead = [
      currentHead[0] + nextDir[0],
      currentHead[1] + nextDir[1]
    ];
    
    // Check wall collisions
    if (
      newHead[0] < 0 || newHead[0] >= GRID_SIZE ||
      newHead[1] < 0 || newHead[1] >= GRID_SIZE
    ) {
      setGameState('GAME_OVER');
      return;
    }

    // Check self collisions
    for (let i = 0; i < snakeDots.length; i++) {
      if (snakeDots[i][0] === newHead[0] && snakeDots[i][1] === newHead[1]) {
        setGameState('GAME_OVER');
        return;
      }
    }

    const newSnake = [...snakeDots, newHead];
    setDirection(nextDir); // commit direction

    // Check food
    if (newHead[0] === food[0] && newHead[1] === food[1]) {
      const newScore = score + 10;
      setScore(newScore);
      
      let newFood;
      while (true) {
        newFood = getRandomCoordinates();
        // Ensure food doesn't spawn on snake
        // eslint-disable-next-line no-loop-func
        let onSnake = newSnake.some(dot => dot[0] === newFood[0] && dot[1] === newFood[1]);
        if (!onSnake) break;
      }
      setFood(newFood);
    } else {
      newSnake.shift(); // Remove tail
    }

    setSnakeDots(newSnake);
  }, [snakeDots, dirQueue, direction, food, gameState, score]);

  // Use a ref to store the latest callback to avoid resetting the interval
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = moveSnake;
  }, [moveSnake]);

  useEffect(() => {
    if (gameState === 'PLAYING') {
      const intervalId = setInterval(() => {
        if (savedCallback.current) savedCallback.current();
      }, speed);
      return () => clearInterval(intervalId);
    }
  }, [gameState, speed]);

  return (
    <div className="game-container">
      {gameState === 'PLAYING' && (
        <div className="play-area">
          <Score score={score} difficultyLabel={DIFFICULTIES[difficulty].label} />
          <Board snakeDots={snakeDots} food={food} gridSize={GRID_SIZE} />
        </div>
      )}
      
      {gameState === 'START' && <StartScreen onStart={startGame} />}
      
      {gameState === 'GAME_OVER' && (
        <GameOverScreen 
          score={score} 
          difficultyLabel={DIFFICULTIES[difficulty].label} 
          onRestart={() => startGame(difficulty)} 
          onBackToMenu={() => setGameState('START')}
        />
      )}
    </div>
  );
};

export default Game;
