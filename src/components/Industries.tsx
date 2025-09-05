import React, { useEffect, useRef, useState } from 'react';
import { Factory, Building, Droplets, TreePine, Truck, Wrench, ChevronLeft, ChevronRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// Import images
import heatExchangerImg from '../assets/Coils.png';
import hvacImg from '../assets/Hvacequipment.png';
 import certificationImg from '../assets/Certification.png';
 import refrigerantsImg from '../assets/refrigrents.png';
// import transportationImg from '../assets/industries/transportation.jpg';
// import oilGasImg from '../assets/industries/oil-gas.jpg';

const Industries: React.FC = () => {
  const industriesRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const [activeCard, setActiveCard] = useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const industries = [
    {
      icon: Factory,
      title: 'Heat Exchangers',
      description: 'operating in the HVAC and Refrigeration, Energy & Power, Chemical/Pharmaceutical, Food & Beverage, and Automotive.',
      image: heatExchangerImg
    },
    {
      icon: Building,
      title: 'HVAC Equipment',
      description: 'Including Chillers and Heat Pumps, Close Control Units, Air Handling Units, Fancoil Units, Remote Condensers, Dry Cooler, Brine Coolers, etc.',
      image: hvacImg
    },
    {
      icon: TreePine,
      title: 'AHRI/Eurovent Certification',
      description: 'We have over 25 years of experience in supporting our customers get Eurovent and AHRI Certification, for Coils and AHUs.',
      image: certificationImg
    
    },
    {
      icon: Droplets,
      title: 'New Refrigerants',
      description: 'Committed to sustainability with REFPROP 10 integration, supporting eco-friendly refrigerants like R32, R449A, R1234yf/ze, R454B/C, Propane, CO₂, Ammonia, and more.',
      image: refrigerantsImg
    },
  
  ];

  const handleFilterClick = (index: number, direction: 'next' | 'prev' | 'direct' = 'direct') => {
    let targetIndex = index;
    if (direction === 'next') {
      targetIndex = (activeCard + 1) % industries.length;
    } else if (direction === 'prev') {
      targetIndex = (activeCard - 1 + industries.length) % industries.length;
    }
    setActiveCard(targetIndex);
  };

  useEffect(() => {
    // Position cards using transforms to center the active card and place neighbors left/right
    if (!cardsContainerRef.current || cardRefs.current.length === 0) return;

    const firstCard = cardRefs.current[0];
    if (!firstCard) return;

    const cardWidth = firstCard.offsetWidth;
    const containerWidth = cardsContainerRef.current.offsetWidth;
    const offset = (containerWidth / 2) - (cardWidth / 2);

    cardRefs.current.forEach((card, index) => {
      if (!card) return;
      let position: number;

      if (index === activeCard) {
        // Active card is centered
        position = offset;
      } else if (index === (activeCard + 1) % industries.length) {
        // Next card to the right
        position = offset + cardWidth + 16; // 16px for gap-4
      } else if (index === (activeCard - 1 + industries.length) % industries.length) {
        // Previous card to the left
        position = offset - cardWidth - 16;
      } else {
        // Other cards are hidden off-screen
        position = containerWidth + 100;
      }

      gsap.to(card, {
        // Move card to target x relative to its current layout position
        x: position - card.offsetLeft,
        duration: 0.5,
        ease: 'power2.out',
      });
    });
  }, [activeCard, industries.length]);

  // Recalculate positions on window resize without changing the active card index
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    const recalcPositions = () => {
      if (!cardsContainerRef.current || cardRefs.current.length === 0) return;
      const firstCard = cardRefs.current[0];
      if (!firstCard) return;

      const cardWidth = firstCard.offsetWidth;
      const containerWidth = cardsContainerRef.current.offsetWidth;
      const offset = (containerWidth / 2) - (cardWidth / 2);

      cardRefs.current.forEach((card, index) => {
        if (!card) return;
        let position: number;
        if (index === activeCard) position = offset;
        else if (index === (activeCard + 1) % industries.length) position = offset + cardWidth + 16;
        else if (index === (activeCard - 1 + industries.length) % industries.length) position = offset - cardWidth - 16;
        else position = containerWidth + 100;
        gsap.set(card, { x: position - card.offsetLeft });
      });
    };

    const handleResize = () => {
      clearTimeout(timeout);
      timeout = setTimeout(recalcPositions, 200);
    };

    window.addEventListener('resize', handleResize);

    // Initial positioning after mount
    const initialCenterTimeout = setTimeout(recalcPositions, 100);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeout);
      clearTimeout(initialCenterTimeout);
    };
  }, [activeCard, industries.length]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Card scaling animation based on active state
      cardRefs.current.forEach((card, index) => {
        if (card) {
          gsap.to(card, {
            scale: activeCard === index ? 1.0 : 0.8,
            opacity: activeCard === index ? 1 : 0.6,
            duration: 0.5,
            ease: 'power3.out',
          });
        }
      });
    }, industriesRef);

    return () => ctx.revert();
  }, [activeCard]); // Only for scaling animations

  return (
    <section id="industries" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto" ref={industriesRef}>
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Industries We Serve
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tailored solutions for diverse industries with specific environmental challenges
          </p>
        </div>

        <div className="relative">
          <div className="flex justify-center items-center flex-wrap gap-3 mb-10">
            {industries.map((industry, index) => (
              <button
                key={index}
                onClick={() => handleFilterClick(index, 'direct')}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeCard === index
                    ? 'bg-[#274F71] text-white shadow-lg'
                    : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                }`}
              >
                {industry.title}
              </button>
            ))}
          </div>

          <div ref={cardsContainerRef} className="flex overflow-hidden pb-4 -mx-4 px-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {industries.map((industry, index) => (
              <div key={index} ref={el => cardRefs.current[index] = el} className="flex-shrink-0  w-full sm:w-1/2 lg:w-1/3 snap-center px-4 min-h-[450px]">
                               <div className="industry-card group relative bg-gradient-to-br from-white to-gray-50 rounded-xl p-8 shadow-lg transition-all duration-500 border border-gray-100 h-full flex flex-col items-center text-center overflow-hidden">
                    <div className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${activeCard === index ? 'opacity-100' : 'opacity-0'}`}>
                      <img src={industry.image} alt={industry.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/60"></div>
                    </div>
                    <div className={`relative z-10 transition-colors duration-500 ${activeCard === index ? 'text-white' : 'text-gray-900'}`}>

                    <div className="bg-[#274F71] w-14 h-14 rounded-lg flex items-center justify-center mb-7 transition-transform duration-300">
                      <industry.icon className="w-7 h-7 text-white " />
                    </div>
                      <h3 className={` font-bold mb-4 transition-colors duration-500 ${activeCard === index ? 'text-white text-2xl font-extrabold' : 'text-gray-900 text-xl font-bold'}`}>{industry.title}</h3>
                        <p className={`leading-relaxed font-semibold italic transition-colors duration-500 ${activeCard === index ? 'text-gray-200' : 'text-gray-600'}`}>{industry.description}</p>
                </div>
              </div>
              </div>
              ))}
          </div>
           

          {/* Navigation Buttons */}
          <button onClick={() => handleFilterClick(0, 'prev')} className="absolute top-1/2 -translate-y-1/2 -left-4 sm:-left-8 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-md hover:bg-white transition-all"><ChevronLeft className="w-6 h-6 text-gray-700" /></button>
          <button onClick={() => handleFilterClick(0, 'next')} className="absolute top-1/2 -translate-y-1/2 -right-4 sm:-right-8 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-md hover:bg-white transition-all"><ChevronRight className="w-6 h-6 text-gray-700" /></button>
        </div>
      </div>
    </section>
  );
};

export default Industries;