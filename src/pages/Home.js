import React, { useState, useEffect } from 'react';
import BookingCard from '../components/BookingCard';
import Features from '../components/Features';
import TaxiInfo from '../components/TaxiInfo';
import OurServices from '../components/OurServices';
import Reviews from '../components/Reviews';

const backgroundImages = [
  'url(https://th.bing.com/th/id/OIP.Bq3CVo6MbhmA2pJhIkfv5AHaE5?w=255&h=180&c=7&r=0&o=7&cb=12&dpr=1.7&pid=1.7&rm=3)',
  'url(https://th.bing.com/th/id/OIP.sbeJ7N-z49ge5tT_g9T-FQHaEo?w=302&h=188&c=7&r=0&o=7&cb=12&dpr=1.7&pid=1.7&rm=3)',
  'url(https://th.bing.com/th/id/OIP.K2NoznOj183EspBKqX56EwHaE7?w=273&h=182&c=7&r=0&o=7&cb=12&dpr=1.7&pid=1.7&rm=3)',
  'url(https://th.bing.com/th/id/OIP.mDKpO505aKdcV_hj4nXsIAHaEa?w=309&h=185&c=7&r=0&o=7&cb=12&dpr=1.7&pid=1.7&rm=3)',
  'url(https://th.bing.com/th/id/OIP.uKkK54ntpiimmNTDHwz6BgHaEK?w=308&h=180&c=7&r=0&o=7&cb=12&dpr=1.7&pid=1.7&rm=3)',
];

function Home() {
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative min-h-screen w-full transition-all duration-1000"
      style={{
        backgroundImage: backgroundImages[currentBg],
        backgroundSize: 'cover',       // Full screen
        backgroundPosition: 'center',  // Center image
        backgroundRepeat: 'no-repeat', // Prevent tiling
      }}
    >
      {/* Optional light overlay for text readability */}
      <div className="absolute inset-0 bg-black/10 z-0"></div>

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center pt-[70px] w-full">
        <div className="w-full px-8 md:px-28">
          <BookingCard />
        </div>
      </div>

      {/* Sections with very light background */}
      <div className="relative z-10 bg-black/10">
        <Features />
      </div>

      <div className="relative z-10 bg-black/10">
        <TaxiInfo />
      </div>

      <div className="relative z-10 bg-black/10">
        <OurServices />
      </div>

      <div className="relative z-10 bg-black/10">
        <Reviews />
      </div>
    </div>
  );
}

export default Home;
