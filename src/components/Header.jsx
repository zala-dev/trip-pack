import ItemCounter from "./ItemCounter";
import Logo from "./Logo";

export default function Header({ totalNumOfItems, numOfItemsPacked }) {
  return (
    <header>
      <Logo />
      <ItemCounter
        totalNumOfItems={totalNumOfItems}
        numOfItemsPacked={numOfItemsPacked}
      />
    </header>
  );
}
