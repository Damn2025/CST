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
            <div className="flex flex-col items-start justify-center sm:pt-[24px]">
              <div>
                <span className={`font-bold text-transparent bg-clip-text bg-gradient-to-l from-pink-500 via-orange-500 to-blue-500 transition-all duration-300 ${isScrolled ? 'text-xl' : 'text-2xl sm:text-xl md:xl'}`}>
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
              href="/plans"
              className={`group relative px-4 py-2 lg:px-5 lg:py-2  text-xl rounded-lg font-base transition-all duration-300 hover:shadow-lg  ${isScrolled ? 'text-gray-800' : 'text-white'}`}
            >
              Pricing
              <span className={`absolute bottom-0 left-0 h-0.5  bg-gradient-to-l from-pink-500 via-orange-500 to-blue-500 transition-all duration-300 ease-out transform scale-x-0 group-hover:scale-x-100 origin-right w-full`}></span>
            </a>
            <button
              onClick={onContactClick}
              className={`group relative text-xl px-4 py-2 lg:px-6 lg:py-2 rounded-lg font-base transition-all duration-300 hover:shadow-lg ${isScrolled ? ' text-black' : 'text-white'}`}
            >
              Contact
              <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-l from-pink-500 via-orange-500 to-blue-500 transition-all duration-300 ease-out transform scale-x-0 group-hover:scale-x-100 origin-right w-full`}></span>
            </button>
            {isAuthenticated && (
              <a
                href="/login"
                className={`group relative px-4 py-2 lg:px-5 lg:py-2  text-xl rounded-lg font-base transition-all duration-300 hover:shadow-lg   ${isScrolled ? 'text-gray-800' : 'text-white'}`}
              >
                Login
                <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-l from-pink-500 via-orange-500 to-blue-500 transition-all duration-300 ease-out transform scale-x-0 group-hover:scale-x-100 origin-right w-full`}></span>
              </a>
            )}
            {!isAuthenticated && (
              <a
                href="/signup"
                className={`group relative px-4 py-2 lg:px-5 lg:py-2  text-xl rounded-lg font-base transition-all duration-300 hover:shadow-lg   ${isScrolled ? 'text-gray-800' : 'text-white'}`}
              >
                Sign Up
                <span className={`absolute bottom-0 left-0 h-0.5 ${isScrolled ? 'bg-blue-500' : 'bg-white'} transition-all duration-300 ease-out transform scale-x-0 group-hover:scale-x-100 origin-right w-full`}></span>
              </a>
            )}
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
          <div className="fixed inset-0 z-40 bg-gray-900/95 backdrop-blur-lg text-white flex flex-col items-center justify-center p-8 md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-5 right-5 p-2"
              aria-label="Close menu"
            >
              <X className="w-8 h-8" />
            </button>

            <div className="flex flex-col items-center gap-6 text-center">
              <a
                href="/plans"
                className="text-2xl font-semibold transition-colors hover:text-pink-400"
              >
                Pricing
              </a>
              <button
                onClick={() => {
                  onContactClick();
                  setIsMobileMenuOpen(false);
                }}
                className="text-2xl font-semibold transition-colors hover:text-pink-400"
              >
                Contact Us
              </button>
              {isAuthenticated && (
                <a
                  href="/login"
                  className="text-2xl font-semibold transition-colors hover:text-pink-400"
                >
                  Login
                </a>
              )}
              {!isAuthenticated && (
                <a
                  href="/signup"
                  className="mt-8 w-full text-center bg-gradient-to-r from-pink-500 to-orange-500 text-white px-8 py-4 rounded-lg font-semibold text-xl transition-transform hover:scale-105"
                >
                  Sign Up
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;