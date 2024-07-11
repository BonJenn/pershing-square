import React, { useState, useEffect, useRef } from 'react';
import styles from '../app/styles/Navigation.module.css';

export default function Navigation({ setCurrentPage, currentPage }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const pillRef = useRef(null);
  const navRef = useRef(null);

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
    setIsMobileNavOpen(false); // Close mobile nav on click
  };

  const toggleMobileNav = (event) => {
    event.stopPropagation(); // Prevent triggering the click outside event
    setIsMobileNavOpen(prevState => !prevState);
  };

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setIsMobileNavOpen(false);
    }
  };

  useEffect(() => {
    if (isMobileNavOpen) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMobileNavOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileNavOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className={styles.navContainer} ref={navRef}>
      <div className={styles.pillBackground}></div>
      <div ref={pillRef} className={styles.activePill}></div>
      <button className={`${styles.hamburger} ${isMobileNavOpen ? styles.open : ''}`} onClick={toggleMobileNav}>
        <div></div>
        <div></div>
        <div></div>
      </button>
      <ul className={styles.navList}>
        {['events', 'home', 'venue'].map((page, index) => (
          <li key={page}>
            <button
              onClick={() => handleClick(page, index)}
              className={`${currentPage === page ? styles.active : ''}`}
            >
              {page === 'events' && '📅'}
              {page === 'home' && '🏠'}
              {page === 'venue' && '📍'}
              {page.charAt(0).toUpperCase() + page.slice(1)}
            </button>
          </li>
        ))}
      </ul>
      <div className={`${styles.mobileNav} ${isMobileNavOpen ? styles.open : ''}`}>
        <ul>
          {['events', 'home', 'venue'].map((page, index) => (
            <li key={page}>
              <button
                onClick={() => handleClick(page, index)}
                className={`${currentPage === page ? styles.active : ''}`}
              >
                {page === 'events' && '📅'}
                {page === 'home' && '🏠'}
                {page === 'venue' && '📍'}
                {page.charAt(0).toUpperCase() + page.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
