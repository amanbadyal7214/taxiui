import React from 'react';

function OurServices() {
  const services = [
    {
      id: 1,
      title: "Local taxi transport",
      description: "Through our website you can order a taxi to and from any location within the Netherlands. It doesn't matter if you need a taxi within 20 minutes or want to book your ride in advance. For all taxi transport from A to B, you have come to the right place!",
      image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=500&q=80",
      link: "Our most popular taxi companies"
    },
    {
      id: 2,
      title: "Airport taxi",
      description: "You can easily book a taxi to and from airports in the Netherlands, Germany and Belgium. When you're travelling from an airport, we'll monitor your flight using the flight number you provided and wait in case of a flight delay.",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=500&q=80",
      link: "Our most popular airport taxis"
    },
    {
      id: 3,
      title: "Healthcare transport",
      description: "We offer tailor-made care transport for people who are unable to travel themselves. We drive our private taxis to and from hospitals, nursing homes, day care centers, rehabilitation centers and all other locations where (medical) care takes place.",
      image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=500&q=80",
      link: "Our types of care transport"
    },
    {
      id: 4,
      title: "Business transport",
      description: "For business taxi rides, sneleentaxi is the ideal service in the Netherlands. Through our booking platform, all the required business transportation can be booked. Companies can easily order the taxi rides on account with a business account.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=500&q=80",
      link: "View our business transport"
    },
    {
      id: 5,
      title: "Rides to popular locations",
      description: "Our drivers ride to and from popular locations in the Netherlands. If you have planned a trip to an amusement park, zoo, theater or stadium you can use the services of sneleentaxi to travel to and from your destination in a relaxed manner.",
      image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=500&q=80",
      link: "Popular locations"
    },
    {
      id: 6,
      title: "Event transportation",
      description: "Do you have a party, festival or other event planned? Then choose the convenience of a taxi and let us transport you to the event without any worries. No one has to stay sober; after the event we'll bring you home safely.",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=500&q=80",
      link: "Popular event transportation"
    }
  ];

  return (
    <div className="py-8 sm:py-10 md:py-12 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-800 mb-6 sm:mb-8">
          Our services
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {services.map((service) => (
            <div 
              key={service.id}
              className="bg-white rounded-lg sm:rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              {/* Service Image */}
              <div className="h-40 sm:h-44 md:h-48 overflow-hidden">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Service Content */}
              <div className="p-4 sm:p-5">
                <h3 className="text-lg sm:text-xl font-bold text-purple-800 mb-2 sm:mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">
                  {service.description}
                </p>
                <a 
                  href="#" 
                  className="inline-flex items-center text-purple-700 font-medium text-xs sm:text-sm hover:text-purple-900 transition-colors"
                >
                  <span className="mr-1 text-base sm:text-lg">›</span>
                  {service.link}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurServices;
