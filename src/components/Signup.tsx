import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { Mail, Building, MapPin, Phone, Send, ArrowLeft , Circle, CheckCircle, Zap, Cpu } from 'lucide-react';
import logo from '../assets/logo.webp';
import Backvideo from '../assets/Hvac.mp4';
import SimpleNavigation from './SimpleNavigation';

interface SignupProps {
  onContactClick: () => void;
}

const Signup: React.FC<SignupProps> = ({ onContactClick }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    organization: '',
    location: '',
    phone: ''
  });

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    if (isAuthenticated) {
      navigate('/'); // Redirect to home if already logged in
    }
  }, [navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Signup Form submitted:', formData); // Replace with actual API call
    const serviceID = "service_cyfaq8j";
    const templateID = "template_jzg1uvf";
    const publicKey = "mPRCApbLXDf7hPgxz";

    const templateParams = {
      user_name: formData.organization,
      email:formData.email,
      plans_link:'https://cstsoft.netlify.app/plans' // ✅ dynamic link
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Welcome email sent!");
      })
      .catch((err) => {
        console.error("FAILED...", err);
        alert("Something went wrong.");
        return; // Stop execution if email fails
      });
    alert('Signup successful! Redirecting to homepage.');
    localStorage.setItem('isAuthenticated', 'true'); // Set auth flag
    navigate('/');
    // You could add logic here to show a success message
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <SimpleNavigation onContactClick={onContactClick}  />
      <div className="min-h-screen flex items-center justify-center bg-gray-100 pt-20">
        <div className="relative flex flex-col md:flex-row w-full max-w-6xl mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden">
          
          {/* Left Side - Content */}
          <div className="relative hidden md:flex w-full md:w-1/2 p-8 sm:p-12 text-white flex-col justify-center bg-[#1e3a56]">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none z-10"
              src={Backvideo}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#274F71]/80 to-gray-900/90 z-0"></div>
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-4">Unlock Your Potential</h2>
              <p className="text-lg text-gray-300 mb-8">
                Join CST ThermoSoft and gain access to a world-class suite of thermal analysis and design tools.
              </p>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <CheckCircle className="w-7 h-7 text-pink-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Comprehensive Solutions</h3>
                    <p className="text-gray-400">Access over 30 specialized software tools for heat exchangers and HVAC equipment.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Zap className="w-7 h-7 text-orange-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Boost Efficiency</h3>
                    <p className="text-gray-400">Streamline your design, selection, and production processes to save time and reduce costs.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Cpu className="w-7 h-7 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">AI-Powered Accuracy</h3>
                    <p className="text-gray-400">Leverage our advanced thermodynamic engine for precise calculations and simulations.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="w-full md:w-1/2 p-6 sm:p-12 flex flex-col justify-center ">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 text-center md:text-left">Create Your Account</h1>
            <p className="text-gray-600 mb-6 sm:mb-8 text-center md:text-left">Get started with a free trial today.</p>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <div className="relative">
                  <Mail className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full pl-10 pr-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all" placeholder="you@company.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Organization's Name</label>
                <div className="relative">
                  <Building className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input type="text" name="organization" value={formData.organization} onChange={handleChange} required className="w-full pl-10 pr-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all" placeholder="Your Company Inc." />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                <div className="relative">
                  <MapPin className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input type="text" name="location" value={formData.location} onChange={handleChange} required className="w-full pl-10 pr-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="City, Country" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <div className="relative">
                  <Phone className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="w-full pl-10 pr-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all" placeholder="+1 (555) 123-4567" />
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-pink-600 hover:from-pink-600 hover:via-orange-600 hover:to-blue-600 text-white px-6 py-2 sm:py-3 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 hover:shadow-xl flex items-center justify-center gap-2 group mt-2"
              >
                Sign Up
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-6 text-center">
              By signing up, you agree to our <a href="#" className="text-pink-600 hover:underline">Terms of Service</a> and <a href="#" className="text-pink-600 hover:underline">Privacy Policy</a>.
            </p>
            <div className="flex items-center my-4">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="flex-shrink mx-4 text-gray-500 text-sm">OR</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>
            
            <p className="text-sm text-gray-600 mt-4 text-center">
              Already have an account? <Link to="/login" className="font-semibold text-blue-600 hover:text-blue-700 hover:underline">Login</Link>
            </p>
          </div>

        </div>
      </div>
    </>
  );
};

export default Signup;
