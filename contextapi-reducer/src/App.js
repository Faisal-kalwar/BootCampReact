import './App.css';
// import React from 'react';
import Parent from './parent';
import CounterContex from './CounterContex';
function App() {
  return (
    <div className="App">
      {/* <CounterContex.Provider> */}
        <div>
          <Parent />
        </div>
      {/* </CounterContex.Provider> */}
    </div>
  );
}

export default App;
