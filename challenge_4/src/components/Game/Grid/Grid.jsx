import React from 'react';
import { useSelector } from 'react-redux';
import Row from './Row.jsx';
import './Grid.css'

const Grid = () => {
  const grid = useSelector(({ grid }) => grid);
  const rowCount = useSelector(({ rowCount }) => rowCount);
  const colCount = useSelector(({ colCount }) => colCount);
  const style = {
    width: `${colCount * 16}px`,
    height: `${rowCount * 16}px`,
  }
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
