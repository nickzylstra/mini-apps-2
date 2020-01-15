/* eslint-disable react/no-array-index-key */
import React from 'react';
import Event from './Event.jsx';


const Events = (props) => {
  const { events } = props;
  return (
    <div>
      {events.map((event, idx) => <Event key={idx} event={event} />)}
    </div>
  );
};

export default Events;
