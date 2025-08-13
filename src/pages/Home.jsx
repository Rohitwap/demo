import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import "../app.css";

// Import your images
import b1 from "../assets/2.jpg";
import b2 from "../assets/3.jpg";
import b3 from "../assets/4.jpg";
import skill from "../assets/card-img.jpg";
import Training from "./Training";
import AllCourse from "./AllCourse";
import RoundCard from "./RoundCard";

function Home() {
  const navigate = useNavigate(); // Initialize the navigate function

  // Define your slides data
  const slides = [
    {
      src: b1,
      alt: 'Students in classroom',
      caption: 'Innovative Course Offerings',
      title: 'We Ensure better education',
      subtitle: 'for a better world'
    },
    {
      src: b2,
      alt: 'Graduating students',
      caption: 'Student Success Stories',
      title: 'Transform your career',
      subtitle: 'with our programs'
    },
    {
      src: b3,
      alt: 'Campus facilities',
      caption: 'Vibrant Campus Life',
      title: 'Join our community',
      subtitle: 'of learners and achievers'
    }
  ];

  // Initialize Embla Carousel with Autoplay
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    speed: 10
  }, [
    Autoplay({ delay: 5000, stopOnInteraction: false })
  ]);

  // Initialize second carousel for training programs
  const [carouselRef, carouselApi] = useEmblaCarousel({ 
    loop: true,
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      '(min-width: 768px)': { slidesToScroll: 2 },
      '(min-width: 1024px)': { slidesToScroll: 3 }
    }
  }, [
    Autoplay({ delay: 4000, stopOnInteraction: false })
  ]);

  // Navigation functions
  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  const carouselPrev = useCallback(() => {
    carouselApi?.scrollPrev();
  }, [carouselApi]);

  const carouselNext = useCallback(() => {
    carouselApi?.scrollNext();
  }, [carouselApi]);

  // Handle navigation to contact page
  const navigateToContact = () => {
    navigate('/contact');
  };

  // Framer Motion effects for carousel
  const x = useMotionValue(0);
  const xSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const rotateY = useTransform(xSpring, [-0.5, 0.5], [-5, 5]);
  const scale = useTransform(xSpring, [-0.5, 0.5], [0.95, 1.05]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPos = (e.clientX - rect.left) / rect.width - 0.5;
    x.set(xPos);
  };

  const handleMouseLeave = () => {
    x.set(0);
  };

  return (
    <>
    <div className="relative overflow-hidden">
      {/* Hero Carousel Section */}
      <div 
        className="embla h-screen w-full relative"
        ref={emblaRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="embla__container h-full flex">
          {slides.map((slide, index) => (
            <motion.div 
              key={index}
              className="embla__slide flex-[0_0_100%] relative min-w-0"
              style={{
                rotateY,
                scale,
                transformPerspective: 1000,
                transformOrigin: "center center"
              }}
            >
              {/* Background Image */}
              <img
                src={slide.src}
                alt={slide.alt}
                className="absolute inset-0 w-full h-full object-cover"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50"></div>
              
              {/* Content */}
              <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="max-w-3xl"
                >
                  <motion.h1 
                    className="text-4xl md:text-6xl font-bold mb-4 text-white"
                    whileHover={{ scale: 1.02 }}
                  >
                    {slide.title} <span className="text-green-400">{slide.subtitle}</span>
                  </motion.h1>
                  <p className="text-xl md:text-2xl text-gray-200 mb-8">
                    {slide.caption}
                  </p>
                  <motion.button
                    className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={navigateToContact}
                  >
                    Get Started
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Navigation Buttons */}
        <motion.button
          onClick={scrollPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/30 backdrop-blur-sm hover:bg-white/50 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </motion.button>
        
        <motion.button
          onClick={scrollNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/30 backdrop-blur-sm hover:bg-white/50 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </motion.button>
      </div>

      {/* Rest of your content */}
      <div className="flex flex-col items-center relative z-10">
        {/* Main Heading */}
        <div className="flex justify-center items-center mx-auto py-10">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Empowering Students for Career Success
          </motion.h1>
        </div>

        {/* Cards Section */}
        <div className="flex flex-col items-center w-full">
          <div className="flex flex-col md:flex-row justify-center items-center gap-10 mx-auto mt-10">
            {/* Card 1 */}
            <motion.div 
              className="relative w-full max-w-[400px] h-[300px] flex flex-col justify-between p-6 rounded-lg cursor-pointer text-white before:content-[''] before:absolute before:inset-0 before:-left-1.5 before:m-auto before:w-[calc(100%+12px)] before:h-[calc(100%+12px)] before:rounded-[10px] before:bg-gradient-to-br before:from-[#e81cff] before:to-[#40c9ff] before:-z-10 before:pointer-events-none before:transition-all before:duration-600 before:ease-[cubic-bezier(0.175,0.885,0.32,1.275)] after:content-[''] after:-z-1 after:absolute after:inset-0 after:bg-gradient-to-br after:from-[#fc00ff] after:to-[#00dbde] after:translate-z-0 after:scale-95 after:blur-xl hover:after:blur-2xl hover:before:-rotate-90 hover:before:scale-x-[1.34] hover:before:scale-y-[0.77] bg-gray-900"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              onClick={navigateToContact}
            >
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-extrabold mb-4 text-white">
                  Your Path to Success
                </h3>
                <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                  Samaura Academy, established in 2024, is an ISO-certified training institute offering diverse courses to equip students with industry-relevant skills and ensure successful job placements.
                </p>
                <button className="mt-4 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg">
                  Contact Us
                </button>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              className="relative w-full max-w-[400px] h-[300px] flex flex-col justify-between p-6 rounded-lg cursor-pointer text-white before:content-[''] before:absolute before:inset-0 before:-left-1.5 before:m-auto before:w-[calc(100%+12px)] before:h-[calc(100%+12px)] before:rounded-[10px] before:bg-gradient-to-br before:from-[#e81cff] before:to-[#40c9ff] before:-z-10 before:pointer-events-none before:transition-all before:duration-600 before:ease-[cubic-bezier(0.175,0.885,0.32,1.275)] after:content-[''] after:-z-1 after:absolute after:inset-0 after:bg-gradient-to-br after:from-[#fc00ff] after:to-[#00dbde] after:translate-z-0 after:scale-95 after:blur-xl hover:after:blur-2xl hover:before:-rotate-90 hover:before:scale-x-[1.34] hover:before:scale-y-[0.77] bg-gray-900"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              onClick={navigateToContact}
            >
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-extrabold mb-4 text-white">
                  Skills for Tomorrow's Jobs
                </h3>
                <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                  Our programs include short-term certificate courses in IT, software development, hardware maintenance, and accounting, all designed to meet the evolving needs of students and the job market.
                </p>
                <button className="mt-4 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg">
                  Contact Us
                </button>
              </div>
            </motion.div>
          </div>

          {/* Image Section */}
          <motion.div 
            className="w-full max-w-4xl border-2 border-gray-200 rounded-3xl p-4 bg-white shadow-lg mt-10"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.01 }}
          >
            <img 
              src={skill} 
              alt="Career success illustration" 
              className="rounded-2xl object-cover w-full h-full" 
            />
            <div className="mt-4 text-center">
              <motion.button
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={navigateToContact}
              >
                Get in Touch
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      <Training navigateToContact={navigateToContact} />
      <AllCourse navigateToContact={navigateToContact} />
      <RoundCard navigateToContact={navigateToContact} />
    </div>
    </>
  );
}

export default Home;