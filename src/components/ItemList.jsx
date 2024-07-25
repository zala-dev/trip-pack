export default function ItemList({ items }) {
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
