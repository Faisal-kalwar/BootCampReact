import React, { useContext } from 'react';
import CounterContex from './CounterContex';

const Child = (props)=> {
    let counterValue = useContext(CounterContex)
    console.log(counterValue)
    return (
        <div>
        <h1>{props.myName}</h1>
        <h2>Counter value is: {counterValue[0]}</h2>
        <button onClick={()=> {counterValue[1](++counterValue[0])}}>Increment</button>
        </div>
    )
}
export default Child;