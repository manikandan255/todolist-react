import React from "react";
import LineItem from "./LineItem";

const ItemsList = ({ items, handleCheck, handleDelete, handleEdit }) => {
  return (
    <ul>
      {items.map((item) => (
        <LineItem
          item={item}
          key={item.id}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      ))}
    </ul>
  );
};

export default ItemsList;
