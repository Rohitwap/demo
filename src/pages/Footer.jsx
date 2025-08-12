import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const hoverEffect = {
    scale: 1.05,
    transition: { duration: 0.3 }
  };

  const tapEffect = {
    scale: 0.95
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white pt-16 pb-8 px-4 md:px-8 overflow-hidden">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-500 opacity-10"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
              opacity: [0.05, 0.1, 0.05],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top Section */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <motion.h3 
              className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
              whileHover={{ scale: 1.02 }}
            >
              SAMAURA ACADEMY
            </motion.h3>
            <div className="space-y-4">
              <motion.div 
                className="flex items-start group"
                whileHover={hoverEffect}
                whileTap={tapEffect}
              >
                <FaEnvelope className="mt-1 mr-3 text-blue-400 group-hover:text-purple-400 transition-colors" />
                <a href="mailto:info@samaruaacademy.com" className="hover:text-blue-300 transition-colors">
                  info@samaruaacademy.com
                </a>
              </motion.div>
              <motion.div 
                className="flex items-start group"
                whileHover={hoverEffect}
                whileTap={tapEffect}
              >
                <FaPhone className="mt-1 mr-3 text-blue-400 group-hover:text-purple-400 transition-colors" />
                <span>+91-7908735398</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Addresses */}
          <motion.div className="space-y-8" variants={itemVariants}>
            <motion.div whileHover={{ y: -5 }}>
              <h4 className="font-semibold text-xl mb-3 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent inline-block">
                Corporate Office
              </h4>
              <motion.div 
                className="flex items-start mt-4 group"
                whileHover={hoverEffect}
                whileTap={tapEffect}
              >
                <FaMapMarkerAlt className="mt-1 mr-3 text-blue-400 group-hover:text-purple-400 transition-colors" />
                <address className="not-italic">
                  Srijan Corporate Park, Sector V, Salt Lake, Bidhannagar<br />
                  Kolkata, (pin: 700091)<br />
                  West Bengal, India.
                </address>
              </motion.div>
              
              <motion.div 
                className="flex items-start mt-4 group"
                whileHover={hoverEffect}
                whileTap={tapEffect}
              >
                <FaMapMarkerAlt className="mt-1 mr-3 text-blue-400 group-hover:text-purple-400 transition-colors" />
                <address className="not-italic">
                  USA OFFICE - 417 Ridge Club Dr, Stateline, NV 89449, United States
                </address>
              </motion.div>
              
              <motion.div 
                className="flex items-start mt-4 group"
                whileHover={hoverEffect}
                whileTap={tapEffect}
              >
                <FaMapMarkerAlt className="mt-1 mr-3 text-blue-400 group-hover:text-purple-400 transition-colors" />
                <address className="not-italic">
                  Sub Branch - Haldia township, N5 1st floor, East Medinipur, West Bengal, 721607
                </address>
              </motion.div>
              
              <motion.div 
                className="flex items-start mt-4 group"
                whileHover={hoverEffect}
                whileTap={tapEffect}
              >
                <FaMapMarkerAlt className="mt-1 mr-3 text-blue-400 group-hover:text-purple-400 transition-colors" />
                <address className="not-italic">
                  Sub Branch - Kaktiya Bazar, Tamluk, East Medinipur West Bengal, 721172
                </address>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-xl mb-5 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent inline-block">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                "Home", "Courses", "About Us", "Placement", "Hire From Us", 
                "Refer & Earn", "Resources", "Career Impact", "Testimonials", 
                "Contact Us", "FAQ", "Sitemap"
              ].map((link) => (
                <motion.li 
                  key={link}
                  whileHover={{ x: 5 }}
                  whileTap={tapEffect}
                >
                  <a href="#" className="flex items-center group hover:text-blue-300 transition-colors">
                    <FaArrowRight className="mr-2 text-xs text-blue-400 opacity-0 group-hover:opacity-100 transition-all" />
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Courses */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-xl mb-5 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent inline-block">
              Our Advance Certification Courses
            </h4>
            <ul className="space-y-3">
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
                <motion.li 
                  key={course}
                  whileHover={{ x: 5 }}
                  whileTap={tapEffect}
                >
                  <a href="#" className="flex items-center text-sm group hover:text-blue-300 transition-colors">
                    <FaArrowRight className="mr-2 text-xs text-blue-400 opacity-0 group-hover:opacity-100 transition-all" />
                    {course}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Additional Courses */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h4 className="font-semibold text-xl mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent inline-block">
            Courses:
          </h4>
          <div className="flex flex-wrap gap-3 text-sm">
            {[
              "SEO Course", "SMM Course", "SMO Course", "Google Ads Course",
              "Python Course", "Hybrid App Development Course with Flutter",
              "Magento 2.x Course", "Wordpress Course", "Laravel & MySQL with API Course",
              "PHP/MySql Course", "Adobe Illustrator Course", "Manual Software Testing Course",
              "Automation Testing with Selenium & Java", "Corporate Training",
              "SQL Server 2017 Course"
            ].map((course) => (
              <motion.a 
                key={course}
                href="#"
                className="px-3 py-1 bg-gray-800 rounded-full hover:bg-blue-600 hover:text-white transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {course}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Location Specific Courses */}
        <motion.div 
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h4 className="font-semibold text-xl mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent inline-block">
            Location Specific Courses:
          </h4>
          <div className="flex flex-wrap gap-3 text-sm">
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
              <motion.a 
                key={course}
                href="#"
                className="px-3 py-1 bg-gray-800 rounded-full hover:bg-purple-600 hover:text-white transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {course}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div 
          className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-wrap gap-6 mb-4 md:mb-0">
            {["Privacy Policy", "Terms of Service", "Cookies Settings"].map((item) => (
              <motion.a 
                key={item}
                href="#"
                className="hover:text-blue-300 transition-colors relative group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full"></span>
              </motion.a>
            ))}
          </div>
          <motion.div 
            className="text-sm opacity-80 hover:opacity-100 transition-opacity"
            whileHover={{ scale: 1.02 }}
          >
            Copyright © 2024-2025, Samaura Institute. All Rights Reserved.
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;