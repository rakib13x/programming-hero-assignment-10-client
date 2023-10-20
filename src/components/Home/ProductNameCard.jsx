import React from "react";
import { useNavigate } from "react-router-dom";
import Hero from "../Hero/Hero";
const ProductNameCard = ({ brand, onClick }) => {
  console.log(brand);
  return (
    <div className="card w-96 bg-white shadow-md text-black">
      <figure>
        <img
          src={`/images/${brand}_image.jpg`}
          alt={brand}
          className="h-[200px] w-full object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className=" text-center text-3xl font-semibold">{brand}</h2>
        <div className="card-actions justify-center pt-2 w-full">
          <button
            className="btn btn-primary w-full bg-green-500 border-none text-white hover:bg-gray-300 hover:text-black "
            onClick={onClick}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductNameCard;
