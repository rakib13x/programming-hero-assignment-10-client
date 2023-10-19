import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import Productform from "../../ProductForm/Productform";

const UpdateSamsung = () => {
  const samsung = useLoaderData();
  const { _id, name, quantity, supplier, taste, category, details, photo } =
    samsung;
  console.log(samsung);

  const handleUpdateSamsung = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const updatedSamsung = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };

    //send data to server
    fetch(`http://localhost:3000/samsung/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedSamsung),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success",
            text: "Coffee Updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        Swal.fire({
          title: "Error",
          text: "Failed to update coffee",
          icon: "error",
          confirmButtonText: "OK",
        });
      });
  };
  return (
    <div className="bg-[#F4F3F0] p-24">
      <h2 className="text-3xl font-extrabold">Update Samsung:{name}</h2>
      <form onSubmit={handleUpdateSamsung}>
        {/**form name and quantity row */}
        <Productform />
      </form>
    </div>
  );
};

export default UpdateSamsung;
