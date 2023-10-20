import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Hero from "../Hero/Hero";
import ProductNameCard from "./ProductNameCard";
import FeaturedProducts from "../Featured/FeaturedProducts";
import Headline from "../../Headline";

const Home = () => {
  const navigate = useNavigate();

  const handleProductClick = (brand) => {
    navigate(`/${brand.toLowerCase()}product`);
  };

  const brands = ["Amd", "Apple", "Google", "Intel", "Samsung", "Sony"];

  return (
    <div className="lg:px-28 px-16 bg-gray-200">
      <Hero />
      <Headline />
      <FeaturedProducts />
      <div className="pt-10">
        <h1 className="text-black font-semibold text-2xl text-center">
          Featured Products
        </h1>
        <p className=" font-semibold text-sm text-center pt-2">
          Check & Get Your Desired Product!
        </p>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-10  justify-center pl-24 md:gap-10 pt-20">
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
