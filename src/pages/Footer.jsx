import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-black pt-12 pb-6 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">SAMAURA INSTITUTE</h3>
            <div className="flex items-start mb-3">
              <FaEnvelope className="mt-1 mr-2" />
              <a href="mailto:info@samaruainstitute.com" className="hover:text-blue-300">
                info@samaruainstitute.com
              </a>
            </div>
            <div className="space-y-2">
              <div className="flex items-start">
                <FaPhone className="mt-1 mr-2" />
                <span>+919836423755</span>
              </div>
              <div className="flex items-start">
                <FaPhone className="mt-1 mr-2" />
                <span>+91................</span>
              </div>
              <div className="flex items-start">
                <FaPhone className="mt-1 mr-2" />
                <span>+91............</span>
              </div>
              <div className="flex items-start">
                <FaPhone className="mt-1 mr-2" />
                <span>+91............</span>
              </div>
            </div>
          </div>

          {/* Addresses */}
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-lg mb-2">Corporate Office</h4>
              <div className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-2" />
                <address className="not-italic">
                  ......, ............. (.............)<br />
                   Kolkata, (pin: ......)<br />
                  West Bengal, India.
                </address>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-2">Our Institute</h4>
              <div className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-2" />
                <address className="not-italic">
                  4th floor, Mobile No:534, SDF Building,<br />
                  Salt Lake bypass, GP Block,<br />
                  Sector V, Bidhannagar, Kolkata,<br />
                  West Bengal 700091
                </address>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                "Home",
                "Courses",
                "About Us",
                "Placement",
                "Hire From Us",
                "Refer & Earn",
                "Resources",
                "Career Impact",
                "Testimonials",
                "Contact Us",
                "FAQ",
                "Sitemap"
              ].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-blue-300">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Our Advance Certification Courses</h4>
            <ul className="space-y-2">
              {[
                "Full Stack Data Science course with Gen AI & ML",
                "Full Stack Web Development",
                "Full Stack Web Development (MEAN + MERN)",
                "Full Stack Web Development (Laravel + Vue ja)",
                "Full Stack Development (MS ASP.Net Core + Angular)",
                "Advanced Web Design with UI/UX",
                "Advanced Digital Marketing",
                "Mobile App Development (iOS) / (Android)",
                "Mobile App Development (Android)",
                "Mobile App Development (iOS)",
                "React JS Course in Kolkata",
                "Node JS Course in Kolkata",
                "React Native Course in Kolkata",
                "Python Full Stack Developer Course",
                "Shopify Course in Kolkata",
                "Angular JS Course in Kolkata",
                "Flutter Development Course in Kolkata"
              ].map((course) => (
                <li key={course}>
                  <a href="#" className="hover:text-blue-300">{course}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Additional Courses */}
        <div className="mb-8">
          <h4 className="font-semibold text-lg mb-2">Courses:</h4>
          <div className="flex flex-wrap gap-2 text-sm">
            {[
              "SEO Course", "SMM Course", "SMO Course", "Google Ads Course", 
              "Python Course", "Hybrid App Development Course with Flutter", 
              "Magento 2.x Course", "Wordpress Course", "Laravel & MySQL with API Course", 
              "PHP/MySql Course", "Adobe Illustrator Course", "Manual Software Testing Course", 
              "Automation Testing with Selenium & Java", "Corporate Training", 
              "SQL Server 2017 Course"
            ].map((course) => (
              <a key={course} href="#" className="hover:text-blue-300">{course}</a>
            ))}
          </div>
        </div>

        {/* Location Specific Courses */}
        <div className="mb-8">
          <h4 className="font-semibold text-lg mb-2">Location Specific Courses:</h4>
          <div className="flex flex-wrap gap-2 text-sm">
            {[
              "Data Science Course with Gen AI & ML in Kolkata", 
              "Full Stack Web Development Course in Kolkata", 
              "(MEAN + MERN) Full Stack Web Development Course in Kolkata", 
              "(Laravel + Vue ja) Full Stack Web Development Course in Kolkata", 
              "(MS ASP.Net Core + Angular) Full Stack Web Development Course in Kolkata", 
              "Web Design With UI/UX Course in Kolkata", 
              "Digital Marketing Course in Kolkata with AI", 
              "Mobile App Development Course in Kolkata", 
              "Android App Development Course in Kolkata", 
              "iOS App Development Course in Kolkata"
            ].map((course) => (
              <a key={course} href="#" className="hover:text-blue-300">{course}</a>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-wrap gap-4 mb-4 md:mb-0">
            <a href="#" className="hover:text-blue-300">Privacy Policy</a>
            <a href="#" className="hover:text-blue-300">Terms of Service</a>
            <a href="#" className="hover:text-blue-300">Cookies Settings</a>
          </div>
          <div className="text-sm">
            Copyright © 2007-2025, Karmick Institute. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;