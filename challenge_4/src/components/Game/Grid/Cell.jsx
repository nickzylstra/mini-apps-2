import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clickCell } from '../../../redux/actions/index';
import './Cell.css'


const Cell = (props) => {
  const dispatch = useDispatch();
  const cells = useSelector(({ cells }) => cells);
  const { cellId } = props;
  const cell = cells[cellId];
  const { adjMineCount, isCovered, hasMine, isFlagged } = cell;
  return (
    <div
      id={cellId}
      onClick={(e) => { dispatch(clickCell(e.target.id)); }}
      className={`cell ${isCovered ? 'blank' : 'exposed'}
        ${hasMine ? 'mine' : ''} ${isFlagged ? 'flagged' : ''}`}
    >
      {isCovered ? '.' : adjMineCount || '.'}
    </div>
  )
};

export default Cell;