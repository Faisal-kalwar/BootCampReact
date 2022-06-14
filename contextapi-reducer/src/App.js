import './App.css';
import React , { useState } from 'react';
import Parent from './parent';
import CounterContex from './CounterContex';
function App() {
  let usestate = useState(25)
  return (
    <div className="App">
      <CounterContex.Provider value={usestate}>
        <div>
          <Parent />
        </div>
      </CounterContex.Provider>
    </div>
  );
}

export default App;
