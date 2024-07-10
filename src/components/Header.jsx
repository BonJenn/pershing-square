'use client';

import React from 'react';
import styles from '../app/styles/Header.module.css';
import Navigation from './Navigation.jsx';

export default function Header({ setCurrentPage, currentPage }) {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        {/* Logo content */}
      </div>
      <div className={styles.navWrapper}>
        <Navigation setCurrentPage={setCurrentPage} currentPage={currentPage} />
      </div>
      <div className={styles.placeholder}></div>
    </header>
  );
}