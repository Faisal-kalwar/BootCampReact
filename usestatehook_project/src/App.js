import React ,{useState} from 'react';
import './App.css';
import Message from './Message';

function App() {
  let [count, setcount] = useState(1);
  let[isMorning, setDay]= useState(false)
  return (
    <div className={` box ${isMorning ? 'dayLight' : ' '}`}>
      <h1>
        Day time : {isMorning? 'Morning' : 'Night'}
      </h1>
      <Message counter={count}/>
      <button onClick={() => setcount(++count)}>count</button>
      <button onClick={() => setDay(!isMorning)}>day</button>
    </div>
  );
}

export default App;
