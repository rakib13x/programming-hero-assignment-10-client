import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const SamsungDetails = () => {
  const samsung = useLoaderData();
  console.log(samsung);
  const handleAddToCart = () => {
    const samsungData = { ...samsung, type: "samsung" };
    console.log("Product added", samsung);
    fetch("http://localhost:3000/myCart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(samsungData),
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
      {samsung.name}
      {samsung.quantity}
      {samsung.supplier}
      <button className="btn btn-neutral text-white" onClick={handleAddToCart}>
        add to cart
      </button>
    </div>
  );
};

export default SamsungDetails;
