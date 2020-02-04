import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initializeGame, statuses } from '../../../redux/actions';
import './Smiley.css'


const Smiley = () => {
  const dispatch = useDispatch();
  const gameStatus = useSelector(({ gameStatus }) => gameStatus);

  return (
    <div
      onClick={() => dispatch(initializeGame())}
      className={`smiley ${gameStatus}`}
    >
    </div>
  )
};

export default Smiley;
