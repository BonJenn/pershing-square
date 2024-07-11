'use client';

import React from 'react';
import Image from 'next/image';
import styles from '../app/styles/Header.module.css';
import Navigation from './Navigation.jsx';

export default function Header({ setCurrentPage, currentPage }) {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image 
          src="/images/pershing_square_logo.png" 
          alt="Pershing Square Logo" 
          width={100} 
          height={110} 
          layout="fixed"
        />
      </div>
      <div className={styles.navWrapper}>
        <Navigation setCurrentPage={setCurrentPage} currentPage={currentPage} />
      </div>
    </header>
  );
}