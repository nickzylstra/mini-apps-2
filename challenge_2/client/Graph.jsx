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
      type: 'line',
      data: {
        labels,
        datasets: [{
          label: 'Date',
          data: prices,
          borderColor: [
            'rgba(255, 99, 132, 1)',
          ],
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
    <canvas
      id="chartCanvas"
      ref={chartRef}
      width="400"
      height="400"
    />
  );
};

export default Graph;
