import React from "react";
import { useMediaQuery } from "../hooks/19_useMediaQuery";

const MediaQuery = () => {
    const isMobile = useMediaQuery("(max-width:768px)");
    return (
        <div>
            19_MediaQuery
            {isMobile ? " mobileView" : "DesktopView"}
        </div>
    );
};

export default MediaQuery;
