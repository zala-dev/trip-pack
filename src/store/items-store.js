import { create } from "zustand";

// Function to get items from localStorage
const getInitialItems = () => {
  const items = localStorage.getItem("items");
  return items ? JSON.parse(items) : [];
};

export const useItemsStore = create((set) => ({
  items: getInitialItems(),
  addItem: (newItemName) => {
    set((state) => {
      const newItem = {
        id: new Date().getTime(),
        name: newItemName,
        packed: false,
      };
      const newItems = [...state.items, newItem];
      return { items: newItems };
    });
  },
  deleteItem: (id) => {
    set((state) => {
      const newItems = state.items.filter((item) => item.id !== id);
      return { items: newItems };
    });
  },
  removeAllItems: () => {
    set(() => ({ items: [] }));
  },
  toggleCheckbox: (id) => {
    set((state) => {
      const newItems = state.items.map((item) => {
        if (item.id === id) {
          return { ...item, packed: !item.packed };
        }
        return item;
      });
      return { items: newItems };
    });
  },
  markAllAsComplete: () => {
    set((state) => {
      const newItems = state.items.map((item) => {
        return { ...item, packed: true };
      });
      return { items: newItems };
    });
  },
  markAllAsIncomplete: () => {
    set((state) => {
      const newItems = state.items.map((item) => {
        return { ...item, packed: false };
      });
      return { items: newItems };
    });
  },
}));

// Subscribe to state changes to update localStorage
useItemsStore.subscribe((state) => {
  localStorage.setItem("items", JSON.stringify(state.items));
});
