import React from 'react';

import Navbar from './Components/Navbar';
import Calculator from './Components/Calculator';
import Display from './Components/Display';

import 'bulma/css/bulma.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Calculator />
      <Display />
    </div>
  );
}

export default App;
