import React from 'react';
import { useSelector } from 'react-redux';
import './Cell.css'


const Cell = (props) => {
  const cells = useSelector(({ cells }) => cells);
  const { cellId } = props;
  const cell = cells[cellId];
  const { adjMineCount, isCovered, hasMine } = cell;
  return (
    <div
      id={cellId}
      className={`cell ${isCovered ? 'blank' : 'exposed'} ${hasMine ? 'mine' : null}`}
    >
      {/* {isCovered ? null : adjMineCount} */}
      {adjMineCount}
      {/* {hasMine ? 'X' : 'O'} */}
    </div>
  )
};

export default Cell;
