import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

export default function Sidebar({ addItem }) {
  return (
    <aside className="sidebar">
      <AddItemForm onAddItem={addItem} />
      <ButtonGroup />
    </aside>
  );
}
