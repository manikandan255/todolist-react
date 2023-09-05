import React, { useState, useEffect } from "react";
import { TiDelete } from "react-icons/ti";
import { BiEdit } from "react-icons/bi";
import { AiFillCheckCircle } from "react-icons/ai";
import { IoArrowUndoCircleSharp } from "react-icons/io5";

const LineItem = ({ item, handleCheck, handleDelete, handleEdit, editingItem }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(item.item);
  const [originalText, setOriginalText] = useState(item.item); 
  const handleDoubleClick = () => {
    setIsEditing(true);
    setOriginalText(item.item);
  };

  const handleSaveEdit = () => {
    if (editedText.trim() === "") {
      return;
    }
    handleEdit(item.id, editedText);
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedText(originalText); 
  };

  useEffect(() => {
    if (editingItem === item.id) {
      setEditedText(item.item);
      setIsEditing(true);
    } else {
      setIsEditing(false);
    } 
  }, [editingItem, item.id]);

 return (
    <li className="item item-container" key={item.id}>
      <input
        type="checkbox"
        onChange={() => handleCheck(item.id)}
        checked={item.checked}
      />
      {isEditing ? (
        <div className="edit-item-container">
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
          <button onClick={handleSaveEdit} className="check"><AiFillCheckCircle /></button>
          <button onClick={handleCancelEdit} className="undo"><IoArrowUndoCircleSharp /></button>
        </div>
      ) : (
        <>
          <label
            style={item.checked ? { textDecoration: "line-through" } : null}
            onDoubleClick={handleDoubleClick}
          >
            {editedText}
          </label>
          <BiEdit
            onClick={handleDoubleClick}
            role="button"
            tabIndex="0"
            aria-label={`Edit ${editedText}`}
            className="edit-icon"
          />
        </>
      )}
      <TiDelete
        onClick={() => handleDelete(item.id)}
        role="button"
        tabIndex="0"
        aria-label={`Delete ${item.item}`}
      />
    </li>
  );
};

export default LineItem;
