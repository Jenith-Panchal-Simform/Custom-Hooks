import React from "react";
import { useWindowSize } from "../hooks/10_useWindowSize";

const WindowDimension = () => {
    const dimension = useWindowSize();
    return (
        <div>
            <h2>18_WindowDimension</h2>

            <p>
                {dimension.height} X {dimension.width}
            </p>
        </div>
    );
};

export default WindowDimension;
