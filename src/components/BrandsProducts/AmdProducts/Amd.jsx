import { useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
import AmdProductCard from "./AmdProductCard";
import AmdHero from "../../BrandHero/AmdHero";
import Footer from "../../Footer/Footer";

const Amd = () => {
  const loadedAmds = useLoaderData();
  const [amds, setAmds] = useState([]);

  useEffect(() => {
    if (Array.isArray(loadedAmds)) {
      setAmds(loadedAmds);
    }
  }, [loadedAmds]);

  return (
    <>
      <div className="rounded-xl">
        <AmdHero />
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 pt-20 px-[120px]">
          {amds.map((amd, index) => (
            <AmdProductCard
              key={`${amd._id}_${index}`}
              amd={amd}
              amds={amds}
              setAmds={setAmds}
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

export default Amd;
