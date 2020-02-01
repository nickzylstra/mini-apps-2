import React from 'react';
import { useSelector } from 'react-redux';


const Cell = (props) => {
  const cells = useSelector(({ cells }) => cells);
  const { cellId } = props;
  const cell = cells[cellId];
  return (
    <span id={cellId}>
      {cell.adjMineCount}
      {/* {cell.hasMine ? 'X' : 'O'} */}
    </span>
  )
};

export default Cell;
