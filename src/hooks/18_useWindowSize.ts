import { useEffect, useState } from "react";

type DimensionType = {
    height: number;
    width: number;
};
export const useWindowSize = () => {
    const [dimension, setDimension] = useState<DimensionType>({
        height: window.innerHeight,
        width: window.innerWidth,
    });

    useEffect(() => {
        function handleResize() {
            setDimension({
                height: window.innerHeight,
                width: window.innerWidth,
            });
        }

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return dimension;
};
