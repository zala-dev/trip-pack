import { createContext, useEffect, useState } from "react";

export const ItemsContext = createContext();

export default function ItemsContextProvider({ children }) {
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
    <ItemsContext.Provider
      value={{
        items,
        addItem,
        deleteItem,
        toggeleCheckbox,
        removeAllItems,
        resetToInitialItems,
        markAllAsComplete,
        markAllAsIncomplete,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
}
