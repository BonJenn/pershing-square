'use client';

import React, { useState, useEffect } from 'react';
import styles from '../app/styles/Calendar.module.css';

const Calendar = ({ events }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    setCurrentMonth(currentDate.getMonth());
    setCurrentYear(currentDate.getFullYear());
  }, [currentDate]);

  const daysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth + 1, 1));
  };

  const handleDateClick = (date) => {
    const event = events.find(event => event.date === date);
    setSelectedEvent(event);
  };

  const renderDaysOfWeek = () => {
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return daysOfWeek.map(day => (
      <div key={day} className={styles.dayOfWeek}>
        {day}
      </div>
    ));
  };

  const renderDays = () => {
    const days = [];
    const daysInCurrentMonth = daysInMonth(currentMonth, currentYear);
    for (let day = 1; day <= daysInCurrentMonth; day++) {
      const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      const hasEvent = events.some(event => event.date === dateStr);
      days.push(
        <div
          key={day}
          className={`${styles.date} ${hasEvent ? styles.eventDate : ''}`}
          onClick={() => handleDateClick(dateStr)}
        >
          {day}
        </div>
      );
    }
    return days;
  };

  return (
    <div className={styles.calendarContainer}>
      <div className={styles.calendar}>
        <div className={styles.header}>
          <button onClick={handlePrevMonth} className={styles.navButton}>Prev</button>
          <h2>{currentDate.toLocaleString('default', { month: 'long' })} {currentYear}</h2>
          <button onClick={handleNextMonth} className={styles.navButton}>Next</button>
        </div>
        <div className={styles.daysOfWeek}>
          {renderDaysOfWeek()}
        </div>
        <div className={styles.days}>
          {renderDays()}
        </div>
      </div>
      {selectedEvent && (
        <div className={styles.eventDetails}>
          <img src={selectedEvent.imageSrc} alt={selectedEvent.text} className={styles.eventImage} />
          <h3>{selectedEvent.text}</h3>
          <p>{selectedEvent.subtext}</p>
          <a href={selectedEvent.link} target="_blank" rel="noopener noreferrer" className={styles.getTicketsButton}>
            Get Tickets
          </a>
        </div>
      )}
    </div>
  );
};

export default Calendar;
