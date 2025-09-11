import React, { useState ,useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
import Hero from './components/Hero'; 
import About from './components/About';
import Benefits from './components/Benefits';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Industries from './components/Industries';
import IndustriesPainSection from './components/USP';
import CustomerTrust from './components/CustomerTrust';
import FAQs from './components/FAQs';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import BackgroundAnimation from './components/BackgroundAnimation';
import './animations.css';
import Associates from './components/Associates';
import USP from './components/USP';
import IndustriesPain from './components/IndustriesPains';
import Signup from './components/Signup';
import Plans from './components/Plans';
import Login from './components/Login';
import Payment from './components/Payment';
import SoftwareExplanation from './components/SoftwareExplanation';


const HomePage = ({ onContactClick }: { onContactClick: () => void }) => (
  <>
    <Hero onContactClick={onContactClick} />
    <IndustriesPain />
    <SoftwareExplanation />
    <Benefits />
    <HowItWorks />
    <Features />
    <Industries/>
    <USP/>
    <Associates/>
    <FAQs />
    <Footer onContactClick={onContactClick} />
  </>
);

function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [progress,setProgress]=useState(0);
  const [isloading,setIsLoading]=useState(true);
  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

    useEffect(() => {
    const hasLoadedBefore = sessionStorage.getItem('hasLoadedBefore');

    if (hasLoadedBefore) {
      setIsLoading(false);
      return;
    }
    // Set a timer to update the progress
    const interval = setInterval(() => {
      setProgress(prevProgress => {
        const newProgress = prevProgress + 1;
        if (newProgress >= 100) {
          clearInterval(interval);
          // Add the final animation class to the container
          const loadingContainer = document.getElementById('loading-container');
          if (loadingContainer) {
            loadingContainer.classList.add('final-animation');
            // Wait for the animation to finish before hiding the container
            setTimeout(() => {
              setIsLoading(false);
              sessionStorage.setItem('hasLoadedBefore', 'true');
            }, 1500); // This duration matches the animation time
          }
        }
        return newProgress;
      });
    }, 30);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  const loadingScreen = (
    <div className="bg-black font-sans text-white flex flex-col items-center justify-center min-h-screen p-8">
       <style>
        {`
        @keyframes wavy-progress {
            0% {
                background-position: -200% 0;
            }
            100% {
                background-position: 200% 0;
            }
        }

        .animated-wave {
            background: linear-gradient(90deg, #ec4899, #f97316, #3b82f6, #22c55e, #ec4899);
            background-size: 200% 100%;
            animation: wavy-progress 3s linear infinite;
        }

        @keyframes zoom-out-final {
            0% { transform: scale(1); opacity: 1; }
            100% { transform: scale(0.5); opacity: 0; }
        }

        .final-animation {
            animation: zoom-out-final 1.5s forwards;
        }
        `}
      </style>
      <div
        id="loading-container"
        className="relative flex flex-col items-center justify-center space-y-8 w-full max-w-lg"
      >
        <h1 className="text-4xl font-bold text-white drop-shadow-lg animate-pulse">
          Welcome to CST ThermoSoft
        </h1>
        <div className="relative w-full h-8 overflow-hidden rounded-full border-2 border-white">
          <div
            id="progress-bar"
            className="absolute top-0 left-0 h-full animated-wave"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <div className="flex flex-col items-center space-y-2 z-10">
          <p
            id="percentage-text"
            className="text-5xl font-extrabold text-white drop-shadow-md"
          >
            {progress}%
          </p>
          <p className="text-lg text-gray-400">Almost there...</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-x-hidden">
      <BackgroundAnimation />
      <Routes>
        {/* Only show loading screen for the main page */}
        <Route path="/" element={isloading ? loadingScreen : <HomePage onContactClick={openContactModal} />} />
        <Route path="/signup" element={<Signup onContactClick={openContactModal} />} />
        <Route path="/plans" element={<Plans onContactClick={openContactModal} />} />
        <Route path="/login" element={<Login onContactClick={openContactModal} />} />
        <Route path="/payment" element={<Payment onContactClick={openContactModal} />} />
      </Routes>
      <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
    </div>
  );
}

export default App;