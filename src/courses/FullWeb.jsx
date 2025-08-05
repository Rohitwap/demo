import React from 'react';
import { FaCode, FaDatabase, FaServer, FaMobile, FaCertificate, FaChalkboardTeacher } from 'react-icons/fa';
import { SiJavascript, SiReact, SiMongodb,  SiHtml5, SiCss3 } from 'react-icons/si';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const FullWeb = () => {
  // Carousel settings
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Frontend Developer",
      quote: "This course gave me the confidence to build professional web applications. The React and modern JavaScript content was exceptional.",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Full Stack Developer",
      quote: "The perfect balance of frontend and backend. I went from basics to building full applications in just 3 months.",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "Career Switcher",
      quote: "As someone with no prior coding experience, this course gave me all the tools I needed to land my first developer job.",
      avatar: "https://randomuser.me/api/portraits/women/63.jpg"
    }
  ];

  // Curriculum modules
  const curriculum = [
    {
      title: "Web Fundamentals",
      topics: ["HTML5 & Semantic Markup", "CSS3 & Flexbox/Grid", "Responsive Design", "Accessibility"],
      icon: <SiHtml5 className="text-orange-500 text-2xl" />
    },
    {
      title: "JavaScript Mastery",
      topics: ["ES6+ Features", "DOM Manipulation", "Async Programming", "Functional Programming"],
      icon: <SiJavascript className="text-yellow-400 text-2xl" />
    },
    {
      title: "Frontend with React",
      topics: ["React Hooks", "State Management", "Component Architecture", "React Router"],
      icon: <SiReact className="text-blue-400 text-2xl" />
    },
    {
      title: "Backend Development",
      topics: ["Node.js & Express", "RESTful APIs", "Authentication", "API Security"],
      icon: <FaServer className="text-green-500 text-2xl" />
    },
    {
      title: "Database & Deployment",
      topics: ["MongoDB & Mongoose", "SQL Basics", "Docker Containers", "Cloud Deployment"],
      icon: <FaServer className="text-purple-500 text-2xl" />
    },
    {
      title: "Capstone Project",
      topics: ["Full Stack Application", "Team Collaboration", "Code Reviews", "Portfolio Presentation"],
      icon: <FaCertificate className="text-red-500 text-2xl" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Full Stack Web Development Course
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Master both frontend and backend technologies. Build complete web applications from scratch using modern JavaScript frameworks and tools.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center bg-blue-700 bg-opacity-50 px-4 py-2 rounded-full">
                  <SiJavascript className="mr-2" />
                  <span>JavaScript</span>
                </div>
                <div className="flex items-center bg-blue-700 bg-opacity-50 px-4 py-2 rounded-full">
                  <SiReact className="mr-2" />
                  <span>React</span>
                </div>
                <div className="flex items-center bg-blue-700 bg-opacity-50 px-4 py-2 rounded-full">
                  <FaServer className="mr-2" />
                  <span>Node.js</span>
                </div>
                <div className="flex items-center bg-blue-700 bg-opacity-50 px-4 py-2 rounded-full">
                  <SiMongodb className="mr-2" />
                  <span>MongoDB</span>
                </div>
              </div>
              <button className="bg-white text-blue-800 px-8 py-3 rounded-lg font-semibold hover:bg-blue-100 transition duration-300 shadow-lg">
                Enroll Now
              </button>
            </div>
            <div className="lg:w-1/2 mt-10 lg:mt-0">
              <img 
                src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Web Development" 
                className="rounded-xl shadow-2xl border-4 border-white border-opacity-20"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Course Details Card */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 p-8">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <FaChalkboardTeacher className="text-blue-600 text-2xl" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">Course Details</h2>
                  <p className="text-gray-600">Everything you need to know</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-4">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Duration</h3>
                    <p className="text-gray-600">16 Weeks (120 Hours)</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-purple-100 p-2 rounded-full mr-4">
                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Prerequisites</h3>
                    <p className="text-gray-600">Basic computer skills (No prior coding required)</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-yellow-100 p-2 rounded-full mr-4">
                    <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Format</h3>
                    <p className="text-gray-600">Online + Live Coding Sessions + Real Projects</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-red-100 p-2 rounded-full mr-4">
                    <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Certification</h3>
                    <p className="text-gray-600">Industry-recognized Full Stack Developer certificate</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 bg-gray-50 p-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">What You'll Learn</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="flex-shrink-0 w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Build responsive, accessible websites with HTML5 and CSS3</span>
                </li>
                <li className="flex items-start">
                  <svg className="flex-shrink-0 w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Develop dynamic frontends with React and modern JavaScript</span>
                </li>
                <li className="flex items-start">
                  <svg className="flex-shrink-0 w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Create RESTful APIs with Node.js and Express</span>
                </li>
                <li className="flex items-start">
                  <svg className="flex-shrink-0 w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Work with databases (MongoDB and SQL)</span>
                </li>
                <li className="flex items-start">
                  <svg className="flex-shrink-0 w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Deploy applications using Docker and cloud platforms</span>
                </li>
                <li className="flex items-start">
                  <svg className="flex-shrink-0 w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Implement authentication and security best practices</span>
                </li>
              </ul>
              
              <div className="mt-8 bg-blue-50 p-6 rounded-lg border border-blue-100">
                <h4 className="font-semibold text-blue-800 mb-2">Special Offer</h4>
                <p className="text-blue-700 mb-3">Enroll before July 30 and get a free 1-year domain & hosting package!</p>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition duration-300">
                  Claim Your Spot
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Curriculum Section */}
      <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Course Curriculum</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive training covering all aspects of modern web development
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {curriculum.map((module, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-gray-100 p-3 rounded-full mr-4">
                      {module.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">{module.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {module.topics.map((topic, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="flex-shrink-0 w-4 h-4 text-blue-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Carousel */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Students Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Success stories from our alumni community
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Slider {...carouselSettings}>
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="px-4">
                  <div className="bg-gray-50 p-8 rounded-xl">
                    <div className="flex items-center mb-6">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name} 
                        className="w-16 h-16 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                        <p className="text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 text-lg italic">
                      "{testimonial.quote}"
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Become a Full Stack Developer?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join our next cohort and gain the skills to build modern web applications.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-300 shadow-lg">
              Enroll Now
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:bg-opacity-10 transition duration-300">
              Download Syllabus
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullWeb;
