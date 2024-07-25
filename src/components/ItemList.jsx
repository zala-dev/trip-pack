import { useState } from "react";

const initialItems = [
  { text: "passport", packed: true },
  { text: "phone charger", packed: false },
  { text: "shaving kit", packed: false },
];

export default function ItemList() {
  const [items, setItems] = useState(initialItems);
  if (!items) {
    return <p>No items in the list!</p>;
  }
  return (
    <ul className="item-list">
      {items.map((item, idx) => (
        <Item key={idx} text={item.text} />
      ))}
    </ul>
  );
}

function Item({ text }) {
  return (
    <li className="item">
      <label>
        <input id="checkbox" type="checkbox" />
        {text}
      </label>
      <button>❌</button>
    </li>
  );
}
