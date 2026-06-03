import { useEffect, useRef } from "react";

export function usePrevious(value) {
    const prevValue = useRef(value);

    useEffect(() => {
        prevValue.current = value;
    }, [value]);

    return prevValue.current;
}
