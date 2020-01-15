import React from 'react';

const Event = (props) => {
  const { event } = props;
  const { date, description } = event;
  return (
    <div
      className="card"
      style={{
        width: '30rem',
        margin: '20px',
      }}
    >
      <div className="card-header">
        Event
      </div>
      <div className="list-group list-group-flush">
        <span className="list-group-item">
          Date:
          {' '}
          {date}
        </span>
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
