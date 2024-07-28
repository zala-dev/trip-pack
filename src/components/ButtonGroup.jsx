import { useItemsStore } from "../store/items-store";
import Button from "./Button";

export default function ButtonGroup() {
  const { markAllAsComplete, markAllAsIncomplete, removeAllItems } =
    useItemsStore((state) => ({
      markAllAsComplete: state.markAllAsComplete,
      markAllAsIncomplete: state.markAllAsIncomplete,
      removeAllItems: state.removeAllItems,
    }));

  const secondaryButtonTexts = [
    { text: "Mark all as complete", onClick: markAllAsComplete },
    { text: "Mark all as incomplete", onClick: markAllAsIncomplete },
    { text: "Remove all items", onClick: removeAllItems },
  ];

  return (
    <section className="button-group">
      {secondaryButtonTexts.map((button) => (
        <Button
          key={button.text + button.onClick.toString()}
          buttonType="secondary"
          onClick={button.onClick}
        >
          {button.text}
        </Button>
      ))}
    </section>
  );
}
