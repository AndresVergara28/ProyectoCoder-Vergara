import { useEffect, useState } from "react";
import {
  getProducts,
  getProductById,
  getProductsCategories,
  getProductsByCategory,
} from "../services";

/**
 * @description Custom Hook to get products
 * @returns {Array}
 */

export const useGetProducts = (limit = 100) => {
  const [productsData, setProductsData] = useState([]);
  useEffect(() => {
    getProducts(limit)
      .then((response) => {
        setProductsData(response.data.products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return { productsData };
};

export const useGetProductById = (id) => {
  const [productData, setProductData] = useState({});

  useEffect(() => {
    getProductById(id)
      .then((response) => {
        console.log(response);
        setProductData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return { productData };
};

export const useGetProductsCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getProductsCategories()
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return { categories };
};


export const useGetProductsByCategory = (category='smartphones') => {
  const [productsData, setProductsByCategory] = useState([]);

  useEffect(()=>{
    getProductsByCategory(category)
    .then((response)=>{
      setProductsByCategory(response.data.products)
    })
    .catch((error)=>{
      console.log(error)
    });
  },[category]);

  return { productsData }

}
