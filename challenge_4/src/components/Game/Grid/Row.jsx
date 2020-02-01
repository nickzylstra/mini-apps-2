import React from 'react';
import Cell from './Cell.jsx';

const Row = (props) => {
  const { row } = props;
  return (
    <div>
      {row.map((cellId) => (
        <Cell
          key={cellId}
          cellId={cellId}
        />
      ))}
    </div>
  )
};

export default Row;
