'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';
import Card from '../components/Card';
import Hero from '../components/Hero';
import styles from './styles/Home.module.css';

export default function Home() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <div className={styles.homeContent}>
            <Hero className="main-hero" text=" " subtext=" " imageSrc="/images/ps_event_7_21.jpeg" link="https://example.com">
              {/* Additional children components */}
            </Hero>
            
            <div className={styles.lowerContent}>
              <Hero className="events-hero">
                <h2>Upcoming Events</h2>
                <Card title="Event 1" description="Details about event 1." />
                <Card title="Event 2" description="Details about event 2." />
                {/* Add more event cards as needed */}
              </Hero>
              <Hero className="about-hero">
                <h2>About Us</h2>
                <p>Information about the organization.</p>
              </Hero>
            </div>
          </div>
        );
      case 'events':
        return (
          <div>
            {/* Add content for events page */}
          </div>
        );
      case 'venue':
        return (
          <div>
            {/* Add content for venue page */}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <Header setCurrentPage={setCurrentPage} currentPage={currentPage} />
      <main className={styles.Home}>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}