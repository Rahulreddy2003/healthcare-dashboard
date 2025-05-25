import React from 'react';
import { scheduleData } from '../../data/appointments.js';
import SimpleAppointmentCard from './SimpleAppointmentCard.jsx';
import '../../styles/UpcomingSchedule.css';

function UpcomingSchedule() {
  return (
    <section className="upcoming-schedule">
      <h3>The Upcoming Schedule</h3>
      {scheduleData.map((group, index) => (
        <div key={index} className="schedule-group">
          <h4>{group.day}</h4>
          {group.items.map((item, idx) => (
            <SimpleAppointmentCard key={idx} title={item.title} time={item.time} />
          ))}
        </div>
      ))}
    </section>
  );
}

export default UpcomingSchedule;
