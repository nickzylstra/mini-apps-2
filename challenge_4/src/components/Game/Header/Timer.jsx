import React from 'react';
import { useSelector } from 'react-redux';
import './Timer.css'


const Timer = () => {
  const timeElapsed = useSelector(({ timer }) => timer.elapsed);

  return (
    <div className="timer">
      {timeElapsed}
    </div>
  )
};

export default Timer;
