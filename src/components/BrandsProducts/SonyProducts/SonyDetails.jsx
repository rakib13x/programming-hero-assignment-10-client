import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const SonyDetails = () => {
  const sony = useLoaderData();
  console.log(sony);
  const [rotate, setRotate] = useState(false);
  const [count, setCount] = useState(0);

  const addCount = () => {
    setCount((prev) => prev + 1);
  };

  const minusCount = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
    }
  };

  const renderRatingStars = (rating) => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      const starClassName = i <= rating ? "mask mask-star-2" : "rating-hidden";
      stars.push(
        <input
          key={i}
          type="radio"
          name="rating-9"
          className={starClassName}
          checked={i === rating}
        />
      );
    }

    return <div className="rating rating-lg">{stars}</div>;
  };
  const handleAddToCart = () => {
    const sonyData = { ...sony, type: "sony" };
    console.log("Product added", sony);
    fetch("http://localhost:3000/myCart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(sonyData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success",
            text: "User Added Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div>
      <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 ">
        <div className="flex justify-center items-center lg:flex-row flex-col gap-8">
          {/* Description Div */}
          <div className="w-full sm:w-96 md:w-8/12 lg:w-6/12 flex lg:flex-row flex-col lg:gap-8 sm:gap-6 gap-4">
            <div className="w-full lg:w-8/12 bg-gray-100 flex justify-center items-center">
              <img src={sony.image} alt="Product Preview" />
            </div>
          </div>
          <div className="w-full sm:w-96 md:w-8/12 lg:w-6/12 items-center">
            <p className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 font-normal text-base leading-4 text-gray-600">
              {sony.brand}
            </p>
            <h2 className="font-semibold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 mt-4">
              {sony.name}
            </h2>
            <div className="flex flex-row justify-between mt-5">
              <div className="flex flex-row space-x-3">
                {renderRatingStars(parseInt(sony.rating))}
                {/* Dynamic rating stars */}
              </div>
              <p className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 font-normal text-base leading-4 text-gray-700 hover:underline hover:text-gray-800 duration-100 cursor-pointer">
                22 reviews
              </p>
            </div>
            <p className="font-normal text-base leading-6 text-gray-600 mt-7">
              {sony.description}
            </p>
            <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 mt-6 ">
              {sony.price}
            </p>
            <div className="lg:mt-11 mt-10">
              <div className="flex flex-row justify-between">
                <p className="font-medium text-base leading-4 text-gray-600">
                  Select quantity
                </p>
                <div className="flex">
                  <span
                    onClick={minusCount}
                    className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer border border-gray-300 border-r-0 w-7 h-7 flex items-center justify-center pb-1"
                  >
                    -
                  </span>
                  <input
                    id="counter"
                    aria-label="input"
                    className="border border-gray-300 h-full text-center w-14 pb-1"
                    type="text"
                    value={count}
                    onChange={(e) => e.target.value}
                  />
                  <span
                    onClick={addCount}
                    className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer border border-gray-300 border-l-0 w-7 h-7 flex items-center justify-center pb-1 "
                  >
                    +
                  </span>
                </div>
              </div>
              <hr className="bg-gray-200 w-full my-2" />
              <div className="flex flex-row justify-between items-center mt-4"></div>
            </div>
            <button
              className="focus:outline-none focus:ring-2 hover:bg-black focus:ring-offset-2 focus:ring-gray-800 font-medium text-base leading-4 text-white bg-gray-800 w-full py-5 lg:mt-12 mt-6 "
              onClick={handleAddToCart}
            >
              Add to shopping bag
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center w-full">
          <div className="w-full sm:w-96 md:w-8/12 lg:w-full grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:gap-28 sm:gap-x-6 sm:gap-y-12 gap-y-12 sm:mt-14 mt-10"></div>
        </div>
      </div>
    </div>
  );
};

export default SonyDetails;
