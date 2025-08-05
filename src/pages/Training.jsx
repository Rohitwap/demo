import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const TrainingPrograms = () => {
  // Embla Carousel setup with autoplay and fade effect
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    speed: 15,
    dragFree: true
  }, [
    Autoplay({ delay: 5000, stopOnInteraction: false })
  ]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  // Course data
  const shortTerm3Month = [
    "Certificate in Office Automation",
    "Basic Hardware Maintenance",
    "Programming Courses (C, C++, SQL, Visual Basic, ASP.Net, Core Java, PHP)",
    "Certificate in Tally 9.0 with GST",
    "Certificate in Graphic Design",
    "Certificate in Web Design",
    "Certificate in Desktop Publishing"
  ];

  const shortTerm6Month = [
    "Basic in Office Automation",
    "Certificate in E-Filing",
    "Basic Hardware Maintenance",
    "Programming Courses (C, C++, SQL, Visual Basic, ASP.Net, Core Java, PHP)",
    "Certificate in Tally 9.0 with GST",
    "Certificate in Graphic Design",
    "Certificate in Web Design",
    "Certificate in Desktop Publishing",
    "Certificate in Hardware & Networking"
  ];

  const diplomaCourses = [
    "Diploma in Computer Application",
    "Diploma in Information Technology",
    "Diploma in Web Designing",
    "Diploma in Software Application",
    "Diploma in Hardware & Networking",
    "Diploma in Multimedia & Animation",
    "Diploma in Network Engineering",
    "Diploma in Business Process Outsourcing",
    "Diploma in Financial Accounting",
    "Diploma in Taxation & Accountancy",
    "Advanced Diploma in Software Engineering",
    "Advanced Diploma in Mobile Maintenance & Repairing"
  ];

  // Carousel images (using Unsplash as CDN)
  const carouselImages = [
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50">
      {/* Hero Section with Carousel */}
      <div className="relative h-96 md:h-screen/2 overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-10 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Our Training Programs</h1>
            <p className="text-xl text-white max-w-2xl mx-auto">
              Industry-relevant courses designed for your success and job placement
            </p>
          </div>
        </div>
        
        {/* Embla Carousel */}
        <div className="embla h-full" ref={emblaRef}>
          <div className="embla__container h-full">
            {carouselImages.map((img, index) => (
              <div className="embla__slide h-full" key={index}>
                <img 
                  src={img} 
                  alt={`Training ${index + 1}`} 
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Introduction */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            We offer various courses in IT, software development, hardware maintenance, accounting, multimedia, and more
          </h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto"></div>
        </div>

        {/* Course Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* 3 Month Courses */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:-translate-y-2 hover:shadow-xl">
            <div className="bg-indigo-600 p-6">
              <h3 className="text-2xl font-bold text-white">3-Month Certificate Courses</h3>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                {shortTerm3Month.map((course, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-5 w-5 text-indigo-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{course}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 6 Month Courses */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:-translate-y-2 hover:shadow-xl">
            <div className="bg-indigo-700 p-6">
              <h3 className="text-2xl font-bold text-white">6-Month Certificate Courses</h3>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                {shortTerm6Month.map((course, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-5 w-5 text-indigo-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{course}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Diploma Courses */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:-translate-y-2 hover:shadow-xl">
            <div className="bg-indigo-800 p-6">
              <h3 className="text-2xl font-bold text-white">1-Year Diploma Courses</h3>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                {diplomaCourses.map((course, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-5 w-5 text-indigo-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{course}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Start Your Journey?</h3>
          <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
            Join our professional training programs and gain the skills needed for today's job market
          </p>
          <button className="bg-white text-indigo-700 font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105">
            Enroll Now
          </button>
        </div>
      </div>

      {/* Custom CSS for Embla Carousel */}
      <style jsx>{`
        .embla {
          overflow: hidden;
        }
        .embla__container {
          display: flex;
        }
        .embla__slide {
          position: relative;
          min-width: 100%;
        }
        .embla__slide img {
          filter: brightness(0.8);
          transition: filter 0.5s ease;
        }
        .embla__slide.is-selected img {
          filter: brightness(1);
        }
      `}</style>
    </div>
  );
};

export default TrainingPrograms;