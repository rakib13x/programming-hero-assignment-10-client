import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const AppleDetails = () => {
  const apple = useLoaderData();
  console.log(apple);
  const handleAddToCart = () => {
    const appleData = { ...apple, type: "apple" };
    console.log("Product added", apple);
    fetch("http://localhost:3000/myCart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(appleData),
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
      {apple.name}
      {apple.quantity}
      {apple.supplier}
      <button className="btn btn-neutral text-white" onClick={handleAddToCart}>
        add to cart
      </button>
    </div>
  );
};

export default AppleDetails;
