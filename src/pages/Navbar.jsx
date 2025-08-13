import { useState, useEffect } from 'react';
import { 
  FiHome, 
  FiBook, 
  FiCalendar,
  FiBriefcase,
  FiDollarSign,
  FiGift,
  FiFileText, 
  FiUsers,
  FiImage,
  FiSun, 
  FiMoon, 
  FiX, 
  FiMenu, 
  FiChevronDown, 
  FiChevronUp,
  FiMail,
  FiAward,
  FiBookOpen
} from 'react-icons/fi';
import logo from "../assets/logo.png";

const Navbar = () => {

  
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [coursesDropdownOpen, setCoursesDropdownOpen] = useState(false);
  const [mobileCoursesDropdownOpen, setMobileCoursesDropdownOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const [mobileMoreDropdownOpen, setMobileMoreDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

 
  const courses = [
    { name: 'Full stack Data Science with AI & ML', href: "/fullai", icon: <FiBookOpen className="mr-2" /> },
    { name: 'Full stack Web Development', href: "/fullweb", icon: <FiBookOpen className="mr-2" /> },
    { name: 'Advance Web Design with UI & UX', href: "/advancedui", icon: <FiBookOpen className="mr-2" /> },
    { name: 'Advance Digital Marketing', href: "/advancedigital", icon: <FiBookOpen className="mr-2" /> },
    { name: 'Mobile App Development', href: "/mobileapp", icon: <FiBookOpen className="mr-2" /> },
  ];

  const moreItems = [
    { name: 'Resources', href: "resources", icon: <FiFileText className="mr-2" /> },
    { name: 'About Us', href: "about", icon: <FiUsers className="mr-2" /> },
    { name: 'Career Impact', href: "career", icon: <FiAward className="mr-2" /> },
    { name: 'Gallery', href: "gallery", icon: <FiImage className="mr-2" /> },
    { name: 'Contact Us', href: "contact", icon: <FiMail className="mr-2" /> },
  ];

  const navItems = [
    { name: 'Home', href: "/", icon: <FiHome className="mr-2 text-lg" /> },
    {
      name: 'Courses',
      href: "courses",
      icon: <FiBook className="mr-2 text-lg" />,
      dropdown: true,
      items: courses
    },
    // { name: 'Upcoming Seminars', href: "seminars", icon: <FiCalendar className="mr-2 text-lg" /> },
    { name: 'Placements', href: "placement", icon: <FiBriefcase className="mr-2 text-lg" /> },
    { name: 'Hire From Us', href: "hire", icon: <FiUsers className="mr-2 text-lg" /> },
    { name: 'Refer & Earn', href: "refer", icon: <FiGift className="mr-2 text-lg" /> },
    {
      name: 'More',
      href: "more",
      icon: <FiMenu className="mr-2 text-lg" />,
      dropdown: true,
      items: moreItems
    },
  ];

  return (
    <>
    {/* <SomeLibraryComponent jsx={true} global={true} /> */}
      <nav className={`fixed w-full z-50 top-0 transition-all duration-300 ${scrolled ? 'bg-white bg-opacity-90 backdrop-blur-sm shadow-sm' : 'bg-transparent'}`}>
        {/* Top banner */}
        <div className='w-full bg-gradient-to-r from-purple-500 to-indigo-600 font-sans text-white text-center py-2 text-sm md:text-base'>
          <h1>USE CODE WELCOME500 GET WELCOME BONUS</h1>
        </div>
        
        {/* Main navbar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <img
                  src={logo}
                  alt='logo'
                  className="transition-all duration-300 w-[150px]"
                />
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:ml-10 md:flex md:space-x-1">
                {navItems.map((item) => (
                  <div key={item.name} className="relative delay-200">
                    {item.dropdown ? (
                      <div
                        onMouseEnter={() => item.name === 'Courses' ? setCoursesDropdownOpen(true) : setMoreDropdownOpen(true)}
                        onMouseLeave={() => item.name === 'Courses' ? setCoursesDropdownOpen(false) : setMoreDropdownOpen(false)}
                        className="relative"
                      >
                        <button
                          className="relative group text-black hover:text-indigo-600 inline-flex items-center px-3 py-2 text-sm font-medium rounded-md transition-all duration-300"
                        >
                          {item.icon}
                          {item.name}
                          {(item.name === 'Courses' ? coursesDropdownOpen : moreDropdownOpen) ? (
                            <FiChevronUp className="ml-1" />
                          ) : (
                            <FiChevronDown className="ml-1" />
                          )}
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all duration-300 "></span>
                        </button>
                        {(item.name === 'Courses' ? coursesDropdownOpen : moreDropdownOpen) && (
                          <div className="absolute left-0 mt-2 w-56 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50">
                            <div className="py-1">
                              {item.items.map((subItem) => (
                                <a
                                  key={subItem.name}
                                  href={subItem.href}
                                  className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                >
                                  {subItem.icon}
                                  {subItem.name}
                                </a>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      <a
                        href={item.href}
                        className="relative group text-black hover:text-indigo-600 inline-flex items-center px-3 py-2 text-sm font-medium rounded-md transition-all duration-300"
                      >
                        {item.icon}
                        {item.name}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all duration-300"></span>
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right side controls */}
            <div className="flex items-center space-x-4">
             

              {/* Mobile menu button */}
              <div className="md:hidden ml-2">
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 transition-all duration-300"
                  aria-expanded={mobileMenuOpen}
                >
                  <span className="sr-only">Open main menu</span>
                  {mobileMenuOpen ? (
                    <FiX className="block h-6 w-6" />
                  ) : (
                    <FiMenu className="block h-6 w-6" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`${mobileMenuOpen ? 'block' : 'hidden'} md:hidden transition-all duration-300 ease-in-out`}>
          <div className="pt-2 pb-4 space-y-1 bg-white bg-opacity-95 backdrop-blur-sm shadow-lg rounded-b-lg">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <div className="px-2">
                    <button
                      onClick={() => {
                        if (item.name === 'Courses') {
                          setMobileCoursesDropdownOpen(!mobileCoursesDropdownOpen);
                          setMobileMoreDropdownOpen(false);
                        } else {
                          setMobileMoreDropdownOpen(!mobileMoreDropdownOpen);
                          setMobileCoursesDropdownOpen(false);
                        }
                      }}
                      className="group w-full flex items-center justify-between px-3 py-3 text-base font-medium text-black hover:text-indigo-600 hover:bg-gray-50 rounded-md"
                    >
                      <div className="flex items-center">
                        <span className="mr-3">{item.icon}</span>
                        {item.name}
                      </div>
                      {(item.name === 'Courses' ? mobileCoursesDropdownOpen : mobileMoreDropdownOpen) ? (
                        <FiChevronUp className="ml-1" />
                      ) : (
                        <FiChevronDown className="ml-1" />
                      )}
                    </button>
                    {(item.name === 'Courses' ? mobileCoursesDropdownOpen : mobileMoreDropdownOpen) && (
                      <div className="pl-8 pr-2 py-1 space-y-1">
                        {item.items.map((subItem) => (
                          <a
                            key={subItem.name}
                            href={subItem.href}
                            className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-indigo-600 rounded-md"
                          >
                            {subItem.icon}
                            {subItem.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className="group flex items-center px-3 py-3 text-base font-medium text-black hover:text-indigo-600 hover:bg-gray-50 transition-all duration-300 mx-2 rounded-md"
                  >
                    <span className="mr-3">{item.icon}</span>
                    {item.name}
                    <span className="ml-auto w-0 h-0.5 bg-indigo-600 group-hover:w-8 transition-all duration-300"></span>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </nav>
      {/* Add padding to prevent content from being hidden behind fixed navbar */}
      <div className="pt-28"></div>
    </>
  );
};

export default Navbar;