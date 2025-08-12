import { useEffect } from 'react';
import { FaChalkboardTeacher, FaGraduationCap, FaLaptopCode, FaUserGraduate, FaUsers } from 'react-icons/fa';
import { GiGraduateCap } from 'react-icons/gi';
import { MdSchool, MdWork } from 'react-icons/md';

const SamauraAcademyOverview = () => {
  useEffect(() => {
    // Add any initialization logic here if needed
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 font-sans">
      {/* Header Section */}
      <header className="relative overflow-hidden py-20 bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="animate-bounce">
            <GiGraduateCap className="mx-auto text-6xl mb-4 text-yellow-300" />
          </div>
          <h1 className="text-5xl font-bold mb-4 animate-fadeIn">Welcome to Samaura Academy</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto animate-fadeIn delay-100">
            Empowering the next generation with industry-relevant skills and practical knowledge
          </p>
          <button className="bg-yellow-400 hover:bg-yellow-300 text-indigo-800 font-semibold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 animate-pulse">
            Explore Our Programs
          </button>
        </div>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: `${Math.random() * 100 + 50}px`,
                height: `${Math.random() * 100 + 50}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.1,
              }}
            ></div>
          ))}
        </div>
      </header>

      {/* Academy Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 animate-slideInLeft">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Students learning" 
                className="rounded-xl shadow-2xl transform hover:rotate-1 transition-all duration-500"
              />
            </div>
            <div className="md:w-1/2 md:pl-12 animate-slideInRight">
              <h2 className="text-4xl font-bold text-indigo-800 mb-6">
                About Samaura Academy
              </h2>
              <div className="bg-yellow-100 border-l-4 border-yellow-400 p-4 mb-6 rounded-r">
                <p className="text-gray-700 italic">
                  "Education is not the learning of facts, but the training of the mind to think." - Albert Einstein
                </p>
              </div>
              <p className="text-gray-700 mb-4">
                Established in 2020, Samaura Academy has been at the forefront of bridging the gap between academic knowledge and industry requirements.
              </p>
              <p className="text-gray-700 mb-6">
                Our mission is to empower students with practical skills, hands-on experience, and expert-led training that prepares them for the real-world challenges of today's dynamic job market.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center bg-indigo-100 px-4 py-2 rounded-full">
                  <FaGraduationCap className="text-indigo-600 mr-2" />
                  <span className="text-indigo-800 font-medium">Practical Learning</span>
                </div>
                <div className="flex items-center bg-indigo-100 px-4 py-2 rounded-full">
                  <FaChalkboardTeacher className="text-indigo-600 mr-2" />
                  <span className="text-indigo-800 font-medium">Expert Faculty</span>
                </div>
                <div className="flex items-center bg-indigo-100 px-4 py-2 rounded-full">
                  <MdWork className="text-indigo-600 mr-2" />
                  <span className="text-indigo-800 font-medium">Placement Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Offerings */}
      <section className="py-20 bg-indigo-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-indigo-800 mb-16">
            Our Comprehensive Course Offerings
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Diploma Programs",
                count: "50+",
                description: "Industry-focused diploma courses covering emerging technologies",
                icon: <FaGraduationCap className="text-4xl mb-4 text-indigo-600" />,
                bg: "bg-white"
              },
              {
                title: "Advanced Certifications",
                count: "30+",
                description: "Specialized certifications for career advancement",
                icon: <FaLaptopCode className="text-4xl mb-4 text-indigo-600" />,
                bg: "bg-indigo-100"
              },
              {
                title: "Skill Development",
                count: "20+",
                description: "Short-term courses for immediate employability",
                icon: <FaUserGraduate className="text-4xl mb-4 text-indigo-600" />,
                bg: "bg-white"
              }
            ].map((course, index) => (
              <div 
                key={index}
                className={`${course.bg} p-8 rounded-xl shadow-lg transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl cursor-pointer group`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <div className="group-hover:scale-110 transition-transform duration-300">
                      {course.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-indigo-800 mb-2">{course.title}</h3>
                    <p className="text-gray-600 mb-4">{course.description}</p>
                  </div>
                  <span className="text-5xl font-bold text-indigo-300">{course.count}</span>
                </div>
                <div className="mt-4 pt-4 border-t border-indigo-100">
                  <button className="text-indigo-600 font-semibold hover:text-indigo-800 flex items-center">
                    Explore courses
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-indigo-800 mb-4">
            Who Can Benefit?
          </h2>
          <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
            Our programs are designed for ambitious learners at different stages of their educational journey
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-indigo-100 to-purple-100 p-8 rounded-xl relative overflow-hidden group">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-indigo-200 rounded-full opacity-20 group-hover:opacity-30 transition-all duration-500"></div>
              <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-purple-200 rounded-full opacity-20 group-hover:opacity-30 transition-all duration-500"></div>
              
              <div className="flex items-center mb-6">
                <div className="bg-indigo-600 p-3 rounded-full mr-4">
                  <MdSchool className="text-3xl text-white" />
                </div>
                <h3 className="text-2xl font-bold text-indigo-800">School Students</h3>
              </div>
              
              <ul className="space-y-4 relative z-10">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">Early exposure to career-oriented skills</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">Complementary to academic curriculum</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">Weekend and holiday batches available</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-blue-100 to-cyan-100 p-8 rounded-xl relative overflow-hidden group">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-200 rounded-full opacity-20 group-hover:opacity-30 transition-all duration-500"></div>
              <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-cyan-200 rounded-full opacity-20 group-hover:opacity-30 transition-all duration-500"></div>
              
              <div className="flex items-center mb-6">
                <div className="bg-blue-600 p-3 rounded-full mr-4">
                  <FaUsers className="text-3xl text-white" />
                </div>
                <h3 className="text-2xl font-bold text-blue-800">College Students & Graduates</h3>
              </div>
              
              <ul className="space-y-4 relative z-10">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">Enhance employability with practical skills</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">Industry-aligned certification programs</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">Placement assistance and internship opportunities</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Career?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join Samaura Academy today and gain the skills that employers are looking for
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-indigo-800 font-semibold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300">
              Enroll Now
            </button>
            <button className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 hover:bg-white hover:text-indigo-800">
              Request Information
            </button>
          </div>
        </div>
      </section>

     
    </div>
  );
};

export default SamauraAcademyOverview;