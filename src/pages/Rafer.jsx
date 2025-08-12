import React, { useState } from "react";
import { FiShare2, FiUser, FiAward, FiCheck, FiUsers, FiBook, FiCode } from "react-icons/fi";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { FaRupeeSign } from 'react-icons/fa';

// Floating 3D Samurai Helmet Animation
const FloatingSamurai = () => {
  return (
    <mesh rotation={[0, 0, 0]}>
      <torusGeometry args={[1, 0.4, 16, 32]} />
      <meshStandardMaterial color="#e11d48" metalness={0.8} roughness={0.2} />
    </mesh>
  );
};

const ReferAndEarn = () => {
  const [copied, setCopied] = useState(false);

  const copyReferralLink = () => {
    navigator.clipboard.writeText("https://samurai.academy/refer/student123");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-gray-800 text-white">
      {/* 3D Animated Background */}
      <div className="fixed inset-0 z-0 opacity-20">
        <Canvas>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Stars radius={100} depth={50} count={2000} factor={4} fade speed={1} />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
          <FloatingSamurai />
        </Canvas>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-16">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center text-white text-3xl font-bold">
              侍
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-amber-500">
            Samura Academy Referral Program
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Refer aspiring IT professionals and earn <span className="font-bold text-amber-400">₹200</span> for each successful enrollment!
          </p>
        </motion.header>

        {/* Referral Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-gray-800 bg-opacity-70 backdrop-blur-sm rounded-2xl p-8 mb-16 shadow-xl border border-red-900"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <FiShare2 className="text-red-400" /> Your Unique Referral Link
              </h2>
              <div className="flex items-center bg-gray-900 rounded-lg p-3 mb-4">
                <code className="text-gray-300 flex-1 overflow-x-auto">
                  https://samurai.academy/refer/student123
                </code>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={copyReferralLink}
                  className="px-6 py-3 bg-gradient-to-r from-red-600 to-amber-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-red-500/30 transition-all flex items-center gap-2"
                >
                  {copied ? (
                    <>
                      <FiCheck /> Copied!
                    </>
                  ) : (
                    <>
                      <FiShare2 /> Copy Link
                    </>
                  )}
                </button>
                <button className="px-6 py-3 bg-gray-700 rounded-lg font-semibold hover:bg-gray-600 transition-all flex items-center gap-2">
                  <FiUsers /> Share with Friends
                </button>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="w-40 h-40 relative">
                <Canvas>
                  <ambientLight intensity={0.5} />
                  <pointLight position={[5, 5, 5]} />
                  <FloatingSamurai />
                  <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
                </Canvas>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Program Benefits */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Why Refer to Samura Academy?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 bg-opacity-60 rounded-xl p-8 border border-gray-700">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-red-400">
                <FiUser /> For Referrers
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <FaRupeeSign className="text-amber-400 mt-1 flex-shrink-0" />
                  <span><strong>₹200 cash reward</strong> per successful enrollment</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiAward className="text-amber-400 mt-1 flex-shrink-0" />
                  <span><strong>Exclusive badges</strong> on your profile</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiBook className="text-amber-400 mt-1 flex-shrink-0" />
                  <span><strong>Free course upgrades</strong> after 5 referrals</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-800 bg-opacity-60 rounded-xl p-8 border border-gray-700">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-red-400">
                <FiUser /> For Referred Students
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <FiCode className="text-amber-400 mt-1 flex-shrink-0" />
                  <span><strong>10% discount</strong> on all bootcamp programs</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiUsers className="text-amber-400 mt-1 flex-shrink-0" />
                  <span><strong>Priority career support</strong> and mentorship</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiAward className="text-amber-400 mt-1 flex-shrink-0" />
                  <span><strong>Exclusive learning materials</strong> for referrals</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* How It Works */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">How The Referral Program Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                icon: <FiShare2 className="text-3xl text-red-400" />,
                title: "Share",
                desc: "Share your unique referral link",
              },
              {
                icon: <FiUser className="text-3xl text-red-400" />,
                title: "Enroll",
                desc: "Friend enrolls in any program",
              },
              {
                icon: <FiBook className="text-3xl text-red-400" />,
                title: "Complete",
                desc: "Friend completes first payment",
              },
              {
                icon: <FaRupeeSign className="text-3xl text-red-400" />,
                title: "Earn",
                desc: "You receive ₹200 reward",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-gray-800 bg-opacity-60 rounded-xl p-6 hover:shadow-lg hover:shadow-red-500/20 transition-all border border-gray-700 flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 bg-red-900 bg-opacity-50 rounded-full flex items-center justify-center mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-300">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Current Programs */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Eligible Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Samurai Coding Bootcamp",
                duration: "12 weeks",
                reward: "₹200",
              },
              {
                title: "Cloud Mastery Program",
                duration: "16 weeks",
                reward: "₹250",
              },
              {
                title: "Cybersecurity Dojo",
                duration: "20 weeks",
                reward: "₹300",
              },
            ].map((program, index) => (
              <div key={index} className="bg-gray-800 bg-opacity-60 rounded-xl p-6 border border-gray-700 hover:border-red-500 transition-colors">
                <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                <p className="text-gray-300 mb-3">{program.duration} intensive training</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Referral Reward</span>
                  <span className="font-bold text-amber-400">{program.reward}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* FAQ Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-gray-800 bg-opacity-60 rounded-2xl p-8"
        >
          <h2 className="text-3xl font-bold mb-6 text-center">Referral Program FAQs</h2>
          <div className="space-y-4">
            {[
              {
                question: "How many people can I refer?",
                answer: "There's no limit! You can earn rewards for every qualified enrollment.",
              },
              {
                question: "When will I receive my referral reward?",
                answer: "Rewards are processed within 7 business days after the referred student completes their first payment.",
              },
              {
                question: "Can I refer family members?",
                answer: "Yes, family members are eligible as long as they meet all enrollment requirements.",
              },
              {
                question: "What if the referred student withdraws?",
                answer: "If a student withdraws before completing 30% of the program, the referral reward will be revoked.",
              },
            ].map((faq, index) => (
              <div key={index} className="p-4 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors">
                <h3 className="font-bold text-lg mb-2">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default ReferAndEarn;