export default function ItemList({ items }) {
  if (!items) {
    return <p>No items in the list!</p>;
  }
  return (
    <ul className="item-list">
      {items.map((item, idx) => (
        <Item key={idx} item={item} />
      ))}
    </ul>
  );
}

function Item({ item }) {
  const { name, packed } = item;
  return (
    <li className="item">
      <label>
        <input id="checkbox" type="checkbox" checked={packed} />
        {name}
      </label>
      <button>❌</button>
    </li>
  );
}
