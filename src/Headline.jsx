import React from "react";
import "./Headline.css";

const Headline = () => {
  return (
    <>
      <div className="pt-5 ">
        <div className="scroll-container h-12 bg-gray-100 pt-2 rounded-r-3xl rounded-l-3xl">
          <div className="scroll-text text-red-600 font-bold">
            Our Shop Open at 7:oo am and Closes at 11:00pm
          </div>
        </div>
      </div>
    </>
  );
};

export default Headline;
