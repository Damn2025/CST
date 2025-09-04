import React, { useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Benefits from './components/Benefits';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Industries from './components/Industries';
import CustomerTrust from './components/CustomerTrust';
import FAQs from './components/FAQs';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import BackgroundAnimation from './components/BackgroundAnimation';
import './animations.css';

function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-x-hidden">
      <BackgroundAnimation />
      
      <Hero onContactClick={openContactModal} />
      {/* <About /> */}
      <Benefits />
      <HowItWorks />
      <Features />
      <Industries />
      <CustomerTrust />
      <Footer onContactClick={openContactModal} />
      <FAQs />
      
      <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
    </div>
  );
}

export default App;