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
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 pt-20 px-[120px] justify-center">
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
