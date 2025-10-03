import React from 'react';
import BookingCard from '../components/BookingCard';
import Features from '../components/Features';
import TaxiInfo from '../components/TaxiInfo';
import OurServices from '../components/OurServices';
import Reviews from '../components/Reviews';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#4a1a8a] via-[#5a2a9a] to-[#6a3aaa]">
      {/* Hero Section with Same Purple Background as Navbar */}
      <div className="min-h-screen flex flex-col items-center justify-center pt-[70px] ">
        <div className="w-full px-28">
          <BookingCard />
        </div>
      </div>
      
      {/* Features Section - Different Background on Scroll */}
      <Features />
      
      {/* Taxi Info Section with Image */}
      <TaxiInfo />
      
      {/* Our Services Section */}
      <OurServices />
      
      {/* Reviews Section */}
      <Reviews />
    </div>
  );
}

export default Home;