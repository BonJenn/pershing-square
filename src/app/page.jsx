'use client';

import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Calendar from '../components/Calendar';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './styles/Home.module.css';

const eventsData = [
  { id: 1, date: '2024-07-13', text: 'Forever 80s Live', subtext: 'Saturday, July 13th @ 3PM', imageSrc: '/images/ps_event_7_13.jpeg', link: 'https://www.eventbrite.com/e/80s-forever-w-asia-when-in-rome-naked-eyes-many-more-free-event-tickets-936838668677?aff=odcleoeventsincollection' },
  { id: 2, date: '2024-07-14', text: 'MC Magic, Baby Bash, Lil Rob & Amanda Perez', subtext: 'Sunday, July 14th @ 3PM', imageSrc: '/images/ps_event_7_14.jpeg', link: 'https://www.eventbrite.com/e/free-event-mc-magic-baby-bash-lil-rob-amanda-perez-tickets-933811173357?aff=ebdssbdestsearch' },
  { id: 3, date: '2024-07-20', text: 'Golden Oldies Concert', subtext: 'Saturday, July 20th @ 3PM', imageSrc: '/images/ps_event_7_20.jpeg', link: 'https://www.eventbrite.com/e/free-oldies-concert-w-the-stylistics-the-drifters-the-persuaders-more-tickets-945317980527?aff=erelpanelorg' },
  { id: 4, date: '2024-07-21', text: 'Montel Jordan, Shai, Ruff Endz, + Blaque', subtext: 'Sunday, July 21 @ 3PM', imageSrc: '/images/ps_event_7_21.jpeg', link: 'https://www.eventbrite.com/e/free-rnb-concert-with-montell-jordan-shai-ruff-endz-blaque-more-tickets-944593282937?aff=ebdssbdestsearch' },
  { id: 5, date: '2024-08-04', text: 'Banda Limon, Banda MaGuey, y Mas!', subtext: 'Sunday, August 4th @ 3PM', imageSrc: '/images/ps_event_8_4.jpeg', link: 'https://www.eventbrite.com/e/free-banda-limon-banda-maguey-y-mas-gratis-tickets-942917440447?aff=ebdssbdestsearch' },
  { id: 6, date: '2024-08-11', text: 'Pop 2000 Tour', subtext: 'Sunday, August 11th @ 3PM', imageSrc: '/images/ps_event_8_11.jpeg', link: 'https://www.eventbrite.com/e/free-concert-w-nsyncs-chris-kirkpatrick-o-town-the-calling-lfo-pop-tour-tickets-934920230577?aff=ebdssbdestsearch' },
  { id: 7, date: '2024-08-24', text: 'Bachatavibez Fest', subtext: 'Saturday, August 24th @ 3PM', imageSrc: '/images/ps_event_8_24.jpeg', link: 'https://www.eventbrite.com/e/bachatavibez-fest-tickets-787881664267?aff=ebdssbdestsearch' }
];

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
          <>
            <Hero 
              className="main-hero" 
              videoSrc="/images/Pershing_Square_Video.mov"
              text="Summer Concert Series 2024"
              subtext="The Hottest Concert Series in Los Angeles"
              buttonText="Schedule and Free Tickets"
              buttonLink="https://www.eventbrite.com/cc/los-angeles-free-concert-series-2332709"
            />
            <div className={styles.homeContent}>
              <div className={styles.eventsHero}>
                <h2>Upcoming Events</h2>
                {sliderLoaded && (
                  <Slider {...settings} className={styles.customSlider}>
                    <EventSlide text="Forever 80s Live" subtext="Saturday, July 13th @ 3PM" imageSrc="/images/ps_event_7_13.jpeg" link="https://www.eventbrite.com/e/80s-forever-w-asia-when-in-rome-naked-eyes-many-more-free-event-tickets-936838668677?aff=odcleoeventsincollection" />
                    <EventSlide text="MC Magic, Baby Bash, Lil Rob & Amanda Perez" subtext="Sunday, July 14th @ 3PM" imageSrc="/images/ps_event_7_14.jpeg" link="https://www.eventbrite.com/e/free-event-mc-magic-baby-bash-lil-rob-amanda-perez-tickets-933811173357?aff=ebdssbdestsearch" />
                    <EventSlide text="Golden Oldies Concert" subtext="Saturday, July 20th @ 3PM" imageSrc="/images/ps_event_7_20.jpeg" link="https://www.eventbrite.com/e/free-oldies-concert-w-the-stylistics-the-drifters-the-persuaders-more-tickets-945317980527?aff=erelpanelorg" />
                    <EventSlide text="Montel Jordan, Shai, Ruff Endz, + Blaque" subtext="Sunday, July 21 @ 3PM" imageSrc="/images/ps_event_7_21.jpeg" link="https://www.eventbrite.com/e/free-rnb-concert-with-montell-jordan-shai-ruff-endz-blaque-more-tickets-944593282937?aff=ebdssbdestsearch" />
                    <EventSlide text="Banda Limon, Banda MaGuey, y Mas!" subtext="Sunday, August 4th @ 3PM" imageSrc="/images/ps_event_8_4.jpeg" link="https://www.eventbrite.com/e/free-banda-limon-banda-maguey-y-mas-gratis-tickets-942917440447?aff=ebdssbdestsearch" />
                    <EventSlide text="Pop 2000 Tour" subtext="Sunday, August 11th @ 3PM" imageSrc="/images/ps_event_8_11.jpeg" link="https://www.eventbrite.com/e/free-concert-w-nsyncs-chris-kirkpatrick-o-town-the-calling-lfo-pop-tour-tickets-934920230577?aff=ebdssbdestsearch" />
                    <EventSlide text="Bachatavibez Fest" subtext="Saturday, August 24th @ 3PM" imageSrc="/images/ps_event_8_24.jpeg" link="https://www.eventbrite.com/e/bachatavibez-fest-tickets-787881664267?aff=ebdssbdestsearch" />
                  </Slider>
                )}
              </div>
            </div>
          </>
        );
      case 'events':
        return (
          <div className={styles.pageContent}>
            <h1 className={styles.pageTitle}>Events</h1>
            <Calendar events={eventsData} />
          </div>
        );
      case 'venue':
        return (
          <div className={styles.pageContent}>
            <h1 className={styles.pageTitle}>Venue</h1>
            <p className={styles.pageSubtext}>This page is currently under construction. Please check back later.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={styles.pageWrapper}>
      <Header setCurrentPage={setCurrentPage} currentPage={currentPage} />
      <main className={styles.Home}>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

