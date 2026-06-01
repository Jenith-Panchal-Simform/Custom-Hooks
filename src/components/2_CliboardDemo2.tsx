import { useState } from "react";
import { useClipBoardSimple } from "../hooks/2_useClipBoardSimple";

export const CliboardDemo2 = () => {
    const [text, setText] = useState("Hello world");
    const { isCopied, copyToClipBoard } = useClipBoardSimple();
    return (
        <div>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button onClick={() => copyToClipBoard(text)}>Copy</button>
            {isCopied && "Copied"}
        </div>
    );
};
