import React from "react";

const FeaturedDetails = ({ product }) => {
  console.log(product);
  return (
    <div className="pt-6">
      <div className="card card-compact w-[150px] bg-base-100 drop-shadow-xl">
        <figure>
          <img src={product.image} alt="Shoes" />
        </figure>
        <div className="card-body text-center">
          <h2 className=" text-sm text-center">Shoes</h2>
        </div>
      </div>
    </div>
  );
};

export default FeaturedDetails;
