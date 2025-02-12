import React from "react";

const Service = ({services}) => {
  console.log('services:', services)
  if (!services?.length) {
    return <p>Loading services...</p>;
  }
  return (
    <div className="services">
      {services.map((service, index) => (
        <div className="service" key={index}>
          <h3>{service.name}</h3>
          <p>{service.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default Service;
