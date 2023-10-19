import React from "react";
import Swal from "sweetalert2";
const MyCartDetails = ({ product, products, setProducts }) => {
  console.log(product);
  console.log(products);

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
        fetch(`http://localhost:3000/myCart/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("Delete response:", data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              console.log("Item deleted successfully");

              // Filter out the deleted item and update state
              const remaining = products.filter(
                (product) => product._id !== _id
              );

              console.log("Remaining items:", remaining);
              setProducts(remaining);
            }
          });
      }
    });
  };
  return (
    <div>
      {product.name}
      {product._id}
      <button
        className="btn btn-neutral"
        onClick={() => handleDelete(product._id)}
      >
        delete
      </button>
    </div>
  );
};

export default MyCartDetails;
