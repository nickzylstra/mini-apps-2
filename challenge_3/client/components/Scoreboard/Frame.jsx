import React from 'react';

const Frame = (props) => {
  const { frame, frameNum } = props;

  return (
    <div className="list-group-item flex-fill">
      <span id="frameNum" className="h5">{`${frameNum}  `}</span>
      <span>
        {frame[1]}
        {'  '}
        {frame[2]}
      </span>
      <div id="frameScore" className="h3">
        {frame[0]}
      </div>
    </div>
  );
};

export default Frame;
