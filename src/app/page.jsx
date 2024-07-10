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
  slidesToShow: 3, // Changed from 2 to 3
  slidesToScroll: 3, // Changed from 2 to 3
  adaptiveHeight: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

const EventSlide = ({ text, subtext, imageSrc }) => (
  <div className={styles.eventSlide}>
    <div className={styles.eventImageWrapper}>
      <img src={imageSrc} alt={text} className={styles.eventImage} />
    </div>
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
            <div className={styles.mainHeroWrapper}>
              <Hero className="main-hero" text=" " subtext=" " imageSrc="/images/ps_event_7_21.jpeg" link="https://example.com">
                {/* Additional children components */}
              </Hero>
            </div>
            
            <div className={styles.lowerContent}>
              <div className={styles.eventsHero}>
                <h2>Upcoming Events</h2>
                {sliderLoaded && (
                  <Slider {...settings} className={styles.customSlider}>
                    <EventSlide text="Forever 80s Live" subtext="Saturday, July 13th @ 3PM" imageSrc="/images/ps_event_7_13.jpeg" />
                    <EventSlide text="MC Magic, Baby Bash, Lil Rob & Amanda Perez" subtext="Sunday, July 14th @ 3PM" imageSrc="/images/ps_event_7_14.jpeg" />
                    <EventSlide text="Montel Jordan, Shai, Ruff Endz, + Blaque" subtext="Sunday, July 21 @ 3PM" imageSrc="/images/ps_event_7_21.jpeg" />
                    <EventSlide text="Banda Limon, Banda MaGuey, y Mas!" subtext="Sundat, August 4th @ 3PM" imageSrc="/images/ps_event_8_4.jpeg" />
                    <EventSlide text="Pop 2000 Tour" subtext="Sunday, August 11th @ 3PM" imageSrc="/images/ps_event_8_11.jpeg" />
                    {/* Add more EventSlide components as needed */}
                  </Slider>
                )}
              </div>
           
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