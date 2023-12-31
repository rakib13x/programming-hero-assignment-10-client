import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Hero from "../Hero/Hero";
import ProductNameCard from "./ProductNameCard";
import FeaturedProducts from "../Featured/FeaturedProducts";
import Headline from "../../Headline";
import Footer from "../Footer/Footer";
import Service from "../Services/Service";
import ServiceDetails from "../Services/ServiceDetails";

const Home = () => {
  const navigate = useNavigate();

  const handleProductClick = (brand) => {
    navigate(`/${brand.toLowerCase()}product`);
  };

  const brands = ["Amd", "Apple", "Google", "Intel", "Samsung", "Sony"];

  return (
    <>
      <Hero />
      <Headline />
      <FeaturedProducts />
      <div className="pt-10">
        <h1 className=" font-semibold text-4xl text-center">
          Featured Products
        </h1>
        <p className="font-semibold text-sm text-center pt-2">
          Check & Get Your Desired Product!
        </p>
      </div>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 justify-center pl-[120px] md:gap-10 pt-20">
        {brands.map((brand) => (
          <ProductNameCard
            key={brand}
            brand={brand}
            onClick={() => handleProductClick(brand)}
          />
        ))}
      </div>
      <Service />
      <Footer />
    </>
  );
};

export default Home;
