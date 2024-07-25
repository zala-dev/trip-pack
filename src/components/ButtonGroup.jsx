import Button from "./Button";

export default function ButtonGroup() {
  const secondaryButtonTexts = [
    "Mark all as complete",
    "Mark all as incomplete",
    "Reset",
    "Remove all items",
  ];
  return (
    <section className="button-group">
      {secondaryButtonTexts.map((btnText) => (
        <Button type="secondary" key={btnText}>
          {btnText}
        </Button>
      ))}
    </section>
  );
}
