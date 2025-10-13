import React from "react";

export default function MainContent({ services }) {
  return (
    <div className="flex">
      {services.map((service) => (
        <div className="service">
          <div className="photo-service">
            <img
              src={service.image}
              style={{ backgroundColor: "#000" }}
              alt={service.title}
            />
          </div>

          <h2> {service.title}</h2>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  );
}
