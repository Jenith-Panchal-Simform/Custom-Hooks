import { useState } from "react";

// hook that provide reset function, using which we can reset state to initial state.
export function useResetState(initialValue) {
    const [state, setState] = useState(initialValue);
    function resetState() {
        setState(initialValue);
    }
    return [state, setState, resetState];
}
