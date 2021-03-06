import React from 'react';
// import { faker } from '@faker-js/faker';
import 'bulma/css/bulma.min.css';

import Navbar from './Components/Navbar';
import Calculator from './Components/Calculator';
import Display from './Components/Display';

import './App.css';

const sampleArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

function App() {
  const [chartData, setChartData] = React.useState([]);

  const uD = {
    labels: sampleArray.map((a) => {
      const d = new Date(Date.now());
      d.setMonth(d.getMonth() + a);
      return new Intl.DateTimeFormat('en-US', {
        month: 'short',
      }).format(d);
    }),
    datasets: [
      {
        label: 'Sample',
        data: chartData,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  return (
    <div className="App columns is-flex-direction-column m-0 p-4 is-align-items-center is-justify-content-center">
      <Navbar />
      <Calculator chartData={chartData} setChartData={setChartData} />
      <Display className="column" chartData={uD} />
    </div>
  );
}

export default App;
