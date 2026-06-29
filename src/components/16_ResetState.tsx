import React from "react";
import { useResetState } from "../hooks/16_useResetState";

export const ResetState = () => {
    const [state, setState, resetState] = useResetState(10);
    return (
        <div>
            <h1>ResetState Demo</h1>
            <p>State:{state}</p>
            <button onClick={() => setState((prev) => prev + 1)}>
                Increment
            </button>
            <button onClick={resetState}>Reset</button>
        </div>
    );
};
