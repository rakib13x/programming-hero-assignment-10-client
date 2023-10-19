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
      <h1 className="text-6xl my-20 text-center text-purple-600 ">
        Hot Cold Coffee : {sonys.length}
      </h1>
      <div className="grid md:grid-cols-2 gap-4">
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
