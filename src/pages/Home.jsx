import React, { useCallback } from "react";
import { Link as ScrollLink, Element } from "react-scroll";
import "../app.css";
import bgImage from "../assets/bg.jpg";
import skill from "../assets/card-img.jpg";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Training from "./Training"
import AllCourse from "./AllCourse";
import RoundCard from "./RoundCard";

// TrainingCard component
const TrainingCard = ({ icon, title, description, highlights }) => {
  return (
    <div className="group perspective-1000 transform transition-all duration-700 hover:z-10">
      <div className="relative h-full transform-style-preserve-3d transition-all duration-700 group-hover:rotate-y-180 bg-gray-800 rounded-xl shadow-2xl overflow-hidden">
        {/* Front Side */}
        <div className="backface-hidden h-full p-8 flex flex-col">
          <div className="flex-1">
            <div className="w-16 h-16 mb-6 rounded-lg bg-indigo-900/30 flex items-center justify-center">
              {icon}
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
            <p className="text-gray-300">{description}</p>
          </div>
          <div className="pt-4 border-t border-gray-700">
            <span className="inline-flex items-center text-sm font-medium text-indigo-400">
              View details
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </span>
          </div>
        </div>
        
        {/* Back Side */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-indigo-900/80 to-gray-900 p-8 flex flex-col justify-center">
          <div className="mb-6">
            <h4 className="text-xl font-bold text-white mb-2">Program Highlights</h4>
            <ul className="space-y-2 text-gray-300">
              {highlights.map((highlight, index) => (
                <li key={index} className="flex items-center">
                  <svg className="mr-2 w-4 h-4 text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
          <button className="mt-auto w-full py-3 px-6 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-colors duration-300 transform hover:-translate-y-1">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

function Home() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
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

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <>
      <div
        className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div
          className="3d-blob w-44 h-56 sm:w-56 sm:h-64 absolute left-4 top-8 md:left-16 md:top-16 z-0 pointer-events-none"
        ></div>

        {/* Main Content */}
        <div className="z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4">
            <span className="inline-block hover-grow-3d transition-transform duration-500 cursor-pointer">
              Empower Your Future,
            </span>
            <br />
            <span className="inline-block hover-grow-3d transition-transform duration-500 cursor-pointer">
              with Samaura Academy.
            </span>
          </h1>
          <p className="mb-8 text-base md:text-lg text-gray-600 max-w-xl mx-auto">
            Industry-relevant courses designed for your success and job placement.
          </p>

          <button
            type="submit"
            className="border-1 outline-pink-500 text-white font-bold px-6 py-2 rounded shadow transition-all duration-500 hover:scale-105 hover:shadow-[0_0_24px_4px_rgba(236,72,153,0.5)] focus:outline-none"
          >
            Enroll Now
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center">
        {/* Main Heading */}
        <div className="flex justify-center items-center mx-auto py-10">
          <h1 className="text-4xl md:text-6xl font-bold text-center">Empowering Students for Career Success</h1>
        </div>

        {/* Cards Section */}
        <div className="flex flex-col items-center w-full">
          <div className="flex flex-col md:flex-row justify-center items-center gap-10 mx-auto mt-10">
            {/* Card 1 */}
            <div className="relative w-full max-w-[400px] h-[300px] flex flex-col justify-between p-6 rounded-lg cursor-pointer text-white before:content-[''] before:absolute before:inset-0 before:-left-1.5 before:m-auto before:w-[calc(100%+12px)] before:h-[calc(100%+12px)] before:rounded-[10px] before:bg-gradient-to-br before:from-[#e81cff] before:to-[#40c9ff] before:-z-10 before:pointer-events-none before:transition-all before:duration-600 before:ease-[cubic-bezier(0.175,0.885,0.32,1.275)] after:content-[''] after:-z-1 after:absolute after:inset-0 after:bg-gradient-to-br after:from-[#fc00ff] after:to-[#00dbde] after:translate-z-0 after:scale-95 after:blur-xl hover:after:blur-2xl hover:before:-rotate-90 hover:before:scale-x-[1.34] hover:before:scale-y-[0.77] bg-gray-900">
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-extrabold mb-4 text-white">
                  Your Path to Success
                </h3>
                <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                  Samaura Academy, established in 2020, is an ISO-certified training institute offering diverse courses to equip students with industry-relevant skills and ensure successful job placements.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative w-full max-w-[400px] h-[300px] flex flex-col justify-between p-6 rounded-lg cursor-pointer text-white before:content-[''] before:absolute before:inset-0 before:-left-1.5 before:m-auto before:w-[calc(100%+12px)] before:h-[calc(100%+12px)] before:rounded-[10px] before:bg-gradient-to-br before:from-[#e81cff] before:to-[#40c9ff] before:-z-10 before:pointer-events-none before:transition-all before:duration-600 before:ease-[cubic-bezier(0.175,0.885,0.32,1.275)] after:content-[''] after:-z-1 after:absolute after:inset-0 after:bg-gradient-to-br after:from-[#fc00ff] after:to-[#00dbde] after:translate-z-0 after:scale-95 after:blur-xl hover:after:blur-2xl hover:before:-rotate-90 hover:before:scale-x-[1.34] hover:before:scale-y-[0.77] bg-gray-900">
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-extrabold mb-4 text-white">
                  Skills for Tomorrow's Jobs
                </h3>
                <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                  Our programs include short-term certificate courses in IT, software development, hardware maintenance, and accounting, all designed to meet the evolving needs of students and the job market.
                </p>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full max-w-4xl border-2 border-gray-200 rounded-3xl p-4 bg-white shadow-lg mt-10">
            <img 
              src={skill} 
              alt="Career success illustration" 
              className="rounded-2xl object-cover w-full h-full" 
            />
          </div>
        </div>
      </div>

      <div className="text-center justify-center items-center mx-auto py-10">
        <h1 className="text-4xl md:text-6xl font-bold text-center">Our Training Programs</h1>
        <p className="mt-6">Explore our diverse courses designed to equip students with essential industry skills for success.</p>
      </div>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-20 px-4 sm:px-6 lg:px-8">
        {/* Main Container */}
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-indigo-900 text-indigo-100">
                <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                ISO 9001:2015 Certified
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-indigo-500">
                Professional Training Programs
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Government-recognized certifications with industry-leading curriculum and 100% placement assistance.
            </p>
          </div>

          {/* Carousel Section */}
          <div className="relative px-4 py-8 bg-gradient-to-br from-gray-50 to-indigo-50 rounded-xl w-[90%] mx-auto">
            <div className="overflow-hidden w-full" ref={emblaRef}>
              <div className="flex gap-6 w-full">
                {/* IT Certification Card */}
                <div className="flex-[0_0_90%] sm:flex-[0_0_45%] lg:flex-[0_0_30%] min-w-0">
                  <TrainingCard
                    icon={
                      <div className="p-3 rounded-full bg-indigo-100/80">
                        <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                        </svg>
                      </div>
                    }
                    title="IT Certification"
                    description="Master in-demand technologies with our comprehensive IT training programs."
                    highlights={[
                      "6-month intensive program",
                      "Government-approved certification",
                      "100% placement assistance"
                    ]}
                  />
                </div>

                {/* Software Development Card */}
                <div className="flex-[0_0_90%] sm:flex-[0_0_45%] lg:flex-[0_0_30%] min-w-0">
                  <TrainingCard
                    icon={
                      <div className="p-3 rounded-full bg-blue-100/80">
                        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                      </div>
                    }
                    title="Software Development"
                    description="Become a full-stack developer with hands-on project experience."
                    highlights={[
                      "8-month comprehensive training",
                      "Industry-standard technologies",
                      "Portfolio development"
                    ]}
                  />
                </div>

                {/* Digital Marketing Card */}
                <div className="flex-[0_0_90%] sm:flex-[0_0_45%] lg:flex-[0_0_30%] min-w-0">
                  <TrainingCard
                    icon={
                      <div className="p-3 rounded-full bg-purple-100/80">
                        <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                        </svg>
                      </div>
                    }
                    title="Digital Marketing"
                    description="Master the art of digital marketing with certification from industry experts."
                    highlights={[
                      "4-month specialized program",
                      "Practical campaign experience",
                      "Certification exam included"
                    ]}
                  />
                </div>

                {/* Data Science Card */}
                <div className="flex-[0_0_90%] sm:flex-[0_0_45%] lg:flex-[0_0_30%] min-w-0">
                  <TrainingCard
                    icon={
                      <div className="p-3 rounded-full bg-emerald-100/80">
                        <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                        </svg>
                      </div>
                    }
                    title="Full Stack Data Science with AI & ML"
                    description="Master cutting-edge data science techniques with AI/ML integration."
                    highlights={[
                      "6-month intensive program",
                      "Government-approved certification",
                      "100% placement assistance"
                    ]}
                  />
                </div>

                {/* Web Developer Card */}
                <div className="flex-[0_0_90%] sm:flex-[0_0_45%] lg:flex-[0_0_30%] min-w-0">
                  <TrainingCard
                    icon={
                      <div className="p-3 rounded-full bg-amber-100/80">
                        <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                      </div>
                    }
                    title="Full Stack Web Developer"
                    description="Become a full-stack developer with hands-on project experience."
                    highlights={[
                      "8-month comprehensive training",
                      "Industry-standard technologies",
                      "Portfolio development"
                    ]}
                  />
                </div>

                {/* Web Design Card */}
                <div className="flex-[0_0_90%] sm:flex-[0_0_45%] lg:flex-[0_0_30%] min-w-0">
                  <TrainingCard
                    icon={
                      <div className="p-3 rounded-full bg-rose-100/80">
                        <svg className="w-8 h-8 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                        </svg>
                      </div>
                    }
                    title="Advanced Web Design with UI & UX"
                    description="Master modern web design principles with UI/UX best practices."
                    highlights={[
                      "4-month specialized program",
                      "Practical design experience",
                      "Certification exam included"
                    ]}
                  />
                </div>
              </div>
            </div>

            {/* Navigation buttons */}
            <button 
              onClick={scrollPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>
            <button 
              onClick={scrollNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>

          {/* Certification Badge */}
          <div className="mt-20 text-center">
            <div className="inline-block p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 shadow-lg">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-full bg-indigo-900/30 flex items-center justify-center">
                    <svg className="w-10 h-10 text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">ISO 9001:2015 Certified Training</h3>
                  <p className="text-gray-300 max-w-2xl">
                    Our programs meet international quality standards and are recognized by government bodies and industry leaders worldwide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS for 3D effects */}
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
      <Training/>
      <AllCourse/>
      <RoundCard/>
    </>
  );
}

export default Home;