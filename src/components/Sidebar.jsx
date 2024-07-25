import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

export default function Sidebar({
  addItem,
  removeAllItems,
  resetToInitialItems,
  markAllAsComplete,
  markAllAsIncomplete,
}) {
  return (
    <aside className="sidebar">
      <AddItemForm onAddItem={addItem} />
      <ButtonGroup
        removeAllItems={removeAllItems}
        resetToInitialItems={resetToInitialItems}
        markAllAsComplete={markAllAsComplete}
        markAllAsIncomplete={markAllAsIncomplete}
      />
    </aside>
  );
}
