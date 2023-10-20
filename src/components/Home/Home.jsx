import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Hero from "../Hero/Hero";
import ProductNameCard from "./ProductNameCard";

const Home = () => {
  const navigate = useNavigate();

  const handleProductClick = (brand) => {
    navigate(`/${brand.toLowerCase()}product`);
  };

  const brands = ["Amd", "Apple", "Google", "Intel", "Samsung", "Sony"];

  return (
    <div className="lg:px-28 px-16">
      <Hero />
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-8  justify-center pl-24 md:gap-10 pt-20">
        {brands.map((brand) => (
          <ProductNameCard
            key={brand}
            brand={brand}
            onClick={() => handleProductClick(brand)}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
