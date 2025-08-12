import React, { useState } from 'react';
import { FiBriefcase, FiUsers, FiAward, FiMail, FiPhone, FiMapPin, FiChevronRight, FiMenu, FiX } from 'react-icons/fi';

const HirePage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeTestimonial, setActiveTestimonial] = useState(0);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const testimonials = [
        {
            name: "Takashi Yamamoto",
            role: "CTO, TechGlobal Inc.",
            quote: "Samurai Academy graduates consistently demonstrate exceptional technical skills and strong problem-solving abilities. They've become valuable assets to our engineering team.",
            avatar: "TY"
        },
        {
            name: "Aiko Tanaka",
            role: "HR Director, SoftBridge Solutions",
            quote: "We've hired over 20 graduates from Samurai Academy in the past two years. Their rigorous training prepares them to hit the ground running in our development projects.",
            avatar: "AT"
        },
        {
            name: "Kenji Sato",
            role: "Samurai Academy Graduate",
            quote: "The academy's career support helped me land my dream job at a Fortune 500 company within a month of completing the program.",
            avatar: "KS"
        }
    ];

    const nextTestimonial = () => {
        setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    };

    const prevTestimonial = () => {
        setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Navigation */}
            <nav className="bg-white shadow-md">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                        <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">S</div>
                        <span className="text-xl font-bold text-gray-800">Samurai Academy</span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8">
                        <a href="#overview" className="text-gray-700 hover:text-red-600 transition-colors">Overview</a>
                        <a href="#programs" className="text-gray-700 hover:text-red-600 transition-colors">Programs</a>
                        <a href="#hiring" className="text-gray-700 hover:text-red-600 transition-colors">Hiring</a>
                        <a href="#partners" className="text-gray-700 hover:text-red-600 transition-colors">Partners</a>
                        <a href="#contact" className="text-gray-700 hover:text-red-600 transition-colors">Contact</a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden text-gray-700 focus:outline-none" onClick={toggleMenu}>
                        {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden bg-white py-4 px-4 shadow-inner">
                        <div className="flex flex-col space-y-4">
                            <a href="#overview" className="py-2 px-4 rounded hover:bg-gray-100" onClick={toggleMenu}>Overview</a>
                            <a href="#programs" className="py-2 px-4 rounded hover:bg-gray-100" onClick={toggleMenu}>Programs</a>
                            <a href="#hiring" className="py-2 px-4 rounded hover:bg-gray-100" onClick={toggleMenu}>Hiring</a>
                            <a href="#partners" className="py-2 px-4 rounded hover:bg-gray-100" onClick={toggleMenu}>Partners</a>
                            <a href="#contact" className="py-2 px-4 rounded hover:bg-gray-100" onClick={toggleMenu}>Contact</a>
                        </div>
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-20 md:py-32">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Hire World-Class IT Talent</h1>
                        <p className="text-xl md:text-2xl mb-8">
                            Connect with highly skilled graduates from Samurai Academy's rigorous IT training programs
                        </p>
                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                            <a
                                href="#hiring"
                                className="px-8 py-3 bg-white text-red-600 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
                            >
                                Hiring Process <FiChevronRight className="ml-2" />
                            </a>
                            <a
                                href="#contact"
                                className="px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-red-600 transition-colors"
                            >
                                Contact Our Team
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Overview Section */}
            <section id="overview" className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">About Samurai Academy</h2>
                            <p className="text-lg text-gray-600 mb-6">
                                Founded in 2010, Samurai Academy has trained over 5,000 IT professionals who now work at top tech companies worldwide. Our intensive programs combine traditional Japanese discipline with cutting-edge technology education.
                            </p>
                            <p className="text-lg text-gray-600">
                                We specialize in producing full-stack developers, cloud engineers, and cybersecurity experts ready to contribute from day one.
                            </p>
                        </div>
                        <div className="md:w-1/2 bg-gray-100 rounded-xl p-8">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                    <FiBriefcase className="text-3xl text-red-600 mb-4" />
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">98%</h3>
                                    <p className="text-gray-600">Placement Rate</p>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                    <FiUsers className="text-3xl text-red-600 mb-4" />
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">500+</h3>
                                    <p className="text-gray-600">Hiring Partners</p>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                    <FiAward className="text-3xl text-red-600 mb-4" />
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">12</h3>
                                    <p className="text-gray-600">Countries</p>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                    <FiBriefcase className="text-3xl text-red-600 mb-4" />
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">4.8/5</h3>
                                    <p className="text-gray-600">Employer Satisfaction</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Programs Section */}
            <section id="programs" className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Training Programs</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Intensive, project-based curriculum designed to produce job-ready professionals
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Full-Stack Development",
                                duration: "12 weeks",
                                skills: "JavaScript, React, Node.js, Databases",
                                companies: "Google, Amazon, Rakuten",
                                icon: <FiBriefcase className="text-3xl text-red-600" />
                            },
                            {
                                title: "Cloud Engineering",
                                duration: "10 weeks",
                                skills: "AWS, Azure, Kubernetes, DevOps",
                                companies: "Microsoft, IBM, Oracle",
                                icon: <FiBriefcase className="text-3xl text-red-600" />
                            },
                            {
                                title: "Cybersecurity",
                                duration: "14 weeks",
                                skills: "Ethical Hacking, Network Security, Cryptography",
                                companies: "Palo Alto, Cisco, Fortinet",
                                icon: <FiBriefcase className="text-3xl text-red-600" />
                            },
                        ].map((program, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow border border-gray-200 hover:border-red-300"
                            >
                                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                                    {program.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">{program.title}</h3>
                                <p className="text-gray-600 mb-4"><span className="font-semibold">Duration:</span> {program.duration}</p>
                                <p className="text-gray-600 mb-4"><span className="font-semibold">Skills:</span> {program.skills}</p>
                                <p className="text-gray-600"><span className="font-semibold">Hired by:</span> {program.companies}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Hiring Process Section */}
            <section id="hiring" className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Hiring Process</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Simple and effective ways to connect with our top graduates
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    step: "1",
                                    title: "Submit Requirements",
                                    description: "Share your hiring needs and job descriptions with our team",
                                    icon: <FiMail className="text-2xl text-red-600" />
                                },
                                {
                                    step: "2",
                                    title: "Candidate Matching",
                                    description: "We identify and pre-screen the best candidates for your roles",
                                    icon: <FiUsers className="text-2xl text-red-600" />
                                },
                                {
                                    step: "3",
                                    title: "Interview & Hire",
                                    description: "Conduct interviews and extend offers to selected candidates",
                                    icon: <FiBriefcase className="text-2xl text-red-600" />
                                },
                            ].map((step, index) => (
                                <div key={index} className="bg-gray-50 rounded-lg p-6 hover:bg-white hover:shadow-md transition-all">
                                    <div className="flex items-center mb-4">
                                        <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                                            {step.step}
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">{step.title}</h3>
                                    </div>
                                    <p className="text-gray-600">{step.description}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 bg-red-50 border border-red-200 rounded-xl p-8">
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">Exclusive Hiring Events</h3>
                            <p className="text-gray-600 mb-6">
                                Join our bi-annual Hiring Days where you can meet dozens of pre-screened candidates in one day.
                                These exclusive events include technical demonstrations, interviews, and networking opportunities.
                            </p>
                            <a
                                href="#contact"
                                className="inline-block px-6 py-2 bg-red-600 text-white rounded-full font-semibold hover:bg-red-700 transition-colors"
                            >
                                Register Interest
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Partners Section */}
            <section id="partners" className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Hiring Partners</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Trusted by leading technology companies worldwide
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            "Google", "Amazon", "Microsoft", "Sony",
                            "Rakuten", "Toyota", "Hitachi", "Fujitsu", "Samsung", "Alibaba", "Tencent", "Baidu",
                            "Sony", "Hitachi", "Fujitsu", "Toshiba",
                            "Rakuten", "NTT Data", "Huawei", "Xiaomi", "TCS", "Wipro", "HCL", "Tech Mahindra",
                            "Globant", "Mercado Libre", "Jumia"
                        ].map((company, index) => (
                            <div
                                key={index}
                                className="bg-white p-8 rounded-lg flex items-center justify-center hover:shadow-md transition-shadow"
                            >
                                <span className="text-xl font-bold text-gray-700">{company}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Success Stories</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            What our hiring partners and graduates say about us
                        </p>
                    </div>

                    <div className="max-w-3xl mx-auto relative">
                        <div className="bg-gray-50 rounded-xl p-8 md:p-12">
                            <div className="flex items-center mb-8">
                                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-6">
                                    {testimonials[activeTestimonial].avatar}
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800 text-xl">{testimonials[activeTestimonial].name}</h4>
                                    <p className="text-gray-600">{testimonials[activeTestimonial].role}</p>
                                </div>
                            </div>
                            <p className="text-gray-700 text-lg italic">"{testimonials[activeTestimonial].quote}"</p>
                        </div>

                        <div className="flex justify-center mt-8 space-x-4">
                            <button
                                onClick={prevTestimonial}
                                className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
                            >
                                &larr;
                            </button>
                            <button
                                onClick={nextTestimonial}
                                className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
                            >
                                &rarr;
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-16 bg-gray-800 text-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
                            <h2 className="text-3xl font-bold mb-6">Ready to Hire Our Graduates?</h2>
                            <p className="text-lg text-gray-300 mb-8">
                                Contact our placement team to discuss your hiring needs and discover how Samurai Academy can provide you with exceptional IT talent.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <FiMail className="text-xl mt-1 mr-4 text-red-400" />
                                    <div>
                                        <h4 className="font-bold">Email</h4>
                                        <p className="text-gray-300">hire@samuriacademy.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <FiPhone className="text-xl mt-1 mr-4 text-red-400" />
                                    <div>
                                        <h4 className="font-bold">Phone</h4>
                                        <p className="text-gray-300">+91 7908735398</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <FiMapPin className="text-xl mt-1 mr-4 text-red-400" />
                                    <div>
                                        <h4 className="font-bold">Office</h4>
                                        <p className="text-gray-300">Srijan Corporate Park, Sector V, Salt Lake, Bidhannagar
                                            Kolkata, (pin: 700091)
                                            West Bengal, India.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="md:w-1/2">
                            <form className="bg-gray-700 rounded-xl p-8">
                                <div className="mb-6">
                                    <label htmlFor="name" className="block text-gray-300 font-medium mb-2">Your Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                        placeholder="Company name"
                                    />
                                </div>

                                <div className="mb-6">
                                    <label htmlFor="email" className="block text-gray-300 font-medium mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                        placeholder="your@company.com"
                                    />
                                </div>

                                <div className="mb-6">
                                    <label htmlFor="message" className="block text-gray-300 font-medium mb-2">Hiring Needs</label>
                                    <textarea
                                        id="message"
                                        rows="4"
                                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                        placeholder="Tell us about your hiring requirements..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-red-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                                >
                                    Submit Inquiry
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-8">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-4 md:mb-0">
                            <p className="text-gray-400">© {new Date().getFullYear()} Samurai Academy. All rights reserved.</p>
                        </div>
                        <div className="flex space-x-6">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default HirePage;