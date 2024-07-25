import { useRef, useState } from "react";
import Button from "./Button";

export default function AddItemForm({ onAddItem }) {
  const inputRef = useRef(null);

  const [itemText, setItemText] = useState("");

  const handleOnChange = (e) => {
    const { value } = e.target;
    console.log("Value: ", value);
    setItemText(value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (!itemText) {
      alert(`Item name can not be empty`);
      inputRef.current.focus();
      return;
    }

    onAddItem(itemText);
    setItemText("");
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <h2>Add an item</h2>
      <input
        ref={inputRef}
        placeholder="Type item name here"
        name="itemText"
        value={itemText}
        onChange={handleOnChange}
        autoFocus
      />
      <Button>Add to list</Button>
    </form>
  );
}
