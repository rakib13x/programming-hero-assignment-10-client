import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import Productform from "../../ProductForm/Productform";

const UpdateIntel = () => {
  const intel = useLoaderData();
  const { _id, name, quantity, supplier, taste, category, details, photo } =
    intel;
  console.log(intel);

  const handleUpdateIntel = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const updatedIntel = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };

    //send data to server
    fetch(`http://localhost:3000/intel/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedIntel),
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
      <h2 className="text-6xl font-semibold text-green-700 text-center">
        Update {name}
      </h2>
      <form onSubmit={handleUpdateIntel}>
        {/**form name and quantity row */}
        <Productform />
      </form>
    </div>
  );
};

export default UpdateIntel;
