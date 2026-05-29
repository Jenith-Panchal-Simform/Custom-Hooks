import { useState } from "react";

export function useCounter(initialValue = 0) {
    const [count, setCount] = useState(initialValue);
    return {
        increment: function () {
            setCount((prev) => prev + 1);
        },
        decrement: function () {
            setCount((prev) => prev - 1);
        },
        count: count,
        reset: function () {
            setCount(0);
        },
    };
}
