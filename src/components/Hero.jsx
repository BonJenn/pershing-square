'use client';

import React from 'react';
import styles from '../app/styles/Hero.module.css';


export default function Hero({ children, className }) {
  return (
    <section className={`${styles.hero} ${styles[className]}`}>
      {children}
    </section>
  );
}