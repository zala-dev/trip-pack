import BackgroundText from "./BackgroundText";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import ItemList from "./ItemList";
import { initialItems } from "../lib/constants";
import { useState } from "react";

function App() {
  const [items, setItems] = useState(initialItems);
  return (
    <>
      <BackgroundText />
      <main>
        <Header />
        <ItemList items={items} />
        <Sidebar setItems={setItems} />
      </main>
      <Footer />
    </>
  );
}

export default App;
