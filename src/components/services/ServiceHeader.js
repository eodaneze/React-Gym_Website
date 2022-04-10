import React from "react";
import "./Services.css";
const ServiceHeader = ({header, text}) => {
  return (
    <div className="service-header">
      <h1>{header}</h1>
      <p>
        {text}
      </p>
    </div>
  );
};

export default ServiceHeader;
