import React from 'react';
import { calendarData, appointmentDetails } from '../../data/calendarData';
import '../../styles/CalendarView.css';

function CalendarView() {
  return (
    <div className="calendar-view">
      <h3>October 2021</h3>
      <div className="calendar-grid">
        {calendarData.map((day, i) => (
          <div key={i} className="calendar-day">
            <span>{day.date}</span>
            {day.slots.map((time, idx) => (
              <span key={idx} className="appointment-time">{time}</span>
            ))}
          </div>
        ))}
      </div>
      <div className="appointment-cards">
        {appointmentDetails.map((appt, idx) => (
          <div key={idx} className="appt-card">
            <h4>{appt.title}</h4>
            <p>{appt.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CalendarView;

