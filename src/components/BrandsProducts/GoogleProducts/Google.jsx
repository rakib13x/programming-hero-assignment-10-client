import { useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
import GoogleProductCard from "./GoogleProductCard";
import GoogleHero from "../../BrandHero/GoogleHero";
import Footer from "../../Footer/Footer";

const Google = () => {
  const loadedGoogles = useLoaderData();
  const [googles, setGoogles] = useState([]);

  useEffect(() => {
    if (Array.isArray(loadedGoogles)) {
      setGoogles(loadedGoogles);
    }
  }, [loadedGoogles]);

  return (
    <>
      <div className="rounded-xl">
        <GoogleHero />
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 pt-20 px-[120px] justify-center">
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
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Google;
