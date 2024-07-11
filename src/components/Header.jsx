'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from '../app/styles/Header.module.css';
import Navigation from './Navigation.jsx';

export default function Header({ setCurrentPage, currentPage }) {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 50) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`${styles.header} ${isHidden ? styles.hidden : ''}`}>
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