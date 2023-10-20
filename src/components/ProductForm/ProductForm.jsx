const Productform = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full md:w-1/2 lg:w-1/3">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Product Name</span>
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
            <span className="label-text">Product Image</span>
          </label>
          <label className="input-group">
            <span>Image</span>
            <input
              type="text"
              name="image"
              placeholder="Image URL"
              className="input input-bordered w-full"
            />
          </label>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Brand Name</span>
          </label>
          <label className="input-group">
            <span>Name</span>
            <input
              type="text"
              name="brand"
              placeholder="Brand Name"
              className="input input-bordered w-full"
            />
          </label>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Type</span>
          </label>
          <label className="input-group">
            <span>Brand Type</span>
            <input
              type="text"
              name="type"
              placeholder="Brand Type"
              className="input input-bordered w-full"
            />
          </label>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Product Price</span>
          </label>
          <label className="input-group">
            <span>Price</span>
            <input
              type="text"
              name="price"
              placeholder="Price"
              className="input input-bordered w-full"
            />
          </label>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <label className="input-group">
            <span>Description</span>
            <input
              type="text"
              name="description"
              placeholder="Description"
              className="input input-bordered w-full"
            />
          </label>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Rating</span>
          </label>
          <label className="input-group">
            <span>Rating</span>
            <input
              type="text"
              name="rating"
              placeholder="Rating"
              className="input input-bordered w-full"
            />
          </label>
        </div>

        <div className="pt-8 flex justify-center">
          <input
            type="submit"
            value="Add Product"
            className="btn w-2/4 bg-green-700 border-none text-white hover:bg-green-200 hover:text-black"
          />
        </div>
      </div>
    </div>
  );
};

export default Productform;
