import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  // Close mobile menu when clicking on a link
  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 h-[70px] flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center z-50">
          <div className="bg-gradient-to-br from-taxi-yellow to-yellow-600 px-3 py-2 rounded-md shadow-md">
            <img 
              src="/download.webp" 
              alt="Snelleen Taxi Logo" 
              className="w-8 h-auto sm:w-10"
            />
          </div>
        </Link>
        
        {/* Hamburger Menu Button - Mobile Only */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden z-50 p-2 rounded-md transition-colors ${
            scrolled ? 'text-gray-900 hover:bg-gray-100' : 'text-white hover:bg-white/10'
          }`}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {mobileMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop Navigation Menu */}
        <div className="hidden md:flex items-center">
          <ul className="flex items-center gap-4 lg:gap-8 list-none m-0 p-0">
            <li>
              <Link to="/download" className={`text-sm font-normal hover:opacity-80 transition-opacity ${
                scrolled ? 'text-gray-900' : 'text-white'
              }`}>
                Download our app
              </Link>
            </li>
            <li>
              <Link to="/companies" className={`text-sm font-normal hover:opacity-80 transition-opacity ${
                scrolled ? 'text-gray-900' : 'text-white'
              }`}>
                Taxi companies
              </Link>
            </li>
            <li>
              <Link to="/contact" className={`text-sm font-normal hover:opacity-80 transition-opacity ${
                scrolled ? 'text-gray-900' : 'text-white'
              }`}>
                Contact
              </Link>
            </li>
            <li>
              <a href="#language" className="flex items-center justify-center text-2xl">
                🇳🇱
              </a>
            </li>
            <li>
              <button className={`px-5 lg:px-7 py-2.5 rounded-full text-sm font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all active:translate-y-0 ${
                scrolled ? 'bg-taxi-purple text-white hover:bg-purple-700' : 'bg-white text-taxi-purple hover:bg-gray-50'
              }`}>
                Log in
              </button>
            </li>
          </ul>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full pt-24 px-6">
            <ul className="flex flex-col gap-6 list-none m-0 p-0">
              <li>
                <Link 
                  to="/download" 
                  onClick={handleLinkClick}
                  className="text-gray-900 text-lg font-normal hover:text-taxi-purple transition-colors block py-2"
                >
                  Download our app
                </Link>
              </li>
              <li>
                <Link 
                  to="/companies" 
                  onClick={handleLinkClick}
                  className="text-gray-900 text-lg font-normal hover:text-taxi-purple transition-colors block py-2"
                >
                  Taxi companies
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  onClick={handleLinkClick}
                  className="text-gray-900 text-lg font-normal hover:text-taxi-purple transition-colors block py-2"
                >
                  Contact
                </Link>
              </li>
              <li className="border-t border-gray-200 pt-6">
                <a href="#language" className="flex items-center gap-3 text-lg py-2">
                  <span className="text-2xl">🇳🇱</span>
                  <span className="text-gray-900">Nederlands</span>
                </a>
              </li>
              <li className="mt-4">
                <button className="w-full px-7 py-3 rounded-full text-sm font-semibold shadow-md bg-taxi-purple text-white hover:bg-purple-700 transition-all">
                  Log in
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;