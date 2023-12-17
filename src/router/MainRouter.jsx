import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBarComponent from "../components/NavBarComponent/NavBarComponent";
import Products from "../pages/Products";
import Category from "../pages/Category";
import ItemDetailContainer from "../pages/ItemDetailContainer"
import Home from "../pages/Home";

export const MainRouter = (id=2) => {
  return (
    <BrowserRouter>
      <NavBarComponent />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/products/:id" element={<ItemDetailContainer/>}/>
        <Route path="/products/category/:category" element={<Category/>}/>
      </Routes>
    </BrowserRouter>
  );
};
