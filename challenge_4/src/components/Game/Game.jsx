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
  const style = {
    width: `${colCount * 18 + 20}px`,
    height: `${rowCount * 18 + 20}px`,
  };

  return (
    <div className="game" style={style}>
      Game
      <Grid
        rowCount={rowCount}
        colCount={colCount}
      />
    </div>
  )
};

export default Game;
