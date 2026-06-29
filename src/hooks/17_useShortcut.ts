import { useEffect } from "react";

export const useShortCut = (
    {
        ctrl = false,
        shift = false,
        key,
    }: {
        ctrl?: boolean;
        shift?: boolean;
        key: string;
    },
    callback: (e: KeyboardEvent) => void,
) => {
    useEffect(() => {
        function handleKeyDown(e: KeyboardEvent) {
            if (
                e.ctrlKey === ctrl &&
                e.shiftKey === shift &&
                e.key.toLowerCase() == key.toLowerCase()
            )
                callback(e);
        }

        window.addEventListener("keydown", handleKeyDown);

        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [ctrl, shift, key, callback]);
};
