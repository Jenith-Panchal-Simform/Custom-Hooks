import { useLayoutEffect, useState } from "react";

export const useMediaQuery = (
    query: string,
    {
        defaultValue = false,
        initializeWithValue = true,
    }: { defaultValue?: boolean; initializeWithValue?: boolean } = {},
): boolean => {
    const getMatches = (query: string): boolean =>
        window.matchMedia(query).matches;

    const [matches, setMatches] = useState(() => {
        if (initializeWithValue) {
            return getMatches(query);
        }
        return defaultValue;
    });

    useLayoutEffect(() => {
        function handleChange() {
            setMatches(getMatches(query));
        }
        const matchMedia = window.matchMedia(query);
        handleChange();
        matchMedia.addEventListener("change", handleChange);

        return () => {
            matchMedia.removeEventListener("change", handleChange);
        };
    }, [query]);

    return matches;
};
