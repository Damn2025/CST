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
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto shadow-2xl transform transition-all duration-300 scale-100">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between rounded-t-2xl">
          <h2 className="text-2xl font-bold text-gray-900">Contact Us</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <User className="w-4 h-4 inline mr-2" />
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#274F71] focus:border-transparent transition-all duration-200"
              placeholder="Enter your full name"
            />
          </div>
             <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Building className="w-4 h-4 inline mr-2" />
              Company Name
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#274F71] focus:border-transparent transition-all duration-200"
              placeholder="Enter your company name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Mail className="w-4 h-4 inline mr-2" />
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#274F71] focus:border-transparent transition-all duration-200"
              placeholder="Enter your email"
            />
          </div>
             <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <PhoneCall className="w-4 h-4 inline mr-2" />
              Phone number 
            </label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#274F71] focus:border-transparent transition-all duration-200"
              placeholder="Enter your Phone Number"
            />
          </div>

       

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <MessageSquare className="w-4 h-4 inline mr-2" />
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#274F71] focus:border-transparent transition-all duration-200 resize-none"
              placeholder="Tell us about your environmental monitoring needs..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#274F71] hover:bg-[#1e3a56] text-white px-6 py-3 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2 group"
          >
            <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;