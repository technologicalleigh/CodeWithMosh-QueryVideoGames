import { useState } from "react";
import styles from "./ListGroup.module.css";
import styled from 'styled-components';

interface activeItemProp {
  active: boolean;
}
const ListItem = styled.li<activeItemProp>`
  color: ${props => props.active ? 'blue' : 'black'};
`;

interface Props {
  items: string[];
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, onSelectItem }: Props) {
  //Hook
  const [selectIndex, setSelectIndex] = useState(0);

  //setting up css module that helps with css specificity by creating unique class names based on the module
  //otherwise, the class's name can be changed to listGroup and then we can use styles.listGroup 

  return (
    <>
      <h1>List</h1>
      <ul className={[styles['list-group'], styles.container].join(' ')}>
        {items.map((item, index) => (
          <ListItem
            active={index === selectIndex}
            key={item}
            onClick={() => {
              setSelectIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </ListItem>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
