import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const GoogleDetails = () => {
  const google = useLoaderData();
  console.log(google);
  const handleAddToCart = () => {
    const googleData = { ...google, type: "google" };
    console.log("Product added", google);
    fetch("http://localhost:3000/myCart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(googleData),
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
      {google.name}
      {google.quantity}
      {google.supplier}
      <button className="btn btn-neutral text-white" onClick={handleAddToCart}>
        add to cart
      </button>
    </div>
  );
};

export default GoogleDetails;
