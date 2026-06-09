import { useEffect } from "react";
import { useShowMore } from "../hooks/13_useShowMoreHook";

export const ShowMoreData = () => {
    const { setData, expanded, setExpanded, totalCount, currList, moreCount } =
        useShowMore(6);

    useEffect(() => {
        setData([10, 20, 30, 40, 50, 60, 70, 80, 90]);
    }, [setData]);

    return (
        <div>
            <h1>{totalCount}</h1>
            {currList.map((item) => (
                <>
                    <p key={item}>{item}</p>
                </>
            ))}
            {expanded ? (
                <button
                    onClick={() => {
                        setExpanded(!expanded);
                    }}
                >
                    show Less
                </button>
            ) : (
                <button
                    onClick={() => {
                        setExpanded(!expanded);
                    }}
                >
                    show More {moreCount}
                </button>
            )}
        </div>
    );
};
