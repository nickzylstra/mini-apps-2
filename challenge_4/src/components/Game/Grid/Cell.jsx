import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clickCell } from '../../../redux/actions';
import './Cell.css'


const Cell = ({ cellId }) => {
  const dispatch = useDispatch();
  const cell = useSelector(({ cells }) => cells[cellId]);
  const gameStatus = useSelector(({ gameStatus }) => gameStatus);
  const { adjMineCount, isCovered, hasMine, isFlagged } = cell;
  return (
    <div
      id={cellId}
      onClick={(e) => { dispatch(clickCell(e.target.id)); }}
      className={`cell
        ${isCovered ? 'blank' : 'exposed'}
        ${hasMine && (gameStatus === 'WON' || gameStatus === 'LOST') ? 'mine' : ''}
        ${isFlagged ? 'flagged' : ''}`}
    >
      {isCovered ? '.' : adjMineCount || '.'}
    </div>
  )
};

export default Cell;
