import React from 'react';
import 'bulma/css/bulma.min.css';

import Navbar from './Components/Navbar';
import Calculator from './Components/Calculator';
import Display from './Components/Display';
import Table from './Components/Table';

import './App.css';

function App() {
  const [userData, setUserData] = React.useState([]);

  return (
    <div className="App">
      <Navbar />
      <Calculator userData={userData} setUserData={setUserData} />
      <Table className="column" />
      <Display userData={userData} />
    </div>
  );
}

export default App;
