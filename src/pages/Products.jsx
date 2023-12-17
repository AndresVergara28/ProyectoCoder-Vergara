import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import { useGetProducts } from "../hooks/useProducts";

const Products = () => {
  const { productsData } = useGetProducts();
  return <ItemListContainer productsData={productsData} />;
};

export default Products;
