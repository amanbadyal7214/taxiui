import React from 'react';

function TaxiCompanies() {
  const companies = [
    { id: 1, name: 'Uber', description: 'Ride anywhere, anytime', rating: 4.5 },
    { id: 2, name: 'Lyft', description: 'Your ride, on demand', rating: 4.3 },
    { id: 3, name: 'Local Taxi', description: 'Supporting local drivers', rating: 4.7 },
    { id: 4, name: 'Premium Cabs', description: 'Luxury travel experience', rating: 4.6 },
  ];

  return (
    <div className="min-h-[calc(100vh-70px)] px-4 sm:px-5 py-12 sm:py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2 sm:mb-3 text-center">Taxi Companies</h1>
        <p className="text-white/80 text-center mb-8 sm:mb-12 text-base sm:text-lg">
          Choose from our trusted partner companies
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {companies.map((company) => (
            <div 
              key={company.id}
              className="bg-white rounded-lg sm:rounded-xl p-5 sm:p-6 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1"
            >
              <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-taxi-yellow to-yellow-600 rounded-full mx-auto mb-3 sm:mb-4">
                <span className="text-xl sm:text-2xl font-bold text-gray-900">
                  {company.name.charAt(0)}
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 text-center">
                {company.name}
              </h3>
              <p className="text-gray-600 text-center mb-2 sm:mb-3 text-xs sm:text-sm">
                {company.description}
              </p>
              <div className="flex items-center justify-center gap-1">
                <span className="text-yellow-500 text-base sm:text-lg">★</span>
                <span className="text-gray-700 font-semibold text-sm sm:text-base">{company.rating}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TaxiCompanies;