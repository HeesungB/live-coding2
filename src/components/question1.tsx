import { FunctionComponent } from "react";
import { ItemType } from "../types";

export const Question1 = () => {
  const items: ItemType[] = [
    { id: 1, label: "Block 1" },
    { id: 2, label: "Block 2" },
    { id: 3, label: "Block 3" },
    { id: 4, label: "Block 4" },
    { id: 5, label: "Block 5" },
  ];

  return (
    <>
      <div>
        <input type="checkbox" />
        Select All
      </div>

      <div className="item-list">
        {items.map((item) => {
          return <Item key={item.id} item={item} />;
        })}
      </div>
    </>
  );
};

const Item: FunctionComponent<{ item: ItemType }> = (props) => {
  return (
    <div className="item" key={props.item.id}>
      <div>
        <input type="checkbox" />
      </div>

      <div>{props.item.label}</div>
    </div>
  );
};
