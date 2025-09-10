import React from 'react';
import { X, UserPlus } from 'lucide-react';
import { Link } from 'react-router-dom';

interface SignupPromptModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SignupPromptModal: React.FC<SignupPromptModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl transform transition-all duration-300 scale-100">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between rounded-t-2xl">
          <h2 className="text-2xl font-bold text-gray-900">Registration Required</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <div className="p-6 text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <UserPlus className="w-8 h-8 text-blue-600" />
            </div>
          </div>
          <p className="text-gray-700 text-lg mb-6">
            Please create an account to choose a plan and get started.
          </p>
          <Link to="/signup">
            <button className="w-full bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg">
              Sign Up Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignupPromptModal;