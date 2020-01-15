/* eslint-disable react/no-array-index-key */
import React from 'react';
import Event from './Event.jsx';


const Events = (props) => {
  const { events } = props;
  return (
    <>
      {events.map((event, idx) => <Event key={idx} event={event} />)}
    </>
  );
};

export default Events;
