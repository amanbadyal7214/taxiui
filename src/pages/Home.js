import React from 'react';
import BookingCard from '../components/BookingCard';
import Features from '../components/Features';
import TaxiInfo from '../components/TaxiInfo';
import OurServices from '../components/OurServices';
import Reviews from '../components/Reviews';

function Home() {
  return (
    <div className="relative w-full">
      {/* Main content - Full screen BookingCard */}
      <div className="w-full">
        <BookingCard />
      </div>

      {/* Sections */}
      <div className="relative z-10">
        <Features />
      </div>

      <div className="relative z-10">
        <TaxiInfo />
      </div>

      <div className="relative z-10">
        <OurServices />
      </div>

      <div className="relative z-10">
        <Reviews />
      </div>
    </div>
  );
}

export default Home;
