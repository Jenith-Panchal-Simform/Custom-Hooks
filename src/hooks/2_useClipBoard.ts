import { useState } from "react";

export function useClipboard() {
    const [copiedData, setCopiedData] = useState("");
    return {
        copy: function (text) {
            setCopiedData(text);
        },
        copied: copiedData,
        reset: function () {
            setCopiedData("");
        },
    };
}
