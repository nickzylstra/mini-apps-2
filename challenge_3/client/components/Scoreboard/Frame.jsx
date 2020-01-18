import React from 'react';

const Frame = (props) => {
  const { scoreFrame, frame } = props;

  return (
    <div className="list-group-item flex-fill">
      <span className="h5">{`${frame}  `}</span>
      <span>
        {scoreFrame[0]}
        {'  '}
        {scoreFrame[1]}
      </span>
      <div className="h3">
        {scoreFrame[2]}
      </div>
    </div>
  );
};

export default Frame;
