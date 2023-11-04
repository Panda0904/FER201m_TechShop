import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./Customer/Components/Cart";
import Footer from "./Customer/Components/Footer";
import Header from "./Customer/Components/Header";
import ProductDetail from "./Customer/Components/ProductDetail";
import ProductList from "./Customer/Components/ProductList";
import ManagerLayout from "./Manager/Components/ManagerLayout";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Register from "./Customer/Components/Register";
import Login from "./Customer/Components/Login";
import Home from "./Customer/Components/Home";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
          <Routes>
            <Route path="/prodDetail" element={<ProductDetail/>}/>
            <Route path="/prodList" element={<ProductList/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/manager/dashboard" element={<ManagerLayout/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/" element={<Home/>}/>
          </Routes>
      </BrowserRouter>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
