import React, { useState } from 'react';

const ContactForm = () => {
  // SVG icons for social links
  const socialIcons = {
    github: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
      </svg>
    ),
    linkedin: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
      </svg>
    ),
    mail: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
      </svg>
    ),
    phone: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
      </svg>
    ),
    mapPin: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
        <circle cx="12" cy="10" r="3"></circle>
      </svg>
    )
  };

  // State management
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    // Construct mailto link
    const subject = `Contact form submission from ${formData.name}`;
    const body = `${formData.message}\n\nFrom: ${formData.name}\nEmail: ${formData.email}`;
    const mailtoLink = `mailto:your-email@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open user's email client
    window.location.href = mailtoLink;

    // Show success message
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 5000);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="relative bg-white rounded-xl overflow-hidden shadow-lg">
        {/* Gradient border effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl transform -rotate-1 scale-102 -z-10"></div>

        <div className="flex flex-col md:flex-row">
          {/* Contact Information Section */}
          <div className="w-full md:w-2/5 bg-gradient-to-br from-blue-600 to-purple-700 text-white p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6">Get in touch</h2>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="mt-1 text-blue-200">
                  {socialIcons.mail}
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-blue-100">info@samaruaacademy.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="mt-1 text-blue-200">
                  {socialIcons.phone}
                </div>
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-blue-100">+91 7908735398</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="mt-1 text-blue-200">
                  {socialIcons.mapPin}
                </div>
                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p className="text-blue-100">Srijan Corporate Park, Sector V, Salt Lake, Bidhannagar<br />
                    Kolkata, (pin: 700091)<br />
                    West Bengal, India.
                  </p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-12">
            <h3 className="font-semibold mb-4">Connect with us</h3>
            <div className="flex space-x-4">
              <a href="https://github.com" className="text-white hover:text-blue-200 transition-colors duration-300">
                {socialIcons.github}
              </a>
              <a href="https://linkedin.com" className="text-white hover:text-blue-200 transition-colors duration-300">
                {socialIcons.linkedin}
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="w-full md:w-3/5 p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Send us a message</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Send Message
            </button>

            {showSuccess && (
              <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-lg border border-green-200">
                Thank you for your message! We've opened your email client to complete the submission.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
    </div >
  );
};

export default ContactForm;