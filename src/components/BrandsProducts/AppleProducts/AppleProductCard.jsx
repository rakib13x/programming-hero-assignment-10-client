import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AppleProductCard = ({ apple, setApples, apples }) => {
  const { _id, name, quantity, supplier, taste, category, details, photo } =
    apple;
  const navigate = useNavigate();
  const handleAppleDetails = () => {
    navigate(`/apple-product-details/${apple._id}`);
  };
  const handleDelete = (_id) => {
    console.log("deleted", _id);
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
        fetch(`http://localhost:3000/apple/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              console.log("delete Confirmed");
              const remaining = apples.filter((apple) => apple._id !== _id);
              setApples(remaining);
            }
          });
      }
    });
  };
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img
          src="/images/stock/photo-1635805737707-575885ab0820.jpg"
          alt="Movie"
        />
      </figure>
      <div className="flex justify-between w-full pr-4">
        <h2 className="card-title">Name: {name}</h2>
        <div>
          <p>{supplier}</p>
          <p>{quantity}</p>
          <p>{taste}</p>
        </div>
        <div className="card-actions justify-end">
          <div className="btn-group btn-group-vertical space-y-4">
            <button className="btn btn-active" onClick={handleAppleDetails}>
              Details
            </button>
            <Link to={`/updateApple/${_id}`}>
              <button className="btn">Edit</button>
            </Link>
            <button className="btn" onClick={() => handleDelete(_id)}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppleProductCard;
