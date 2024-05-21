import React, { useState } from 'react';

function CounterApp() {
    let [count, setCount] = useState(0);

    const increment = () => {
        // setCount(count+1);
        setCount(prevCount => prevCount + 1);
        console.log(count);
    }

    const decrement = () => {
        // setCount(count-1);
        setCount(prevCount => prevCount + 1);
        console.log(count);
    }

    return (
        <div>
            <button onClick={increment} >+</button>
            <span> {count} </span>
            <button onClick={decrement} >-</button>
        </div>
    );
}

export default CounterApp;