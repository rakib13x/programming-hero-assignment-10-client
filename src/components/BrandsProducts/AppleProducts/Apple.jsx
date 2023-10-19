import { useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
import AppleProductCard from "./AppleProductCard";

const Apple = () => {
  const loadedApples = useLoaderData();
  const [apples, setApples] = useState([]);

  useEffect(() => {
    if (Array.isArray(loadedApples)) {
      setApples(loadedApples);
    }
  }, [loadedApples]);

  return (
    <div className="m-20">
      <h1 className="text-6xl my-20 text-center text-purple-600 ">
        Hot Cold Coffee : {apples.length}
      </h1>
      <div className="grid md:grid-cols-2 gap-4">
        {apples.map((apple) => (
          <AppleProductCard
            key={apple._id}
            apple={apple}
            apples={apples}
            setApples={setApples}
          />
        ))}
      </div>
    </div>
  );
};

export default Apple;
