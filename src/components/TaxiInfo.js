import React from 'react';

function TaxiInfo() {
  return (
    <div className="bg-white py-8 sm:py-10 md:py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
          {/* Left Side - Image */}
          <div className="order-2 lg:order-1">
            <div className="rounded-lg sm:rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=600&fit=crop" 
                alt="Professional Taxi Driver"
                className="w-full h-[240px] sm:h-[280px] md:h-[320px] object-cover"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-purple-700 mb-4 sm:mb-5 leading-tight">
              Ordering a taxi anywhere in the Netherlands
            </h2>
            
            <div className="space-y-2.5 sm:space-y-3 text-gray-700 leading-relaxed text-xs sm:text-sm">
              <p>
                With sneleentaxi you can travel to and from <span className="font-semibold text-gray-900">any location in the Netherlands</span> and 
                airports in Germany and Belgium. The booking platform matches many travelers with 
                one of the 5,000 affiliated taxi drivers every day. These local taxi companies have 
                been checked in advance for their experience and the quality of their service, and in 
                possession of the necessary certificates. As a platform, sneleentaxi has the TX quality 
                mark: the national quality mark in the taxi industry.
              </p>
              
              <p>
                Through the online booking platform of sneleentaxi you can easily book a taxi to 
                airports, healthcare institutions, business appointments, festivals, hotels or a day out. 
                You can choose from the following <a href="#" className="text-blue-600 hover:underline font-medium">types of transport</a>: standard, luxury transport, 
                electric transport or a taxi bus (up to eight people). You will always be transported in 
                a <span className="font-semibold text-gray-900">private taxi</span> by a certified taxi company. In addition, you can take all your luggage 
                with you for free, you can change the ride yourself and it is possible to cancel it free 
                of charge up to three hours before departure. See you soonataxi!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaxiInfo;
