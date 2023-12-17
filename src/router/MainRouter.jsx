import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBarComponent from "../components/NavBarComponent/NavBarComponent";
import Products from "../pages/Products";
import ItemDetailContainer from "../pages/ItemDetailContainer"
import ProductsByCategory from "../pages/ProductsByCategory"
import Home from "../pages/Home";

export const MainRouter = (id=2) => {
  return (
    <BrowserRouter>
      <NavBarComponent />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/item/:id" element={<ItemDetailContainer/>}/>
        <Route path="/category/:category" element={<ProductsByCategory/>}/>
      </Routes>
    </BrowserRouter>
  );
};
