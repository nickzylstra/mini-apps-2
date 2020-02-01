import React from 'react';
import { useSelector } from 'react-redux';


const Cell = (props) => {
  const cells = useSelector(({ cells }) => cells);
  const { cellId } = props;
  const cell = cells[cellId];
  return (
    <span>
      {cell.adjMineCount}
    </span>
  )
};

export default Cell;
