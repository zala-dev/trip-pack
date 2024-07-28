import { useItemsContext } from "../lib/custom-hooks";

export default function ItemCounter() {
  const { items } = useItemsContext();

  return (
    <p className="counter">
      {items.length === 0 ? (
        <strong>No Items</strong>
      ) : (
        <span>
          <strong>{items.filter((item) => item.packed).length}</strong> /{" "}
          {items.length} items packed
        </span>
      )}
    </p>
  );
}
