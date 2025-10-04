import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTiktok } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-gray-50 mt-12 sm:mt-16 md:mt-20 py-12 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 xl:gap-16">

        {/* Logo Section */}
        <div className="flex items-start justify-center sm:justify-start">
          <div className=" p-3 sm:p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
            <img 
              src="https://th.bing.com/th/id/OIP.a-D-3UjMEi6BtYM4QhOzVAHaHa?w=172&h=180&c=7&r=0&o=7&cb=12&dpr=1.7&pid=1.7&rm=3" 
              alt="Snelleen Taxi Logo" 
              className="w-20 sm:w-24 h-auto"
            />
          </div>
        </div>

        {/* Services Section */}
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-5">Services</h3>
          <ul className="space-y-2 sm:space-y-3">
            {['Local taxi services', 'Business transport', 'Care transport', 'Student transport', 'Group transport', 'Other'].map((item, i) => (
              <li key={i}>
                <a 
                  href={`#${item.split(' ')[0].toLowerCase()}`} 
                  className="text-sm sm:text-base text-gray-600 hover:text-yellow-500 transition-colors duration-300"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Company Section */}
          <div className="mt-6 sm:mt-8">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-5">Company</h3>
            <ul className="space-y-2 sm:space-y-3">
              {['About us', 'Work at', 'News'].map((item, i) => (
                <li key={i}>
                  <a 
                    href={`#${item.split(' ')[0].toLowerCase()}`} 
                    className="text-sm sm:text-base text-gray-600 hover:text-yellow-500 transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Customers Section */}
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-5">Customers</h3>
          <ul className="space-y-2 sm:space-y-3">
            {['Frequently asked questions', 'Contact', 'Terms of services'].map((item, i) => (
              <li key={i}>
                <a 
                  href={`#${item.split(' ')[0].toLowerCase()}`} 
                  className="text-sm sm:text-base text-gray-600 hover:text-yellow-500 transition-colors duration-300"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Taxi Companies Section */}
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-5">Taxi companies</h3>
          <ul className="space-y-2 sm:space-y-3">
            <li>
              <a 
                href="#enroll" 
                className="text-sm sm:text-base text-gray-600 hover:text-yellow-500 transition-colors duration-300"
              >
                Enroll
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Social Media Icons & Certifications */}
      <div className="max-w-7xl mx-auto mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-300">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 sm:gap-8">

          {/* Social Media Icons */}
          <div className="flex gap-3 sm:gap-4">
            {[FaFacebookF, FaLinkedinIn, FaInstagram, FaXTwitter, FaTiktok].map((Icon, i) => (
              <a 
                key={i} 
                href="#"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-white transition-all duration-300 shadow-md"
              >
                <Icon className="text-lg sm:text-xl" />
              </a>
            ))}
          </div>

          {/* Certification Badges */}
          <div className="hidden md:flex items-center gap-4 bg-white px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-md border border-gray-300">
            {[
              { title: 'ISO 9001', sub: 'Quality Management Systems' },
              { title: 'ISO 14001', sub: 'Environmental Management' },
              { title: 'ISO/IEC 27001', sub: 'Information Security Management' },
            ].map((cert, i) => (
              <div key={i} className={`${i !== 0 ? 'border-l-2 border-gray-300 pl-3 sm:pl-4' : ''} text-xs`}>
                <div className="font-semibold">{cert.title}</div>
                <div className="text-gray-600 text-[10px]">{cert.sub}</div>
                <div className="font-semibold text-[10px]">CERTIFIED</div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
