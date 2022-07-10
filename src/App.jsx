import React from 'react';
import 'bulma/css/bulma.min.css';

import Navbar from './Components/Navbar';
import Calculator from './Components/Calculator';
// import Display from './Components/Display';
// import Table from './Components/Table';

import './App.css';

function App() {
  const [userData, setUserData] = React.useState([]);

  return (
    <div className="App columns is-flex-direction-column m-0 p-4  is-align-items-center is-justify-content-center">
      <Navbar />
      <div className="column columns is-align-items-center is-justify-content-center">
        <Calculator userData={userData} setUserData={setUserData} />
      </div>
    </div>
  );
}

export default App;
