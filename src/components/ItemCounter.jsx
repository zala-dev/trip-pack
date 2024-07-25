export default function ItemCounter({ totalNumOfItems, numOfItemsPacked }) {
  return (
    <p className="counter">
      {totalNumOfItems === 0 ? (
        <strong>No Items</strong>
      ) : (
        <span>
          <strong>{numOfItemsPacked}</strong> / {totalNumOfItems} items packed
        </span>
      )}
    </p>
  );
}
