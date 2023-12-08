import ItemListContainer from './components/ItemList/ItemListContainer';
import CarouselComponent from './components/Carousel/CarouselComponent';
import NavBarComponent from './components/NavBar/NavBarComponent';
import { useEffect, useState } from 'react';
import { getProducts } from './services';

import 'bootstrap/dist/css/bootstrap.min.css';




const App = () => {

  const [productsData,setProductsData] = useState([]);


  useEffect(() => {
    getProducts()
      .then(response => {
        setProductsData(response.data.products);
      })
      .catch(error => {
        console.log(error);
      });

  }, []);
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <NavBarComponent />
      <ItemListContainer greeting='Bienvenido a mi tienda' productsData={productsData}/>
      <CarouselComponent />
    </div>
  )
}

export default App
