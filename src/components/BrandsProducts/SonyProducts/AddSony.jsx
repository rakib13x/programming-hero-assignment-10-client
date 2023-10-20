import React from "react";
import Productform from "../../ProductForm/Productform";
import Swal from "sweetalert2";

const AddSony = () => {
  const handleAddSony = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const image = form.image.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const price = form.price.value;
    const description = form.description.value;
    const rating = form.rating.value;

    const newSony = {
      name,
      image,
      brand,
      type,
      price,
      description,
      rating,
    };
    console.log(newSony);

    fetch("http://localhost:3000/sony", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newSony),
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
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="bg-green-200 p-24">
      <h2 className="text-6xl font-semibold text-green-700 text-center">
        Add a Sony Product
      </h2>
      <form onSubmit={handleAddSony}>
        <Productform />
      </form>
    </div>
  );
};

export default AddSony;
