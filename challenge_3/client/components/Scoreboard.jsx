import React from 'react';
import Frame from './Scoreboard/Frame.jsx';

const Scoreboard = (props) => {
  const { frames, score, currentFrame } = props;

  return (
    <div className="container">
      <div id="scoreboardTotal" className="h3">
        {`Game Score: ${score}`}
      </div>
      <ul id="scoreboardFrames" className="list-group list-group-horizontal">
        {frames.map((frame, idx) => {
          const key = JSON.stringify(frame) + idx;
          return (
            <Frame
              key={key}
              frameNum={idx + 1}
              frame={frame}
              currentFrame={currentFrame}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Scoreboard;
