import React, { useState } from 'react';
import { FiBook, FiUsers, FiCalendar, FiMail, FiArrowRight, FiTwitter, FiFacebook, FiInstagram, FiLinkedin, FiMenu, FiX } from 'react-icons/fi';

const Resourses = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">S</div>
            <span className="text-xl font-bold text-gray-800">Samurai Academy</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#courses" className="text-gray-700 hover:text-red-600 transition-colors">Courses</a>
            <a href="#workshops" className="text-gray-700 hover:text-red-600 transition-colors">Workshops</a>
            <a href="#resources" className="text-gray-700 hover:text-red-600 transition-colors">Resources</a>
            <a href="#testimonials" className="text-gray-700 hover:text-red-600 transition-colors">Testimonials</a>
            <a href="#contact" className="text-gray-700 hover:text-red-600 transition-colors">Contact</a>
          </div>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-700 focus:outline-none" onClick={toggleMenu}>
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white py-4 px-4 shadow-inner">
            <div className="flex flex-col space-y-4">
              <a href="#courses" className="py-2 px-4 rounded hover:bg-gray-100" onClick={toggleMenu}>Courses</a>
              <a href="#workshops" className="py-2 px-4 rounded hover:bg-gray-100" onClick={toggleMenu}>Workshops</a>
              <a href="#resources" className="py-2 px-4 rounded hover:bg-gray-100" onClick={toggleMenu}>Resources</a>
              <a href="#testimonials" className="py-2 px-4 rounded hover:bg-gray-100" onClick={toggleMenu}>Testimonials</a>
              <a href="#contact" className="py-2 px-4 rounded hover:bg-gray-100" onClick={toggleMenu}>Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Master the Art of Modern Skills</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Samurai Academy provides world-class training resources to help you excel in your career and personal development.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="#resources" 
              className="px-8 py-3 bg-white text-red-600 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
            >
              Explore Resources <FiArrowRight className="ml-2" />
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-red-600 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Courses</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive learning paths designed by industry experts
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "Frontend Development", 
                description: "Master HTML, CSS, JavaScript and modern frameworks like React", 
                icon: <FiBook className="text-3xl text-red-600" />
              },
              { 
                title: "Data Science", 
                description: "Learn Python, machine learning and data visualization techniques", 
                icon: <FiBook className="text-3xl text-red-600" />
              },
              { 
                title: "Digital Marketing", 
                description: "SEO, content marketing, social media and analytics", 
                icon: <FiBook className="text-3xl text-red-600" />
              },
            ].map((course, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                  {course.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{course.title}</h3>
                <p className="text-gray-600">{course.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshops Section */}
      <section id="workshops" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Upcoming Workshops</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Interactive sessions with industry leaders and practitioners
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { 
                title: "Advanced React Patterns", 
                date: "June 15, 2023", 
                instructor: "Takeshi Yamamoto", 
                description: "Learn advanced React concepts and performance optimization techniques",
                icon: <FiCalendar className="text-3xl text-red-600" />
              },
              { 
                title: "UX Design Principles", 
                date: "June 22, 2023", 
                instructor: "Aiko Tanaka", 
                description: "Master user-centered design approaches and prototyping",
                icon: <FiCalendar className="text-3xl text-red-600" />
              },
            ].map((workshop, index) => (
              <div key={index} className="bg-white rounded-lg p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                    {workshop.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-1">{workshop.title}</h3>
                    <p className="text-red-600 font-medium mb-2">{workshop.date}</p>
                    <p className="text-gray-600 mb-3">Instructor: {workshop.instructor}</p>
                    <p className="text-gray-600">{workshop.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section id="resources" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Learning Resources</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Access our comprehensive library of tutorials, guides, and reference materials
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                category: "Video Tutorials", 
                count: "120+", 
                description: "Step-by-step video lessons on various topics",
                icon: <FiUsers className="text-3xl text-red-600" />
              },
              { 
                category: "E-books", 
                count: "45+", 
                description: "In-depth guides and reference materials",
                icon: <FiBook className="text-3xl text-red-600" />
              },
              { 
                category: "Code Samples", 
                count: "300+", 
                description: "Practical examples and templates",
                icon: <FiBook className="text-3xl text-red-600" />
              },
            ].map((resource, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:border-red-300 transition-colors">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                  {resource.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-1">{resource.category}</h3>
                <p className="text-red-600 font-bold text-2xl mb-3">{resource.count}</p>
                <p className="text-gray-600">{resource.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Students Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from our community of learners and instructors
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { 
                name: "Kenji Sato", 
                role: "Web Developer", 
                quote: "The courses at Samurai Academy transformed my career. The practical approach helped me land my dream job.",
                avatar: "KS"
              },
              { 
                name: "Yumi Nakamura", 
                role: "UX Designer", 
                quote: "The workshops are incredibly valuable. I've applied what I learned immediately in my projects.",
                avatar: "YN"
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Get In Touch</h2>
              <p className="text-lg text-gray-600">
                Have questions about our courses or workshops? Reach out to us!
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="bg-gray-50 rounded-lg p-8">
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-red-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">S</div>
                <span className="text-xl font-bold">Samurai Academy</span>
              </div>
              <p className="text-gray-400">© {new Date().getFullYear()} Samurai Academy. All rights reserved.</p>
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FiTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FiFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FiInstagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FiLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Resourses;