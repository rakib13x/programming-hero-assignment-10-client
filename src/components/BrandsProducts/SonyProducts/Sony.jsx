import { useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
import SonyProductCard from "./SonyProductCard";
import SonyHero from "../../BrandHero/SonyHero";

const Sony = () => {
  const loadedSonys = useLoaderData();
  const [sonys, setSonys] = useState([]);
  console.log(sonys);

  useEffect(() => {
    if (Array.isArray(loadedSonys)) {
      setSonys(loadedSonys);
    }
  }, [loadedSonys]);

  return (
    <div className="m-20">
      <SonyHero />
      {sonys ? (
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
      ) : (
        <div>
          <p>
            Sorry,There's no product here to show but u can add product from add
            product Section
          </p>
        </div>
      )}
    </div>
  );
};

export default Sony;
