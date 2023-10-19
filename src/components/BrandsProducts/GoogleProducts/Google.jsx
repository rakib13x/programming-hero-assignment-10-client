import { useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
import GoogleProductCard from "./GoogleProductCard";

const Google = () => {
  const loadedGoogles = useLoaderData();
  const [googles, setGoogles] = useState([]);

  useEffect(() => {
    if (Array.isArray(loadedGoogles)) {
      setGoogles(loadedGoogles);
    }
  }, [loadedGoogles]);

  return (
    <div className="m-20">
      <h1 className="text-6xl my-20 text-center text-purple-600 ">
        Hot Cold Coffee : {googles.length}
      </h1>
      <div className="grid md:grid-cols-2 gap-4">
        {googles.map((google) => (
          <GoogleProductCard
            key={google._id}
            google={google}
            googles={googles}
            setGoogles={setGoogles}
          />
        ))}
      </div>
    </div>
  );
};

export default Google;
