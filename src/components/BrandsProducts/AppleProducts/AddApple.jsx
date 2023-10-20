import React from "react";
import Productform from "../../ProductForm/Productform";
import Swal from "sweetalert2";

const AddApple = () => {
  const handleAddApple = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const image = form.image.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const price = form.price.value;
    const description = form.description.value;
    const rating = form.rating.value;

    const newApple = {
      name,
      image,
      brand,
      type,
      price,
      description,
      rating,
    };
    console.log(newApple);

    fetch("http://localhost:3000/apple", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newApple),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success",
            text: "Product Added Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="bg-green-200 p-24">
      <h2 className="text-6xl font-semibold text-center text-green-600">
        Add a apple Product
      </h2>
      <form onSubmit={handleAddApple}>
        <Productform />
      </form>
    </div>
  );
};

export default AddApple;
