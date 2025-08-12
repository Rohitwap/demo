import { useState, useEffect } from 'react';
import { FaGraduationCap, FaUserTie, FaChalkboardTeacher, FaBriefcase, FaQuoteLeft } from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';
import { motion } from 'framer-motion';
import chair from '../assets/chair.png';
import OurJourney from "./OurJourney"
import Overwise from "./Overwise"

const SamauraAcademy = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoveredElement, setHoveredElement] = useState(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleHover = (element) => {
    setHoveredElement(element);
  };

  const handleLeave = () => {
    setHoveredElement(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 font-sans text-gray-800 relative overflow-hidden">
      {/* Animated Cursor */}
      <motion.div
        className={`fixed w-8 h-8 rounded-full pointer-events-none z-50 mix-blend-difference ${
          hoveredElement === 'button' ? 'bg-white scale-150' : 
          hoveredElement === 'link' ? 'bg-indigo-300 scale-125' : 
          'bg-indigo-500'
        }`}
        animate={{
          x: cursorPosition.x - 16,
          y: cursorPosition.y - 16,
          transition: { type: 'spring', damping: 20, stiffness: 300 }
        }}
      />

      {/* Header */}
      <header className="relative py-12 px-6 md:px-12 lg:px-24 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-b-3xl shadow-xl">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-between"
          >
            <div className="flex items-center space-x-4">
              <FaGraduationCap className="text-4xl text-yellow-300" />
              <h1 className="text-3xl font-bold">Samaura Academy</h1>
            </div>
          
          </motion.div>

          <div className="mt-16 md:mt-24 grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Empowering Students with <span className="text-yellow-300">Industry-Relevant Skills</span>
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Established in 2000, Samaura Academy offers 100+ diploma and advanced courses across various domains.
              </p>
              <button 
                className="px-8 py-3 bg-yellow-400 text-indigo-900 font-bold rounded-full hover:bg-yellow-300 transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group"
                onMouseEnter={() => handleHover('button')}
                onMouseLeave={handleLeave}
              >
                <span className="relative z-10 flex items-center">
                  Explore Courses <IoIosArrowForward className="ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="bg-white/20 backdrop-blur-md rounded-2xl p-2 shadow-2xl transform rotate-1">
                <img 
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                  alt="Students learning" 
                  className="rounded-xl w-full h-auto object-cover shadow-lg transform -rotate-1"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-yellow-400 p-4 rounded-xl shadow-lg z-10">
                <FaChalkboardTeacher className="text-3xl text-indigo-800" />
              </div>
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg z-10">
                <FaBriefcase className="text-3xl text-indigo-600" />
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Chairman's Message */}
      <section className="py-16 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl shadow-xl overflow-hidden"
        >
          <div className="md:flex">
            <div className="md:w-1/3 bg-indigo-700 p-8 flex flex-col items-center justify-center">
              <div className="relative group">
                <img 
                  src={chair} 
                  alt="Samprita Matty" 
                  className="w-48 h-48 object-cover rounded-full border-4 border-yellow-300 shadow-lg group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-white transition-all duration-500"></div>
              </div>
              <h3 className="mt-6 text-2xl font-bold text-white">SAMPRITA MATTY</h3>
              <p className="text-indigo-200">CHAIRMAN</p>
              <div className="mt-4 flex space-x-4">
                {['linkedin', 'twitter', 'facebook'].map((social) => (
                  <a 
                    key={social} 
                    href="#" 
                    className="text-white hover:text-yellow-300 transition-colors duration-300"
                    onMouseEnter={() => handleHover('link')}
                    onMouseLeave={handleLeave}
                  >
                    <span className="sr-only">{social}</span>
                    <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center hover:bg-yellow-300 hover:text-indigo-700 transition-all duration-300">
                      <FaUserTie />
                    </div>
                  </a>
                ))}
              </div>
            </div>
            <div className="md:w-2/3 p-8 md:p-12">
              <div className="flex items-center mb-6">
                <FaQuoteLeft className="text-4xl text-indigo-600 opacity-20 mr-4" />
                <h2 className="text-3xl font-bold text-indigo-800">MESSAGE FROM OUR CHAIRMAN</h2>
              </div>
              <div className="prose max-w-none text-gray-700">
                <p className="mb-4">
                  It is a haven to stand before you today as the Chairman of Samura Academy. Our journey began with a vision to create an institution that nurtures talent, enhances skills, and represents individuals for the future.
                </p>
                <p className="mb-4">
                  Education and just health professionals feel a better empowerment, growth, and transformation. As Samura Academy, we are committed to bridging the gap between traditional education and industry requirements.
                </p>
                <p className="mb-4">
                  Our programs are designed to allow students with disabilities and collaborate with others. Our work opportunities, is far more exciting, digital age, adaptability and hurdle on learning our key to success, and that's exactly what we provide here.
                </p>
                <p>
                  Today, a number of great pride and enthusiasm are given to us to educate the views and mission to ensure that people thrive. I hope that we will continue to be able to make our goal in mind—to help us understand our needs, improve access to our needs, build, innovate, and experience new careers.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-indigo-50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-indigo-800 mb-4">Why Choose Samaura Academy?</h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FaGraduationCap className="text-4xl" />,
                title: "100+ Courses",
                description: "Comprehensive programs across various domains to suit every career path."
              },
              {
                icon: <FaChalkboardTeacher className="text-4xl" />,
                title: "Expert Faculty",
                description: "Learn from industry professionals with years of practical experience."
              },
              {
                icon: <FaBriefcase className="text-4xl" />,
                title: "Career Opportunities",
                description: "Strong industry connections leading to excellent placement records."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 group"
                onMouseEnter={() => handleHover('card')}
                onMouseLeave={handleLeave}
              >
                <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-indigo-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <OurJourney/>
      <Overwise/>
    </div>
    
  );
};

export default SamauraAcademy;