import React, { useRef, useState } from 'react';
import USP1 from '../assets/USP/USP1.png'
import USP2 from '../assets/USP/USP2.jpg'
import USP3 from '../assets/USP/USP3.png'
import USP4 from '../assets/USP/USP4.png'
import USP5 from '../assets/USP/USP5.jpg'
import { SlidersHorizontal, Users, FileText, Cpu, Puzzle, Award, Droplets, Lightbulb, Clock, ChevronDown, BookOpen } from 'lucide-react';


const cardsData = [
  {
    id: 1,
    title: "Extensive Experience and Specialisation",
    image: "https://placehold.co/400x300/F06449/white?text=1",
    description: "With over 40 years of dedicated experience in the heat transfer field, our independent Software House offers solutions built on a profound understanding of industry nuances.",
    points: []
  },
  {
    id: 2,
    title: " Deep Thermodynamics Engineering Expertise",
    description: "We have a dedicated Thermodynamics Engineering team that supports the development of our software, ensuring 'cutting-edge AI solutions with the highest technical content'. This combination of engineering and development talent allows for highly accurate and sophisticated tools",
    image: "https://placehold.co/400x300/4D8B9B/white?text=2"
  },
  {
    id: 3,
    title: "Comprehensive & Specialized Software Portfolio",
    image: "https://placehold.co/400x300/69B59F/white?text=3",
    description: "We offer over thirty software solutions for a vast array of components and equipment. This includes specialized tools for:",
    points: [
      " Finned Pack Heat Exchangers (design, sales, production)",
      " Shell & Tube Heat Exchangers (design, rating, selection)",
      "Plate & Shell, PHE (Gasketed & Brazed), Tube in Tube, Microchannel, Pillow Plate Banks, Coaxial Heat Exchangers, Wrap-Around & Monoflat Heat Pipe",
      "HVAC Equipment like Air Handling Units, Chillers, DHW Heat Pumps, Rooftops, Close Control Units, Cold Rooms, Unit Coolers, Air Coolers, Remote Condensers, Dry Coolers,Fan-Coils, Air Conditioners, Condensing Units, and Cooling Towers.",
      "Specific problem-solving tools for design, verification, and selection, for customer selection, for circuitry design and metal sheet drawings, and for simulating complex refrigerant cycles in various units.",
      "INNOVSuite for creating innovative heat exchangers."
    ]
  },
  {
    id: 4,
    title: "Global Reach and Trusted by Numerous Customers",
    description: " We are trusted by over 600 customers in more than 75 countries. This broad customer base across diverse markets (HVAC&R, Energy & Power, Chemical, Pharmaceutical, Food & Beverage, and Automotive) highlights their proven reliability and global applicability.",
    image: "https://placehold.co/400x300/EDC7B7/white?text=4",
    points: [" Support for Industry Certifications (AHRI/Eurovent): They offer significant support, with over 25 years of experience, in helping customers achieve Eurovent and AHRI Certification for coils and AHUs. This assistance in navigating complex certification processes is a critical value-add for manufacturers.",
        " Commitment to New Refrigerants and Environmental Standards: CST TermoSoft actively implements the new REFPROP 10 library across its software packages, incorporating modern and environmentally conscious refrigerants such as R32, R449A, R1234yf, R1234ze, R454B, R454C, Propane, CO2, and Ammonia. This demonstrates their commitment to staying current with evolving environmental regulations and technologies.",
        " Integration Capabilities (DLL & WEB APIs): The provision of new COILS DLL & WEB APIs allows customers to integrate CST TermoSoft's powerful calculation engines directly into their own desktop or online software. This offers flexibility and customization, preventing customers from needing to develop such complex engines in-house.",
    ]
  },
  {
    id: 5,
    title: " Focus on Efficiency and Business Transformation",
    description: "Their overarching mission is to ' Discover our Software, Save Time & transform your business'. Their solutions are explicitly 'aimed at streamlining equipment and component design & selection' to help both technical and sales departments. AI is integrated into software, with specific plans for future AI integration within the software solutions.",
    image: "https://placehold.co/400x300/B85042/white?text=5",
    points: ["Data governance in the era of generative artificial intelligence",
        "The AI Tour",
        "We are exploring the implications of AI, particularly generative AI, and its role in digital models and data governance. Therefore, while CST TermoSoft is engaging with the concept of AI through their blog, the sources do not provide specific information on how AI can be or is being integrated into their software products."
    ]
  },
  {
    id: 6,
    title: "Commitment to AI & Data Governance",
    description: "Another card to test the horizontal scroll functionality and the new clicking feature.",
    image: "https://placehold.co/400x300/A54F3B/white?text=6",
    points: []
  },

];
const painPointsData = [
  {
    id: 1,
    number: '01',
    title: 'Inefficient and Complex Equipment and Component Design & Selection',
    // content: "Our software streamlines the design and selection for a vast array of equipment, from heat exchangers to cooling towers, addressing the complexities of modern engineering.",
    // image: "https://placehold.co/400x300/F06449/white?text=1",
    image:USP1,
    icon: SlidersHorizontal,
    points: [
      "Streamlined design for heat exchangers and cooling towers.",
      "Simplified daily calculations for coils and shell & tube exchangers.",
      "Optimal selection of evaporators, dry coolers, and other components.",
      "Reduced manual calculation errors and design iterations.",
      "Accelerated project timelines from design to deployment."
    ]
  },
  {
    id: 2,
    number: '02',
    title: 'Challenges in Providing Customer Selection Tools',
    // content: 'Empower your customers with intuitive and accessible tools to select the right coils independently, enhancing their experience and reducing the workload on your sales and engineering teams.',
      // image: "https://placehold.co/400x300/B85042/white?text=2",
        image:USP2,
    icon: Users,
    points: [
      "Intuitive customer-facing selection tools.",
      "Reduces dependency on sales and engineering teams for selection.",
      "Enhances customer satisfaction and autonomy.",
      "Provides accurate, real-time product recommendations.",
      "Integrates seamlessly with your existing sales platforms."
    ]
  },
  {
    id: 3,
    number: '03',
    title: 'Difficulties in Production Documentation',
    // content: 'Automate the creation of essential production documents, including circuitry designs and metal sheet drawings, to streamline manufacturing and minimize costly errors.',
    // image: "https://placehold.co/400x300/69B59F/white?text=3",
    image:USP3,
    icon: FileText,
    points: [
      "Automated generation of circuitry designs.",
      "Creates precise metal sheet drawings for production.",
      "Minimizes manual documentation errors.",
      "Streamlines the manufacturing workflow.",
      "Ensures consistency across all production documents."
    ]
  },
  {
    id: 4,
    number: '04',
    title: 'Complexity of Thermal and Fluid Dynamic Calculations',
    // content: 'Backed by our Thermodynamics Engineering team, our software provides cutting-edge solutions for complex calculations, enabling detailed simulations of chillers, heat pumps, and special refrigerant cycles.',
    // image: "https://placehold.co/400x300/EDC7B7/white?text=4",
    image:USP4,
    icon: Cpu,
    points: [
      "Advanced thermal and fluid dynamic calculation engine.",
      "Detailed simulations for chillers and heat pumps.",
      "Analysis of special refrigerant cycles.",
      "Backed by a dedicated Thermodynamics Engineering team.",
      "Turns complex engineering challenges into clear solutions."
    ]
  },
   {
    id: 5,
    number: '05',
    title: 'Integration of Calculation Engines into Existing Systems',
    // content: "Seamlessly integrate our powerful coils calculation engine into your existing desktop or online software, eliminating the need for costly and time-consuming in-house development.",
    // image: "https://placehold.co/400x300/B85042/white?text=5",
    image:USP5,
    icon: Puzzle,
    points: [
      "Powerful DLLs and Web APIs for easy integration.",
      "Works with your existing desktop or online software.",
      "Eliminates need for in-house engine development.",
      "Leverages our specialized expertise directly.",
      "Reduces development time and associated costs."
    ]
  },
  {
    id: 6,
    number: '06',
    title: 'Meeting Industry Certifications (AHRI/Eurovent)',
    // content: "With over 25 years of experience, we provide expert support to help you navigate the significant hurdles of AHRI/Eurovent certification for coils and AHUs.",
    // image: "https://placehold.co/400x300/A54F3B/white?text=6",
    image:USP1,
    icon: Award,
    points: [
      "Over 25 years of certification support experience.",
      "Expert guidance for AHRI and Eurovent standards.",
      "Assistance for both coils and Air Handling Units (AHUs).",
      "Ensures your products meet international benchmarks.",
      "Simplifies the complex and lengthy certification process."
    ]
  },

];

const IndustriesSelection = () => {
  const scrollContainerRef = useRef(null);
  const [flippedCardId, setFlippedCardId] = useState<number | null>(null); // Changed state to a single ID
  const cardWidth = 320 + 24; // w-80 (sm:w-80) is 320px, space-x-6 is 24px. We'll use the larger size for scroll calculation.

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      (scrollContainerRef.current as HTMLElement).scrollBy({
        left: -cardWidth,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      (scrollContainerRef.current as HTMLElement).scrollBy({
        left: cardWidth,
        behavior: 'smooth'
      });
    }
  };

  const handleCardClick = (id: number) => {
    // If the same card is clicked, flip it back. Otherwise, flip the new card.
    setFlippedCardId(flippedCardId === id ? null : id);
  };

  return (
    <div className="bg-white flex items-center justify-center py-20 overflow-hidden">
      <style>{`
        /* Custom CSS to hide the scrollbar for a cleaner look */
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          transition: transform 0.6s;
          transform-style: preserve-3d;
        }
        .card-container:hover .card-inner {
          transform: rotateY(180deg);
        }
        .card-front, .card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          border-radius: 0.5rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          overflow: hidden;
        }
        .card-front {
          background-color:#274F71; /* Equivalent to bg-gray-800 */
        }
        .card-back {
          background-color:rgb(0, 0, 0); /* A slightly different dark color for the back */
          transform: rotateY(180deg);
          padding: 1rem; /* p-4 */
          color: #d1d5db;
        }
      
      `}</style>
      <div className="w-full max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black text-center mb-12 px-4">
            Solving Core Industry Challenges
        </h2>
        <p className=" text-xl sm:text-lg text-gray-600  font-semibold text-center max-w-4xl mx-auto mt-8 mb-12 px-6">
         CST ThermoSoft's software solutions address several key pain points for manufacturers operating in the HVAC&R, Energy & Power, Chemical, Pharmaceutical, Food & Beverage, and Automotive sectors. 
        </p>
    
        
        <div className="flex items-center justify-center md:gap-2 lg:gap-4">
          {/* Left Button */}
          <button 
            onClick={scrollLeft} 
            className="hidden md:block p-3 rounded-full bg-black hover:bg-black/40 text-white transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </button>

          {/* Horizontal Scroll Container */}
          <div 
            ref={scrollContainerRef}
            className="flex-1 flex flex-row space-x-4 sm:space-x-6 py-4 px-4 md:px-0 overflow-x-auto hide-scrollbar scroll-smooth snap-x snap-mandatory"
          >
            {painPointsData.map(card => (
              <div 
                key={card.id}
                onClick={() => handleCardClick(card.id)}
                className="flex-none w-72 h-96 sm:w-80 sm:h-[26rem] snap-center  rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 cursor-pointer perspective-1000"
              >
                <div 
                  className="card-inner"
                  style={{ transform: flippedCardId === card.id ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
                >
                  {/* Card Front */}
                  <div className="card-front">
                    <img 
                      src={card.image} 
                      alt={card.title} 
                      className="w-full h-40 sm:h-48 object-cover"
                    /> 
                    <div className="p-4 w-full">
                      <h3 className="   text-xl font-bold text-white mb-2 ">{card.title}</h3>
                      
                    </div>
                  </div>
                  
                  {/* Card Back */}
                  <div className="card-back p-2 sm:p-4">
                    <div className="border border-white rounded-lg p-2 h-full">
                      {card.points && card.points.length > 0 && (
                        <ul className="text-base list-disc text-white text-left w-full space-y-2 mt-4 pl-6 pr-2">
                          {card.points.map((point, index) => (
                            <li key={index} className="text-white-400 font-semibold italic">{point}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Button */}
          <button 
            onClick={scrollRight} 
            className="hidden md:block p-3 rounded-full bg-black hover:bg-black text-white transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5 15.75 12l-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default IndustriesSelection;
