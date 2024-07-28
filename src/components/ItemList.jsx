import Select from "react-select";
import NoItem from "./NoItem";
import { useMemo, useState } from "react";

const sortingOptions = [
  { label: "Sort by default", value: "default" },
  { label: "Sort by packed", value: "packed" },
  { label: "Sort by unpacked", value: "unpacked" },
];

export default function ItemList({ items, deleteItem, toggeleCheckbox }) {
  const [sortBy, setSoryBy] = useState("default");

  const sortedItems = useMemo(
    () =>
      [...items].sort((a, b) => {
        if (sortBy === "packed") {
          return b.packed - a.packed;
        }

        if (sortBy === "unpacked") {
          return a.packed - b.packed;
        }

        return;
      }),
    [items, sortBy]
  );

  return (
    <ul className="item-list">
      {!items.length && <NoItem />}

      {items.length > 0 ? (
        <section className="sorting">
          <Select
            onChange={(option) => setSoryBy(option.value)}
            defaultValue={sortingOptions[0]}
            options={sortingOptions}
          />
        </section>
      ) : null}

      {sortedItems.map((item, idx) => (
        <Item
          key={idx}
          item={item}
          deleteItem={deleteItem}
          toggeleCheckbox={toggeleCheckbox}
        />
      ))}
    </ul>
  );
}

function Item({ item, deleteItem, toggeleCheckbox }) {
  const { id, name, packed } = item;
  return (
    <li className="item">
      <label>
        <input
          id="checkbox"
          type="checkbox"
          checked={packed}
          onChange={() => toggeleCheckbox(id)}
        />
        {name}
      </label>
      <button onClick={() => deleteItem(id)}>❌</button>
    </li>
  );
}
