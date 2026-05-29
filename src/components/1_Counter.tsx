import React from "react";
import { useCounter } from "../hooks/1_UseCounter";

export const Counter = () => {
    const { count, increment, decrement, reset } = useCounter(5);
    return <div>
        <h1>Count:{count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
    </div>;
};

