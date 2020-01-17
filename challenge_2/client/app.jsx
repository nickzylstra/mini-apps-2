import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Graph from './Graph.jsx';

const startInit = '2019-12-01';
const endInit = '2019-12-31';

const getPrices = async (start, end, setLabels, setPrices) => {
  try {
    const res = await axios.get('https://api.coindesk.com/v1/bpi/historical/close.json', {
      params: {
        start,
        end,
      },
    });
    setLabels(Object.keys(res.data.bpi));
    setPrices(Object.values(res.data.bpi).map((price) => Math.trunc(price * 100) / 100));
  } catch (error) {
    console.log(error);
  }
};

const App = () => {
  const [labels, setLabels] = useState([]);
  const [prices, setPrices] = useState([]);
  const [start, setStart] = useState(startInit);
  const [end, setEnd] = useState(endInit);

  useEffect(() => {
    getPrices(start, end, setLabels, setPrices);
  }, [start, end]);

  return (
    <div>
      <Graph
        labels={labels}
        prices={prices}
      />
    </div>
  );
};

export default App;
