import { useRef, useState } from "react";
import Button from "./Button";

import { useItemsStore } from "../store/items-store";

export default function AddItemForm() {
  const addItem = useItemsStore((state) => state.addItem);

  const inputRef = useRef(null);

  const [itemName, setItemName] = useState("");

  const handleOnChange = (e) => {
    const { value } = e.target;
    setItemName(value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (!itemName) {
      alert(`Item name can not be empty`);
      inputRef.current.focus();
      return;
    }

    addItem(itemName);
    setItemName("");
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <h2>Add an item</h2>
      <input
        ref={inputRef}
        placeholder="Passport..."
        name="itemName"
        value={itemName}
        onChange={handleOnChange}
        autoFocus
      />
      <Button>Add to list</Button>
    </form>
  );
}
