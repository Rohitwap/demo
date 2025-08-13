import React, { useState, useEffect } from 'react';
import { Briefcase, Trophy, Globe, GraduationCap } from 'lucide-react';
import { useNavigate } from "react-router-dom";


// Main App component
export default function App() {
  const navigate = useNavigate();
  const navigateToContact = () => {
    navigate('/contact');
  };


  
  const testimonials = [
    {
      text: "Joining this program was a game-changer. I landed my dream job at a top company and feel confident in my skills.",
      author: "Jane Doe",
      role: "Software Engineer at Google",
    },
    {
      text: "The mentorship and career support were incredible. The skills I learned directly apply to my daily work.",
      author: "John Smith",
      role: "Product Manager at Microsoft",
    },
    {
      text: "I went from a beginner to a professional developer in less than a year. The structured curriculum and hands-on projects were key.",
      author: "Sarah Chen",
      role: "Full-Stack Developer at Amazon",
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Effect to handle the vertical fade carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(timer); // Cleanup on component unmount
  }, [testimonials.length]);

  const logos = [
    { "company_name": "Amazon", "logo_url": "https://logo.clearbit.com/amazon.com" },
    { "company_name": "IBM", "logo_url": "https://logo.clearbit.com/ibm.com" },
    { "company_name": "Wipro", "logo_url": "https://logo.clearbit.com/wipro.com" },
    { "company_name": "TCS", "logo_url": "https://logo.clearbit.com/tcs.com" },
    { "company_name": "Infosys", "logo_url": "https://logo.clearbit.com/infosys.com" },
    { "company_name": "HCL", "logo_url": "https://logo.clearbit.com/hcl.com" },
    { "company_name": "Microsoft", "logo_url": "https://logo.clearbit.com/microsoft.com" },
    { "company_name": "Google", "logo_url": "https://logo.clearbit.com/google.com" },
    { "company_name": "Apple", "logo_url": "https://logo.clearbit.com/apple.com" },
    { "company_name": "Facebook", "logo_url": "https://logo.clearbit.com/facebook.com" },
    { "company_name": "Accenture", "logo_url": "https://logo.clearbit.com/accenture.com" },
    { "company_name": "Deloitte", "logo_url": "https://logo.clearbit.com/deloitte.com" },
    { "company_name": "EY", "logo_url": "https://logo.clearbit.com/ey.com" },
    { "company_name": "KPMG", "logo_url": "https://logo.clearbit.com/kpmg.com" },
    { "company_name": "PwC", "logo_url": "https://logo.clearbit.com/pwc.com" },
    { "company_name": "Cognizant", "logo_url": "https://logo.clearbit.com/cognizant.com" },
    { "company_name": "Capgemini", "logo_url": "https://logo.clearbit.com/capgemini.com" },
    { "company_name": "Oracle", "logo_url": "https://logo.clearbit.com/oracle.com" },
    { "company_name": "SAP", "logo_url": "https://logo.clearbit.com/sap.com" },
    { "company_name": "Intel", "logo_url": "https://logo.clearbit.com/intel.com" },
    { "company_name": "Cisco", "logo_url": "https://logo.clearbit.com/cisco.com" },
    { "company_name": "Adobe", "logo_url": "https://logo.clearbit.com/adobe.com" },
    { "company_name": "Salesforce", "logo_url": "https://logo.clearbit.com/salesforce.com" },
    { "company_name": "VMware", "logo_url": "https://logo.clearbit.com/vmware.com" },
    { "company_name": "Nvidia", "logo_url": "https://logo.clearbit.com/nvidia.com" },
    { "company_name": "Uber", "logo_url": "https://logo.clearbit.com/uber.com" },
    { "company_name": "Airbnb", "logo_url": "https://logo.clearbit.com/airbnb.com" },
    { "company_name": "PayPal", "logo_url": "https://logo.clearbit.com/paypal.com" },
    { "company_name": "Visa", "logo_url": "https://logo.clearbit.com/visa.com" },
    { "company_name": "Mastercard", "logo_url": "https://logo.clearbit.com/mastercard.com" },
    { "company_name": "JPMorgan Chase", "logo_url": "https://logo.clearbit.com/jpmorganchase.com" },
    { "company_name": "Goldman Sachs", "logo_url": "https://logo.clearbit.com/goldmansachs.com" },
    { "company_name": "Morgan Stanley", "logo_url": "https://logo.clearbit.com/morganstanley.com" },
    { "company_name": "McKinsey & Company", "logo_url": "https://logo.clearbit.com/mckinsey.com" },
    { "company_name": "Boston Consulting Group", "logo_url": "https://logo.clearbit.com/bcg.com" },
    { "company_name": "Bain & Company", "logo_url": "https://logo.clearbit.com/bain.com" },
    { "company_name": "Tesla", "logo_url": "https://logo.clearbit.com/tesla.com" },
    { "company_name": "SpaceX", "logo_url": "https://logo.clearbit.com/spacex.com" },
    { "company_name": "Netflix", "logo_url": "https://logo.clearbit.com/netflix.com" },
    { "company_name": "Spotify", "logo_url": "https://logo.clearbit.com/spotify.com" },
    { "company_name": "Twitter", "logo_url": "https://logo.clearbit.com/twitter.com" },
    { "company_name": "LinkedIn", "logo_url": "https://logo.clearbit.com/linkedin.com" },
    { "company_name": "Zoom", "logo_url": "https://logo.clearbit.com/zoom.us" },
    { "company_name": "Slack", "logo_url": "https://logo.clearbit.com/slack.com" },
    { "company_name": "Atlassian", "logo_url": "https://logo.clearbit.com/atlassian.com" },
    { "company_name": "Shopify", "logo_url": "https://logo.clearbit.com/shopify.com" },
    { "company_name": "Lyft", "logo_url": "https://logo.clearbit.com/lyft.com" }
  ];

  // Custom CSS for animations and gradients
  const customStyles = `
    /* Animation for the hero text */
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    .animate-fade-in-up {
      animation: fadeInUp 0.6s ease-out forwards;
      opacity: 0;
    }
    .delay-200 { animation-delay: 0.2s; }
    .delay-400 { animation-delay: 0.4s; }

    /* Infinite scrolling animation for the logos */
    @keyframes scroll-left {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    .animate-scroll-logos {
      animation: scroll-left 30s linear infinite;
    }

    /* Masking the edges of the carousel */
    .mask-images {
      mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
    }

    /* Pulse animation for the icons */
    @keyframes scale-pulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.1); }
    }
    .animate-scale-pulse {
      animation: scale-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    }
    .delay-100 { animation-delay: 0.1s; }
    .delay-200 { animation-delay: 0.2s; }
    .delay-300 { animation-delay: 0.3s; }

    /* Bounce and Pulse animations for background icons */
    @keyframes bounce-slow {
      0%, 100% { transform: translateY(-5%); }
      50% { transform: translateY(5%); }
    }
    .animate-bounce-slow {
      animation: bounce-slow 6s ease-in-out infinite;
    }

    @keyframes pulse-slow {
      0%, 100% { transform: scale(0.95); }
      50% { transform: scale(1.05); }
    }
    .animate-pulse-slow {
      animation: pulse-slow 8s ease-in-out infinite;
    }
  `;
  
  // We add a style tag to the document head to include the animations.
  useEffect(() => {
    const styleTag = document.createElement('style');
    styleTag.innerHTML = customStyles;
    document.head.appendChild(styleTag);
    return () => {
      document.head.removeChild(styleTag);
    };
  }, []);

  return (
    <div className="bg-gray-50 font-sans antialiased text-gray-800">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-indigo-500 to-purple-600 text-white min-h-screen flex items-center justify-center p-8 overflow-hidden">
        {/* Animated Background Icons */}
        <div className="absolute top-1/4 left-1/4 animate-bounce-slow text-indigo-300 opacity-20 hidden lg:block">
          <Briefcase size={96} />
        </div>
        <div className="absolute bottom-1/4 right-1/4 animate-pulse-slow text-purple-300 opacity-20 hidden lg:block">
          <Trophy size={96} />
        </div>

        <div className="max-w-4xl text-center z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-4 animate-fade-in-up">
            Your Career, Accelerated.
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-light mb-8 opacity-90 animate-fade-in-up delay-200">
            Join the ranks of thousands who have transformed their careers with our cutting-edge programs.
          </p>
          <button onClick={navigateToContact}

          className="bg-white text-indigo-600 px-8 py-3 rounded-full text-lg font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300 ease-in-out animate-fade-in-up delay-400">
            Explore Programs
          </button>
        </div>
      </div>

      {/* Emblem Carousel Section */}
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Our Students are Impacting Companies Worldwide</h2>
          <div className="relative w-full overflow-hidden mask-images">
            <div className="flex animate-scroll-logos">
              {[...logos, ...logos].map((logo, index) => (
                <div key={index} className="flex-none w-48 p-4">
                  <img 
                    src={logo.logo_url} 
                    alt={logo.company_name} 
                    className="h-full w-full object-contain filter grayscale hover:grayscale-0 transition-filter duration-300" 
                    onError={(e) => { e.target.src = 'https://placehold.co/150x50/F5F5F5/4B5563?text=Logo'; }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content & Vertical Fade Carousel Section */}
      <div className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <div className="order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop"
                alt="A group of people working together"
                className="rounded-3xl shadow-2xl w-full h-auto object-cover transform rotate-1 transition-transform duration-500 hover:rotate-0"
              />
            </div>
            
            {/* Content & Vertical Carousel Section */}
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-4">Real Impact, Real Stories</h2>
              <p className="text-gray-600 mb-8 max-w-xl">
                Don't just take our word for it. Hear from the professionals who have launched their careers and found success after completing our programs.
              </p>
              
              {/* Vertical Fade Carousel */}
              <div className="relative h-48 overflow-hidden rounded-2xl bg-white shadow-lg p-6">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 p-6 flex flex-col justify-center items-center text-center transition-opacity duration-1000 ease-in-out ${
                      index === currentTestimonial ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <p className="text-lg italic font-medium text-gray-700 mb-4">"{testimonial.text}"</p>
                    <p className="font-semibold text-gray-800">- {testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Stats/Icons Section */}
      <div className="py-16 bg-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">By the Numbers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center p-6 bg-indigo-700 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300">
              <GraduationCap size={48} className="text-white mb-4 animate-scale-pulse" />
              <p className="text-4xl font-extrabold">20k+</p>
              <p className="text-lg">Successful Graduates</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-indigo-700 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300">
              <Briefcase size={48} className="text-white mb-4 animate-scale-pulse delay-100" />
              <p className="text-4xl font-extrabold">500+</p>
              <p className="text-lg">Hiring Partners</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-indigo-700 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300">
              <Trophy size={48} className="text-white mb-4 animate-scale-pulse delay-200" />
              <p className="text-4xl font-extrabold">95%</p>
              <p className="text-lg">Placement Rate</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-indigo-700 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300">
              <Globe size={48} className="text-white mb-4 animate-scale-pulse delay-300" />
              <p className="text-4xl font-extrabold">10+</p>
              <p className="text-lg">Countries Represented</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}