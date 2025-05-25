import React from 'react';
import '../../styles/ActivityFeed.css';

function ActivityFeed() {
  return (
    <section className="activity-feed">
      <h3>Activity</h3>
      <p>3 appointments on this week</p>
      <div className="bar-chart">
        <div style={{ height: '30%' }} className="bar"></div>
        <div style={{ height: '60%' }} className="bar"></div>
        <div style={{ height: '45%' }} className="bar"></div>
        <div style={{ height: '70%' }} className="bar"></div>
      </div>
    </section>
  );
}

export default ActivityFeed;
