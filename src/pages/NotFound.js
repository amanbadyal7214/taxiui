import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="min-h-[calc(100vh-70px)] px-4 sm:px-5 py-12 sm:py-16 flex items-center justify-center">
      <div className="max-w-2xl mx-auto text-center">
        {/* 404 Number */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-8xl sm:text-9xl md:text-[12rem] font-bold text-white/20 leading-none">
            404
          </h1>
        </div>

        {/* Error Message */}
        <div className="bg-white rounded-xl sm:rounded-2xl p-8 sm:p-12 shadow-2xl">
          <div className="mb-6">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-taxi-yellow to-yellow-600 rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center">
              <span className="text-4xl sm:text-5xl">🚕</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Oops! Page Not Found
            </h2>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-6 sm:mb-8">
              The page you're looking for seems to have taken a different route. 
              Let's get you back on track!
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link 
              to="/"
              className="bg-gradient-to-r from-taxi-purple to-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all text-sm sm:text-base"
            >
              Go to Homepage
            </Link>
            <button 
              onClick={() => window.history.back()}
              className="bg-gray-100 text-gray-800 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-gray-200 transition-all text-sm sm:text-base"
            >
              Go Back
            </button>
          </div>

          {/* Additional Info */}
          <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-gray-200">
            <p className="text-gray-500 text-xs sm:text-sm">
              If you believe this is a mistake, please contact our support team.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
