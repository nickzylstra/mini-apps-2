import React from 'react';

const Frame = (props) => {
  const { scoreFrame } = props;

  return (
    <span>
      <div>
        <div>
          {scoreFrame[0]}
          {scoreFrame[1]}
        </div>
        <div>
          {scoreFrame[0] + scoreFrame[1]}
        </div>
      </div>
    </span>
  );
};

export default Frame;
