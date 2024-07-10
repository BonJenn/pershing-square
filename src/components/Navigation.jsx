'use client';

import React, { useState, useEffect, useRef } from 'react';
import styles from '../app/styles/Navigation.module.css';

export default function Navigation({ setCurrentPage, currentPage }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const pillRef = useRef(null);

  useEffect(() => {
    const activeButton = document.querySelector(`.${styles.active}`);
    if (activeButton && pillRef.current) {
      pillRef.current.style.left = `${activeButton.offsetLeft}px`;
      pillRef.current.style.width = `${activeButton.offsetWidth}px`;
    }
  }, [activeIndex]);

  const handleClick = (page, index) => {
    setCurrentPage(page);
    setActiveIndex(index);
  };

  const getIcon = (page) => {
    switch(page) {
      case 'events': return '📅';
      case 'home': return '🏠';
      case 'venue': return '📍';
      default: return null;
    }
  };

  return (
    <nav className={`${styles.navContainer} ${styles.navbar}`}>
      <div className={styles.pillBackground}></div>
      <div ref={pillRef} className={styles.activePill}></div>
      <ul className={styles.navList}>
        {['events', 'home', 'venue'].map((page, index) => (
          <li key={page}>
            <button
              onClick={() => handleClick(page, index)}
              className={`${currentPage === page ? styles.active : ''}`}
            >
              <span className={styles.iconSpacing}>{getIcon(page)}</span>
              {page.charAt(0).toUpperCase() + page.slice(1)}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}