import { useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
import SamsungProductCard from "./SamsungProductCard";
import SamsungHero from "../../BrandHero/SamsungHero";

const Samsung = () => {
  const loadedSamsungs = useLoaderData();
  const [samsungs, setSamsungs] = useState([]);

  useEffect(() => {
    if (Array.isArray(loadedSamsungs)) {
      setSamsungs(loadedSamsungs);
    }
  }, [loadedSamsungs]);

  return (
    <div className="rounded-xl">
      <SamsungHero />
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 pt-20 px-[120px] justify-center">
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
