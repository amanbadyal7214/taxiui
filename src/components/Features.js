import React from 'react';

function Features() {
  const features = [
    {
      id: 1,
      title: "Competitive rates",
      description:
        "Up to 70% cheaper than the meter price. Fixed rates and no surprises afterwards.",
    },
    {
      id: 2,
      title: "Everywhere in the Netherlands",
      description:
        "You travel to and from any location in the Netherlands and airports in Germany and Belgium.",
    },
    {
      id: 3,
      title: "Reliable",
      description:
        "We keep our promise. The driver will be waiting for you at the agreed time.",
    },
  ];

  return (
    <div className="bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3 border-l-4 border-purple-600 pl-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Features;
