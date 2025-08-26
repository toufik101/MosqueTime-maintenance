import React from "react";

const Contact = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-green-700 mb-4">
          Contact Us
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We’d love to hear from you! Reach out for questions, events, or
          general inquiries.
        </p>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-green-700 mb-6">
            Get in Touch
          </h2>
          <ul className="space-y-4 text-gray-700">
            <li>
              📍 <strong>Address:</strong> 123 Mosque Road, Michigan, USA
            </li>
            <li>
              📞 <strong>Phone:</strong> <a href="https://wa.me/15864388353">+1 (586) 438-8353</a>
            </li>
            <li>
              <strong>Email:</strong>
              <a href="mailto:info@mosque.com">info@mosque.com</a>
            </li>
          </ul>

          <div className="mt-6">
            <iframe
              title="mosque-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086083623874!2d-122.42067968468189!3d37.77492977975937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064df4a4f1d%3A0x2f0f837e2e8f1b43!2sMosque!5e0!3m2!1sen!2sus!4v1615568947999!5m2!1sen!2sus"
              width="100%"
              height="250"
              allowFullScreen=""
              loading="lazy"
              className="rounded-xl"
            ></iframe>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-green-700 mb-6">
            Send Us a Message
          </h2>
          <form  className="space-y-5">
            <div>
              <label className="block text-gray-600 mb-2">Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-2">Your Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-2">Your Message</label>
              <textarea
                rows="5"
                placeholder="Type your message..."
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-green-600 text-white font-semibold rounded-xl shadow-md hover:bg-green-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
