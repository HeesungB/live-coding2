import { useState } from "react";

export const CountComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>{count}</div>
      <div>
        <button onClick={() => setCount(count + 1)}>Count Up</button>
      </div>
    </>
  );
};
