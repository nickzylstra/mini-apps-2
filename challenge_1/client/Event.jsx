import React from 'react';

const Event = (props) => {
  const { event } = props;
  const { date, description } = event;
  return (
    <div>
      {date}
      {description}
    </div>
  );
};

export default Event;
