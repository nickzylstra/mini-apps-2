import React from 'react';

const Frame = (props) => {
  const { frame, frameNum } = props;
  const { roll1, roll2, score } = frame;

  return (
    <div className="list-group-item flex-fill">
      <span id="frameNum" className="h5">{`${frameNum}  `}</span>
      <span>
        {roll1}
        {'  '}
        {roll2}
      </span>
      <div id="frameScore" className="h3">
        {score}
      </div>
    </div>
  );
};

export default Frame;
