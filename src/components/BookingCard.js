import React, { useState, useRef, useEffect } from "react";

function BookingCard() {
  const [isReturn, setIsReturn] = useState(false);
  const [stopovers, setStopovers] = useState([]);
  const [passengers, setPassengers] = useState(1);
  const [vehicleType, setVehicleType] = useState("Sedan (1-4)");
  const [acType, setAcType] = useState("AC");
  const [manualVehicle, setManualVehicle] = useState(false);
  const [bgIndex, setBgIndex] = useState(0);

  const pickupDateRef = useRef(null);
  const pickupTimeRef = useRef(null);
  const returnDateRef = useRef(null);
  const returnTimeRef = useRef(null);

  const backgroundImages = [
    "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const getVehicleByPassengers = (num) => {
    if (num <= 4) return "Sedan (1-4)";
    if (num <= 6) return "SUV (1-6)";
    if (num <= 8) return "Minibus (1-8)";
    return "Luxury";
  };

  const incrementPassengers = () => {
    const newCount = Math.min((passengers || 1) + 1, 16);
    setPassengers(newCount);
    if (!manualVehicle) setVehicleType(getVehicleByPassengers(newCount));
  };

  const decrementPassengers = () => {
    const newCount = Math.max((passengers || 1) - 1, 1);
    setPassengers(newCount);
    if (!manualVehicle) setVehicleType(getVehicleByPassengers(newCount));
  };

  const handlePassengerInput = (e) => {
    const val = e.target.value;
    if (val === "") {
      setPassengers("");
      return;
    }
    let num = parseInt(val);
    if (!isNaN(num)) {
      num = Math.max(1, Math.min(16, num));
      setPassengers(num);
      if (!manualVehicle) setVehicleType(getVehicleByPassengers(num));
    }
  };

  const handlePassengerBlur = () => {
    if (passengers === "") {
      setPassengers(1);
      if (!manualVehicle) setVehicleType(getVehicleByPassengers(1));
    }
  };

  const handleVehicleChange = (e) => {
    const selected = e.target.value;
    const required = getVehicleByPassengers(passengers);
    const vehicles = ["Sedan (1-4)", "SUV (1-6)", "Minibus (1-8)", "Luxury"];
    if (vehicles.indexOf(selected) < vehicles.indexOf(required)) {
      alert(`You cannot select a smaller vehicle for ${passengers} passengers.`);
      return;
    }
    setVehicleType(selected);
    setManualVehicle(true);
  };

  const addStopover = () => setStopovers([...stopovers, { id: Date.now() }]);
  const removeStopover = (id) =>
    setStopovers(stopovers.filter((stop) => stop.id !== id));

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

      <div className="relative z-10 w-full pt-24 pb-12 max-w-4xl">
        <div className="text-center mb-4 text-white drop-shadow-lg">
          <h1 className="text-xl sm:text-2xl font-bold mb-1">Premium Taxi Booking</h1>
          <p className="text-sm max-w-md mx-auto">
            Simple, reliable, and luxurious ride booking for every journey
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 px-4 py-2">
            <h2 className="text-lg font-semibold text-white">Book Your Ride</h2>
            <p className="text-gray-300 text-xs">Quick & Easy Booking</p>
          </div>

          <div className="p-4 bg-gradient-to-br from-gray-50 to-white">
            {/* Passengers, Vehicle, Condition dropdown */}
            <div className="bg-white rounded-md border border-gray-200 shadow-sm mb-4">
              <div className="border-b border-gray-200 px-3 py-2">
                <h3 className="text-sm font-semibold text-gray-900">Passengers & Vehicle</h3>
              </div>
              <div className="p-3 flex flex-wrap gap-4">
                {/* Passengers */}
                <div className="flex-1 min-w-[120px]">
                  <label className="block text-xs text-gray-500 mb-1">Passengers</label>
                  <div className="flex items-center gap-2 bg-gray-100 rounded-md p-1 pl-2">
                    <button
                      onClick={decrementPassengers}
                      className="w-8 h-8 flex items-center justify-center text-base bg-white hover:bg-gray-200 border border-gray-300 rounded-md shadow-sm"
                    >
                      −
                    </button>
                    <input
                      type="number"
                      value={passengers}
                      min={1}
                      max={16}
                      onChange={handlePassengerInput}
                      onBlur={handlePassengerBlur}
                      className="w-14 text-center text-base font-semibold text-gray-900 bg-white border border-gray-300 rounded-md"
                    />
                    <button
                      onClick={incrementPassengers}
                      className="w-8 h-8 flex items-center justify-center text-base bg-white hover:bg-gray-200 border border-gray-300 rounded-md shadow-sm"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Vehicle Type */}
                <div className="flex-1 min-w-[100px]">
                  <label className="block text-xs text-gray-500 mb-1">Vehicle</label>
                  <select
                    value={vehicleType}
                    onChange={handleVehicleChange}
                    className="w-full px-2 py-2 text-sm bg-white border border-gray-300 rounded-md focus:border-gray-900 focus:ring-1 focus:ring-gray-800/20"
                  >
                    <option>Sedan (1-4)</option>
                    <option>SUV (1-6)</option>
                    <option>Minibus (1-8)</option>
                    <option>Luxury</option>
                  </select>
                </div>

                {/* AC / Non-AC */}
                <div className="flex-1 min-w-[100px]">
                  <label className="block text-xs text-gray-500 mb-1">Vehicle Type</label>
                  <select
                    value={acType}
                    onChange={(e) => setAcType(e.target.value)}
                    className="w-full px-2 py-2 text-sm bg-white border border-gray-300 rounded-md focus:border-gray-900 focus:ring-1 focus:ring-gray-800/20"
                  >
                    <option value="AC">AC</option>
                    <option value="Non-AC">Non-AC</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Journey & Schedule */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* Journey */}
              <div className="bg-white rounded-md border border-gray-200 shadow-sm">
                <div className="border-b border-gray-200 px-3 py-2">
                  <h3 className="text-sm font-semibold text-gray-900">Journey</h3>
                </div>
                <div className="p-3 space-y-3">
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">Pickup</label>
                    <input
                      type="text"
                      placeholder="Pickup address"
                      className="w-full px-2 py-2 text-sm border border-gray-300 rounded-md"
                    />
                  </div>

                  {stopovers.map((stopover, index) => (
                    <div key={stopover.id}>
                      <label className="block text-xs text-gray-500 mb-1">Stop {index + 1}</label>
                      <div className="flex gap-2 flex-wrap">
                        <input
                          type="text"
                          placeholder="Intermediate stop"
                          className="flex-1 px-2 py-2 text-sm border border-gray-300 rounded-md min-w-[120px]"
                        />
                        <button
                          type="button"
                          onClick={() => removeStopover(stopover.id)}
                          className="px-2 py-1 text-xs bg-red-100 text-red-600 rounded hover:bg-red-200"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={addStopover}
                    className="text-xs font-medium text-gray-900 border px-2 py-1 rounded-md hover:bg-gray-100"
                  >
                    + Add Stop
                  </button>

                  <div>
                    <label className="block text-xs text-gray-500 mb-1">Destination</label>
                    <input
                      type="text"
                      placeholder="Destination address"
                      className="w-full px-2 py-2 text-sm border border-gray-300 rounded-md"
                    />
                  </div>
                </div>
              </div>

              {/* Schedule */}
              <div className="bg-white rounded-md border border-gray-200 shadow-sm">
                <div className="border-b border-gray-200 px-3 py-2">
                  <h3 className="text-sm font-semibold text-gray-900">Schedule</h3>
                </div>
                <div className="p-3 space-y-2">
                  <div className="flex flex-col sm:flex-row gap-2">
                    <div className="flex-1">
                      <label className="block text-xs text-gray-500 mb-1">Pickup Date</label>
                      <input
                        ref={pickupDateRef}
                        type="date"
                        className="w-full px-2 py-2 text-sm border border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="flex-1">
                      <label className="block text-xs text-gray-500 mb-1">Pickup Time</label>
                      <input
                        ref={pickupTimeRef}
                        type="time"
                        className="w-full px-2 py-2 text-sm border border-gray-300 rounded-md"
                      />
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="w-4 h-4 accent-gray-900"
                      checked={isReturn}
                      onChange={(e) => setIsReturn(e.target.checked)}
                    />
                    <label className="text-xs text-gray-900">Return Trip</label>
                  </div>

                  {isReturn && (
                    <div className="flex flex-col sm:flex-row gap-2">
                      <div className="flex-1">
                        <label className="block text-xs text-gray-500 mb-1">Return Date</label>
                        <input
                          ref={returnDateRef}
                          type="date"
                          className="w-full px-2 py-2 text-sm border border-gray-300 rounded-md"
                        />
                      </div>
                      <div className="flex-1">
                        <label className="block text-xs text-gray-500 mb-1">Return Time</label>
                        <input
                          ref={returnTimeRef}
                          type="time"
                          className="w-full px-2 py-2 text-sm border border-gray-300 rounded-md"
                        />
                      </div>
                    </div>
                  )}

                  <div>
                    <label className="block text-xs text-gray-500 mb-1">Luggage</label>
                    <div className="space-y-1">
                      <label className="flex items-center gap-2 p-1 bg-gray-100 rounded-md cursor-pointer">
                        <input type="radio" name="luggage" defaultChecked className="w-4 h-4 accent-gray-900" />
                        <span className="text-xs text-gray-900">Standard</span>
                      </label>
                      <label className="flex items-center gap-2 p-1 bg-gray-100 rounded-md cursor-pointer">
                        <input type="radio" name="luggage" className="w-4 h-4 accent-gray-900" />
                        <span className="text-xs text-gray-900">No Luggage</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-center">
              <button className="bg-gradient-to-r from-gray-900 to-gray-800 text-white font-medium text-base px-8 py-3 rounded-lg shadow-md hover:opacity-90 transition">
                Get Quote & Book
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingCard;
