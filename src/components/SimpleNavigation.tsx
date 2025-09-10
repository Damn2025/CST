import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.webp';
import { Menu, X } from 'lucide-react';

interface SimpleNavigationProps {
  onContactClick: () => void;
}

const SimpleNavigation: React.FC<SimpleNavigationProps> = ({ onContactClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    // Check authentication status on component mount
    const authStatus = localStorage.getItem('isAuthenticated') === 'true';
    setIsAuthenticated(authStatus);
  }, [location]); // Re-check on location change

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-4 cursor-pointer">
            <img src={logo} alt="CST Envirotech Logo" className="h-12 md:h-16" />
            <div className="flex flex-col items-start justify-center">
              <div>
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-l from-pink-500 via-orange-500 to-blue-500 text-lg sm:text-xl">
                  <span className="font-extrabold">T</span>HERMO<span className="font-extrabold italic">Soft</span>
                </span>
              </div>
              <div className="border w-[70%] border-blue-500"></div>
              <h3 className="font-cursive font-bold text-black text-lg sm:text-xl">Heat Transfer Software</h3>
            </div>
          </Link>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
             <button
              onClick={onContactClick}
              className="bg-[#274F71] hover:bg-[#1e3a56] text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg"
            >
              Contact Us
            </button>
            <Link to='/plans'>
              <button className="bg-pink-600 hover:bg-pink-700 hover:scale-110 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg">
                Plans
              </button>
            </Link>
            {location.pathname !== '/login' && (
              <Link to='/login'>
                <button className="bg-[#1B76ED] hover:bg-[#1B76ED] text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg">
                  Login
                </button>
              </Link>
            )}
            {location.pathname !== '/signup' && !isAuthenticated && (
              <Link to="/signup">
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg">
                  Sign Up
                </button>
              </Link>
            )}
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#274F71]">
              {isMobileMenuOpen ? <X className="w-7 h-7 text-gray-700" /> : <Menu className="w-7 h-7 text-gray-700" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button
              onClick={() => { onContactClick(); toggleMobileMenu(); }}
              className="block w-full text-left px-3 py-2 rounded-lg font-semibold transition-colors duration-200 bg-[#274F71] text-white hover:bg-[#1e3a56]"
            >
              Contact Us
            </button>
            <Link
              to="/plans"
              onClick={toggleMobileMenu}
              className="block w-full text-left"
            >
              <button className="w-full text-left bg-pink-600 hover:bg-pink-700 text-white px-3 py-2 rounded-lg font-semibold transition-all duration-300">
              Plans
            </button>
            </Link>
            {location.pathname !== '/login' && (
              <Link to="/login" onClick={toggleMobileMenu} className="block w-full text-left">
                <button className="w-full text-left bg-blue-400 hover:bg-blue-500 text-white px-3 py-2 rounded-lg font-semibold transition-all duration-300">
                  Login
                </button>
              </Link>
            )}
            {location.pathname !== '/signup' && !isAuthenticated && (
              <Link to="/signup" onClick={toggleMobileMenu} className="block w-full text-left">
                <button className="w-full text-left bg-orange-500 hover:bg-orange-600 text-white px-3 py-2 rounded-lg font-semibold transition-all duration-300">
                  Sign Up
                </button>
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default SimpleNavigation;