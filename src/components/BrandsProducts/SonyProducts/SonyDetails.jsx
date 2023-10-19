import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const SonyDetails = () => {
  const sony = useLoaderData();
  console.log(sony);
  const handleAddToCart = () => {
    const sonyData = { ...sony, type: "sony" };
    console.log("Product added", sony);
    fetch("http://localhost:3000/myCart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(sonyData),
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
      {sony.name}
      {sony.quantity}
      {sony.supplier}
      <button className="btn btn-neutral text-white" onClick={handleAddToCart}>
        add to cart
      </button>
    </div>
  );
};

export default SonyDetails;
