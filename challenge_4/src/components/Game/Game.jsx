import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Grid from './Grid/Grid.jsx';
import Header from './Header/Header.jsx';
import { initializeGame } from '../../redux/actions';
import './Game.css'


const Game = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initializeGame());
  }, [dispatch])

  const rowCount = useSelector(({ rowCount }) => rowCount);
  const colCount = useSelector(({ colCount }) => colCount);
  const style = {
    width: `${colCount * 18 + 20}px`,
    height: `${rowCount * 18 + 32}px`,
  };

  return (
    <div title="game" className="game" style={style}>
      <Header />
      <Grid />
    </div>
  )
};

export default Game;
