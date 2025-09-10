import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.webp'

interface NavigationProps {
  onContactClick: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onContactClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Check authentication status on component mount
    const authStatus = localStorage.getItem('isAuthenticated') === 'true';
    setIsAuthenticated(authStatus);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [

    { label: 'Benefits', id: 'benefits' },
    { label: 'How It Works', id: 'how-it-works' },
    { label: 'Features', id: 'features' },
    { label: 'Industries', id: 'industries' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? 'h-16 sm:h-20' : 'h-20 sm:h-28'}`}>
          {/* Logo */}
          <div className="flex items-center gap-2 sm:gap-4 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
           <a href='/'>
            <img src={logo} alt="CST Envirotech Logo" className={`w-auto transition-all duration-300 ${isScrolled ? 'h-12 md:h-16' : 'h-16 md:h-20'}`} />
            </a>
            <div className="flex flex-col items-start justify-center">
              <div>
                <span className={`font-bold text-transparent bg-clip-text bg-gradient-to-l from-pink-500 via-orange-500 to-blue-500 transition-all duration-300 ${isScrolled ? 'text-xl' : 'text-2xl sm:text-3xl'}`}>
                  <span className="font-extrabold">T</span>HERMO<span className="font-extrabold italic">Soft</span>
                </span>
             </div>
              <div className={`border w-[70%] ${isScrolled ? 'border-blue-500' : 'border-white'}`}></div>
              <h3 className={`font-cursive font-bold transition-colors duration-300 ${isScrolled ? 'text-black text-xl sm:text-2xl' : 'text-white text-2xl sm:text-3xl'}`}>Heat Transfer Software</h3>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center space-x-2 lg:space-x-4">
            {/* {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium transition-colors duration-300 text-sm lg:text-base ${isScrolled ? 'text-gray-700 hover:text-[#274F71]' : 'text-white hover:text-blue-300'}`}
              >
                {item.label}
              </button>
            ))} */}
            <a
              href="/plans" // Assuming you will set up a route for /plans
              className={`px-4 py-2 lg:px-5 lg:py-2 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 text-sm lg:text-base ${isScrolled ? 'bg-gray-200 hover:bg-gray-200 text-gray-800' : 'bg-white/10 hover:bg-white/20 text-white  border border-white/20'}`}
            >
              Plans
            </a>
            {!isAuthenticated && (
              <button>
                <a
                  href="/signup" // Assuming you will set up a route for /signup
                  className={`px-4 py-2 lg:px-5 lg:py-2 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 text-sm lg:text-base ${isScrolled ? 'bg-gray-200 hover:bg-gray-200 text-gray-800' : 'bg-white/10 hover:bg-white/20 text-white  border border-white/20'}`}
                >
                  Sign Up
                </a>
              </button>
            )}
            <button
              onClick={onContactClick}
              className={`px-4 py-2 lg:px-6 lg:py-2 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 ${isScrolled ? 'bg-[#274F71] hover:bg-[#1e3a56] text-white' : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'}`}
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#274F71]"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className={`w-7 h-7 ${isScrolled ? 'text-gray-700' : 'text-white'}`} /> : <Menu className={`w-7 h-7 ${isScrolled ? 'text-gray-700' : 'text-white'}`} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-40 flex md:hidden" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300"></div>
            <div className="relative w-4/5 max-w-xs bg-white h-full p-6 flex flex-col gap-2 shadow-lg animate-slide-in-left" onClick={(e) => e.stopPropagation()}>
              {/* {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 rounded-lg transition-colors duration-200 text-lg font-medium text-gray-700 hover:text-[#274F71] hover:bg-gray-100"
                >
                  {item.label}
                </button>
              ))} */}
              <a
                href="/plans"
                className="block w-full text-left px-3 py-2 rounded-lg font-semibold transition-colors duration-200 mt-4 bg-gray-100 text-gray-800 hover:bg-gray-200"
              >
                Plans
              </a>
              {!isAuthenticated && (
                <a
                  href="/signup"
                  className="block w-full text-left px-3 py-2 rounded-lg font-semibold transition-colors duration-200 mt-4 bg-gray-100 text-gray-800  hover:bg-[#1e3a56]"
                >
                  Sign Up
                </a>
              )}
              <button
                onClick={() => {
                  onContactClick();
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 rounded-lg font-semibold transition-colors duration-200 mt-4 bg-[#274F71] text-white hover:bg-[#1e3a56]"
              >
                Contact Us
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;