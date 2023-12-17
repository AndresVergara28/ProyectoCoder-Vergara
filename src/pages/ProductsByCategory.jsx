import React from "react";
import { useGetProductsByCategory } from "../hooks/useProducts";
import { useParams } from "react-router-dom";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";

const ProductsByCategory = () => {
  const { category } = useParams();
  const { productsData } = useGetProductsByCategory(category);
  
  
  return <ItemListContainer productsData={productsData}/>;
};

export default ProductsByCategory;
