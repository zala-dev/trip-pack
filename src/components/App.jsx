import BackgroundText from "./BackgroundText";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import ItemList from "./ItemList";
import { initialItems } from "../lib/constants";
import { useEffect, useState } from "react";

function App() {
  const dataFromLocalStorage = JSON.parse(localStorage.getItem("items"));
  const [items, setItems] = useState(dataFromLocalStorage || []);

  const addItem = (newItemText) => {
    const newItem = {
      id: new Date().getTime(),
      name: newItemText,
      packed: false,
    };
    const newItems = [...items, newItem];
    setItems(newItems);
  };

  const deleteItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };

  const toggeleCheckbox = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, packed: !item.packed };
      }

      return item;
    });
    setItems(newItems);
  };

  const removeAllItems = () => {
    setItems([]);
  };

  const resetToInitialItems = () => {
    setItems(initialItems);
  };

  const markAllAsComplete = () => {
    const newItems = items.map((item) => {
      return { ...item, packed: true };
    });

    setItems(newItems);
  };

  const markAllAsIncomplete = () => {
    const newItems = items.map((item) => {
      return { ...item, packed: false };
    });

    setItems(newItems);
  };

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);
  return (
    <>
      <BackgroundText />
      <main>
        <Header
          totalNumOfItems={items.length}
          numOfItemsPacked={items.filter((item) => item.packed).length}
        />
        <ItemList
          items={items}
          deleteItem={deleteItem}
          toggeleCheckbox={toggeleCheckbox}
        />
        <Sidebar
          addItem={addItem}
          removeAllItems={removeAllItems}
          resetToInitialItems={resetToInitialItems}
          markAllAsComplete={markAllAsComplete}
          markAllAsIncomplete={markAllAsIncomplete}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
