// hooks that returns true or false if given key is pressed.

import { useEffect, useState } from "react";

// it can be any key from keybord.
export function useKeyPress(key: string) {
    const [isKeyPressed, setIsKeyPressed] = useState(false);
    useEffect(() => {
        function handleKeyPress(e: KeyboardEvent) {
            if (e.key === key) {
                setIsKeyPressed(true);
            } else {
                setIsKeyPressed(false);
            }
        }
        document.addEventListener("keydown", handleKeyPress);
        return () => {
            document.removeEventListener("keydown", handleKeyPress);
        };
    });
    return isKeyPressed;
}
