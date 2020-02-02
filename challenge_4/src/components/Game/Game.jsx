import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Grid from './Grid/Grid.jsx';
import { initializeGame } from '../../redux/actions';
import './Game.css'


const Game = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initializeGame());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const rowCount = useSelector(({ rowCount }) => rowCount);
  const colCount = useSelector(({ colCount }) => colCount);
  const gameStatus = useSelector(({ gameStatus }) => gameStatus);
  const openCellsLeft = useSelector(({ uncoveredCellsRemaining }) => uncoveredCellsRemaining);
  const style = {
    width: `${colCount * 18 + 20}px`,
    height: `${rowCount * 18 + 50}px`,
  };

  return (
    <div className="game" style={style}>
      Minesweeper
      <div>
        status:
        {gameStatus}
      </div>
      <div>
        openCellsLeft:
        {openCellsLeft}
      </div>
      <Grid
        rowCount={rowCount}
        colCount={colCount}
      />
    </div>
  )
};

export default Game;
