import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for contacting us!');
  };

  return (
    <div className="min-h-[calc(100vh-70px)] px-4 sm:px-5 py-12 sm:py-16">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2 sm:mb-3 text-center">Contact Us</h1>
        <p className="text-white/80 text-center mb-8 sm:mb-12 text-base sm:text-lg">
          We'd love to hear from you. Send us a message!
        </p>
        
        <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-2xl">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5 sm:gap-6">
            <div className="flex flex-col">
              <label htmlFor="name" className="mb-2 font-semibold text-gray-800 text-sm sm:text-base">
                Name
              </label>
              <input 
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="p-2.5 sm:p-3 border-2 border-gray-300 rounded-lg text-sm sm:text-base transition-all focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="mb-2 font-semibold text-gray-800 text-sm sm:text-base">
                Email
              </label>
              <input 
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                required
                className="p-2.5 sm:p-3 border-2 border-gray-300 rounded-lg text-sm sm:text-base transition-all focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="mb-2 font-semibold text-gray-800 text-sm sm:text-base">
                Message
              </label>
              <textarea 
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message..."
                required
                rows="5"
                className="p-2.5 sm:p-3 border-2 border-gray-300 rounded-lg text-sm sm:text-base transition-all focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 resize-none"
              />
            </div>

            <button 
              type="submit"
              className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white border-none py-3 sm:py-4 px-6 sm:px-8 rounded-lg text-base sm:text-lg font-semibold cursor-pointer transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-indigo-500/40 active:translate-y-0"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;