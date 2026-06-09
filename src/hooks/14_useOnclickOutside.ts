// useOnClickOutside: Detects when a user clicks outside the given DOM node and
// and runs a callback. This hook doesn't return anything; it just listens to outside clicks.

import { useEffect } from "react";

/**
 * useOnClickOutside:
 * Detects clicks outside the given element and runs the callback.
 */
export function useOnClickOutside(
    ref: React.RefObject<HTMLElement>,
    callback: () => void,
) {
    useEffect(() => {
        function handleClick(event: MouseEvent) {
            // If ref exists and click target is outside it
            if (ref.current && !ref.current.contains(event.target as Node)) {
                callback();
            }
        }

        document.addEventListener("mousedown", handleClick);
        return () => {
            document.removeEventListener("mousedown", handleClick);
        };
    }, [ref, callback]);
}
