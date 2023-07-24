import { useState } from "react";
interface Props {
  items: string[];
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, onSelectItem }: Props) {
  //Hook
  const [selectIndex, setSelectIndex] = useState(-1);

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
