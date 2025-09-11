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
               className="group relative text-gray-800 px-6 py-2 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg"
             >
              Contact Us
               <span className="absolute bottom-0 left-0 h-0.5 bg-blue-500 transition-all duration-300 ease-out transform scale-x-0 group-hover:scale-x-100 origin-right w-full"></span>
             </button>
            <Link to='/plans' className="group relative text-gray-800 px-6 py-2 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg">
              Plans
              <span className="absolute bottom-0 left-0 h-0.5 bg-pink-500 transition-all duration-300 ease-out transform scale-x-0 group-hover:scale-x-100 origin-right w-full"></span>
            </Link>
            {location.pathname !== '/login' && (
              <Link to='/login' className="group relative text-gray-800 px-6 py-2 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg">
                Login
                <span className="absolute bottom-0 left-0 h-0.5 bg-blue-500 transition-all duration-300 ease-out transform scale-x-0 group-hover:scale-x-100 origin-right w-full"></span>
              </Link>
            )}
            {location.pathname !== '/signup' && !isAuthenticated && (
              <Link to="/signup" className="group relative text-gray-800 px-6 py-2 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg">
                Sign Up
                <span className="absolute bottom-0 left-0 h-0.5 bg-orange-500 transition-all duration-300 ease-out transform scale-x-0 group-hover:scale-x-100 origin-right w-full"></span>
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
          <div className="px-4 pt-2 pb-4 space-y-2">
            <button
              onClick={() => { onContactClick(); toggleMobileMenu(); }}
              className="group relative block w-full text-left px-3 py-3 rounded-lg font-semibold text-gray-800 transition-colors duration-200 hover:bg-gray-50"
            >
              Contact Us
              <span className="absolute bottom-0 left-0 h-0.5 bg-blue-500 transition-all duration-300 ease-out transform scale-x-0 group-hover:scale-x-100 origin-right w-full"></span>
            </button>
            <Link
              to="/plans"
              onClick={toggleMobileMenu}
              className="group relative block w-full text-left px-3 py-3 rounded-lg font-semibold text-gray-800 transition-colors duration-200 hover:bg-gray-50"
            >
              Plans
              <span className="absolute bottom-0 left-0 h-0.5 bg-pink-500 transition-all duration-300 ease-out transform scale-x-0 group-hover:scale-x-100 origin-right w-full"></span>
            </Link>
            {location.pathname !== '/login' && (
              <Link to="/login" onClick={toggleMobileMenu} className="group relative block w-full text-left px-3 py-3 rounded-lg font-semibold text-gray-800 transition-colors duration-200 hover:bg-gray-50">
                Login
                <span className="absolute bottom-0 left-0 h-0.5 bg-blue-500 transition-all duration-300 ease-out transform scale-x-0 group-hover:scale-x-100 origin-right w-full"></span>
              </Link>
            )}
            {location.pathname !== '/signup' && !isAuthenticated && (
              <Link to="/signup" onClick={toggleMobileMenu} className="group relative block w-full text-left px-3 py-3 rounded-lg font-semibold text-gray-800 transition-colors duration-200 hover:bg-gray-50">
                Sign Up
                <span className="absolute bottom-0 left-0 h-0.5 bg-orange-500 transition-all duration-300 ease-out transform scale-x-0 group-hover:scale-x-100 origin-right w-full"></span>
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default SimpleNavigation;