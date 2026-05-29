import { useEffect, useRef, useState } from "react";
import { useClipboard } from "../hooks/2_useClipBoard";

export function ClipboardDemo() {
    const { copied, copy, reset } = useClipboard();

    const inputRef = useRef(null);

    const [pastedText, setPastedText] = useState("");

    useEffect(() => {
        // COPY EVENT
        const handleCopyEvent = (e) => {
            const selectedText = window.getSelection().toString();

            console.log("Copied:", selectedText);

            // save copied text in hook/state
            copy(selectedText);
        };

        // PASTE EVENT
        const handlePasteEvent = (e) => {
            const pasted = e.clipboardData.getData("text");

            console.log("Pasted:", pasted);

            setPastedText(pasted);

            if (inputRef.current) {
                inputRef.current.value = pasted;
            }
        };

        document.addEventListener("copy", handleCopyEvent);
        document.addEventListener("paste", handlePasteEvent);

        return () => {
            document.removeEventListener("copy", handleCopyEvent);
            document.removeEventListener("paste", handlePasteEvent);
        };
    }, [copy]);

    function handleCopyButton() {
        if (inputRef.current) {
            copy(inputRef.current.value);
        }
    }

    function handleReset() {
        if (inputRef.current) {
            inputRef.current.value = "";
        }
        setPastedText("");
        reset();
    }

    return (
        <div>
            <input type="text" ref={inputRef} />
            <button onClick={handleCopyButton}>Copy Text</button>
            <button onClick={handleReset}>Reset</button>
            {copied && <p>Copied Text: {copied}</p>}
            {pastedText && <p>Pasted Text: {pastedText}</p>}
        </div>
    );
}
