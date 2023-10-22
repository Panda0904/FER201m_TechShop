import Footer from "./Customer/Components/Footer";
import Header from "./Customer/Components/Header";
import ProductDetail from "./Customer/Components/ProductDetail";
import ProductList from "./Customer/Components/ProductList";
import ManagerLayout from "./Manager/Components/ManagerLayout";


function App() {
  return (
    <>
      <Header />
      {/*<main><ProductList /></main> */}
      {/* <ManagerLayout/> */}

      <ProductDetail />
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
