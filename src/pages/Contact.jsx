import React, { useState } from 'react';

// Using inline SVG for social icons to avoid an extra dependency
const socialIcons = {
  github: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3-1 3-5.5 3-8A4.96 4.96 0 0 0 16 3.5c-1.4 0-1.8.6-2.2 1.3-.8.2-1.4.2-2.2-.2-.4-.7-.8-1.3-2.2-1.3C6.04 3.5 6 3.5 6 3.5A4.96 4.96 0 0 0 8 8c0 2.5 0 7-3 8a4.8 4.8 0 0 0-1 3.5v4" /><path d="M9 18v-2a4 4 0 0 1 4-4h2a4 0 0 1 4 4v2" /></svg>
  ),
  linkedin: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
  ),
  mail: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
  ),
  phone: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
  ),
  mapPin: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
  )
};


const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);

    // Construct the mailto link with the form data
    const recipient = 'info@samaruaacademy.com';
    const subject = encodeURIComponent(`Message from ${formData.name}`);
    const body = encodeURIComponent(`Sender Email: ${formData.email}\n\nMessage:\n${formData.message}`);
    const mailtoUrl = `mailto:${recipient}?subject=${subject}&body=${body}`;

    // Open the user's default email client
    window.location.href = mailtoUrl;

    // Show a success message to the user
    setShowSuccess(true);

    // Reset the form after a short delay
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      setShowSuccess(false);
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 flex items-center justify-center p-4 font-[Inter]">
      {/* Main content container with a gradient border effect */}
      <div className="relative p-1 rounded-3xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 shadow-2xl w-full max-w-4xl">
        <div className="bg-gray-800 p-8 md:p-12 rounded-[1.4rem] w-full h-full space-y-8 md:space-y-0 md:flex md:space-x-8">

          {/* Contact Information Section */}
          <div className="md:w-1/3 flex flex-col justify-between space-y-8">
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Get In Touch</h2>
              <p className="text-gray-400">We'd love to hear from you!</p>
            </div>

            {/* Icons with hover effects */}
            <div className="flex flex-wrap md:flex-col justify-center md:justify-start gap-6">
              {/* Email Icon */}
              <a href="mailto:info@example.com" className="group flex items-center space-x-4 p-4 rounded-xl transition-all duration-300 ease-in-out transform hover:scale-110 hover:bg-gray-700 hover:shadow-lg">
                <div className="p-3 rounded-full bg-indigo-500/20 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-colors duration-300">
                  {socialIcons.mail}
                </div>
                <div className="text-sm font-medium">info@samaruaacademy.com</div>
              </a>

              {/* Phone Icon */}
              <a href="tel:+1234567890" className="group flex items-center space-x-4 p-4 rounded-xl transition-all duration-300 ease-in-out transform hover:scale-110 hover:bg-gray-700 hover:shadow-lg">
                <div className="p-3 rounded-full bg-purple-500/20 text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-colors duration-300">
                  {socialIcons.phone}
                </div>
                <div className="text-sm font-medium">+91 (91) 7908735398</div>
              </a>

              {/* Location Icon */}
              <a href="#" className="group flex items-center space-x-4 p-4 rounded-xl transition-all duration-300 ease-in-out transform hover:scale-110 hover:bg-gray-700 hover:shadow-lg">
                <div className="p-3 rounded-full bg-pink-500/20 text-pink-400 group-hover:bg-pink-500 group-hover:text-white transition-colors duration-300">
                  {socialIcons.mapPin}
                </div>
                <div className="text-sm font-medium">Srijan Corporate Park, Sector V,Salt Lake, Bidhannagar
                  Kolkata, (pin: 700091)
                  West Bengal, India.</div>
              </a>

              {/* Social Icons */}
              <div className="flex justify-center md:justify-start space-x-6 mt-6">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-transform duration-300 ease-in-out transform hover:scale-125 hover:rotate-6">
                  {socialIcons.github}
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-transform duration-300 ease-in-out transform hover:scale-125 hover:rotate-6">
                  {socialIcons.linkedin}
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="md:w-2/3">
            <h3 className="text-2xl font-semibold mb-6 text-center md:text-left">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="mt-1 block w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200"
                  required
                />
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john.doe@example.com"
                  className="mt-1 block w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200"
                  required
                />
              </div>

              {/* Message Textarea */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  className="mt-1 block w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold rounded-xl shadow-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl"
                >
                  Send Message
                </button>
              </div>

              {/* Success Message Box */}
              {showSuccess && (
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <div className="bg-green-500/20 text-green-300 p-6 rounded-xl shadow-lg text-center backdrop-blur-sm animate-fade-in-up">
                    <h4 className="font-semibold text-lg mb-2">Message Submitted!</h4>
                    <p className="text-sm">A new email draft has been created for you to send.</p>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
