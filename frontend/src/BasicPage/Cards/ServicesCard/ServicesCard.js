import React from 'react';

import "./ServicesCard.css";

function ServicesCard({ serviceData }) {
  return (
    <div className="service-card">
      <img src={serviceData.serviceImage} alt={serviceData.serviceName} />

      <div className="name-description">
        <h5>{serviceData.serviceName}</h5>
        <p>{serviceData.serviceDescription}</p>
      </div>
    </div>
  )
}

export default ServicesCard;