import React from "react";

function TaxiInfo() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-snug">
              Reliable & Affordable Taxi Services Across Europe
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              <span className="font-semibold text-gray-900">EuroCab</span> makes
              your travel simple and stress-free. Whether you’re heading to an
              airport, hotel, conference, or a city tour, our professional
              drivers are ready to take you anywhere in the Netherlands, Belgium,
              and Germany with safety and comfort.
            </p>
            <p className="text-gray-600 text-base leading-relaxed">
              Our fleet ranges from budget-friendly sedans to premium business
              class vehicles and spacious vans for families or groups. With
              transparent pricing, free luggage handling, and easy booking
              options, EuroCab is your trusted partner for every journey.
            </p>
            <div>
              <a
                href="#"
                className="inline-block px-6 py-3 rounded-lg bg-gray-900 text-white font-medium hover:bg-gray-800 transition"
              >
                Reserve a Taxi
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <div className="rounded-2xl shadow-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1493238792000-8113da705763?w=1000&h=700&fit=crop"
                alt="Premium Taxi Ride"
                className="w-full h-[320px] sm:h-[400px] md:h-[480px] object-cover"
              />
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition">
            <h3 className="text-3xl font-bold text-gray-900">10+ Years</h3>
            <p className="text-sm text-gray-500 mt-2">Experience in Service</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition">
            <h3 className="text-3xl font-bold text-gray-900">30,000+</h3>
            <p className="text-sm text-gray-500 mt-2">Trips Completed</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition">
            <h3 className="text-3xl font-bold text-gray-900">98%</h3>
            <p className="text-sm text-gray-500 mt-2">Customer Satisfaction</p>
          </div>
        </div>

        {/* Features - Clean Boxes */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition text-center">
            <h4 className="text-lg font-semibold text-gray-900">Transparent Pricing</h4>
            <p className="text-sm text-gray-500 mt-2">No hidden costs</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition text-center">
            <h4 className="text-lg font-semibold text-gray-900">Flexible Booking</h4>
            <p className="text-sm text-gray-500 mt-2">Easy to change or cancel</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition text-center">
            <h4 className="text-lg font-semibold text-gray-900">Business Class</h4>
            <p className="text-sm text-gray-500 mt-2">Luxury travel options</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition text-center">
            <h4 className="text-lg font-semibold text-gray-900">24/7 Availability</h4>
            <p className="text-sm text-gray-500 mt-2">Day & night service</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaxiInfo;
