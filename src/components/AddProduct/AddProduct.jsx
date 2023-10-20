import { Outlet, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { LuPlus } from "react-icons/lu";
const AddProduct = () => {
  const navigate = useNavigate();
  const theme = localStorage.getItem("theme");
  console.log("Theme:", theme);
  const textClass = theme === "dark" ? "text-white" : "";
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
    <div className=" pt-20 pb-20 px-[120px] ">
      <h2 className={`text-4xl font-semibold text-center  ${textClass}`}>
        Add Your Product
      </h2>
      <form onSubmit={handleAddCoffee}></form>
      <div
        className={`grid lg:grid-cols-4 md:grid-cols-3 flex-col gap-8 pt-8 justify-center${textClass}`}
      >
        <button onClick={() => navigate("/addAmd")}>
          <div className="card card-compact w-40 bg-base-100 shadow-xl">
            <div className="card-actions justify-center">
              <LuPlus className="text-6xl text-center" />
            </div>
            <div className="card-actions justify-center text-2xl font-bold">
              Amd
            </div>
          </div>
        </button>
        <button onClick={() => navigate("/addApple")}>
          <div className="card card-compact w-40 bg-base-100 shadow-xl">
            <div className="card-actions justify-center">
              <LuPlus className="text-6xl text-center" />
            </div>
            <div className="card-actions justify-center text-2xl font-bold">
              Apple
            </div>
          </div>
        </button>
        <button onClick={() => navigate("/addGoogle")}>
          <div className="card card-compact w-40 bg-base-100 shadow-xl">
            <div className="card-actions justify-center">
              <LuPlus className="text-6xl text-center" />
            </div>
            <div className="card-actions justify-center text-2xl font-bold">
              Google
            </div>
          </div>
        </button>
        <button onClick={() => navigate("/addIntel")}>
          <div className="card card-compact w-40 bg-base-100 shadow-xl">
            <div className="card-actions justify-center">
              <LuPlus className="text-6xl text-center" />
            </div>
            <div className="card-actions justify-center text-2xl font-bold">
              Intel
            </div>
          </div>
        </button>
        <button onClick={() => navigate("/addSamsung")}>
          <div className="card card-compact w-40 bg-base-100 shadow-xl">
            <div className="card-actions justify-center">
              <LuPlus className="text-6xl text-center" />
            </div>
            <div className="card-actions justify-center text-2xl font-bold">
              Samsung
            </div>
          </div>
        </button>
        <button onClick={() => navigate("/addSony")}>
          <div className="card card-compact w-40 bg-base-100 shadow-xl">
            <div className="card-actions justify-center">
              <LuPlus className="text-6xl text-center" />
            </div>
            <div className="card-actions justify-center text-2xl font-bold">
              Sony
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default AddProduct;
