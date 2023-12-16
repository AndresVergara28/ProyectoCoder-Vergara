import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBarComponent from "./components/NavBarComponent/NavBarComponent";
import CounterComponent from "./components/CounterComponent/CounterComponent";

import "bootstrap/dist/css/bootstrap.min.css";
import { useGetProducts } from "./hooks/useProducts";

const App = () => {

  const {productsData} = useGetProducts();
 
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
