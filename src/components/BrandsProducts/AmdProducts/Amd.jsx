import { useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
import AmdProductCard from "./AmdProductCard";

const Amd = () => {
  const loadedAmds = useLoaderData();
  const [amds, setAmds] = useState([]);

  useEffect(() => {
    if (Array.isArray(loadedAmds)) {
      setAmds(loadedAmds);
    }
  }, [loadedAmds]);

  return (
    <div className="m-20">
      <h1 className="text-6xl my-20 text-center text-purple-600 ">
        Hot Cold Coffee : {amds.length}
      </h1>
      <div className="grid md:grid-cols-2 gap-4">
        {amds.map((amd) => (
          <AmdProductCard
            key={amd._id}
            amd={amd}
            amds={amds}
            setAmds={setAmds}
          />
        ))}
      </div>
    </div>
  );
};

export default Amd;
