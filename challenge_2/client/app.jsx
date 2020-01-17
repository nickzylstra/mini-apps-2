import React, { useState } from 'react';
import Graph from './Graph.jsx';

const startInit = new Date('2019-12-01');
const endInit = new Date('2019-12-31');

const App = () => {
  const [start, setStart] = useState(startInit);
  const [end, setEnd] = useState(endInit);

  return (
    <div>
      <Graph
        start={start}
        end={end}
      />
    </div>
  );
};

export default App;
