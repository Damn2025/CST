import React from 'react';
import { Leaf, Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

interface FooterProps {
  onContactClick: () => void;
}

const Footer: React.FC<FooterProps> = ({ onContactClick }) => {
  return (
    <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-[#274F71] p-2 rounded-lg">
                <Leaf className="w-6 h-6" />
              </div>
              <span className="text-xl font-bold">CST Envirotech</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Leading provider of environmental monitoring and compliance software solutions for a sustainable future.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Environmental Monitoring</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Compliance Management</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Data Analytics</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Reporting Tools</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Case Studies</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Webinars</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Support Center</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-white" />
                <span className="text-gray-400">info@cstenvirotech.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-white" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-white" />
                <span className="text-gray-400">San Francisco, CA</span>
              </div>
            </div>
            
            <button
              onClick={onContactClick}
              className="mt-6 bg-[#274F71] hover:bg-[#1e3a56] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg"
            >
              Get In Touch
            </button>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 CST Envirotech. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;