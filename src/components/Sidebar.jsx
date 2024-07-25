import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

export default function Sidebar({ setItems }) {
  return (
    <aside className="sidebar">
      <AddItemForm setItems={setItems} />
      <ButtonGroup />
    </aside>
  );
}
