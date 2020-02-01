import React from 'react';
import { useSelector } from 'react-redux';
import Row from './Row.jsx';
import './Grid.css'

const Grid = ({ rowCount, colCount }) => {
  const grid = useSelector(({ grid }) => grid);
  const style = {
    width: `${colCount * 18}px`,
    height: `${rowCount * 18}px`,
  };

  return (
    <div id="grid" className="grid" style={style}>
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
