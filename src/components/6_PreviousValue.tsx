import { useState } from "react";
import { usePrevious } from "../hooks/5_usePrevious";

export const PreviousValue = () => {
    const [count, setCount] = useState(0);
    const previous = usePrevious(count);

    return (
        <div>
            <h2>Current: {count}</h2>
            <h2>Previous: {previous}</h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
};
