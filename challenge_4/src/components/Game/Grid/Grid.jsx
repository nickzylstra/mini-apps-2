import React from 'react';
import { useSelector } from 'react-redux';
import Row from './Row.jsx';

const Grid = () => {
  const grid = useSelector(({ grid }) => grid);
  return (
    <div>
      Grid
      {grid.map((row, idx) => (
        <Row
          key={idx}
          row={row}
        />
      ))}
    </div>
  )
};

export default Grid;
