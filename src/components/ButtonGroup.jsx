import Button from "./Button";

export default function ButtonGroup({
  removeAllItems,
  resetToInitialItems,
  markAllAsComplete,
  markAllAsIncomplete,
}) {
  const secondaryButtonTexts = [
    { text: "Mark all as complete", onClick: markAllAsComplete },
    { text: "Mark all as incomplete", onClick: markAllAsIncomplete },
    { text: "Reset", onClick: resetToInitialItems },
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
