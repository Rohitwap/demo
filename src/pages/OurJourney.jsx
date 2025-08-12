import React, { useEffect, useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { motion } from 'framer-motion';

// Sample card data with enhanced content
const journeyCards = [
  {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    title: 'The Vision (2023)',
    description: "The vision for Samaura Academy was born, driven by the need to bridge the gap between traditional education and industry demands.",
    icon: (
      <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    color: "from-indigo-600 to-purple-600"
  },
  {
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1200&q=80',
    title: 'Our Launch (2024)',
    description: "Samaura Academy was officially launched with 100+ diploma and advanced courses across various industries.",
    icon: (
      <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    color: "from-blue-600 to-teal-500"
  },
  {
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1200&q=80',
    title: 'The Future (2025 & Beyond)',
    description: "Our focus is on expanding our training and placement network, ensuring every student gains knowledge and secures employment.",
    icon: (
      <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    color: "from-amber-500 to-orange-600"
  },
  {
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
    title: 'Global Expansion',
    description: "Opening international campuses to bring our innovative education model to students worldwide.",
    icon: (
      <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: "from-emerald-500 to-green-600"
  }
];

// Enhanced 3D Card Component with beautiful effects
function JourneyCard({ image, title, description, icon, color }) {
  return (
    <motion.div 
      className="group h-[28rem] w-80 mx-4 [perspective:1000px]"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-full w-full rounded-3xl shadow-2xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(15deg)_rotateX(5deg)] overflow-hidden">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
          />
          <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-90`}></div>
        </div>
        
        {/* Card Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center [backface-visibility:hidden]">
          <motion.div 
            className="mb-6 p-4 rounded-full bg-white/20 backdrop-blur-sm"
            whileHover={{ rotate: 15, scale: 1.1 }}
          >
            {icon}
          </motion.div>
          
          <motion.h3 
            className="text-2xl font-bold text-white mb-4"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.h3>
          
          <motion.p 
            className="text-white/90 mb-8"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {description}
          </motion.p>
          
          <motion.button
            className="px-6 py-2 bg-white/20 rounded-full text-white border border-white/30 hover:bg-white/30 transition-all flex items-center gap-2"
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.3)' }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Read More</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

// Main Page Component with enhanced design
function OurJourneyPage() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: 'center',
    skipSnaps: false
  }, [Autoplay({ delay: 5000, stopOnInteraction: false })]);
  
  const [prevEnabled, setPrevEnabled] = useState(false);
  const [nextEnabled, setNextEnabled] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setPrevEnabled(emblaApi.canScrollPrev());
      setNextEnabled(emblaApi.canScrollNext());
    };
    emblaApi.on('select', onSelect);
    onSelect();
    return () => emblaApi.off('select', onSelect);
  }, [emblaApi]);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-indigo-100/30"
            initial={{
              x: Math.random() * 100,
              y: Math.random() * 100,
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
              opacity: 0.3
            }}
            animate={{
              x: [null, Math.random() * 100 - 50],
              y: [null, Math.random() * 100 - 50],
              transition: {
                duration: Math.random() * 20 + 10,
                repeat: Infinity,
                repeatType: 'reverse'
              }
            }}
          />
        ))}
      </div>

      {/* Header with animation */}
      <motion.header 
        className="relative py-16 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-bold text-indigo-900 mb-4">Our Journey</h1>
        <div className="w-32 h-1.5 bg-gradient-to-r from-amber-400 to-amber-500 mx-auto mb-6 rounded-full"></div>
        <p className="text-xl text-indigo-700 max-w-3xl mx-auto">
          From vision to reality - the milestones that define Samaura Academy's path
        </p>
      </motion.header>

      {/* Enhanced Carousel Container */}
      <div className="relative w-full max-w-7xl mx-auto px-4">
        {/* Carousel */}
        <div 
          className="embla overflow-hidden"
          ref={emblaRef} 
          aria-label="Samaura Academy journey timeline"
        >
          <div className="embla__container flex gap-8 py-8">
            {journeyCards.map((card, idx) => (
              <div 
                className="embla__slide flex-shrink-0" 
                key={idx}
              >
                <JourneyCard {...card} />
              </div>
            ))}
          </div>
        </div>

        {/* Custom Navigation Arrows */}
        <motion.button
          className={`absolute left-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-xl hover:shadow-2xl z-10 ${
            !prevEnabled ? 'opacity-50 cursor-default' : 'hover:bg-indigo-50'
          }`}
          onClick={scrollPrev}
          disabled={!prevEnabled}
          aria-label="Previous slide"
          whileHover={{ scale: prevEnabled ? 1.1 : 1 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg className="w-6 h-6 text-indigo-700" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </motion.button>
        
        <motion.button
          className={`absolute right-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-xl hover:shadow-2xl z-10 ${
            !nextEnabled ? 'opacity-50 cursor-default' : 'hover:bg-indigo-50'
          }`}
          onClick={scrollNext}
          disabled={!nextEnabled}
          aria-label="Next slide"
          whileHover={{ scale: nextEnabled ? 1.1 : 1 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg className="w-6 h-6 text-indigo-700" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </motion.button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-8 pb-16">
        {journeyCards.map((_, idx) => (
          <button
            key={idx}
            onClick={() => emblaApi?.scrollTo(idx)}
            className={`w-3 h-3 mx-2 rounded-full transition-all duration-300 ${
              emblaApi?.selectedScrollSnap() === idx ? 'bg-indigo-600 w-8' : 'bg-indigo-300'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default OurJourneyPage;