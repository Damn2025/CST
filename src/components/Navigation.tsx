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
        <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? 'h-20' : 'h-28'}`}>
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img src={logo} alt="CST Envirotech Logo" className={`w-auto transition-all duration-300 ${isScrolled ? 'h-12 md:h-16' : 'h-16 md:h-24 mt-12'}`} />
            <div className="flex flex-col items-left justify-center">
            <h2 className={`text-xl text-left font-bold transition-colors duration-300  ${isScrolled ? 'text-black-600' : 'text-white'}`}>
              CST LABS
            </h2>
            <h3 className={`text-sm font-bold ${isScrolled ? 'text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-orange-500 to-blue-500' : 'text-white'}`}>
              ThermoSoft
            </h3>
            </div>
           
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium transition-colors duration-300 ${isScrolled ? 'text-gray-700 hover:text-[#274F71]' : 'text-white hover:text-blue-300'}`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={onContactClick}
              className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 ${isScrolled ? 'bg-[#274F71] hover:bg-[#1e3a56] text-white' : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'}`}
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg"
            >
              {isMobileMenuOpen ? <X className={`w-6 h-6 ${isScrolled ? 'text-gray-700' : 'text-white'}`} /> : <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-700' : 'text-white'}`} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className={`md:hidden border-t ${isScrolled ? 'bg-white/95 backdrop-blur-md border-gray-200' : 'bg-black/50 backdrop-blur-md border-gray-700'}`}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-3 py-2 rounded-lg transition-colors duration-200 ${isScrolled ? 'text-gray-700 hover:text-[#274F71] hover:bg-gray-50' : 'text-white hover:bg-white/20'}`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => {
                  onContactClick();
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 rounded-lg font-semibold transition-colors duration-200 mt-2 ${isScrolled ? 'bg-[#274F71] text-white hover:bg-[#1e3a56]' : 'bg-white/20 text-white hover:bg-white/30'}`}
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