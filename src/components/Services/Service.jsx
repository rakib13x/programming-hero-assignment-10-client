import React, { useEffect, useState } from "react";
import ServiceDetails from "./ServiceDetails";

const Service = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setServices(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className={"gap-8 space-y-6 px-[120px] pt-20 pb-8 "}>
      {services.map((service) => (
        <ServiceDetails key={service.id} service={service} />
      ))}
    </div>
  );
};

export default Service;
