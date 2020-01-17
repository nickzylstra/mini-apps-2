import React from 'react';
import Frame from './Scoreboard/Frame.jsx';

const Scoreboard = (props) => {
  const { scoreFrames, scoreTotal } = props;

  return (
    <div>
      <div>
        {scoreTotal}
      </div>
      <div>
        {scoreFrames.map((scoreFrame) => (
          <Frame
            scoreFrame={scoreFrame}
          />
        ))}
      </div>
    </div>
  );
};

export default Scoreboard;
