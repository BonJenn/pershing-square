import React from 'react';
import styles from '../app/styles/EventsList.module.css';

const EventsList = ({ events }) => {
  return (
    <div className={styles.eventsList}>
      {events.map(event => (
        <div key={event.id} className={styles.eventCard}>
          <img src={event.imageSrc} alt={event.text} className={styles.eventImage} />
          <div className={styles.eventDetails}>
            <h3>{event.text}</h3>
            <p>{event.subtext}</p>
            <a href={event.link} target="_blank" rel="noopener noreferrer" className={styles.getTicketsButton}>
              Get Tickets
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventsList;
