import React from "react";
import Productform from "../../ProductForm/Productform";
import Swal from "sweetalert2";

const AddGoogle = () => {
  const handleAddGoogle = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newGoogle = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(newGoogle);

    fetch("http://localhost:3000/google", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newGoogle),
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
    <div className="bg-gray-400 p-24">
      <h2 className="text-3xl font-extrabold">Add a Google Product</h2>
      <form onSubmit={handleAddGoogle}>
        <Productform />
      </form>
    </div>
  );
};

export default AddGoogle;
