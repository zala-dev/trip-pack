import BackgroundText from "./BackgroundText";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import ItemList from "./ItemList";
import { initialItems } from "../lib/constants";
import { useState } from "react";

function App() {
  const [items, setItems] = useState(initialItems);

  const addItem = (newItemText) => {
    const newItem = {
      id: new Date().getTime(),
      name: newItemText,
      packed: false,
    };
    const newItems = [...items, newItem];
    setItems(newItems);
  };

  return (
    <>
      <BackgroundText />
      <main>
        <Header />
        <ItemList items={items} />
        <Sidebar addItem={addItem} />
      </main>
      <Footer />
    </>
  );
}

export default App;
