'use client';

import React from 'react';
import styles from '../app/styles/Navigation.module.css'; // Import the CSS module

export default function Navigation({ setCurrentPage }) {
  return (
    <nav>
      <ul className={styles.navList}>
        <li><button onClick={() => setCurrentPage('home')}>Home</button></li>
        <li><button onClick={() => setCurrentPage('events')}>Events</button></li>
        <li><button onClick={() => setCurrentPage('venue')}>Venue</button></li>
      </ul>
    </nav>
  );
}