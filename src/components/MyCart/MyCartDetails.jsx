import React from "react";
import Swal from "sweetalert2";

const MyCartDetails = ({ product, products, setProducts }) => {
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Show a loading state
        setProducts((prevProducts) =>
          prevProducts.map((product) =>
            product._id === _id ? { ...product, deleting: true } : product
          )
        );

        fetch(
          `https://server-ip4el90bd-rakib13x-gmailcom.vercel.app/myCart/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              // Filter out the deleted item and update state
              setProducts((prevProducts) =>
                prevProducts.filter((product) => product._id !== _id)
              );

              // Show a success message
              Swal.fire("Success!", "Product deleted successfully.", "success");
            }
          })
          .catch((error) => {
            console.error("Error deleting product: ", error);
            // Remove the loading state in case of an error
            setProducts((prevProducts) =>
              prevProducts.map((product) =>
                product._id === _id ? { ...product, deleting: false } : product
              )
            );
          });
      }
    });
  };

  return (
    <>
      {product ? (
        <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
          <div className="flex w-2/5">
            <div className="w-20">
              <img className="h-24" src={product.image} alt={product.name} />
            </div>
            <div className="flex flex-col justify-between ml-4 flex-grow">
              <span className="font-bold text-sm">{product.name}</span>
              <span className="text-red-500 text-xs">{product.brand}</span>
              <a
                href="#"
                className="font-semibold hover:text-red-500 text-gray-500 text-xs"
                onClick={() => handleDelete(product._id)}
              >
                Remove
              </a>
            </div>
          </div>
          <div className="flex justify-center w-1/5">
            <svg
              className="fill-current text-gray-600 w-3"
              viewBox="0 0 448 512"
            >
              <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
            </svg>

            <input
              className="mx-2 border text-center w-8"
              type="text"
              value={product.quantity}
            />

            <svg
              className="fill-current text-gray-600 w-3"
              viewBox="0 0 448 512"
            >
              <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
            </svg>
          </div>
          <span className="text-center w-1/5 font-semibold text-sm">
            {product.price}
          </span>
          <span className="text-center w-1/5 font-semibold text-sm">
            {product.price}
          </span>
        </div>
      ) : (
        "There nothing to show here"
      )}
    </>
  );
};

export default MyCartDetails;
