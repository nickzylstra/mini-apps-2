import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Grid from './Grid/Grid.jsx';
import initializeGame from '../../redux/actions/initializeGame';

const Game = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initializeGame());
  }, [])
  return (
    <div>
      Game
      <Grid />
    </div>
  )
};

export default Game;
