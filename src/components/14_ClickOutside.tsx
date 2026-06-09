import React, { useRef } from "react";
import { useOnClickOutside } from "../hooks/14_useOnclickOutside";


const InnerDiv: React.FC = () => {
  const innerRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(innerRef, () => {
    console.log("Clicked outside InnerDiv!");
  });

  return (
    <div
      ref={innerRef}
      style={{
        height: "50vh",
        width: "50vw",
        backgroundColor: "#FCA5A5",
      }}
    >
      InnerDiv
    </div>
  );
};

export const ClickOutside = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "#FECACA",
      }}
    >
      <h1>ClickOutside</h1>
      <InnerDiv />
    </div>
  );
};
