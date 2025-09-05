import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { gsap } from 'gsap';

// You can replace these with your actual logo imports

import logo1 from '../assets/associates/Dr.jagjit.webp';
import logo2 from '../assets/associates/Udo Ziegler.webp';
import logo3 from '../assets/associates/SukhpalSingh.webp';
import logo4 from '../assets/associates/TapanJAin.webp';
import logo5 from '../assets/associates/AmitJoshi.webp';
import logo6 from '../assets/associates/JMPaul.webp';
import logo7 from '../assets/associates/Pankaj.webp';
import logo8 from '../assets/associates/Dr.jagjit.webp';
import logo9 from '../assets/associates/JMPaul.webp';
import logo10 from '../assets/associates/Craig.webp';

const associates = [
  { 
    name: 'Dr. Jagjit Singh', 
    logo: logo1,
    post: 'Director',
    description: 'A leading expert in thermal dynamics with over 20 years of experience in academic and industrial research.'
  },
  { 
    name: 'Udo Ziegler', 
    logo: logo2,
    post: 'Director',
    description: 'Specializes in HVAC systems and sustainable energy solutions, driving innovation in green technology.'
  },
  { 
    name: 'Sukhpal Singh', 
    logo: logo3,
    post: 'Director',
    description: 'A software architect with a passion for creating scalable and efficient thermal analysis tools.'
  },
  { 
    name: 'Tapan Jain', 
    logo: logo4,
    post: 'Director',
    description: 'Expert in refrigerant technology and compliance, ensuring our software meets global standards.'
  },
  { 
    name: 'Amit Joshi', 
    logo: logo5,
    post: 'Director',
    description: 'Focuses on user experience and interface design, making complex data accessible and actionable.'
  },
  { 
    name: 'JM Paul', 
    logo: logo6,
    post: 'Director',
    description: 'A key contributor to our heat exchanger simulation engines, with a deep knowledge of fluid dynamics.'
  },
  { 
    name: 'Pankaj Kumar', 
    logo: logo7,
    post: 'Director',
    description: 'Leads our quality assurance team, ensuring the reliability and accuracy of all our software products.'
  },
  { 
    name: 'Craig Bradshaw', 
    logo: logo10,
    post: 'Director',
    description: 'Our strategic partner for the North American market, bridging technology with customer needs.'
  },
];

const Associates: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(1); // Start at the first "real" item
  const carouselRef = useRef<HTMLUListElement>(null);
  const isTransitioning = useRef(false);

  // Create a new array with cloned items at the start and end for the infinite loop effect
  const loopedAssociates = [associates[associates.length - 1], ...associates, associates[0]];

  const handleNavClick = (direction: 'prev' | 'next') => {
    if (isTransitioning.current) return;
    isTransitioning.current = true;
    setCurrentIndex(prev => prev + (direction === 'next' ? 1 : -1));
  };

  useEffect(() => {
    if (carouselRef.current) {
      gsap.to(carouselRef.current, {
        x: `-${currentIndex * (carouselRef.current.firstElementChild?.clientWidth ?? 384)}px`, // 350px width + 32px margin
        duration: 0.8,
        ease: 'power3.out',
        onComplete: () => {
          if (currentIndex === 0) { // If we are at the fake start
            gsap.set(carouselRef.current, { x: `-${associates.length * (carouselRef.current?.firstElementChild?.clientWidth ?? 384)}px` });
            setCurrentIndex(associates.length);
          } else if (currentIndex === loopedAssociates.length - 1) { // If we are at the fake end
            gsap.set(carouselRef.current, { x: `-${1 * (carouselRef.current?.firstElementChild?.clientWidth ?? 384)}px` });
            setCurrentIndex(1);
          }
          isTransitioning.current = false;
        }
      });
    }
  }, [currentIndex, associates.length, loopedAssociates.length]);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      handleNavClick('next');
    }, 10000); // 10 seconds

    // Clear interval on component unmount or when currentIndex changes
    return () => clearInterval(interval);
  }, []); // Run only once

  return (
    <section id="associates" className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Our Associates
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are proud to partner with leading organizations and institutions worldwide.
          </p>
        </div>

        <div className="relative flex items-center justify-center">
          <button onClick={() => handleNavClick('prev')} className="absolute -left-4 sm:-left-8 z-10 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-md hover:bg-white transition-all"><ChevronLeft className="w-6 h-6 text-gray-700" /></button>
          
          <div className="w-full overflow-hidden">
            <ul ref={carouselRef} className="flex items-start">
              {loopedAssociates.map((associate, index) => (
                <li key={index}>
                  <div className="flex-shrink-0 w-[320px] sm:w-[350px] mx-4 sm:mx-8">
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden text-center p-6 border border-gray-200/80">
                      <img src={associate.logo} alt={associate.name} className="h-40 w-40 object-cover rounded-full mx-auto mb-4 border-4 border-gray-100" />
                      <h3 className="text-xl font-bold text-gray-900">{associate.name}</h3>
                       <p className="text-[#274F71] italic text-sm leading-relaxed">{associate.post}</p>
                      <div className="w-16 h-0.5 bg-[#274F71] mx-auto my-4"></div>
                      <p className="text-gray-600 text-sm leading-relaxed">{associate.description}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <button onClick={() => handleNavClick('next')} className="absolute -right-4 sm:-right-8 z-10 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-md hover:bg-white transition-all"><ChevronRight className="w-6 h-6 text-gray-700" /></button>
        </div>
      </div>
    </section>
  );
};

export default Associates;