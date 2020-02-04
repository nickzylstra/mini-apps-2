import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initializeGame } from '../../../redux/actions';
import './Smiley.css'


const Smiley = () => {
  const dispatch = useDispatch();
  const gameStatus = useSelector(({ gameStatus }) => gameStatus);

  return (
    <div className="smileyContainer">
      <div>
        <div
          onClick={() => dispatch(initializeGame())}
          className={`smiley ${gameStatus}`}
        />
      </div>
    </div>
  )
};

export default Smiley;
