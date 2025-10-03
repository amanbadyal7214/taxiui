import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTiktok } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className=" mt-8 sm:mt-12 md:mt-16 py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 xl:gap-16">
        
        {/* Logo Section */}
        <div className="flex items-start justify-center sm:justify-start">
          <div className="bg-yellow-400 p-3 sm:p-4 rounded-lg">
            <img 
              src="/download.webp" 
              alt="Snelleen Taxi Logo" 
              className="w-20 sm:w-24 h-auto"
            />
          </div>
        </div>

        {/* Services Section */}
        <div>
          <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-4 sm:mb-5">Services</h3>
          <ul className="space-y-2 sm:space-y-3">
            <li><a href="#local" className="text-sm sm:text-base text-gray-600 hover:text-yellow-500 transition-colors duration-300">Local taxi services</a></li>
            <li><a href="#business" className="text-sm sm:text-base text-gray-600 hover:text-yellow-500 transition-colors duration-300">Business transport</a></li>
            <li><a href="#care" className="text-sm sm:text-base text-gray-600 hover:text-yellow-500 transition-colors duration-300">Care transport</a></li>
            <li><a href="#student" className="text-sm sm:text-base text-gray-600 hover:text-yellow-500 transition-colors duration-300">Student transport</a></li>
            <li><a href="#group" className="text-sm sm:text-base text-gray-600 hover:text-yellow-500 transition-colors duration-300">Group transport</a></li>
            <li><a href="#other" className="text-sm sm:text-base text-gray-600 hover:text-yellow-500 transition-colors duration-300">Other</a></li>
          </ul>
          
          {/* Company Section */}
          <div className="mt-6 sm:mt-8">
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-4 sm:mb-5">Company</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li><a href="#about" className="text-sm sm:text-base text-gray-600 hover:text-yellow-500 transition-colors duration-300">About us</a></li>
              <li><a href="#work" className="text-sm sm:text-base text-gray-600 hover:text-yellow-500 transition-colors duration-300">Work at</a></li>
              <li><a href="#news" className="text-sm sm:text-base text-gray-600 hover:text-yellow-500 transition-colors duration-300">News</a></li>
            </ul>
          </div>
        </div>

        {/* Customers Section */}
        <div>
          <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-4 sm:mb-5">Customers</h3>
          <ul className="space-y-2 sm:space-y-3">
            <li><a href="#faq" className="text-sm sm:text-base text-gray-600 hover:text-yellow-500 transition-colors duration-300">Frequently asked questions</a></li>
            <li><a href="/contact" className="text-sm sm:text-base text-gray-600 hover:text-yellow-500 transition-colors duration-300">Contact</a></li>
            <li><a href="#terms" className="text-sm sm:text-base text-gray-600 hover:text-yellow-500 transition-colors duration-300">Terms of services</a></li>
          </ul>
        </div>

        {/* Taxi Companies Section */}
        <div>
          <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-4 sm:mb-5">Taxi companies</h3>
          <ul className="space-y-2 sm:space-y-3">
            <li><a href="#enroll" className="text-sm sm:text-base text-gray-600 hover:text-yellow-500 transition-colors duration-300">Enroll</a></li>
          </ul>
        </div>

      </div>

      {/* Social Media Icons & Certifications */}
      <div className="max-w-7xl mx-auto mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 border-t border-gray-300">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4 sm:gap-6">
          {/* Social Media Icons */}
          <div className="flex gap-3 sm:gap-4">
            <a href="#facebook" className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-white transition-all duration-300 shadow-md">
              <FaFacebookF className="text-lg sm:text-xl" />
            </a>
            <a href="#linkedin" className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-white transition-all duration-300 shadow-md">
              <FaLinkedinIn className="text-lg sm:text-xl" />
            </a>
            <a href="#instagram" className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-white transition-all duration-300 shadow-md">
              <FaInstagram className="text-lg sm:text-xl" />
            </a>
            <a href="#twitter" className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-white transition-all duration-300 shadow-md">
              <FaXTwitter className="text-lg sm:text-xl" />
            </a>
            <a href="#tiktok" className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-white transition-all duration-300 shadow-md">
              <FaTiktok className="text-lg sm:text-xl" />
            </a>
          </div>

          {/* Certification Badges */}
          <div className="hidden md:flex items-center gap-2 bg-white px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-md border border-gray-300">
            <div className="flex items-center">
              <div className="border-2 border-black rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
                <span className="text-xs font-bold">BSI</span>
              </div>
            </div>
            <div className="border-l-2 border-gray-300 pl-2 sm:pl-3 text-xs">
              <div className="font-semibold">ISO 9001</div>
              <div className="text-gray-600 text-[10px]">Quality Management Systems</div>
              <div className="font-semibold text-[10px]">CERTIFIED</div>
            </div>
            <div className="border-l-2 border-gray-300 pl-2 sm:pl-3 text-xs">
              <div className="font-semibold">ISO 14001</div>
              <div className="text-gray-600 text-[10px]">Environmental Management</div>
              <div className="font-semibold text-[10px]">CERTIFIED</div>
            </div>
            <div className="border-l-2 border-gray-300 pl-2 sm:pl-3 text-xs">
              <div className="font-semibold">ISO/IEC 27001</div>
              <div className="text-gray-600 text-[10px]">Information Security Management</div>
              <div className="font-semibold text-[10px]">CERTIFIED</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
