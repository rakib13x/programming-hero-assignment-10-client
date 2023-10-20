import React, { useEffect, useState } from "react";
import ServiceDetails from "./ServiceDetails";

const Service = () => {
  const [services, setServices] = useState([]);
  const theme = localStorage.getItem("theme");
  console.log("Theme:", theme);
  const textClass = theme === "dark" ? "text-white" : "";

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
    <div className={`gap-8 space-y-6 px-[120px] pt-20 pb-8 ${textClass}`}>
      {services.map((service) => (
        <ServiceDetails key={service.id} service={service} />
      ))}
    </div>
  );
};

export default Service;
