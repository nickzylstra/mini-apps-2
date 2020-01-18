import React from 'react';

const Frame = (props) => {
  const { scoreFrame } = props;

  return (
    <div className="list-group-item flex-fill">
      <div>
        {scoreFrame[0]}
        {'  '}
        {scoreFrame[1]}
      </div>
      <div>
        {scoreFrame[0] + scoreFrame[1]}
      </div>
    </div>
  );
};

export default Frame;
