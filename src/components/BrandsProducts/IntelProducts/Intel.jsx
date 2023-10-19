import { useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
import IntelProductCard from "./IntelProductCard";

const Intel = () => {
  const loadedIntels = useLoaderData();
  const [intels, setIntels] = useState([]);

  useEffect(() => {
    if (Array.isArray(loadedIntels)) {
      setIntels(loadedIntels);
    }
  }, [loadedIntels]);

  return (
    <div className="m-20">
      <h1 className="text-6xl my-20 text-center text-purple-600 ">
        Hot Cold Coffee : {intels.length}
      </h1>
      <div className="grid md:grid-cols-2 gap-4">
        {intels.map((intel) => (
          <IntelProductCard
            key={intel._id}
            intel={intel}
            intels={intels}
            setIntels={setIntels}
          />
        ))}
      </div>
    </div>
  );
};

export default Intel;
