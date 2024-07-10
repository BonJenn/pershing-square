'use client';

import React from 'react';
import styles from '../app/styles/Header.module.css'; // Import the CSS module

export default function Header() {
  return (
    <header>
      <div className={styles.logo}>
        {/* Content inside the logo div */}
      </div>
      
      {/* Add navigation or other header content here */}
    </header>
  );
}