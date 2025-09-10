import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, Send, CheckCircle, Zap, Cpu } from 'lucide-react';
import Backvideo from '../assets/Hvac.mp4';
import SimpleNavigation from './SimpleNavigation';

interface LoginProps {
  onContactClick: () => void;
}

const Login: React.FC<LoginProps> = ({ onContactClick }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Login Form submitted:', formData); // Replace with actual API call
    alert('Login successful! Redirecting to homepage.');
    window.location.href = 'https://cstheattrransfer.com/Home.aspx';
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <SimpleNavigation onContactClick={onContactClick} />
      <div className="min-h-screen flex items-center justify-center bg-gray-100 pt-20">
        <div className="relative flex flex-col md:flex-row w-full max-w-6xl mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden">
         

          {/* Right Side - Form */}
          <div className="w-full md:w-1/2 p-6 sm:p-12 flex flex-col justify-center">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 text-center md:text-left">Account Login</h1>
            <p className="text-gray-600 mb-6 sm:mb-8 text-center md:text-left">Enter your credentials to access your dashboard.</p>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <div className="relative">
                  <Mail className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full pl-10 pr-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all" placeholder="you@company.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <div className="relative">
                  <Lock className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input type="password" name="password" value={formData.password} onChange={handleChange} required className="w-full pl-10 pr-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all" placeholder="••••••••" />
                </div>
                <div className="text-right mt-2">
                  <a href="#" className="text-sm font-medium text-blue-600 hover:underline">Forgot Password?</a>
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-[#1B76ED] hover:scale-110 text-white px-6 py-2 sm:py-3 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 hover:shadow-xl flex items-center justify-center gap-2 group mt-2"
              >
                Login
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </form>
            <div className="flex items-center my-4">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="flex-shrink mx-4 text-gray-500 text-sm">OR</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>
            <p className="text-sm text-gray-600 text-center">
              Don't have an account? <a href="/signup" className="font-semibold text-blue-600 hover:text-blue-700 hover:underline">Sign Up</a>
            </p>
          </div>

           
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
              <h2 className="text-4xl font-bold mb-4">Welcome Back!</h2>
              <p className="text-lg text-gray-300 mb-8">
                Log in to continue managing your thermal analysis and design projects.
              </p>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <CheckCircle className="w-7 h-7 text-pink-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Access Your Projects</h3>
                    <p className="text-gray-400">Pick up right where you left off with your saved designs and simulations.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Zap className="w-7 h-7 text-orange-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Run New Simulations</h3>
                    <p className="text-gray-400">Utilize our powerful engine to run new calculations and analyses.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Cpu className="w-7 h-7 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Manage Your Account</h3>
                    <p className="text-gray-400">Update your profile, manage your subscription, and view your history.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;