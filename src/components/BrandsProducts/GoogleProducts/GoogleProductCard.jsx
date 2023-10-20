import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Footer from "../../Footer/Footer";

const GoogleProductCard = ({ google, setGoogles, googles }) => {
  const { _id, name, image, brand, type, price, description, rating } = google;
  const navigate = useNavigate();
  const handleGoogleDetails = () => {
    navigate(`/google-product-details/${google._id}`);
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
        fetch(
          `https://server-ip4el90bd-rakib13x-gmailcom.vercel.app/google/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              console.log("delete Confirmed");
              const remaining = googles.filter((google) => google._id !== _id);
              setGoogles(remaining);
            }
          });
      }
    });
  };
  return (
    <>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 justify-center ">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={image} alt="Product" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {name}
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>
              {description.substring(0, 80)}{" "}
              <span className="text-red-500 font-bold">read more...</span>
            </p>

            <div className="card-actions justify-center">
              <button
                className="btn btn-active bg-green-600 text-white"
                onClick={handleGoogleDetails}
              >
                Details
              </button>
              <Link to={`/updateGoogle/${_id}`}>
                <button className="btn bg-green-600 text-white">Edit</button>
              </Link>
              <button
                className="btn bg-green-600 text-white"
                onClick={() => handleDelete(_id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GoogleProductCard;
