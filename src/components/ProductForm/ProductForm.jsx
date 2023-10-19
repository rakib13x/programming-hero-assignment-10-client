const Productform = () => {
  return (
    <div>
      {" "}
      <div className="md:flex gap-8">
        <div className="form-control md:w-1/2">
          <label className="label">
            <span className="label-text">Coffee Name</span>
          </label>
          <label className="input-group">
            <span>Name</span>
            <input
              type="text"
              name="name"
              placeholder="Coffee name"
              className="input input-bordered w-full"
            />
          </label>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Available Quantity</span>
          </label>
          <label className="input-group">
            <span>Available Quantity</span>
            <input
              type="text"
              name="quantity"
              placeholder="Available Quantity"
              className="input input-bordered"
            />
          </label>
        </div>
      </div>
      {/**form supplier row */}
      <div className="md:flex gap-8">
        <div className="form-control md:w-1/2">
          <label className="label">
            <span className="label-text">Supplier</span>
          </label>
          <label className="input-group">
            <span>Name</span>
            <input
              type="text"
              name="supplier"
              placeholder="supplier name"
              className="input input-bordered w-full"
            />
          </label>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Taste</span>
          </label>
          <label className="input-group">
            <span>Taste</span>
            <input
              type="text"
              name="taste"
              placeholder="Taste"
              className="input input-bordered"
            />
          </label>
        </div>
      </div>
      {/**form category and details row */}
      <div className="md:flex gap-8">
        <div className="form-control md:w-1/2">
          <label className="label">
            <span className="label-text">Category</span>
          </label>
          <label className="input-group">
            <span>Name</span>
            <input
              type="text"
              name="category"
              placeholder="Categories"
              className="input input-bordered w-full"
            />
          </label>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Details</span>
          </label>
          <label className="input-group">
            <span>Details</span>
            <input
              type="text"
              name="details"
              placeholder="Available Quantity"
              className="input input-bordered"
            />
          </label>
        </div>
      </div>
      {/**photo Url */}
      <div className="md:flex gap-8">
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">PhotoUrl</span>
          </label>
          <label className="input-group">
            <span>PhotoUrl</span>
            <input
              type="text"
              name="photo"
              placeholder="Categories"
              className="input input-bordered w-full"
            />
          </label>
        </div>
      </div>
      <input
        type="submit"
        value="Add Coffee"
        className="btn btn-block bg-black text-white hover:bg-gray-500"
      />
    </div>
  );
};

export default Productform;
