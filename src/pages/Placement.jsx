import React from 'react';
import { Award, Rocket, Briefcase, Star } from 'lucide-react';

const stats = [
  { id: 1, name: 'Students Placed', value: '1500+', icon: Award },
  { id: 2, name: 'Top Companies', value: '300+', icon: Briefcase },
  { id: 3, name: 'Average Salary', value: '$80k+', icon: Star },
  { id: 4, name: 'Success Rate', value: '95%', icon: Rocket },
];

const companies = [
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
  { "company_name": "Uber", "logo_url": "https://logo.clearbit.com/uber.com" },
  { "company_name": "Lyft", "logo_url": "https://logo.clearbit.com/lyft.com" }
];
const testimonials = [
  {
    id: 1,
    name: 'Jane Doe',
    company: 'Tech Solutions Inc.',
    quote: 'The career services team was phenomenal. They helped me land my dream job at a top-tier company.',
    image: 'https://placehold.co/100x100/F5F5F5/4B5563?text=JD',
  },
  {
    id: 2,
    name: 'John Smith',
    company: 'Global Innovators',
    quote: 'The personalized guidance and mock interviews were crucial for my success. I highly recommend their program.',
    image: 'https://placehold.co/100x100/F5F5F5/4B5563?text=JS',
  },
  {
    id: 3,
    name: 'Emily Chen',
    company: 'Future Corp.',
    quote: 'From resume building to negotiation, every step was handled with expert care. I felt confident throughout the process.',
    image: 'https://placehold.co/100x100/F5F5F5/4B5563?text=EC',
  },
];

const Placement = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800 antialiased">
    
     

      {/* Hero Section */}
      <section className="bg-white py-16 md:py-24 text-center overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight animate-fade-in">
            Your Gateway to <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">Global Placements</span>
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in delay-200">
            We connect top talent with leading companies around the world. Your career starts here.
          </p>
          <div className="mt-8 flex justify-center space-x-4 animate-fade-in delay-400">
            <button className="bg-indigo-600 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-indigo-700 transform hover:scale-105 transition-all duration-300">
              Explore Opportunities
            </button>
            <button className="bg-gray-200 text-gray-800 font-bold py-3 px-6 rounded-full shadow-lg hover:bg-gray-300 transform hover:scale-105 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Key Metrics Section */}
      <section className="bg-gray-100 py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-8">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-8 md:mb-12">Our Success by the Numbers</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={stat.id}
                className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
              >
                <stat.icon className="h-12 w-12 text-indigo-500 mb-4 animate-pulse-icon" />
                <p className="text-4xl font-extrabold text-gray-900">{stat.value}</p>
                <p className="mt-2 text-gray-500 font-medium">{stat.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Companies Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-8">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-8 md:mb-12">Trusted by Leading Global Companies</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6 place-items-center">
            {companies.map((company, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transform hover:scale-110 transition-all duration-300 ease-in-out"
              >
                <img
                  src={company.logo_url}
                  alt={company.company_name}
                  className="w-32 h-16 object-contain grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                  onError={(e) => { e.target.src = 'https://placehold.co/150x50/F5F5F5/4B5563?text=Logo'; }}
                />
                <p className="text-sm text-gray-600 text-center mt-2 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  {company.company_name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-100 py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-8">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-8 md:mb-12">Hear From Our Successful Alumni</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="bg-white p-8 rounded-xl shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-indigo-500"
                    onError={(e) => { e.target.src = 'https://placehold.co/100x100/F5F5F5/4B5563?text=User'; }}
                  />
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.company}</p>
                  </div>
                </div>
                <p className="italic text-gray-600">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-600 text-white py-16 md:py-20 text-center rounded-b-xl mx-4 md:mx-8 -mt-10 mb-10">
        <div className="container mx-auto px-4 md:px-8">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to Launch Your Career?</h3>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Join the ranks of our successful alumni and take the first step towards a rewarding career.
          </p>
          <button className="bg-white text-indigo-600 font-bold py-3 px-8 rounded-full shadow-xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-300">
            Get Started Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 PlacementPro. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Placement;