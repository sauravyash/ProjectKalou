import React from 'react';
import {
// Chart as ChartJS,
// defaults
} from 'chart.js';

import {
  Chart,
} from 'react-chartjs-2';

export default function Display() {
  const chartData = {};
  return (
    <Chart type="line" data={chartData} />
  );
}
