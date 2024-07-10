'use client';

import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './styles/Home.module.css';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
  fade: true,
};

const EventSlide = ({ text, subtext, imageSrc }) => (
  <div className={styles.eventSlide}>
    <img src={imageSrc} alt={text} className={styles.eventImage} />
    <h3>{text}</h3>
    <p>{subtext}</p>
  </div>
);

export default function Home() {
  const [currentPage, setCurrentPage] = useState('home');
  const [sliderLoaded, setSliderLoaded] = useState(false);

  useEffect(() => {
    setSliderLoaded(true);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <div className={styles.homeContent}>
            <Hero className="main-hero" text=" " subtext=" " imageSrc="/images/ps_event_7_21.jpeg" link="https://example.com">
              {/* Additional children components */}
            </Hero>
            
            <div className={styles.lowerContent}>
              <div className={styles.eventsHero}>
                <h2>Upcoming Events</h2>
                {sliderLoaded && (
                  <Slider {...settings} className={styles.customSlider}>
                    <EventSlide text="Event 1" subtext="Details about event 1." imageSrc="/images/ps_event_8_11.jpeg" />
                    <EventSlide text="Event 2" subtext="Details about event 2." imageSrc="/images/ps_event_7_21.jpeg" />
                    {/* Add more EventSlide components as needed */}
                  </Slider>
                )}
              </div>
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