import React, { useState, useEffect } from "react";

function BookingCard() {
  const [isReturn, setIsReturn] = useState(false);
  const [hasLuggage, setHasLuggage] = useState(true);
  const [passengers, setPassengers] = useState(0);
  const [tripType, setTripType] = useState("Single trip");
  const [bgIndex, setBgIndex] = useState(0);
  const [stopovers, setStopovers] = useState([]);
  const [vehicleType, setVehicleType] = useState("Sedan (1-4)");
  const [acType, setAcType] = useState("AC");
  const [manualVehicle, setManualVehicle] = useState(false);

  const backgroundImages = [
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1600&q=80",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const getVehicleByPassengers = (num) => {
    if (num <= 4) return "Sedan (1-4)";
    if (num <= 8) return "Van (1-8)";
    if (num <= 16) return "Mini Bus (1-16)";
    return "Mini Bus (1-16)";
  };

  const incrementPassengers = () => {
    const newCount = passengers + 1;
    setPassengers(newCount);
    if (!manualVehicle) setVehicleType(getVehicleByPassengers(newCount));
  };

  const decrementPassengers = () => {
    const newCount = Math.max(0, passengers - 1);
    setPassengers(newCount);
    if (!manualVehicle && newCount > 0) setVehicleType(getVehicleByPassengers(newCount));
  };

  const handlePassengerInput = (e) => {
    const val = e.target.value;
    if (val === "") {
      setPassengers("");
      return;
    }
    let num = parseInt(val);
    if (!isNaN(num)) {
      num = Math.max(0, Math.min(16, num));
      setPassengers(num);
      if (!manualVehicle && num > 0) setVehicleType(getVehicleByPassengers(num));
    }
  };

  const handlePassengerBlur = () => {
    if (passengers === "" || passengers === 0) {
      setPassengers(0);
    }
  };

  const handleVehicleChange = (e) => {
    const selected = e.target.value;
    const required = getVehicleByPassengers(passengers);
    const vehicles = ["Sedan (1-4)", "Van (1-8)", "Mini Bus (1-16)"];
    if (passengers > 0 && vehicles.indexOf(selected) < vehicles.indexOf(required)) {
      alert(`You cannot select a smaller vehicle for ${passengers} passengers.`);
      return;
    }
    setVehicleType(selected);
    setManualVehicle(true);
  };

  const addStopover = () => {
    setStopovers([...stopovers, { id: Date.now(), value: '' }]);
  };

  const removeStopover = (id) => {
    setStopovers(stopovers.filter(stop => stop.id !== id));
  };

  const updateStopover = (id, value) => {
    setStopovers(stopovers.map(stop => 
      stop.id === id ? { ...stop, value } : stop
    ));
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center px-3 py-4 transition-all duration-1000 relative">
      <div
        className="absolute inset-0 transition-all duration-1000"
        style={{
          backgroundImage: `url(${backgroundImages[bgIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "blur(2px)",
        }}
      ></div>

      <div className="relative z-10 w-full mt-12 max-w-2xl">
        <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl p-6 shadow-2xl">
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-white mb-2">
              Easily book your taxi ride
            </h1>
          </div>

          {/* Form Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-4">
              {/* Where do you want to go? */}
              <div>
                <h2 className="text-base font-semibold text-purple-900 mb-3">
                  Where do you want to go?
                </h2>
                <div className="space-y-3">
                  {/* From */}
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-purple-600 rounded-full"></div>
                    <input
                      type="text"
                      placeholder="from - street name and house number"
                      className="w-full pl-10 pr-4 py-2.5 rounded-lg border-0 text-gray-700 placeholder-gray-400 text-sm focus:ring-2 focus:ring-purple-300"
                    />
                  </div>

                  {/* Add Stopover */}
                  <div className="flex items-center justify-between">
                    <button 
                      onClick={addStopover}
                      className="flex items-center text-purple-900 font-medium text-sm hover:text-purple-700"
                    >
                      <span className="w-4 h-4 bg-purple-200 rounded-full flex items-center justify-center mr-2 text-xs">+</span>
                      Add Stopover
                    </button>
                    <div className="flex">
                      <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                      </svg>
                    </div>
                  </div>

                  {/* Stopovers */}
                  {stopovers.map((stopover, index) => (
                    <div key={stopover.id} className="relative">
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-orange-500 rounded-full"></div>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          placeholder={`via - stop ${index + 1}`}
                          value={stopover.value}
                          onChange={(e) => updateStopover(stopover.id, e.target.value)}
                          className="flex-1 pl-8 pr-4 py-2.5 rounded-lg border-0 text-gray-700 placeholder-gray-400 text-sm focus:ring-2 focus:ring-purple-300"
                        />
                        <button
                          onClick={() => removeStopover(stopover.id)}
                          className="px-2 py-1 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 text-sm"
                        >
                          ×
                        </button>
                      </div>
                    </div>
                  ))}

                  {/* To */}
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-purple-600 rounded-full"></div>
                    <input
                      type="text"
                      placeholder="to - street name and house number"
                      className="w-full pl-10 pr-4 py-2.5 rounded-lg border-0 text-gray-700 placeholder-gray-400 text-sm focus:ring-2 focus:ring-purple-300"
                    />
                  </div>
                </div>
              </div>

              {/* Do you have luggage? */}
              <div>
                <h3 className="text-base font-semibold text-purple-900 mb-3">
                  Do you have luggage?
                </h3>
                <div className="flex space-x-4">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="luggage"
                      checked={hasLuggage}
                      onChange={() => setHasLuggage(true)}
                      className="mr-2 w-4 h-4 text-purple-600"
                    />
                    <span className="text-purple-900 font-medium text-sm">Yes</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="luggage"
                      checked={!hasLuggage}
                      onChange={() => setHasLuggage(false)}
                      className="mr-2 w-4 h-4 text-purple-600"
                    />
                    <span className="text-purple-900 font-medium text-sm">No, I have no luggage</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              {/* Pickup time ride */}
              <div>
                <h2 className="text-base font-semibold text-purple-900 mb-3">
                  Pickup time ride
                </h2>
                <div className="space-y-3">
                  {/* Date and Time */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                        <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <input
                        type="date"
                        className="w-full pl-10 pr-4 py-2.5 rounded-lg border-0 text-gray-700 text-sm focus:ring-2 focus:ring-purple-300"
                      />
                    </div>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                        <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <input
                        type="time"
                        className="w-full pl-10 pr-4 py-2.5 rounded-lg border-0 text-gray-700 text-sm focus:ring-2 focus:ring-purple-300"
                      />
                    </div>
                  </div>

                  {/* Return/Single Trip */}
                  <div className="flex items-center space-x-4">
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="tripType"
                        checked={isReturn}
                        onChange={() => setIsReturn(true)}
                        className="mr-2 w-4 h-4 text-purple-600"
                      />
                      <span className="text-purple-900 font-medium text-sm">Return</span>
                    </label>
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="tripType"
                        checked={!isReturn}
                        onChange={() => setIsReturn(false)}
                        className="mr-2 w-4 h-4 text-purple-600"
                      />
                      <span className="text-purple-900 font-medium text-sm">One way</span>
                    </label>
                  </div>

                  {/* Return Date and Time - Only show when Return is selected */}
                  {isReturn && (
                    <div>
                      <h3 className="text-sm font-medium text-purple-900 mb-2">Return pickup time</h3>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="relative">
                          <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                            <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <input
                            type="date"
                            className="w-full pl-10 pr-4 py-2.5 rounded-lg border-0 text-gray-700 text-sm focus:ring-2 focus:ring-purple-300"
                          />
                        </div>
                        <div className="relative">
                          <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                            <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <input
                            type="time"
                            className="w-full pl-10 pr-4 py-2.5 rounded-lg border-0 text-gray-700 text-sm focus:ring-2 focus:ring-purple-300"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Number of travelers */}
              <div>
                <h3 className="text-sm font-semibold text-purple-900 mb-2">
                  Number of travelers
                </h3>
                <div className="flex items-center gap-2 bg-white rounded-lg p-2 mb-2">
                  <button
                    onClick={decrementPassengers}
                    className="w-6 h-6 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded font-bold text-gray-600 text-sm"
                  >
                    −
                  </button>
                  <input
                    type="number"
                    value={passengers}
                    min={0}
                    max={16}
                    onChange={handlePassengerInput}
                    onBlur={handlePassengerBlur}
                    className="w-12 text-center text-sm font-semibold text-gray-900 bg-white border border-gray-300 rounded"
                  />
                  <button
                    onClick={incrementPassengers}
                    className="w-6 h-6 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded font-bold text-gray-600 text-sm"
                  >
                    +
                  </button>
                </div>

                {/* Vehicle Selection */}
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-xs text-purple-900 mb-1">Vehicle</label>
                    <select
                      value={vehicleType}
                      onChange={handleVehicleChange}
                      className="w-full px-2 py-1.5 text-xs bg-white border border-gray-300 rounded-lg focus:border-purple-600 focus:ring-1 focus:ring-purple-300"
                    >
                      <option>Sedan (1-4)</option>
                      <option>Van (1-8)</option>
                      <option>Mini Bus (1-16)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs text-purple-900 mb-1">Vehicle Type</label>
                    <select
                      value={acType}
                      onChange={(e) => setAcType(e.target.value)}
                      className="w-full px-2 py-1.5 text-xs bg-white border border-gray-300 rounded-lg focus:border-purple-600 focus:ring-1 focus:ring-purple-300"
                    >
                      <option value="AC">AC</option>
                      <option value="Non-AC">Non-AC</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-6 flex justify-end">
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-base px-6 py-3 rounded-lg shadow-lg transition-colors duration-200">
              Calculate my ride price
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingCard;
