'use client';

import React from 'react';
import styles from '../app/styles/Button.module.css';

export default function Button({ onClick, children }) {
    return (
        <button className={styles.button} onClick={onClick}>
          {children}
        </button>
  );
}