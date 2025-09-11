import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { gsap } from 'gsap';
import comp1 from "../assets//Companies/comp1.webp"
import comp2 from "../assets//Companies/comp2.webp"
import comp3 from "../assets//Companies/comp3.webp"
import comp4 from "../assets//Companies/comp4.webp"
import comp5 from "../assets//Companies/comp5.webp"
import comp6 from "../assets//Companies/comp6.webp"
import comp7 from "../assets//Companies/comp7.webp"
import './Gallery.css'; // Import the new CSS file

// You can replace these with your actual logo imports

import logo1 from '../assets/associates/Dr.jagjit.webp';
import logo2 from '../assets/associates/Udo Ziegler.png';
import logo3 from '../assets/associates/SukhpalSingh.webp';
import logo4 from '../assets/associates/TapanJAin.webp';
import logo5 from '../assets/associates/AmitJoshi.png';
import logo6 from '../assets/associates/JMPaul.png';
import logo7 from '../assets/associates/Pankaj.webp';
import logo8 from '../assets/associates/NeerjaShonek.png';
import logo9 from '../assets/associates/JMPaul.webp';
import logo10 from '../assets/associates/Craig.png';

const companies = [
  { name: "Company A", url:comp1 },
  { name: "Company B", url: comp2 },
  { name: "Company C", url:comp3 },
  { name: "Company D", url: comp4  },
  { name: "Company E", url: comp5},
  { name: "Company F", url: comp6},
  { name: "Company G", url: comp7 },
];

const associates = [
  { 
    name: 'Dr. Jagjit Singh', 
    logo: logo1,
    post: 'Clean & Green Energy Expert',
    description: 'With over 45 years in thermal energy, he has dedicated his career to sustainable solutions. Specialising in designing and optimising thermal systems, he has led projects reducing environmental impact while preserving air, water, and energy for a cleaner, sustainable future.'
  },
  { 
    name: 'Udo Ziegler', 
    logo: logo2,
    post: 'Process & Plant Layout.',
    description: 'Leads ZEPCON Engineering, a German firm founded in 1991, specializing in process engineering, plant layout, and manufacturing technology, with global projects in energy, biomass, food, and chemical industries. The company thrives on Client-focused, strategic, sustainable innovation'
  },
  { 
    name: 'Colonel Sukhpal Singh Khetarpal', 
    logo: logo3,
    post: 'Vice President – Sustainable Futures ',
    description: 'An Indian Armed Forces veteran with 38+ years of service. He has demonstrated exceptional leadership academia and industry, driving ESG initiatives, GHG management, and sustainable collaborations with universities and industries'
  },
  { 
    name: 'Tapan Jain', 
    logo: logo4,
    post: 'IOT & AI Expert',
    description: 'With 12+ years of expertise in IT, AI, and IoT, he drives scalable solutions and AI-powered automation at CST Environment, enhancing efficiency. Armed with a B.Tech from IIT Roorkee and a PGP from ISB Hyderabad, he specializes in analytics, workflow automation, and IoT implementation.'
  },
  { 
    name: 'Amit Joshi', 
    logo: logo5,
    post: ' Auditor Air, Water & Energy',
    description: 'With a B.Tech from IIT Roorkee, Amit Joshi specializes in water conservation, having conducted 250+ audits in steel and power sectors. At CST Environment, he leads sustainable water management initiatives, advising on best practices and introducing innovative conservation technologies.'
  },
  { 
    name: 'JM Paul', 
    logo: logo6,
    post: 'Project Finance Controller',
    description: 'A seasoned professional since 1972 and head of JM Paul & Co. Chartered Accountants, supports CST EnviroBreeze with sustainable project development, cost planning, tax compliance, and financial structuring. His expertise ensures optimized resources and long-term business success.'
  },
  { 
    name: 'Pankaj R. Kalaskar', 
    logo: logo7,
    post: 'Process Heat Exchange Expert',
    description: ' Brings 20 years of expertise in heat transfer and engineering. He specializes in PHEs, Spiral, Block, Shell & Plate, and Pillow Plate Heat Exchangers, offering strong technical leadership and project management, also dedicated to driving innovation in thermal solutions.'
  },
  { 
    name: 'Craig Bevan', 
    logo: logo10,
    post: 'The Data Center Man',
    description: 'A Senior Data Centre Expert with 30+ years across EMEA and APAC, and a strong Middle East presence since 2008. He specialises in sustainable, scalable solutions from site selection to MEP/IT systems and full lifecycle management, championing net-zero operations and AI-driven cooling'
  },
   { 
    name: 'Neerja Shonek', 
    logo: logo8,
    post: 'The Data Center Man',
    description: 'A Senior Data Centre Expert with 30+ years across EMEA and APAC, and a strong Middle East presence since 2008. He specialises in sustainable, scalable solutions from site selection to MEP/IT systems and full lifecycle management, championing net-zero operations and AI-driven cooling'
  },
];

const Gallery = () => {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (track) {
      const items = Array.from(track.children);

      // Duplicate the items to create a seamless loop
      items.forEach((item) => {
        const clone = item.cloneNode(true);
        track.appendChild(clone);
      });
    }
  }, []);

  return (
    <div className="gallery-container">
      <div className="gallery-track" ref={trackRef}>
        {companies.map((company, index) => (
          <div className="gallery-item" key={index}>
            <img src={company.url} alt={`${company.name} Logo`} />
          </div>
        ))}
      </div>
    </div>
  );
};

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
                      <img src={associate.logo} alt={associate.name} className="h-40 w-40 object-cover rounded-full mx-auto mb-4 bg-black-100 border-4 border-gray-100" />
                      <h3 className="text-xl font-extrabold text-gray-900">{associate.name}</h3>
                       <p className="text-[#274F71] italic text-sm  font-semibold leading-relaxed">{associate.post}</p>
                      <div className="w-16 h-0.5 bg-[#274F71] mx-auto my-4"></div>
                      <p className="text-gray-600 text-sm font-bold leading-relaxed">{associate.description}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <button onClick={() => handleNavClick('next')} className="absolute -right-4 sm:-right-8 z-10 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-md hover:bg-white transition-all"><ChevronRight className="w-6 h-6 text-gray-700" /></button>
        </div>
        <Gallery />
      </div>
    </section>
  );
};

export default Associates;