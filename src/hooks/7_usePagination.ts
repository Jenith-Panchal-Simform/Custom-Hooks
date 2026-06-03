import { useState } from "react";

export function usePagination(data, itemsPerPage) {
    const [startIndex, setStartIndex] = useState(0);

    const currentItems = data.slice(startIndex, startIndex + itemsPerPage);

    const nextPage = () => {
        const index = startIndex + itemsPerPage;
        if (index < data.length) {
            setStartIndex(index);
        }
    };

    const prevPage = () => {
        const index = startIndex - itemsPerPage;
        if (index >= 0) {
            setStartIndex(index);
        }
    };

    return { currentItems, nextPage, prevPage };
}
