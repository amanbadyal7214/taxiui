import React, { useState, useRef } from 'react';

function BookingCard() {
  const [isReturn, setIsReturn] = useState(false);
  const [stopovers, setStopovers] = useState([]);
  const pickupDateRef = useRef(null);
  const returnDateRef = useRef(null);

  const addStopover = () => {
    setStopovers([...stopovers, { id: Date.now() }]);
  };

  const removeStopover = (id) => {
    setStopovers(stopovers.filter(stop => stop.id !== id));
  };

  return (
    <>
    <div className="w-full max-w-[95%] xl:max-w-[95%] 2xl:max-w-[1600px] mx-auto xl:flex xl:gap-4 2xl:gap-6 px-4 xl:px-0 items-start mb-8 sm:mb-12 xl:mb-16">
      {/* Left side - Booking Card */}
      <div className="max-w-4xl bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 mt-4 sm:mt-8 shadow-xl xl:flex-shrink-0">
        <h1 className="text-xl sm:text-2xl md:text-3xl  text-white mb-4 sm:mb-6">
          Easily book your taxi ride
        </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-[60%_40%] gap-4 sm:gap-6">
        {/* Left Column - Destination Inputs */}
        <div className="space-y-3 sm:space-y-4">
          <div>
            <label className="block text-purple-900 font-semibold mb-2 text-sm sm:text-base">
              Where do you want to go?
            </label>
            
            {/* From Input */}
            <div className="relative mb-2 sm:mb-3">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-600">
                <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                  <circle cx="10" cy="10" r="3"/>
                </svg>
              </div>
              <span className="absolute left-8 sm:left-10 top-1/2 -translate-y-1/2 text-gray-800 text-xs sm:text-sm font-medium pointer-events-none">
                from
              </span>
              <input
                type="text"
                placeholder="street name and house number"
                className="w-full h-12px pl-16 sm:pl-[4.5rem] pr-3 py-1.5 sm:py-2 rounded-lg border-2 border-transparent focus:border-purple-600 focus:outline-none text-gray-700 text-xs sm:text-sm"
              />
            </div>

            {/* Stopover Inputs */}
            {stopovers.map((stopover) => (
              <div key={stopover.id} className="relative mb-2 sm:mb-3">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-600">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="3"/>
                  </svg>
                </div>
                <span className="absolute left-8 sm:left-10 top-1/2 -translate-y-1/2 text-gray-800 text-xs sm:text-sm font-medium pointer-events-none">
                  via
                </span>
                <input
                  type="text"
                  placeholder="street name and house number"
                  className="w-full pl-14 sm:pl-16 pr-10 py-1.5 sm:py-2 rounded-lg border-2 border-transparent focus:border-purple-600 focus:outline-none text-gray-700 text-xs sm:text-sm"
                />
                <button
                  type="button"
                  onClick={() => removeStopover(stopover.id)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-red-600 hover:text-red-800 transition-colors"
                  aria-label="Remove stopover"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            ))}
            
            {/* Add Stopover Button */}
            <button 
              type="button"
              onClick={addStopover}
              className="flex items-center gap-2 text-purple-700 font-semibold mb-2 sm:mb-3 hover:text-purple-900 transition-colors text-xs sm:text-sm"
            >
              <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Add Stopover
            </button>
            
            {/* To Input */}
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-600">
                <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2L10 14M10 14L7 11M10 14L13 11" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <span className="absolute left-8 sm:left-10 top-1/2 -translate-y-1/2 text-gray-800 text-xs sm:text-sm font-medium pointer-events-none">
                to
              </span>
              <input
                type="text"
                placeholder="street name and house number"
                className="w-full pl-14 sm:pl-16 pr-3 py-1.5 sm:py-2 rounded-lg border-2 border-transparent focus:border-purple-600 focus:outline-none text-gray-700 text-xs sm:text-sm"
              />
            </div>
          </div>
          
          {/* Luggage Question */}
          <div>
            <label className="block text-purple-900 font-semibold mb-2 text-sm sm:text-base">
              Are you traveling with luggage?
            </label>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="luggage" defaultChecked className="w-4 h-4 accent-purple-700"/>
                <span className="text-purple-900 font-medium text-xs sm:text-sm">Yes</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="luggage" className="w-4 h-4 accent-purple-700"/>
                <span className="text-purple-900 font-medium text-xs sm:text-sm">No, I don't have luggage</span>
              </label>
            </div>
          </div>
        </div>
        
        {/* Right Column - Time & Passengers */}
        <div className="space-y-3 sm:space-y-4 pr-3 md:pr-6">
          <div>
            <label className="block text-purple-900 font-semibold mb-2 text-sm sm:text-base">
              Taxi pick-up time
            </label>
            
            {/* Date Time Picker */}
            <div className="relative mb-2 sm:mb-3">
              <div 
                className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-600 text-sm sm:text-base cursor-pointer z-10"
                onClick={() => pickupDateRef.current?.showPicker()}
              >
                📅
              </div>
              <input
                ref={pickupDateRef}
                type="datetime-local"
                onClick={() => pickupDateRef.current?.showPicker()}
                className="w-full pl-8 sm:pl-10 pr-3 py-1.5 sm:py-2 rounded-lg border-2 border-transparent focus:border-purple-600 focus:outline-none text-gray-700 text-xs sm:text-sm cursor-pointer"
              />
            </div>
            
            {/* Return Checkbox */}
            <label className="flex items-center gap-2 mb-2 sm:mb-3 cursor-pointer">
              <input 
                type="checkbox" 
                className="w-4 h-4 accent-purple-700"
                checked={isReturn}
                onChange={(e) => setIsReturn(e.target.checked)}
              />
              <span className="text-purple-900 font-medium text-xs sm:text-sm">Return</span>
            </label>
            
            {/* Return Date Picker - shown when Return is checked */}
            {isReturn ? (
              <div className="relative mb-2 sm:mb-3">
                <div 
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-600 text-sm sm:text-base cursor-pointer z-10"
                  onClick={() => returnDateRef.current?.showPicker()}
                >
                  📅
                </div>
                <input
                  ref={returnDateRef}
                  type="datetime-local"
                  onClick={() => returnDateRef.current?.showPicker()}
                  className="w-full pl-8 sm:pl-10 pr-3 py-1.5 sm:py-2 rounded-lg border-2 border-transparent focus:border-purple-600 focus:outline-none text-gray-700 text-xs sm:text-sm cursor-pointer"
                  placeholder="Return date"
                />
              </div>
            ) : (
              <div className="bg-white/30 rounded-lg p-1 sm:p-3 text-gray-500 text-xs sm:text-sm">
                📅 One-way
              </div>
            )}
          </div>
          
          {/* Number of Passengers */}
          <div>
            <label className="block text-purple-900 font-semibold mb-2 text-sm sm:text-base">
              Number of passengers
            </label>
            <div className="flex items-center gap-2 sm:gap-3 bg-white rounded-lg p-1 w-fit">
              <button className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center text-lg sm:text-xl text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                −
              </button>
              <span className="text-base sm:text-lg font-semibold text-gray-800 min-w-[25px] sm:min-w-[30px] text-center">0</span>
              <button className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center text-lg sm:text-xl text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                +
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Calculate Button */}
      <div className="mt-4 sm:mt-6 flex justify-center sm:justify-end">
        <button className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white font-bold text-sm sm:text-base px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
          Calculate my fare
        </button>
      </div>
      </div>

      {/* Right side - Rating & Info (visible on large screens) */}
      <div className="hidden xl:block mt-16 xl:mt-20 2xl:mt-24 xl:flex-1 xl:pl-2 2xl:pl-4 text-right">
        <div className="text-white mb-6 2xl:mb-10">
          <div className="mb-2 2xl:mb-4">
            <span className="text-sm 2xl:text-base">With a </span>
            <span className="text-4xl 2xl:text-5xl font-bold">9.3 Score</span>
            <span className="text-sm 2xl:text-base"> the highest</span>
          </div>
          <p className="text-base 2xl:text-lg mb-4 2xl:mb-6">traveler appreciation of the Netherlands</p>
          
          {/* Stars and Reviews */}
          <div className="flex items-center justify-end gap-2 mb-6 2xl:mb-10 flex-wrap">
            <div className="flex text-yellow-400 text-base 2xl:text-lg">
              ⭐⭐⭐⭐⭐
            </div>
            <a href="#" className="text-white underline text-xs 2xl:text-sm hover:text-yellow-400 transition-colors">
              10,000+ customer ratings on
            </a>
            <span className="text-white font-semibold text-xs 2xl:text-sm">kiyoh</span>
            <div className="w-6 h-6 2xl:w-7 2xl:h-7 bg-yellow-400 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 2xl:w-5 2xl:h-5 text-purple-900" fill="currentColor" viewBox="0 0 20 20">
                <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-transparent text-white space-y-4 mt-12 2xl:mt-16">
          <h3 className="text-2xl 2xl:text-3xl font-bold mb-6 2xl:mb-8">No matter your destination,</h3>
          <p className="text-xl 2xl:text-2xl mb-8 2xl:mb-10">we'll take you there.</p>
          <p className="text-base 2xl:text-lg">Choose from standard, minibus, luxury and electric.</p>
        </div>
      </div>
    </div>

    {/* Rating Section - Mobile Only */}
    <div className="xl:hidden py-4 sm:py-6 mt-2 sm:mt-4 mb-0 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <div className="text-white mb-2">
          <span className="text-xs sm:text-sm">With a </span>
          <span className="text-2xl sm:text-3xl font-bold">9.3 score</span>
          <span className="text-xs sm:text-sm"> the highest</span>
        </div>
        <p className="text-white text-sm sm:text-base mb-3">passenger rating in the Netherlands</p>
        
        {/* Stars and Reviews */}
        <div className="flex items-center justify-center gap-1 sm:gap-2 flex-wrap">
          <div className="flex text-yellow-400 text-sm sm:text-base">
            ⭐⭐⭐⭐⭐
          </div>
          <a href="#" className="text-white underline text-[10px] sm:text-xs hover:text-yellow-400 transition-colors">
            10,000+ customer reviews on
          </a>
          <span className="text-white font-semibold text-[10px] sm:text-xs">Kiyoh</span>
          <div className="w-5 h-5 sm:w-6 sm:h-6 bg-yellow-400 rounded-full flex items-center justify-center">
            <svg className="w-3 h-3 sm:w-4 sm:h-4 text-purple-900" fill="currentColor" viewBox="0 0 20 20">
              <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
            </svg>
          </div>
        </div>
      </div>
    </div>

    {/* Benefits Section */}
    <div className="bg-purple-900 py-3 sm:py-4 mb-0 -mx-[50vw] ml-[calc(-50vw+50%)] mr-[calc(-50vw+50%)]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-wrap lg:justify-between items-center gap-3 sm:gap-4 px-4 sm:px-6 md:px-8">
        <div className="flex items-center gap-2 text-white">
          <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0">
            <svg className="w-3 h-3 sm:w-4 sm:h-4 text-purple-900" fill="currentColor" viewBox="0 0 20 20">
              <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
            </svg>
          </div>
          <span className="text-xs sm:text-sm text-white">Free cancellation and changes</span>
        </div>

        <div className="flex items-center gap-2 text-white">
          <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0">
            <svg className="w-3 h-3 sm:w-4 sm:h-4 text-purple-900" fill="currentColor" viewBox="0 0 20 20">
              <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
            </svg>
          </div>
          <span className="text-xs sm:text-sm text-white">Always a private taxi</span>
        </div>

        <div className="flex items-center gap-2 text-white">
          <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0">
            <svg className="w-3 h-3 sm:w-4 sm:h-4 text-purple-900" fill="currentColor" viewBox="0 0 20 20">
              <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
            </svg>
          </div>
          <span className="text-xs sm:text-sm text-white">Free luggage</span>
        </div>

        <div className="flex items-center gap-2 text-white">
          <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0">
            <svg className="w-3 h-3 sm:w-4 sm:h-4 text-purple-900" fill="currentColor" viewBox="0 0 20 20">
              <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
            </svg>
          </div>
          <span className="text-xs sm:text-sm text-white">Online payment</span>
        </div>
      </div>
    </div>
    </>
  );
}

export default BookingCard;
