import React, { useEffect, useRef, useState } from 'react';
import { Factory, Building, Droplets, TreePine, Truck, Wrench, ChevronLeft, ChevronRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Industries: React.FC = () => {
  const industriesRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const [activeCard, setActiveCard] = useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const industries = [
    {
      icon: Factory,
      title: 'Heat Exchangers',
      description: 'operating in the HVAC and Refrigeration, Energy & Power, Chemical/Pharmaceutical, Food & Beverage, and Automotive.'
    },
    {
      icon: Building,
      title: 'HVAC Equipment',
      description: 'Including Chillers and Heat Pumps, Close Control Units, Air Handling Units, Fancoil Units, Remote Condensers, Dry Cooler, Brine Coolers, etc.'
    },
    {
      icon: TreePine,
      title: 'AHRI/Eurovent Certification',
      description: 'We have over 25 years of experience in supporting our customers get Eurovent and AHRI Certification, for Coils and AHUs.'
    },
    {
      icon: Droplets,
      title: 'New Refrigerants',
      description: 'We share your values, especially when it comes to respecting the environment. That’s why we are committed to implementing the new REFPROP 10 library in our over 30+ software packages, which includes new refrigerants such as R32, R449A, R1234yf, R1234ze, R454B, R454C, along with PROPANE, CO2, AMMONIA and many more.'
    },
    {
      icon: Truck,
      title: 'Transportation',
      description: 'Track fleet emissions and optimize routes for environmental impact'
    },
    {
      icon: Wrench,
      title: 'Oil & Gas',
      description: 'Comprehensive environmental monitoring for extraction and refining operations'
    }
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
    const cardElement = cardRefs.current[activeCard];
    if (cardElement && cardsContainerRef.current) {
      const container = cardsContainerRef.current;
      const scrollLeft = cardElement.offsetLeft - container.offsetWidth / 2 + cardElement.offsetWidth / 2;
      
      gsap.to(container, {
        scrollTo: { x: scrollLeft, autoKill: false },
        duration: 0.8,
        ease: 'power3.inOut',
      });
    }
  }, [activeCard]);

  // Recenter the active card on window resize
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => { // Recenter without changing the active card index
        handleFilterClick(activeCard);
      }, 200); // Debounce to avoid excessive calls
    };

    window.addEventListener('resize', handleResize);

    // Initial centering
    const initialCenterTimeout = setTimeout(() => {
      handleFilterClick(activeCard, 'direct');
    }, 100);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [activeCard]); // Rerun if activeCard changes

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Card scaling animation based on active state
      cardRefs.current.forEach((card, index) => {
        if (card) {
          gsap.to(card, {
            scale: activeCard === index ? 1.0 : 0.9,
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

          <div ref={cardsContainerRef} className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 -mx-4 px-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {industries.map((industry, index) => (
              <div key={index} ref={el => cardRefs.current[index] = el} className="flex-shrink-0  w-full sm:w-1/2 lg:w-1/3 snap-center px-4">
                <div className="industry-card group bg-gradient-to-br from-white to-gray-50 text-center rounded-xl p-8 shadow-lg transition-all duration-500 border border-gray-100 h-full text-center ">
                    <div className="bg-[#274F71] w-14 h-14 rounded-lg flex items-center justify-center mb-6 transition-transform duration-300">
                      <industry.icon className="w-7 h-7 text-white " />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{industry.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{industry.description}</p>
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