import React from "react";
import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import MyCartDetails from "./MyCartDetails";

const MyCart = () => {
  const loadedProducts = useLoaderData();
  console.log(loadedProducts);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (Array.isArray(loadedProducts)) {
      setProducts(loadedProducts);
    }
  }, [loadedProducts]);
  return (
    <div>
      {products.length}
      {products.map((product) => (
        <MyCartDetails
          key={product._id}
          product={product}
          products={products}
          setProducts={setProducts}
        />
      ))}
    </div>
  );
};

export default MyCart;
