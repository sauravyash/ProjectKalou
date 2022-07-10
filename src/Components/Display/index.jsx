/* eslint-disable */
import React from 'react';

import { faker } from '@faker-js/faker';

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

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export default function Display(props) {
  let displayData = props.displayData;
  const displayName = props.displayName;
  const chartData = {
    labels,
    datasets: [
      {
        label: displayName,
        data: displayData,
        labels: labels,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      // {
      //   label: 'Dataset 2',
      //   data: labels.map(() => faker.datatype.number({ min: -1, max: 1 })),
      //   borderColor: 'rgb(53, 162, 235)',
      //   backgroundColor: 'rgba(53, 162, 235, 0.5)',
      // },
    ],
  };
  return (
    <div className="">
      <ChartContainer className="column">
        <Chart className="p-5" type="line" options={options} data={chartData} />
      </ChartContainer>
    </div>
  );
}
