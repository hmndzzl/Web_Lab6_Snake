import React from 'react';
import './Food.css';

const Food = ({ dot }) => {
  const style = {
    gridColumnStart: dot[0] + 1,
    gridRowStart: dot[1] + 1,
  };
  return (
    <div className="food-dot" style={style}>
      <div className="food-core"></div>
    </div>
  );
};

export default Food;
