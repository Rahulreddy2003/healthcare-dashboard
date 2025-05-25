import React from 'react';
import { healthStatus } from '../../data/healthData';
import '../../styles/AnatomySection.css';

function AnatomySection() {
  return (
    <div className="anatomy-section">
      <img src="/images/human-anatomy-placeholder.png" alt="Anatomy" className="anatomy-img" />
      <ul className="health-indicators">
        {healthStatus.map(item => (
          <li key={item.name} className={item.status.toLowerCase()}>
            <span>{item.name}</span>: <strong>{item.status}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AnatomySection;
