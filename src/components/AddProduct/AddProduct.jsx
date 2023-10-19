import { Outlet, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const AddProduct = () => {
  const navigate = useNavigate();

  const handleAddCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(newCoffee);

    //send data to server
    fetch("http://localhost:3000/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
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
    <div className="bg-[#F4F3F0] p-24">
      <h2 className="text-3xl font-extrabold">Add a Coffee</h2>
      <form onSubmit={handleAddCoffee}></form>
      <div className="flex flex-col gap-8">
        <button onClick={() => navigate("/addAmd")}>Add a AmdProduct</button>
        <button onClick={() => navigate("/addApple")}>
          Add a AppleProduct
        </button>
        <button onClick={() => navigate("/addGoogle")}>
          Add a GoogleProduct
        </button>
        <button onClick={() => navigate("/addIntel")}>
          Add a IntelProduct
        </button>
        <button onClick={() => navigate("/addSamsung")}>
          Add a SamsungProduct
        </button>
        <button onClick={() => navigate("/addSony")}>Add a SonyProduct</button>
      </div>
    </div>
  );
};

export default AddProduct;
