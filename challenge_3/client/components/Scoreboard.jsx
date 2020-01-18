import React from 'react';
import Frame from './Scoreboard/Frame.jsx';

const Scoreboard = (props) => {
  const { scoreFrames, scoreTotal } = props;

  return (
    <div>
      <div>
        {scoreTotal}
      </div>
      <ul className="list-group list-group-horizontal">
        {scoreFrames.map((scoreFrame, idx) => (
          <Frame
            // eslint-disable-next-line react/no-array-index-key
            key={idx}
            scoreFrame={scoreFrame}
          />
        ))}
      </ul>
    </div>
  );
};

export default Scoreboard;
