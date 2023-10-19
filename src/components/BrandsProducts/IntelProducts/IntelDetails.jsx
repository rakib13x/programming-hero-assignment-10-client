import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const IntelDetails = () => {
  const intel = useLoaderData();
  console.log(intel);
  const handleAddToCart = () => {
    const intelData = { ...intel, type: "intel" };
    console.log("Product added", intel);
    fetch("http://localhost:3000/myCart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(intelData),
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
      {intel.name}
      {intel.quantity}
      {intel.supplier}
      <button className="btn btn-neutral text-white" onClick={handleAddToCart}>
        add to cart
      </button>
    </div>
  );
};

export default IntelDetails;
