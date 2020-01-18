import React from 'react';
import Frame from './Scoreboard/Frame.jsx';

const Scoreboard = (props) => {
  const { scoreFrames, scoreTotal } = props;

  return (
    <div className="container">
      <div id="scoreboardTotal" className="h3">
        {`Game Score: ${scoreTotal}`}
      </div>
      <ul id="scoreboardFrames" className="list-group list-group-horizontal">
        {scoreFrames.map((scoreFrame, idx) => (
          <Frame
            // eslint-disable-next-line react/no-array-index-key
            key={idx}
            frame={idx + 1}
            scoreFrame={scoreFrame}
          />
        ))}
      </ul>
    </div>
  );
};

export default Scoreboard;
