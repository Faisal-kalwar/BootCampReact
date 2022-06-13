import React, { useContext } from 'react';
import CounterContex from './CounterContex';

const Child = (props) => {
    let counterValue = useContext(CounterContex)
    return (
        <div>
            <h1>{props.myName}</h1>
            <h2>Counter value is: {counterValue}</h2>
        </div>
    )
}
export default Child;