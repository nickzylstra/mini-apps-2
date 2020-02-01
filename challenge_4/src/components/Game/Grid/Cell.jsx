import React from 'react';
import { useSelector } from 'react-redux';
import './Cell.css'


const Cell = (props) => {
  const cells = useSelector(({ cells }) => cells);
  const { cellId } = props;
  const cell = cells[cellId];
  const { adjMineCount, isCovered } = cell;
  return (
    <div id={cellId} className={`cell ${isCovered ? 'blank' : 'exposed'}`}>
      {adjMineCount}
      {/* {cell.hasMine ? 'X' : 'O'} */}
    </div>
  )
};

export default Cell;
