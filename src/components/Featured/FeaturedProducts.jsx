import React, { useEffect, useState } from "react";
import FeaturedDetails from "./FeaturedDetails";

const FeaturedProducts = () => {
  const [adCategory, setadCategory] = useState([]);

  useEffect(() => {
    fetch("/featured.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setadCategory(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="gap-8">
        <div className="pt-20 pb-6">
          <h1 className="text-black font-semibold text-2xl text-center">
            Featured Category
          </h1>
          <p className="text-black font-semibold text-sm text-center pt-2">
            Get Your Desired Product from Featured Category!
          </p>
        </div>

        <div className="grid xl:grid-cols-8 md:grid-cols-6 grid-cols-2 pl-24">
          {adCategory.map((product) => (
            <FeaturedDetails key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default FeaturedProducts;
