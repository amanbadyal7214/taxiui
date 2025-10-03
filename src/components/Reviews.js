import React from 'react';

function Reviews() {
  const reviews = [
    {
      id: 1,
      title: "Amazing Service",
      rating: 10,
      text: "The driver was very professional and arrived on time. The car was clean and comfortable. I was impressed by the attention to detail and the smooth ride. The driver knew all the best routes and helped me avoid traffic. Highly recommend this taxi service for anyone looking for reliable transportation! Will definitely use this service again for all my future trips.",
      author: "John Smith",
      location: "Amsterdam",
      stars: 5
    },
    {
      id: 2,
      title: "Great Experience",
      rating: 9,
      text: "Booked a ride for airport transfer and everything went perfectly. The driver was friendly and helped with all my luggage without hesitation. The ride was smooth and comfortable, and I reached the airport well in advance of my flight. The booking process was easy and the price was very reasonable. Great communication throughout the journey. Will definitely use this service again for all my travel needs!",
      author: "Sarah Johnson",
      location: "Rotterdam",
      stars: 5
    },
    {
      id: 3,
      title: "Highly Recommended",
      rating: 10,
      text: "Best taxi service I've used in years. The entire experience was fantastic from start to finish. Easy booking process, fair and transparent pricing, and excellent customer service throughout. The driver was punctual, courteous, and knew all the shortcuts to get me to my destination quickly. The vehicle was spotless and very comfortable. I felt safe and relaxed during the entire journey. Outstanding service!",
      author: "Mike Williams",
      location: "Utrecht",
      stars: 5
    }
  ];

  const renderStars = (count) => {
    return Array(5).fill(0).map((_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${index < count ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <div className="py-8 sm:py-10 px-4 bg-gradient-to-b from-yellow-300 to-yellow-400">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8 gap-3">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
            Our reviews
          </h2>
          <a 
            href="https://kiyoh.nl" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-900 text-xs sm:text-sm font-medium hover:underline"
          >
            See all reviews on <span className="underline">Kiyoh.nl</span>
          </a>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-4 max-w-5xl mx-auto">
          {reviews.map((review) => (
            <div 
              key={review.id}
              className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col min-h-[400px] sm:min-h-[450px] md:min-h-[500px]"
            >
              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 text-center">
                {review.title}
              </h3>

              {/* Review Text */}
              <p className="text-gray-700 text-xs sm:text-sm italic text-center mb-4 sm:mb-5 flex-grow leading-relaxed">
                "{review.text}"
              </p>

              {/* Rating Number and Stars in one line */}
              <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <span className="text-2xl sm:text-3xl font-bold text-gray-900">
                  {review.rating}
                </span>
                <div className="flex gap-0.5 sm:gap-1">
                  {renderStars(review.stars)}
                </div>
              </div>

              {/* Author Info */}
              <div className="text-center border-t pt-2 sm:pt-3">
                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-1">
                  {review.author}
                </p>
                <p className="text-gray-600 text-xs">
                  {review.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Reviews;
