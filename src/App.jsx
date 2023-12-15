import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBarComponent from "./components/NavBarComponent/NavBarComponent";
import CounterComponent from "./components/CounterComponent/CounterComponent";
import { useEffect, useState } from "react";
import { getProducts } from "./services";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [productsData, setProductsData] = useState([]);
  useEffect(() => {
    getProducts()
      .then((response) => {
        setProductsData(response.data.products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <NavBarComponent />
      <ItemListContainer
        greeting="Bienvenido a mi tienda"
        productsData={productsData}
      />
      <CounterComponent  counterDefault= {1} stockData ={20} />
    </div>
  );
};

export default App;
