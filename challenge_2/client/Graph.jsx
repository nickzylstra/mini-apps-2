import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js';

const Graph = (props) => {
  const {
    labels, prices,
  } = props;
  const chartRef = useRef(null);

  useEffect(() => {
    const chartContext = chartRef.current.getContext('2d');

    // eslint-disable-next-line no-new
    new Chart(chartContext, {
      type: 'bar',
      data: {
        labels,
        datasets: [{
          label: 'Closing Price (USD)',
          data: prices,
          borderColor: 'rgba(0, 0, 255, 0.8)',
          backgroundColor: 'rgba(0, 0, 255, 0.8)',
          pointHitRadius: 3,
          borderWidth: 1,
        }],
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
            },
          }],
        },
      },
    });
  }, [labels, prices]);

  return (
    <div style={{ backgroundColor: 'black' }}>
      <canvas
        id="chartCanvas"
        ref={chartRef}
      />
    </div>
  );
};

export default Graph;
