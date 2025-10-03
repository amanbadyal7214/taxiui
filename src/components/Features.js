import React from 'react';

function Features() {
  const features = [
    {
      id: 1,
      icon: (
        <svg className="w-20 h-20" viewBox="0 0 80 80" fill="none">
          {/* Percentage Chart - Modern Minimal */}
          <circle cx="40" cy="40" r="28" fill="#7C3AED" opacity="0.1"/>
          <circle cx="40" cy="40" r="24" stroke="#7C3AED" strokeWidth="2.5" fill="white"/>
          
          {/* Percentage symbol */}
          <circle cx="32" cy="34" r="3" fill="#7C3AED"/>
          <circle cx="48" cy="46" r="3" fill="#7C3AED"/>
          <line x1="30" y1="48" x2="50" y2="32" stroke="#7C3AED" strokeWidth="2.5" strokeLinecap="round"/>
          
          {/* Decorative elements */}
          <path d="M 25 52 L 25 42 L 30 38" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.6"/>
          <path d="M 55 28 L 55 38 L 50 42" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.6"/>
        </svg>
      ),
      title: "Competitive rates",
      description: "Up to 70% cheaper than the meter price. Fixed rates and no surprises afterwards."
    },
    {
      id: 2,
      icon: (
        <svg className="w-20 h-20" viewBox="0 0 80 80" fill="none">
          {/* Map Marker - Modern Minimal */}
          <circle cx="40" cy="40" r="28" fill="#7C3AED" opacity="0.1"/>
          
          {/* Pin shape */}
          <path d="M 40 22 C 32 22 26 28 26 36 C 26 44 40 58 40 58 C 40 58 54 44 54 36 C 54 28 48 22 40 22 Z" 
                fill="#7C3AED" stroke="#7C3AED" strokeWidth="1.5"/>
          
          {/* Inner circle */}
          <circle cx="40" cy="36" r="6" fill="white"/>
          
          {/* Dot */}
          <circle cx="40" cy="36" r="3" fill="#7C3AED"/>
        </svg>
      ),
      title: "Everywhere in the Netherlands",
      description: "You travel to and from any location in the Netherlands and airports in Germany and Belgium."
    },
    {
      id: 3,
      icon: (
        <svg className="w-20 h-20" viewBox="0 0 80 80" fill="none">
          {/* Timer/Stopwatch - Modern Minimal */}
          <circle cx="40" cy="40" r="28" fill="#7C3AED" opacity="0.1"/>
          
          {/* Clock circle */}
          <circle cx="40" cy="42" r="18" stroke="#7C3AED" strokeWidth="2.5" fill="white"/>
          
          {/* Clock hands */}
          <line x1="40" y1="42" x2="40" y2="30" stroke="#7C3AED" strokeWidth="2.5" strokeLinecap="round"/>
          <line x1="40" y1="42" x2="50" y2="42" stroke="#7C3AED" strokeWidth="2.5" strokeLinecap="round"/>
          
          {/* Center dot */}
          <circle cx="40" cy="42" r="2.5" fill="#7C3AED"/>
          
          {/* Top button */}
          <rect x="38" y="20" width="4" height="6" rx="2" fill="#7C3AED"/>
          
          {/* Tick marks */}
          <circle cx="40" cy="26" r="1.5" fill="#7C3AED" opacity="0.5"/>
          <circle cx="54" cy="42" r="1.5" fill="#7C3AED" opacity="0.5"/>
          <circle cx="40" cy="58" r="1.5" fill="#7C3AED" opacity="0.5"/>
          <circle cx="26" cy="42" r="1.5" fill="#7C3AED" opacity="0.5"/>
        </svg>
      ),
      title: "Reliable",
      description: "We keep our promise. The driver will be waiting for you at the agreed time."
    }
  ];

  return (
    <div className="bg-gray-50 py-8 sm:py-10 md:py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {features.map((feature) => (
            <div 
              key={feature.id} 
              className="bg-white rounded-lg sm:rounded-xl shadow-md p-4 sm:p-5 md:p-6 hover:shadow-lg transition-all duration-300"
            >
              {/* Icon and Content in same line */}
              <div className="flex items-start gap-3 sm:gap-4">
                {/* Icon on left */}
                <div className="flex-shrink-0 hidden sm:block">
                  {feature.icon}
                </div>

                {/* Content on right */}
                <div className="flex-1">
                  {/* Title with checkmark */}
                  <div className="flex items-start mb-2">
                    <svg 
                      className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={3} 
                        d="M5 13l4 4L19 7" 
                      />
                    </svg>
                    <h3 className="text-base sm:text-lg font-bold text-purple-700 leading-tight">
                      {feature.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed text-xs sm:text-sm ml-6 sm:ml-7">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Features;
