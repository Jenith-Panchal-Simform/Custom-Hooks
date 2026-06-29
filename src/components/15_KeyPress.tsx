import React from "react";
import { useKeyPress } from "../hooks/15_useKeyPress";

export const KeyPress = () => {
    // hooks that returns true or false if given key is pressed.
    // it can be any key from keybord.
    const isEscPressed = useKeyPress("Escape");
    console.log(isEscPressed);
    return (
        <div>
            KeyPresses Demo
            <h1>Enter Escape Key</h1>
            <p>Is Escape Clicked {isEscPressed ? "true" : "false"}</p>
        </div>
    );
};
