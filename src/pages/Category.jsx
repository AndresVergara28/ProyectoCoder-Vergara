import { useParams } from "react-router-dom";
import { useGetProductsByCategory } from "../hooks/useProducts";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer.jsx";

const Category = () => {
  const { category } = useParams();
  const { productsData } = useGetProductsByCategory(category);

  return (
    <div>
      <ItemListContainer productsData={productsData}/>
    </div>
  );
};

export default Category;
