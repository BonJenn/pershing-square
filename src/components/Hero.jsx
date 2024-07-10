'use client';

import React from 'react';
import styles from '../app/styles/Hero.module.css';

export default function Hero({ children, className, text, subtext, imageSrc, link }) {
  const content = (
    <>
      {imageSrc && <img src={imageSrc} alt="Hero Image" className={styles.heroImage} />}
      {text && <h1 className={styles.heroText}>{text}</h1>}
      {subtext && <p className={styles.heroSubtext}>{subtext}</p>}
      {children}
    </>
  );

  return (
    <section className={`${styles.hero} ${styles[className]}`}>
      {link ? (
        <a href={link} className={styles.heroLink}>
          {content}
        </a>
      ) : (
        content
      )}
    </section>
  );
}