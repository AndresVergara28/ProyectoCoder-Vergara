import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBarComponent from "./components/NavBarComponent/NavBarComponent";
import CounterComponent from "./components/CounterComponent/CounterComponent";

import "bootstrap/dist/css/bootstrap.min.css";
import { useGetProducts } from "./hooks/useProducts";
import UserData from "./components/NavBarComponent/UserData";

const App = () => {

 
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <NavBarComponent />
      <ItemListContainer
        greeting="Bienvenido a mi tienda"
        productsData={productsData}
      />
      <CounterComponent  counterDefault= {1} stockData ={20} />
      <UserData firstName='Andres' lastName="Vergara" age={20} birthDate={'99/10/28'} myObject={
        {
          product: "Nuevo producto",
          precio: 2400
        }
      }/>
    </div>
  );
};

export default App;
