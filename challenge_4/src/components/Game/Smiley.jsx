import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initializeGame } from '../../redux/actions';
import './Smiley.css'


const Game = () => {
  const dispatch = useDispatch();
  const gameStatus = useSelector(({ gameStatus }) => gameStatus);

  return (
    <div
      onClick={() => dispatch(initializeGame())}
      className="smiley"
    >
      {gameStatus === 'LOST' ? ':(' : ':)'}
    </div>
  )
};

export default Game;
