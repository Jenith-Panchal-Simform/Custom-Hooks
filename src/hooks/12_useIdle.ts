import { useEffect, useState } from "react";

export function useIdle(timeout = 10000) {
    const [isIdle, setIsIdle] = useState(false);

    useEffect(() => {
        let timer;

        const resetTimer = () => {
            clearTimeout(timer);
            setIsIdle(false);
            timer = setTimeout(() => setIsIdle(true), timeout);
        };

        // Listen for user activity
        window.addEventListener("mousemove", resetTimer);
        window.addEventListener("keydown", resetTimer);
        window.addEventListener("scroll", resetTimer);
        window.addEventListener("touchstart", resetTimer);

        // Start the initial timer
        resetTimer();

        return () => {
            clearTimeout(timer);
            window.removeEventListener("mousemove", resetTimer);
            window.removeEventListener("keydown", resetTimer);
            window.removeEventListener("scroll", resetTimer);
            window.removeEventListener("touchstart", resetTimer);
        };
    }, [timeout]);

    return isIdle;
}
