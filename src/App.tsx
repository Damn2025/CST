import React, { useState } from 'react';
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


const HomePage = ({ onContactClick }: { onContactClick: () => void }) => (
  <>
    <Hero onContactClick={onContactClick} />
    <IndustriesPain />
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

  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-x-hidden">
      <BackgroundAnimation />
      <Routes>
        <Route path="/" element={<HomePage onContactClick={openContactModal} />} />
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