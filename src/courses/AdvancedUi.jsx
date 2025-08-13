import React from 'react';
import { FaPalette, FaLaptopCode, FaUserTie, FaChartLine, FaCertificate, FaRegSmile } from 'react-icons/fa';
import { SiFigma, SiTailwindcss, SiReact } from 'react-icons/si';
import { FiAward, FiClock, FiUsers, FiBook } from 'react-icons/fi';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useNavigate } from "react-router-dom";


const AdvancedUi = () => {
  const navigate = useNavigate()

  const navigateToContact = () => {
    navigate('/contact');
  };
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
      name: "Alexandra Chen",
      role: "Product Designer",
      quote: "This course transformed my design approach. The advanced prototyping techniques alone were worth the investment.",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg"
    },
    {
      id: 2,
      name: "James Rodriguez",
      role: "UX Engineer",
      quote: "Finally a course that bridges the gap between design and development. The hands-on projects were incredible.",
      avatar: "https://randomuser.me/api/portraits/men/42.jpg"
    },
    {
      id: 3,
      name: "Priya Patel",
      role: "Design Lead",
      quote: "Our entire team took this course and saw immediate improvements in our workflow and deliverables.",
      avatar: "https://randomuser.me/api/portraits/women/33.jpg"
    }
  ];

  // Curriculum modules
  const curriculum = [
    {
      title: "Advanced UI Principles",
      topics: ["Design Systems", "Micro-interactions", "Motion Design", "Accessibility Deep Dive"],
      icon: <FaPalette className="text-indigo-500 text-2xl" />
    },
    {
      title: "UX Research Methods",
      topics: ["User Testing", "Data Analysis", "Persona Development", "Journey Mapping"],
      icon: <FaChartLine className="text-teal-500 text-2xl" />
    },
    {
      title: "Prototyping Mastery",
      topics: ["Figma Advanced", "Interactive Prototypes", "Design Handoff", "Developer Collaboration"],
      icon: <SiFigma className="text-purple-500 text-2xl" />
    },
    {
      title: "Frontend Integration",
      topics: ["Design to Code", "Tailwind CSS", "React Components", "Performance Optimization"],
      icon: <SiTailwindcss className="text-cyan-500 text-2xl" />
    },
    {
      title: "Design Leadership",
      topics: ["Stakeholder Management", "Design Ops", "Team Collaboration", "Measuring Impact"],
      icon: <FaUserTie className="text-amber-500 text-2xl" />
    },
    {
      title: "Capstone Project",
      topics: ["Real Client Brief", "Portfolio Piece", "Expert Review", "Career Preparation"],
      icon: <FaCertificate className="text-rose-500 text-2xl" />
    }
  ];

  // Course features
  const features = [
    {
      icon: <FiAward className="w-8 h-8 text-indigo-600" />,
      title: "Industry Certification",
      description: "Globally recognized certificate upon completion"
    },
    {
      icon: <FiClock className="w-8 h-8 text-indigo-600" />,
      title: "Flexible Learning",
      description: "Self-paced with weekly live sessions"
    },
    {
      icon: <FiUsers className="w-8 h-8 text-indigo-600" />,
      title: "Community Access",
      description: "Join our network of 10,000+ designers"
    },
    {
      icon: <FiBook className="w-8 h-8 text-indigo-600" />,
      title: "Lifetime Resources",
      description: "Course materials and updates forever"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-indigo-50">
      {/* Navigation */}
      <nav className="shadow-sm py-4 px-6 fixed top-[88px] z-50 w-full">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <SiFigma className="text-indigo-600 text-2xl" />
            <span className="font-bold text-xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">UXMastery</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#overview" className="text-gray-700 hover:text-indigo-600 transition">Overview</a>
            <a href="#curriculum" className="text-gray-700 hover:text-indigo-600 transition">Curriculum</a>
            <a href="#instructor" className="text-gray-700 hover:text-indigo-600 transition">Instructor</a>
            <a href="#pricing" className="text-gray-700 hover:text-indigo-600 transition">Pricing</a>
          </div>
          <button onClick={navigateToContact}
           className="bg-indigo-600 text-white px-6 py-2 rounded-full font-medium hover:bg-indigo-700 transition shadow-md">
            Enroll Now
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 z-10">
              <div className="inline-block bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                🎓 Advanced Certification
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Master <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">UI/UX Design</span> for Modern Web Apps
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl">
                Elevate your design skills with our intensive 12-week program. Learn advanced techniques from industry experts and build portfolio-worthy projects.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button onClick={navigateToContact}
                 className="bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300 shadow-lg flex items-center justify-center">
                  <FaRegSmile className="mr-2" /> Enroll Now
                </button>
                <button onClick={navigateToContact}
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-medium hover:border-indigo-300 hover:bg-indigo-50 transition duration-300">
                  Watch Sample Lesson
                </button>
              </div>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
                  <SiFigma className="text-purple-500 mr-2" />
                  <span>Figma</span>
                </div>
                <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
                  <SiFigma className="text-pink-500 mr-2" />
                  <span>Adobe XD</span>
                </div>
                <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
                  <SiTailwindcss className="text-cyan-500 mr-2" />
                  <span>Tailwind</span>
                </div>
                <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
                  <SiReact className="text-blue-400 mr-2" />
                  <span>React</span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative mt-10 lg:mt-0">
              <div className="relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1545235617-9465d2a55698?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dWklMjB1eHxlbnwwfHwwfHx8MA%3D%3D" 
                  alt="UI/UX Design" 
                  className="rounded-2xl shadow-2xl border-8 border-white"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-purple-200 rounded-2xl opacity-40"></div>
              <div className="absolute -top-6 -left-6 w-48 h-48 bg-indigo-200 rounded-2xl opacity-40"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-indigo-100 p-4 rounded-full">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Details */}
      <section id="overview" className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Transform Your Design Career</h2>
            <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-16">
              Our comprehensive program takes you from intermediate to advanced level with real-world projects and expert mentorship.
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">What You'll Achieve</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="bg-indigo-100 p-1 rounded-full mr-4 mt-1">
                        <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">Master advanced prototyping and interaction design</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-indigo-100 p-1 rounded-full mr-4 mt-1">
                        <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">Develop comprehensive design systems</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-indigo-100 p-1 rounded-full mr-4 mt-1">
                        <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">Conduct professional UX research and testing</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-indigo-100 p-1 rounded-full mr-4 mt-1">
                        <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">Bridge the gap between design and development</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-indigo-100 p-1 rounded-full mr-4 mt-1">
                        <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">Build a professional portfolio with 3 real projects</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Course Details</h3>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-indigo-100 p-2 rounded-full mr-4">
                        <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Duration</h4>
                        <p className="text-gray-600">12 weeks (8-10 hours/week)</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-indigo-100 p-2 rounded-full mr-4">
                        <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Prerequisites</h4>
                        <p className="text-gray-600">Basic UI/UX knowledge or 1+ year experience</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-indigo-100 p-2 rounded-full mr-4">
                        <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Format</h4>
                        <p className="text-gray-600">Online with weekly live Q&A sessions</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-indigo-100 p-2 rounded-full mr-4">
                        <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Resources</h4>
                        <p className="text-gray-600">100+ design files, templates, and cheatsheets</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section id="curriculum" className="py-16 px-6 bg-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Course Curriculum</h2>
            <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-16">
              A comprehensive journey through modern UI/UX design principles and practices
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {curriculum.map((module, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300 group">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-indigo-100 p-3 rounded-full mr-4 group-hover:bg-indigo-200 transition">
                      {module.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">{module.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {module.topics.map((topic, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="flex-shrink-0 w-4 h-4 text-indigo-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      </section>

      {/* Instructor Section */}
      <section id="instructor" className="py-16 px-6 bg-white mt-25">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/3">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                  alt="Instructor" 
                  className="rounded-2xl shadow-xl w-full"
                />
                <div className="absolute -bottom-6 -right-6 bg-indigo-600 text-white p-4 rounded-2xl shadow-lg">
                  <span className="block text-2xl font-bold">10+</span>
                  <span className="block text-sm">Years Experience</span>
                </div>
              </div>
            </div>
            <div className="lg:w-2/3 ">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Learn From Industry Experts</h2>
              <div className="w-24 h-1 bg-indigo-600 mb-6"></div>
              <p className="text-xl text-gray-600 mb-6">
                Our lead instructor, Sarah Johnson, has worked with Fortune 500 companies and startups alike, bringing real-world expertise to every lesson.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-indigo-100 p-2 rounded-full mr-4">
                    <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Google Design Lead</h4>
                    <p className="text-gray-600">Former Senior Designer</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-indigo-100 p-2 rounded-full mr-4">
                    <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Certified Educator</h4>
                    <p className="text-gray-600">10,000+ students taught</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-indigo-100 p-2 rounded-full mr-4">
                    <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Global Speaker</h4>
                    <p className="text-gray-600">Keynote at 50+ conferences</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-indigo-100 p-2 rounded-full mr-4">
                    <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Open Source</h4>
                    <p className="text-gray-600">Creator of popular design tools</p>
                  </div>
                </div>
              </div>
              <button onClick={navigateToContact}
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                Watch Instructor Introduction
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-6 bg-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Students Say</h2>
            <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of designers who transformed their careers with our program
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Slider {...carouselSettings}>
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="px-4">
                  <div className="bg-white p-8 rounded-2xl shadow-md">
                    <div className="flex items-center mb-6">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name} 
                        className="w-16 h-16 rounded-full object-cover mr-4 border-4 border-indigo-100"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                        <p className="text-indigo-600">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 text-lg italic relative pl-6">
                      <svg className="absolute left-0 top-0 w-6 h-6 text-indigo-200" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                      {testimonial.quote}
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
            <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-16">
              Choose the plan that works best for your learning journey
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Standard</h3>
                <p className="text-gray-600 mb-6">Perfect for self-paced learners</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">₹997</span>
                  <span className="text-gray-500"> / one-time</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg className="flex-shrink-0 w-5 h-5 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Full course access</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="flex-shrink-0 w-5 h-5 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Downloadable resources</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="flex-shrink-0 w-5 h-5 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Community access</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="flex-shrink-0 w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-gray-400">Personal mentorship</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="flex-shrink-0 w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-gray-400">Certificate review</span>
                  </li>
                </ul>
                <button onClick={navigateToContact}
                className="w-full bg-gray-100 text-gray-800 py-3 rounded-lg font-medium hover:bg-gray-200 transition">
                  Choose Plan
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl border-2 border-indigo-600 overflow-hidden transform hover:scale-105 transition duration-300 relative">
              <div className="absolute top-0 right-0 bg-indigo-600 text-white px-4 py-1 text-sm font-medium rounded-bl-lg">
                Most Popular
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Premium</h3>
                <p className="text-gray-600 mb-6">Best value with mentorship</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">₹1,497</span>
                  <span className="text-gray-500"> / one-time</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg className="flex-shrink-0 w-5 h-5 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Everything in Standard</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="flex-shrink-0 w-5 h-5 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>4 mentorship sessions</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="flex-shrink-0 w-5 h-5 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Portfolio review</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="flex-shrink-0 w-5 h-5 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Certificate with distinction</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="flex-shrink-0 w-5 h-5 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Job search support</span>
                  </li>
                </ul>
                <button onClick={navigateToContact}
                 className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700 transition shadow-md">
                  Choose Plan
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Team</h3>
                <p className="text-gray-600 mb-6">For companies & groups</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">₹2,997</span>
                  <span className="text-gray-500"> / 3 seats</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg className="flex-shrink-0 w-5 h-5 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Everything in Premium</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="flex-shrink-0 w-5 h-5 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>3 team licenses</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="flex-shrink-0 w-5 h-5 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Team dashboard</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="flex-shrink-0 w-5 h-5 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Progress tracking</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="flex-shrink-0 w-5 h-5 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Dedicated account manager</span>
                  </li>
                </ul>
                <button onClick={navigateToContact}
                className="w-full bg-gray-100 text-gray-800 py-3 rounded-lg font-medium hover:bg-gray-200 transition">
                  Choose Plan
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 bg-indigo-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6"></div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">What's the time commitment for this course?</h3>
              <p className="text-gray-600">
                The course is designed for 8-10 hours per week over 12 weeks. However, you'll have access to all materials for 12 months, so you can learn at your own pace if needed.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Do I need design experience to take this course?</h3>
              <p className="text-gray-600">
                This is an advanced course, so we recommend at least 1 year of UI/UX experience or completion of our Foundations course. Contact us if you're unsure about your readiness.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">What software will I need?</h3>
              <p className="text-gray-600">
                You'll need Figma (free plan available) and a code editor like VS Code. We'll provide trial links for premium tools used in the course.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Is there a money-back guarantee?</h3>
              <p className="text-gray-600">
                Yes! We offer a 14-day no-questions-asked refund policy. If you're not satisfied, just email us within 14 days of purchase for a full refund.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Design Career?</h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
            Join our next cohort and gain the skills to create stunning, user-centered digital experiences.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button onClick={navigateToContact}
            className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-50 transition duration-300 shadow-lg">
              Enroll Now
            </button>
            <button onClick={navigateToContact}
            className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:bg-opacity-10 transition duration-300">
              Talk to an Advisor
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdvancedUi;