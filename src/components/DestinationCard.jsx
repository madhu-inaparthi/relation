import React from 'react';
import './DestinationCard.css';

function DestinationCard({ destination }) {
  const { name, location, image, description, price } = destination;

  return (
    <div className="destination-card">
      <div className="destination-image">
        <img src={image} alt={name} />
      </div>
      <div className="destination-info">
        <h2 className="destination-name">{name}</h2>
        <h3 className="destination-location">{location}</h3>
        <p className="destination-description">{description}</p>
        <div className="destination-price">{price}</div>
      </div>
    </div>
  );
}

export default DestinationCard;
