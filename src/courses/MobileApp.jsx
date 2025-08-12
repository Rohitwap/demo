import { FaMobileAlt, FaCode, FaRocket, FaShieldAlt, FaChartLine, FaRegLightbulb } from 'react-icons/fa';
import { FiSmartphone, FiDownload, FiUsers, FiCheckCircle } from 'react-icons/fi';

export default function MobileApp() {

  return (
    <div className="font-sans bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Build Your Dream Mobile App
            </h1>
            <p className="text-xl mb-8 opacity-90">
              We create stunning, high-performance mobile applications for startups and enterprises.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300 shadow-lg">
                Get Started
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300">
                View Portfolio
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
              alt="Mobile App Development" 
              className="rounded-xl shadow-2xl w-full max-w-md"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mobile App Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions from concept to launch and beyond
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<FaMobileAlt className="text-4xl" />}
              title="iOS & Android Development"
              description="Native and cross-platform apps built with the latest technologies"
            />
            <FeatureCard 
              icon={<FaCode className="text-4xl" />}
              title="Custom App Development"
              description="Tailored solutions designed specifically for your business needs"
            />
            <FeatureCard 
              icon={<FaRocket className="text-4xl" />}
              title="App Launch Strategy"
              description="Complete go-to-market planning for successful app releases"
            />
            <FeatureCard 
              icon={<FaShieldAlt className="text-4xl" />}
              title="App Security"
              description="Robust security measures to protect user data and privacy"
            />
            <FeatureCard 
              icon={<FaChartLine className="text-4xl" />}
              title="App Analytics"
              description="Performance tracking and user behavior analytics"
            />
            <FeatureCard 
              icon={<FaRegLightbulb className="text-4xl" />}
              title="UI/UX Design"
              description="Beautiful interfaces with intuitive user experiences"
            />
          </div>
        </div>
      </section>

      {/* App Showcase */}
      <section className="py-20 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <img 
                src="https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                alt="App Interface" 
                className="rounded-xl shadow-lg w-full"
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Beautiful, Intuitive Interfaces</h2>
              <p className="text-lg text-gray-600 mb-8">
                Our design-first approach ensures your app not only works flawlessly but looks stunning and provides an exceptional user experience.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <FiCheckCircle className="text-green-500 text-xl mt-1 mr-3" />
                  <span className="text-gray-700">Modern, clean UI design</span>
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="text-green-500 text-xl mt-1 mr-3" />
                  <span className="text-gray-700">Intuitive navigation flows</span>
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="text-green-500 text-xl mt-1 mr-3" />
                  <span className="text-gray-700">Accessibility compliant</span>
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="text-green-500 text-xl mt-1 mr-3" />
                  <span className="text-gray-700">Brand-consistent styling</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <StatItem icon={<FiSmartphone className="text-4xl mx-auto mb-4" />} number="150+" label="Apps Developed" />
            <StatItem icon={<FiUsers className="text-4xl mx-auto mb-4" />} number="1M+" label="Active Users" />
            <StatItem icon={<FiDownload className="text-4xl mx-auto mb-4" />} number="10M+" label="App Downloads" />
            <StatItem icon={<FiCheckCircle className="text-4xl mx-auto mb-4" />} number="98%" label="Client Satisfaction" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Ready to Build Your Mobile App?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Get in touch with our team to discuss your project and receive a free consultation.
          </p>
          <button className="bg-blue-600 text-white px-10 py-4 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-lg">
            Start Your Project Today
          </button>
        </div>
      </section>

      
      
    </div>
  );
}

// Feature Card Component
function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition duration-300 border border-gray-200">
      <div className="text-blue-600 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

// Stat Item Component
function StatItem({ icon, number, label }) {
  return (
    <div>
      {icon}
      <p className="text-4xl font-bold mb-2">{number}</p>
      <p className="text-lg opacity-90">{label}</p>
    </div>
  );
}