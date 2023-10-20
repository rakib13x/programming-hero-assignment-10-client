import { useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
import AppleProductCard from "./AppleProductCard";
import AppleHero from "../../BrandHero/AppleHero";

const Apple = () => {
  const loadedApples = useLoaderData();
  const [apples, setApples] = useState([]);

  useEffect(() => {
    if (Array.isArray(loadedApples)) {
      setApples(loadedApples);
    }
  }, [loadedApples]);

  return (
    <div className="rounded-xl">
      <AppleHero />
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 pt-20 px-[120px] justify-center">
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
