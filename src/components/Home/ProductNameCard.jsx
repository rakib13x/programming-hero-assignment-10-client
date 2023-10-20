import React from "react";
import { useNavigate } from "react-router-dom";
import Hero from "../Hero/Hero";
const ProductNameCard = ({ brand, onClick }) => {
  console.log(brand);
  return (
    <div className="card w-96 bg-gray-200 shadow-md">
      <figure>
        <img
          src={`/images/${brand}_image.jpg`}
          alt={brand}
          className="h-[200px] w-full object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className=" text-center text-2xl font-bold">{brand}</h2>
        <div className="card-actions justify-center">
          <button className="btn btn-primary " onClick={onClick}>
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductNameCard;
