import React from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaChartLine, FaSearch, FaMobile, FaVideo, FaLaptopCode, FaUserTie, FaCertificate, FaClock, FaUsers, FaLinkedin } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';

const AdvanceDigital = () => {
  // Carousel settings
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Marketing Director",
      quote: "This course transformed our digital strategy. Our engagement rates increased by 300% within 3 months!",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmVzc2lvbmFsJTIwd29tYW58ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Startup Founder",
      quote: "The advanced techniques taught in this course helped us scale our customer acquisition while reducing costs.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmVzc2lvbmFsJTIwbWFufGVufDB8fDB8fHww",
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "Content Creator",
      quote: "I learned how to effectively monetize my audience through the comprehensive modules on digital advertising.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmVzc2lvbmFsJTIwd29tYW58ZW58MHx8MHx8fDA%3D",
    },
  ];

  // Course modules
  const modules = [
    {
      title: "Advanced SEO Strategies",
      description: "Master technical SEO, voice search optimization, and AI-driven keyword research techniques.",
      icon: <FaSearch className="text-primary text-3xl" />,
    },
    {
      title: "Data-Driven Marketing",
      description: "Learn to leverage analytics and machine learning for predictive marketing and ROI optimization.",
      icon: <FaChartLine className="text-primary text-3xl" />,
    },
    {
      title: "Social Media Mastery",
      description: "Advanced tactics for viral content creation, community building, and platform-specific algorithms.",
      icon: <FaChartLine className="text-primary text-3xl" />,
    },
    {
      title: "Mobile-First Marketing",
      description: "Strategies for app marketing, SMS campaigns, and location-based mobile advertising.",
      icon: <FaMobile className="text-primary text-3xl" />,
    },
    {
      title: "Video Marketing Domination",
      description: "YouTube algorithms, short-form video strategies, and live streaming for engagement.",
      icon: <FaVideo className="text-primary text-3xl" />,
    },
    {
      title: "Marketing Automation",
      description: "Implement AI chatbots, email sequences, and CRM integrations for scalable campaigns.",
      icon: <FaLaptopCode className="text-primary text-3xl" />,
    },
  ];

  // Instructors
  const instructors = [
    {
      name: "Dr. Alan Smith",
      role: "Digital Marketing Expert",
      bio: "Former Google Ads strategist with 15+ years experience in performance marketing.",
      image: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRlYWNoZXJ8ZW58MHx8MHx8fDA%3D",
    },
    {
      name: "Lisa Wong",
      role: "Social Media Strategist",
      bio: "Agency founder who grew multiple brands to 1M+ followers with organic strategies.",
      image: "https://images.unsplash.com/photo-1546820389-44d77e1f3b31?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRlYWNoZXJ8ZW58MHx8MHx8fDA%3D",
    },
  ];

  return (
    <div className="min-h-screen bg-light">
      {/* Header/Navigation */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-primary"
          >
            DigitalPro
          </motion.div>
          <nav className="hidden md:flex space-x-8">
            {['Overview', 'Curriculum', 'Instructors', 'Pricing', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-dark hover:text-primary transition-colors duration-300 font-medium"
              >
                {item}
              </a>
            ))}
          </nav>
          <button className="bg-primary text-black px-6 py-2 rounded-full hover:bg-primary/90 transition-colors duration-300 shadow-md hover:shadow-lg">
            Enroll Now
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block bg-white/20 px-3 py-1 rounded-full text-sm mb-4 text-black">
                New Cohort Starting Soon
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-black">
                Advanced Digital Marketing Mastery
              </h1>
              <p className="text-xl mb-8 opacity-90 text-black">
                Transform your marketing skills with cutting-edge strategies used by top agencies and brands worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-black text-primary px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center">
                  Enroll Now <FiArrowRight className="ml-2" />
                </button>
                <button className="bg-transparent border-2 text-black border-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition-colors duration-300">
                  Watch Preview
                </button>
              </div>
            </motion.div>
          </div>
          <div className="md:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZGlnaXRhbCUyMG1hcmtldGluZ3xlbnwwfHwwfHx8MA%3D%3D" 
                alt="Digital Marketing" 
                className="rounded-xl shadow-2xl border-8 border-white/20 transform rotate-2"
              />
              <div className="absolute -bottom-6 -left-6 bg-white text-dark p-4 rounded-lg shadow-lg w-3/4">
                <div className="flex items-center">
                  <div className="bg-primary/10 p-2 rounded-full mr-3">
                    <FaCertificate className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold">Certification</h3>
                    <p className="text-sm">Industry-recognized credential</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: <FaUserTie className="mx-auto text-3xl text-primary mb-3" />, number: "5,000+", label: "Students Trained" },
              { icon: <FaClock className="mx-auto text-3xl text-primary mb-3" />, number: "60+", label: "Hours of Content" },
              { icon: <FaCertificate className="mx-auto text-3xl text-primary mb-3" />, number: "92%", label: "Certification Rate" },
              { icon: <FaUsers className="mx-auto text-3xl text-primary mb-3" />, number: "300+", label: "Companies Hiring" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl hover:bg-light transition-colors duration-300"
              >
                {stat.icon}
                <h3 className="text-3xl font-bold text-dark mb-2">{stat.number}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section id="overview" className="py-20 bg-light">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Master Digital Marketing in the Modern Age</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive program goes beyond basics to teach you the advanced strategies that separate industry leaders from the competition.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-dark mb-6">What You'll Learn</h3>
              <ul className="space-y-4">
                {[
                  "AI-powered marketing automation techniques",
                  "Advanced data analytics for ROI optimization",
                  "Omnichannel campaign orchestration",
                  "Behavioral psychology in digital advertising",
                  "Cutting-edge social media algorithms",
                  "Enterprise-level marketing technology stacks"
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <span className="bg-primary/10 text-primary p-1 rounded-full mr-3 mt-1">
                      <FiArrowRight />
                    </span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div>
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-dark mb-6">Course Highlights</h3>
                <div className="space-y-6">
                  {[
                    { icon: <FaVideo className="text-primary text-xl" />, text: "50+ hours of HD video content" },
                    { icon: <FaLaptopCode className="text-primary text-xl" />, text: "Hands-on projects with real-world datasets" },
                    { icon: <FaUserTie className="text-primary text-xl" />, text: "1-on-1 mentorship sessions available" },
                    { icon: <FaCertificate className="text-primary text-xl" />, text: "Professional certification upon completion" },
                    { icon: <FaUsers className="text-primary text-xl" />, text: "Access to private community of marketers" },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center p-3 bg-light rounded-lg hover:bg-primary/5 transition-colors duration-300"
                    >
                      <div className="bg-primary/10 p-2 rounded-full mr-4">
                        {item.icon}
                      </div>
                      <span>{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section id="curriculum" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Course Curriculum</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive journey through all aspects of modern digital marketing
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-light rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="p-6">
                  <div className="mb-4">
                    {module.icon}
                  </div>
                  <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors duration-300">
                    {module.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{module.description}</p>
                  <button className="text-primary font-medium flex items-center group-hover:underline">
                    Learn more <FiArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Students Say</h2>
            <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Don't just take our word for it - hear from our graduates
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Slider {...carouselSettings}>
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="px-4 py-8">
                  <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
                    <div className="flex flex-col md:flex-row items-center">
                      <div className="md:w-1/3 mb-6 md:mb-0">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-32 h-32 rounded-full object-cover border-4 border-white/20 mx-auto"
                        />
                      </div>
                      <div className="md:w-2/3 md:pl-8">
                        <p className="text-xl italic mb-6">"{testimonial.quote}"</p>
                        <div>
                          <h4 className="font-bold text-lg">{testimonial.name}</h4>
                          <p className="opacity-80">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </motion.div>
        </div>
      </section>

      {/* Instructors */}
      <section id="instructors" className="py-20 bg-light">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Learn From Industry Leaders</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our instructors bring decades of real-world experience at top companies
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {instructors.map((instructor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img 
                      src={instructor.image} 
                      alt={instructor.name} 
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="p-8 md:w-2/3">
                    <h3 className="text-2xl font-bold text-dark mb-2">{instructor.name}</h3>
                    <p className="text-primary font-medium mb-4">{instructor.role}</p>
                    <p className="text-gray-600 mb-6">{instructor.bio}</p>
                    <div className="flex space-x-4">
                      <a href="#" className="bg-primary/10 text-primary p-2 rounded-full hover:bg-primary/20 transition-colors duration-300">
                        <FaLinkedin />
                      </a>
                      <a href="#" className="bg-primary/10 text-primary p-2 rounded-full hover:bg-primary/20 transition-colors duration-300">
                        <FaUserTie />
                      </a>
                      <a href="#" className="bg-primary/10 text-primary p-2 rounded-full hover:bg-primary/20 transition-colors duration-300">
                        <FaLaptopCode />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-12 text-center text-white">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">Ready to Transform Your Marketing Career?</h2>
              <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto text-black">
                Join thousands of professionals who've accelerated their careers with our Advanced Digital Marketing program.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="bg-white text-primary text-black px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors duration-300 text-lg flex items-center justify-center">
                  Enroll Now <FiArrowRight className="ml-2" />
                </button>
                <button className="bg-transparent border-2 text-black border-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-colors duration-300 text-lg">
                  Speak to an Advisor
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">DigitalPro</h3>
              <p className="text-gray-400">
                Empowering the next generation of digital marketing professionals with cutting-edge education.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['Home', 'Courses', 'About Us', 'Blog', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2">
                {['Help Center', 'Career Services', 'Webinars', 'Community', 'Scholarships'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <address className="text-gray-400 not-italic">
                123 Marketing Ave<br />
                San Francisco, CA 94107<br />
                <a href="mailto:info@digitalpro.com" className="hover:text-white transition-colors duration-300">info@digitalpro.com</a><br />
                (555) 123-4567
              </address>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} DigitalPro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AdvanceDigital;