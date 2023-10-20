import React from "react";

const ServiceDetails = ({ service }) => {
  console.log(service);

  return (
    <div>
      <h1 className="text-2xl font-semibold  ">{service.title}</h1>
      <br />
      <p>{service.shop_description}</p>
    </div>
  );
};

export default ServiceDetails;
