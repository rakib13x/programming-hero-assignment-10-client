import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const AmdDetails = () => {
  const amd = useLoaderData();

  console.log(amd);
  const handleAddToCart = () => {
    const amdData = { ...amd, type: "amd" };
    fetch("http://localhost:3000/myCart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(amdData),
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
          console.log(data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      {amd.name}
      {amd.quantity}
      {amd.supplier}
      <button className="btn btn-neutral text-white" onClick={handleAddToCart}>
        add to cart
      </button>
    </div>
  );
};

export default AmdDetails;
