import { useState } from "react";
import { CountComponent } from "./components/count";
import { Item } from "./components/item";
import { ItemType } from "./types";

import "./App.css";

function App() {
  const items: ItemType[] = [
    { id: 1, label: "Block 1" },
    { id: 2, label: "Block 2" },
    { id: 3, label: "Block 3" },
    { id: 4, label: "Block 4" },
    { id: 5, label: "Block 5" },
  ];

  const [isOpen, setIsOpen] = useState(true);

  function count() {}

  count();

  return (
    <>
      <div>
        <button onClick={() => setIsOpen(!isOpen)}>Show</button>
      </div>
      {isOpen ? <CountComponent /> : null}

      <div className="item-list">
        {items.map((item) => {
          return <Item key={item.id} item={item} />;
        })}
      </div>
    </>
  );
}

export default App;
