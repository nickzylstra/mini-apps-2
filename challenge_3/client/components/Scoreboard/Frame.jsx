import React from 'react';

const Frame = (props) => {
  const { frame, frameNum } = props;

  return (
    <div className="list-group-item flex-fill">
      <span id="frameNum" className="h5">{`${frameNum}  `}</span>
      <span>
        {frame[0]}
        {'  '}
        {frame[1]}
      </span>
      <div id="frameScore" className="h3">
        {frame[2]}
      </div>
    </div>
  );
};

export default Frame;
