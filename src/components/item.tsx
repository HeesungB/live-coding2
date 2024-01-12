import { FunctionComponent } from "react";
import { ItemType } from "../types";

export const Item: FunctionComponent<{ item: ItemType }> = (props) => {
  return (
    <div className="item" key={props.item.id}>
      <div>
        <input type="checkbox" />
      </div>

      <div>{props.item.label}</div>
    </div>
  );
};
