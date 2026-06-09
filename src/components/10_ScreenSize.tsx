import { useWindowSize } from "../hooks/10_useWindowSize";

export function ScreenSize() {
  const { width, height } = useWindowSize();

  return (
    <h2>
      {width} x {height}
    </h2>
  );
}