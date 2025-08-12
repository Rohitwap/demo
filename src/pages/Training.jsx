import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import { FaGraduationCap, FaLaptopCode, FaUsers, FaChartLine, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// 3D Background Component
const ThreeDBackground = () => {
  const Box = () => {
    const meshRef = useRef();
    
    useFrame(() => {
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.01;
    });
    
    return (
      <mesh ref={meshRef}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#4F46E5" transparent opacity={0.6} />
      </mesh>
    );
  };

  return (
    <div className="fixed w-full h-full z-0 bg-gradient-to-b from-transparent to-indigo-900/30 backdrop-blur-sm animate-pulse transition-all duration-1000 ease-in-out transform hover:scale-105">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Box />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
};

// Course Carousel Component
const CourseCarousel = () => {
  const courses = [
    {
      id: 1,
      title: 'React Fundamentals',
      description: 'Master React hooks, components, and state management',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 2,
      title: 'Advanced React',
      description: 'Learn context API, reducers, and performance optimization',
      image: 'https://images.unsplash.com/photo-1579403124614-197f69d8187b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 3,
      title: 'React with Tailwind',
      description: 'Create beautiful UIs with React and Tailwind CSS',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 4,
      title: 'React Three.js',
      description: 'Build 3D experiences with React and Three.js',
      image: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="px-4 py-8 max-w-7xl mx-auto bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-red-500/30 backdrop-blur-sm rounded-xl shadow-2xl">
      <h2 className="text-3xl font-bold text-center mb-8 text-black">Featured Courses</h2>
      <Slider {...settings}>
        {courses.map((course) => (
          <motion.div
            key={course.id}
            whileHover={{ scale: 1.05 }}
            className="px-2"
          >
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                <p className="text-gray-600">{course.description}</p>
                <button className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition">
                  Enroll Now
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </Slider>
    </div>
  );
};

// Features Component with Animated Icons
const Features = () => {
  const features = [
    {
      icon: <FaGraduationCap className="w-12 h-12" />,
      title: 'Expert Instructors',
      description: 'Learn from React professionals with industry experience',
    },
    {
      icon: <FaLaptopCode className="w-12 h-12" />,
      title: 'Hands-on Projects',
      description: 'Build real-world applications during the course',
    },
    {
      icon: <FaUsers className="w-12 h-12" />,
      title: 'Community Support',
      description: 'Join our active developer community',
    },
    {
      icon: <FaChartLine className="w-12 h-12" />,
      title: 'Career Growth',
      description: 'Get job-ready with in-demand React skills',
    },
  ];

  return (
    <div className="py-16 bg-white  relative animate-pulse transition-all duration-1000 ease-in-out transform hover:scale-105">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Why Learn With Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-lg shadow-md text-center"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-indigo-600 mx-auto mb-4"
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Main App Component
function Training() {
  return (
    <div className="min-h-screen flex flex-col w-full">
      <ThreeDBackground />
      

      {/* Hero Section */}
      <main className="flex-grow relative z-10 perspective-1000 transform-style-preserve-3d animate-float backdrop-blur-lg bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-indigo-500/20 shadow-2xl">
        <section className="relative pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold text-black mb-6"
            >
              Master React Development
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xl md:text-2xl text-black mb-8 max-w-3xl mx-auto"
            >
              Transform your career with our comprehensive React training program
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition">
                Start Learning
              </button>
              <button className="bg-gray-300 hover:bg-gray-100 text-indigo-600 font-bold py-3 px-8 rounded-lg text-lg transition">
                View Courses
              </button>
            </motion.div>
          </div>
        </section>

        <Features />
        <CourseCarousel />
      </main>

      
    </div>
  );
}

export default Training;