// src/app/page.jsx
'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';
import Card from '../components/Card';
import Hero from '../components/Hero';


export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Hero className="main-hero">
          <h1>Forever 80's</h1>
          <p>Saturday, July 13th at 3pm</p>
          <p>Free with RSVP</p>
          <Button />
          {/* Add video element here */}
        </Hero>
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
      </main>
      <Footer />
    </div>
  );
}