import React from "react";
import Productform from "../../ProductForm/Productform";
import Swal from "sweetalert2";
import Footer from "../../Footer/Footer";

const AddAmd = () => {
  const handleAddAmd = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const image = form.image.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const price = form.price.value;
    const description = form.description.value;
    const rating = form.rating.value;

    const newAmd = {
      name,
      image,
      brand,
      type,
      price,
      description,
      rating,
    };
    console.log(newAmd);

    fetch("https://server-ip4el90bd-rakib13x-gmailcom.vercel.app/amd", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newAmd),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success",
            text: "Product added Successfully",
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
    <>
      <div className="bg-green-100 p-24">
        <h2 className="text-6xl font-semibold text-green-700 text-center">
          Add a amd Product
        </h2>
        <form onSubmit={handleAddAmd}>
          <Productform />
        </form>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default AddAmd;
