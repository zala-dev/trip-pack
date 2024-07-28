import { useItemsStore } from "../store/items-store";

export default function ItemCounter() {
  const items = useItemsStore((state) => state.items);

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
