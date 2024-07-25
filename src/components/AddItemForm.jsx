import { useRef, useState } from "react";
import Button from "./Button";

export default function AddItemForm({ setItems }) {
  const inputRef = useRef(null);

  const [newItem, setNewItem] = useState({
    text: "",
    packed: false,
  });

  const handleOnChange = (e) => {
    const { value } = e.target;
    setNewItem({ ...newItem, text: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (!newItem.text) {
      alert(`Item name can not be empty`);
      inputRef.current.focus();
      return;
    }

    setItems((prev) => [...prev, newItem]);
    setNewItem({ text: "", packed: false });
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <h2>Add an item</h2>
      <input
        ref={inputRef}
        placeholder="Type item name here"
        name="newItem"
        value={newItem.text}
        onChange={handleOnChange}
        autoFocus
      />
      <Button>Add to list</Button>
    </form>
  );
}
