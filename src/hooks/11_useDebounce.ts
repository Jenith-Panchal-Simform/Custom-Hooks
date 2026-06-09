import { useEffect, useState } from "react";

export function useDebounce<T>(value: T, delay = 500) {
    const [debouncedSearch, setDebouncedSearch] = useState<T>(value);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedSearch(value);
        }, delay);
        return () => {
            clearTimeout(timer);
        };
    }, [value, delay]);

    return debouncedSearch;
}
