import React from 'react';
import { faker } from '@faker-js/faker';
import 'bulma/css/bulma.min.css';

import Navbar from './Components/Navbar';
import Calculator from './Components/Calculator';
import Display from './Components/Display';
import Table from './Components/Table';

import './App.css';

const sampleArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const sample = [
  {
    amount: 200, freq: 'Week', id: 1657426807440, name: 'rent', type: 'Expense',
  },
  {
    amount: 620, freq: 'Fortnight', id: 1657426850888, name: 'job', type: 'Income',
  },
  {
    amount: 1200, freq: 'None', id: 1657426876768, name: 'stocks', type: 'Asset',
  },
  {
    amount: 920, freq: 'None', id: 1657426889995, name: 'crypto', type: 'Asset',
  },
  {
    amount: 400, freq: 'None', id: 1657427083991, name: 'taxes', type: 'Liability',
  },
];

function App() {
  const [userData, setUserData] = React.useState(sample);

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
        data: sampleArray.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  return (
    <div className="App columns is-flex-direction-column m-0 p-4 is-align-items-center is-justify-content-center">
      <Navbar />
      <div className="container column columns is-justify-content-center" style={{ width: '100%' }}>
        <Calculator userData={userData} setUserData={setUserData} />
        <Table userData={userData} setUserData={setUserData} />
      </div>
      <Display className="column" chartData={uD} />
    </div>
  );
}

export default App;
