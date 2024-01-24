import { useState } from "react";
import useCustom from "../hooks/custom";

export const Question3 = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div>
      <div style={{ marginBottom: "20px" }}>
        {isOpen ? <CountComponent /> : null}
      </div>

      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Close" : "Show"}
      </button>
    </div>
  );
};

const CountComponent = () => {
  const [count, setCount] = useState(0);
  useCustom(() => console.log(`count is ${count}`));

  return (
    <>
      <div>{count}</div>
      <div>
        <button onClick={() => setCount(count + 1)}>Count Up</button>
      </div>
    </>
  );
};
