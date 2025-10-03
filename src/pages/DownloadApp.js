import React from 'react';

function DownloadApp() {
  return (
    <div className="min-h-[calc(100vh-70px)] px-4 sm:px-5 py-12 sm:py-16 flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">Download Our App</h1>
        <p className="text-white/90 text-base sm:text-lg md:text-xl mb-8 sm:mb-12">
          Get the best taxi booking experience on your mobile device
        </p>
        
        <div className="bg-white rounded-xl sm:rounded-2xl p-8 sm:p-10 md:p-12 shadow-2xl">
          <div className="mb-6 sm:mb-8">
            <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-gradient-to-br from-taxi-yellow to-yellow-600 rounded-2xl sm:rounded-3xl mx-auto mb-4 sm:mb-6 flex items-center justify-center shadow-lg">
              <span className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900">ST</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Snel Een Taxi</h2>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-6 sm:mb-8">
              Book rides instantly, track your driver in real-time, and enjoy cashless payments
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center mb-6 sm:mb-8">
            <button className="bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold flex items-center justify-center gap-2 sm:gap-3 hover:bg-gray-800 transition-all hover:-translate-y-1 shadow-lg">
              <span className="text-xl sm:text-2xl">📱</span>
              <div className="text-left">
                <div className="text-xs">Download on the</div>
                <div className="text-base sm:text-lg">App Store</div>
              </div>
            </button>
            
            <button className="bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold flex items-center justify-center gap-2 sm:gap-3 hover:bg-gray-800 transition-all hover:-translate-y-1 shadow-lg">
              <span className="text-xl sm:text-2xl">▶️</span>
              <div className="text-left">
                <div className="text-xs">GET IT ON</div>
                <div className="text-base sm:text-lg">Google Play</div>
              </div>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12">
            <div className="p-3 sm:p-4">
              <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">🚕</div>
              <h3 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">Quick Booking</h3>
              <p className="text-gray-600 text-xs sm:text-sm">Book a taxi in seconds with our easy-to-use interface</p>
            </div>
            <div className="p-3 sm:p-4">
              <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">📍</div>
              <h3 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">Live Tracking</h3>
              <p className="text-gray-600 text-xs sm:text-sm">Track your ride in real-time on the map</p>
            </div>
            <div className="p-3 sm:p-4">
              <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">💳</div>
              <h3 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">Secure Payment</h3>
              <p className="text-gray-600 text-xs sm:text-sm">Multiple payment options for your convenience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DownloadApp;