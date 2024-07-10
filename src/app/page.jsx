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
  slidesToShow: 3,
  slidesToScroll: 3,
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

const EventSlide = ({ text, subtext, imageSrc, link }) => {
  const content = (
    <div className={styles.eventSlide}>
      <div className={styles.eventImageWrapper}>
        <img src={imageSrc} alt={text} className={styles.eventImage} />
      </div>
      <h3>{text}</h3>
      <p>{subtext}</p>
    </div>
  );

  return link ? (
    <a href={link} target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  ) : (
    content
  );
};

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
            <div className={styles.eventsHero}>
              <h2>Upcoming Events</h2>
              {sliderLoaded && (
                <Slider {...settings} className={styles.customSlider}>
                  <EventSlide text="Forever 80s Live" subtext="Saturday, July 13th @ 3PM" imageSrc="/images/ps_event_7_13.jpeg" link="https://www.eventbrite.com/e/80s-forever-w-asia-when-in-rome-naked-eyes-many-more-free-event-tickets-936838668677?aff=odcleoeventsincollection" />
                  <EventSlide text="MC Magic, Baby Bash, Lil Rob & Amanda Perez" subtext="Sunday, July 14th @ 3PM" imageSrc="/images/ps_event_7_14.jpeg" />
                  <EventSlide text="Montel Jordan, Shai, Ruff Endz, + Blaque" subtext="Sunday, July 21 @ 3PM" imageSrc="/images/ps_event_7_21.jpeg" />
                  <EventSlide text="Banda Limon, Banda MaGuey, y Mas!" subtext="Sunday, August 4th @ 3PM" imageSrc="/images/ps_event_8_4.jpeg" />
                  <EventSlide text="Pop 2000 Tour" subtext="Sunday, August 11th @ 3PM" imageSrc="/images/ps_event_8_11.jpeg" />
                </Slider>
              )}
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
    <div className={styles.pageWrapper}>
      <Header setCurrentPage={setCurrentPage} currentPage={currentPage} />
      <Hero 
        className="main-hero" 
        videoSrc="/images/Pershing_Square_Video.mov"
        text=" "
        subtext=" "
      >
        {/* You can add any additional content inside the Hero component here */}
      </Hero>
      <main className={styles.Home}>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}