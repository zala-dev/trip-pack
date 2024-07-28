import BackgroundText from "./BackgroundText";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import ItemList from "./ItemList";

function App() {
  return (
    <>
      <BackgroundText />
      <main>
        <Header />
        <ItemList />
        <Sidebar />
      </main>
      <Footer />
    </>
  );
}

export default App;
