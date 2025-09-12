import React, { useState } from 'react';
import { X, Send, User, Mail, MessageSquare, Building ,PhoneCall } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone:'',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form and close modal
    setFormData({ name: '', email: '', company: '',phone:'', message: '' });
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl transform transition-all duration-300 scale-100 flex flex-col md:flex-row">
        {/* Left Side - Info */}
        <div className="hidden md:w-1/3 md:flex bg-gradient-to-br from-blue-600 to-pink-500 p-8 text-white rounded-l-2xl flex-col justify-between">
          <div className="mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-pink-100 leading-relaxed">
              We're here to help you with any questions about our software, plans, or services. Reach out and let's start a conversation.
            </p>
          </div>
          <div className="space-y-4 text-sm">
            <p className="flex items-center gap-3"><Mail className="w-5 h-5 text-pink-200" />salescstenvirotech@gmail.com</p>
            <p className="flex items-center gap-3"><PhoneCall className="w-5 h-5 text-pink-200" /> +1 (555) 123-4567</p>
            <p className="flex items-center gap-3"><Building className="w-16 h-16 text-pink-200" /> 1234, Plus Offices, Landmark Building, Sector 67, Gurgaon, Haryana, India</p>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full p-8 overflow-y-auto relative">
          <div className="absolute top-4 right-2">
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 rounded-full transition-colors duration-200"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="w-full text-2xl font-bold ">Fill the details</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

              {/* Name */}
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all" placeholder="Full Name" />
              </div>
              {/* Company */}
              <div className="relative">
                <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input type="text" name="company" value={formData.company} onChange={handleChange} className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all" placeholder="Company Name" />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Email */}
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all" placeholder="Email Address" />
              </div>
              {/* Phone */}
              <div className="relative">
                <PhoneCall className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input type="text" name="phone" value={formData.phone} onChange={handleChange} className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all" placeholder="Phone Number" />
              </div>
            </div>
            {/* Message */}
            <div className="relative">
              <MessageSquare className="absolute left-3 top-4 w-5 h-4 text-gray-400" />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={3}
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all resize-none"
                placeholder="Tell us about your needs..."
              />
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-pink-600 hover:bg-orange-500 text-white px-6 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2 group"
            >
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;