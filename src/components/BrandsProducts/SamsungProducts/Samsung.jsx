import { useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
import SamsungProductCard from "./SamsungProductCard";

const Samsung = () => {
  const loadedSamsungs = useLoaderData();
  const [samsungs, setSamsungs] = useState([]);

  useEffect(() => {
    if (Array.isArray(loadedSamsungs)) {
      setSamsungs(loadedSamsungs);
    }
  }, [loadedSamsungs]);

  return (
    <div className="m-20">
      <h1 className="text-6xl my-20 text-center text-purple-600 ">
        Hot Cold Coffee : {samsungs.length}
      </h1>
      <div className="grid md:grid-cols-2 gap-4">
        {samsungs.map((samsung) => (
          <SamsungProductCard
            key={samsung._id}
            samsung={samsung}
            samsungs={samsungs}
            setSamsungs={setSamsungs}
          />
        ))}
      </div>
    </div>
  );
};

export default Samsung;
