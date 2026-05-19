import React from 'react';
import './Snake.css';

const Snake = ({ snakeDots }) => {
  return (
    <>
      {snakeDots.map((dot, i) => {
        const isHead = i === snakeDots.length - 1;
        const style = {
          gridColumnStart: dot[0] + 1,
          gridRowStart: dot[1] + 1,
        };
        return (
          <div 
            className={`snake-dot ${isHead ? 'head' : ''}`} 
            key={i} 
            style={style}
          />
        );
      })}
    </>
  );
};

export default Snake;
