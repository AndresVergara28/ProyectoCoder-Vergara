import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import NavBarComponent from "../components/NavBarComponent/NavBarComponent";


export const MainRouter = () => {
  return (
    <BrowserRouter>
      <NavBarComponent />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Products/>}/>
      </Routes>
    </BrowserRouter>
  );
};

// cuando vayas a https://myapp.com/ ---->home
// cuando vayas a https://myapp.com/category ---->category
