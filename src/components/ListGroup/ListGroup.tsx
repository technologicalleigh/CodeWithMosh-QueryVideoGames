import { useState } from "react";
import styles from "./ListGroup.module.css";
interface Props {
  items: string[];
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, onSelectItem }: Props) {
  //Hook
  const [selectIndex, setSelectIndex] = useState(-1);

  //setting up css module that helps with css specificity by creating unique class names based on the module
  //otherwise, the class's name can be changed to listGroup and then we can use styles.listGroup 

  return (
    <>
      <h1>List</h1>
      <ul className={[styles['list-group'], styles.container].join(' ')}>
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
