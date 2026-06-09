// useShowMore hook
// Purpose: Manages a "show more / show less" pattern for a list of items — initially displaying only maxCount items, with
//  the ability to expand/collapse the full list
// argument in hook:
// maxCount: number => Maximum number of items to show in the collapsed state
// what it returns:

import { useState } from "react";

// setData: function to set the original data
// totalCount: total original data (array)
// setTag: function to toggle expanded/collapsed state
// expanded: boolean that says if we have more data and it can be expanded
// tagData: currently visible list data (array)
// allTagData: original all list data (array)
// moreCount: in collapsed state, how many more data we have (number)
// Use Case:
// assume we have total 10 items in an array. we want to show max 6 and show more button. if I click show more button, it show show remaining data as well along with show less button. if I click show less button, list should be collapsed again.

export function useShowMore(maxCount: number) {
    const [data, setData] = useState<Array<number>>([]);

    const [expanded, setExpanded] = useState(false);

    const totalCount = data.length;

    const currList = expanded ? data : data.slice(0, maxCount);

    const moreCount = data.length - currList.length;

    return {
        setData,
        expanded,
        setExpanded,
        totalCount,
        currList,
        moreCount,
    };
}
