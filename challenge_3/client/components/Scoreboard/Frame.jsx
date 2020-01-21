import React from 'react';

const Frame = (props) => {
  const { frame, frameNum } = props;
  const { roll1, roll2, score } = frame;

  return (
    <div className="list-group-item flex-fill">
      <span className="h5 frameNum">{`${frameNum}  `}</span>
      <span>
        {roll1}
        {'  '}
        {roll2}
        {'  '}
        {frame.roll3 ? frame.roll3 : null}
      </span>
      <div className="h3 frame">
        {score}
      </div>
    </div>
  );
};

export default Frame;
