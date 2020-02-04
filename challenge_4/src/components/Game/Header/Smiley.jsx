import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetGame } from '../../../redux/actions';
import './Smiley.css'


const Smiley = () => {
  const dispatch = useDispatch();
  const gameStatus = useSelector(({ gameStatus }) => gameStatus);

  return (
    <div className="smileyContainer">
      <div>
        <div
          onClick={() => dispatch(resetGame())}
          className={`smiley ${gameStatus}`}
        />
      </div>
    </div>
  )
};

export default Smiley;
