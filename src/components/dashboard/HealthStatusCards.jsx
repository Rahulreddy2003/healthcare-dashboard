import React from 'react';
import { healthCards } from '../../data/healthData';
import '../../styles/HealthStatusCards.css';

function HealthStatusCards() {
  return (
    <div className="health-cards">
      {healthCards.map(card => (
        <div key={card.name} className={`health-card ${card.status.toLowerCase()}`}>
          <h4>{card.name}</h4>
          <p>{card.date}</p>
          <p>Status: {card.status}</p>
        </div>
      ))}
    </div>
  );
}

export default HealthStatusCards;
