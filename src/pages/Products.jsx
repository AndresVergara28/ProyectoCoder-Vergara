import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import { useGetProducts } from "../hooks/useProducts";

const Products = () => {
  const { productsData } = useGetProducts(5);

  console.log(productsData);

  return (
    <h2>hola otra pagina</h2> 
   
   
  );
};

export default Products;
