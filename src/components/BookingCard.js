import React, { useState, useRef } from 'react';

function BookingCard() {
  const [isReturn, setIsReturn] = useState(false);
  const [stopovers, setStopovers] = useState([]);
  const [passengers, setPassengers] = useState(1);
  const [vehicleType, setVehicleType] = useState('sedan');
  const pickupDateRef = useRef(null);
  const returnDateRef = useRef(null);

  const updateVehicleType = (passengerCount) => {
    if (passengerCount <= 4) setVehicleType('sedan');
    else if (passengerCount <= 8) setVehicleType('van');
    else if (passengerCount <= 16) setVehicleType('minibus');
  };

  const incrementPassengers = () => {
    const newCount = Math.min(passengers + 1, 16);
    setPassengers(newCount);
    updateVehicleType(newCount);
  };

  const decrementPassengers = () => {
    const newCount = Math.max(passengers - 1, 1);
    setPassengers(newCount);
    updateVehicleType(newCount);
  };

  const addStopover = () => setStopovers([...stopovers, { id: Date.now() }]);
  const removeStopover = (id) => setStopovers(stopovers.filter(stop => stop.id !== id));

  return (
    <div className="w-full max-w-4xl mx-auto px-3 py-4">
      
      {/* Hero Section */}
      <div className="text-center mb-4">
        <h1 className="text-xl sm:text-2xl font-bold text-neutral-100 mb-1">
          Premium Taxi Booking
        </h1>
        <p className="text-sm text-neutral-200 max-w-md mx-auto">
          Simple, reliable, and luxurious ride booking for every journey
        </p>
      </div>

      {/* Booking Card */}
      <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
        
        {/* Card Header */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 px-4 py-2">
          <h2 className="text-lg font-semibold text-white">Book Your Ride</h2>
          <p className="text-gray-300 text-xs">Quick & Easy Booking</p>
        </div>

        {/* Card Content */}
        <div className="p-4 bg-gradient-to-br from-gray-50 to-white">
          
          {/* Passengers & Vehicle */}
          <div className="bg-white rounded-md border border-gray-200 shadow-sm mb-4">
            <div className="border-b border-gray-200 px-3 py-2">
              <h3 className="text-sm font-semibold text-gray-900">Passengers & Vehicle</h3>
            </div>
            <div className="p-3 space-y-3">
              <div className="grid grid-cols-2 gap-3">
                {/* Passenger Counter */}
                <div>
                  <label className="block text-xs text-gray-500 mb-1">Passengers</label>
                  <div className="flex items-center gap-2 bg-gray-100 rounded-md p-2">
                    <button onClick={decrementPassengers}
                      className="w-7 h-7 flex items-center justify-center text-base bg-white hover:bg-gray-200 border border-gray-300 rounded-md shadow-sm">
                      −
                    </button>
                    <span className="text-base font-semibold text-gray-900 min-w-[25px] text-center">{passengers}</span>
                    <button onClick={incrementPassengers}
                      className="w-7 h-7 flex items-center justify-center text-base bg-white hover:bg-gray-200 border border-gray-300 rounded-md shadow-sm">
                      +
                    </button>
                  </div>
                </div>

                {/* Vehicle Type Dropdown */}
                <div>
                  <label className="block text-xs text-gray-500 mb-1">Vehicle</label>
                  <select 
                    value={vehicleType}
                    onChange={(e) => setVehicleType(e.target.value)}
                    className="w-full px-2 py-2 text-sm bg-white border border-gray-300 rounded-md focus:border-gray-900 focus:ring-1 focus:ring-gray-800/20"
                  >
                    <option value="sedan">Sedan (1-4)</option>
                    <option value="van">Van (5-8)</option>
                    <option value="minibus">Mini Bus (9-16)</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Journey & Schedule */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            
            {/* Journey Details */}
            <div className="bg-white rounded-md border border-gray-200 shadow-sm">
              <div className="border-b border-gray-200 px-3 py-2">
                <h3 className="text-sm font-semibold text-gray-900">Journey</h3>
              </div>
              <div className="p-3 space-y-3">
                <div>
                  <label className="block text-xs text-gray-500 mb-1">Pickup</label>
                  <input type="text" placeholder="Pickup address"
                    className="w-full px-2 py-2 text-sm border border-gray-300 rounded-md focus:border-gray-900 focus:ring-1"/>
                </div>

                {stopovers.map((stopover, index) => (
                  <div key={stopover.id}>
                    <label className="block text-xs text-gray-500 mb-1">Stop {index + 1}</label>
                    <div className="flex gap-2">
                      <input type="text" placeholder="Intermediate stop"
                        className="flex-1 px-2 py-2 text-sm border border-gray-300 rounded-md"/>
                      <button type="button" onClick={() => removeStopover(stopover.id)}
                        className="px-2 py-1 text-xs bg-red-100 text-red-600 rounded hover:bg-red-200">
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
                <button type="button" onClick={addStopover}
                  className="text-xs font-medium text-gray-900 border px-2 py-1 rounded-md hover:bg-gray-100">+ Add Stop</button>

                <div>
                  <label className="block text-xs text-gray-500 mb-1">Destination</label>
                  <input type="text" placeholder="Destination address"
                    className="w-full px-2 py-2 text-sm border border-gray-300 rounded-md focus:border-gray-900 focus:ring-1"/>
                </div>
              </div>
            </div>

            {/* Schedule */}
            <div className="bg-white rounded-md border border-gray-200 shadow-sm">
              <div className="border-b border-gray-200 px-3 py-2">
                <h3 className="text-sm font-semibold text-gray-900">Schedule</h3>
              </div>
              <div className="p-3 space-y-2">
                <div>
                  <label className="block text-xs text-gray-500 mb-1">Pickup Time</label>
                  <input ref={pickupDateRef} type="datetime-local"
                    className="w-full px-2 py-2 text-sm border border-gray-300 rounded-md focus:border-gray-900 focus:ring-1"/>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 accent-gray-900" checked={isReturn} onChange={(e)=>setIsReturn(e.target.checked)}/>
                  <label className="text-xs text-gray-900">Return Trip</label>
                </div>
                {isReturn && (
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">Return Time</label>
                    <input ref={returnDateRef} type="datetime-local"
                      className="w-full px-2 py-2 text-sm border border-gray-300 rounded-md focus:border-gray-900 focus:ring-1"/>
                  </div>
                )}
                <div>
                  <label className="block text-xs text-gray-500 mb-1">Luggage</label>
                  <div className="space-y-1">
                    <label className="flex items-center gap-2 p-1 bg-gray-100 rounded-md cursor-pointer">
                      <input type="radio" name="luggage" defaultChecked className="w-4 h-4 accent-gray-900"/>
                      <span className="text-xs text-gray-900">Standard</span>
                    </label>
                    <label className="flex items-center gap-2 p-1 bg-gray-100 rounded-md cursor-pointer">
                      <input type="radio" name="luggage" className="w-4 h-4 accent-gray-900"/>
                      <span className="text-xs text-gray-900">No Luggage</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div className="mt-6 flex justify-center">
            <button className="bg-gradient-to-r from-gray-900 to-gray-800 text-white font-medium text-base px-8 py-3 rounded-lg shadow-md hover:opacity-90 transition">
              Get Quote & Book
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingCard;
