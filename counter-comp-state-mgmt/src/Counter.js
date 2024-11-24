import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);

    const incrementAfterDelay = () => {
        setTimeout(() => {
            setCount(count + 1);
        }, 2000);
    };

    const IncrementTwice = () => {
        setCount(count + 2);
        setCount(count + 2);
    };

    const correctIncrementTwice = () => {
        setCount(prevCount => prevCount + 2);
    };

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={incrementAfterDelay}>Increment After Delay</button>
            <button onClick={IncrementTwice}>Increment Twice</button>
            <button onClick={correctIncrementTwice}>Correct Increment Twice</button>
        </div>
    );
};

export default Counter