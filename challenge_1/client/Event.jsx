import React from 'react';

const Event = (props) => {
  const { event } = props;
  const { date, description } = event;
  return (
    <div
      className="card"
      style={{
        width: '50rem',
        margin: '20px',
      }}
    >
      <div className="card-header">
        Event Date:
        {' '}
        {date}
      </div>
      <div className="list-group list-group-flush">
        <div className="list-group-item">
          Description:
          {' '}
          {description}
        </div>
      </div>
    </div>
  );
};

export default Event;
