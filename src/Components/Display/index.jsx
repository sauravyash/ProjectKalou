import React from 'react';
import PropTypes from 'prop-types';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import {
  Chart,
} from 'react-chartjs-2';

import { ChartContainer } from './DisplayElements';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
    },
  },
};

export default function Display(props) {
  const { chartData } = props;
  return (
    <div className="container" style={{ width: '100%' }}>
      <ChartContainer className="column">
        <Chart className="p-5" type="line" options={options} data={chartData} />
      </ChartContainer>
    </div>
  );
}

Display.propTypes = {
  chartData: PropTypes.shape({
    date: PropTypes.number,
    amount: PropTypes.number,
  }),
};

Display.defaultProps = {
  chartData: [],
};
