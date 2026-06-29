import React, { useState } from "react";
import { useIsFirstRender } from "../hooks/20_useIsFirstRender";

const FirstRender = () => {
    const render = useIsFirstRender();
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>Is First Render</h1>
            <p>{render ? "first" : "not first"}</p>
            <p>{count}</p>
            <button onClick={() => setCount((prev) => prev + 1)}>
                Increment
            </button>
        </div>
    );
};

export default FirstRender;
