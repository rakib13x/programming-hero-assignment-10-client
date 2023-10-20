import { useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
import SonyProductCard from "./SonyProductCard";

const Sony = () => {
  const loadedSonys = useLoaderData();
  const [sonys, setSonys] = useState([]);

  useEffect(() => {
    if (Array.isArray(loadedSonys)) {
      setSonys(loadedSonys);
    }
  }, [loadedSonys]);

  return (
    <div className="m-20">
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 pt-20 px-[120px] justify-center">
        {sonys.map((sony) => (
          <SonyProductCard
            key={sony._id}
            sony={sony}
            sonys={sonys}
            setSonys={setSonys}
          />
        ))}
      </div>
    </div>
  );
};

export default Sony;
