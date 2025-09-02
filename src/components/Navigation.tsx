import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.webp'

interface NavigationProps {
  onContactClick: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onContactClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? 'h-16 sm:h-20' : 'h-20 sm:h-28'}`}>
          {/* Logo */}
          <div className="flex items-center gap-2 sm:gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img src={logo} alt="CST Envirotech Logo" className={`w-auto transition-all duration-300 ${isScrolled ? 'h-10 sm:h-12 md:h-16' : 'h-14 sm:h-16 md:h-24 mt-6 sm:mt-12'}`} />
            <div className={`flex flex-col items-left justify-center ${isScrolled ? 'mt-0' : 'mt-4 sm:mt-10'}`}>
              <h2 className={`text-left font-semibold transition-colors duration-300 text-transparent bg-clip-text bg-gradient-to-l from-pink-500 via-orange-500 to-blue-500 text-base ${isScrolled ? 'text-black-600 text-base sm:text-xl' : ' text-xl sm:text-3xl'}`}>THERMO</h2>
              <div className={`border ${isScrolled ? 'border-black' : 'border-white'}`}></div>
              <h3 className={`font-extrabold ${isScrolled ? 'text-transparent bg-clip-text bg-gradient-to-l from-pink-500 via-orange-500 to-blue-500 text-base sm:text-xl' : 'text-xl sm:text-3xl text-transparent bg-clip-text bg-gradient-to-l from-pink-500 via-orange-500 to-blue-500'}`}>SOFTWARE</h3>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center space-x-4 lg:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium transition-colors duration-300 text-base lg:text-lg ${isScrolled ? 'text-gray-700 hover:text-[#274F71]' : 'text-white hover:text-blue-300'}`}
              >
                {item.label}
              </button>
            ))}
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
          <div className={`fixed inset-0 z-40 flex md:hidden bg-black/70 backdrop-blur-sm transition-all duration-300`}>
            <div className={`w-4/5 max-w-xs bg-white/95 shadow-lg h-full p-6 flex flex-col gap-2 border-r border-gray-200 animate-slide-in-left`}>
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-3 py-2 rounded-lg transition-colors duration-200 text-base font-medium ${isScrolled ? 'text-gray-700 hover:text-[#274F71] hover:bg-gray-50' : 'text-[#274F71] hover:bg-gray-100'}`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => {
                  onContactClick();
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 rounded-lg font-semibold transition-colors duration-200 mt-2 bg-[#274F71] text-white hover:bg-[#1e3a56]`}
              >
                Contact Us
              </button>
            </div>
            <div className="flex-1" onClick={() => setIsMobileMenuOpen(false)}></div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;