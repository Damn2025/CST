import React, { useState } from 'react';
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
    image: USP1,
    icon: SlidersHorizontal,
    color: {
      bg: 'bg-blue-800',
      border: 'border-blue-700'
    },
    description: "With over 40 years of dedicated experience in the heat transfer field, our independent Software House offers solutions built on a profound understanding of industry nuances.",
    points: []
  },
  {
    id: 2,
    title: " Deep Thermodynamics Engineering Expertise",
    icon: SlidersHorizontal,
    color: {
      bg: 'bg-pink-800',
      border: 'border-pink-700'
    },
    description: "We have a dedicated Thermodynamics Engineering team that supports the development of our software, ensuring 'cutting-edge AI solutions with the highest technical content'. This combination of engineering and development talent allows for highly accurate and sophisticated tools",
    image: USP2
  },
  {
    id: 3,
    title: "Comprehensive & Specialized Software Portfolio",
    image: USP3,
    icon: SlidersHorizontal,
    color: {
      bg: 'bg-orange-800',
      border: 'border-orange-700'
    },
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
    icon:SlidersHorizontal,
    color: {
      bg: 'bg-blue-800',
      border: 'border-blue-700'
    },
    description: " We are trusted by over 600 customers in more than 75 countries. This broad customer base across diverse markets (HVAC&R, Energy & Power, Chemical, Pharmaceutical, Food & Beverage, and Automotive) highlights their proven reliability and global applicability.",
    image: USP4,
    points: ["Certification Support (AHRI & Eurovent): 25+ years helping customers achieve certifications with ease and confidence.",
        "Commitment to New Refrigerants Actively implementing REFPROP 10 with eco-friendly refrigerants like R32, CO₂, Ammonia, and more to meet evolving standards.",
        " Integration Capabilities (DLL & WEB APIs): The provision of new COILS DLL & WEB APIs allows customers to integrate CST TermoSoft's powerful calculation engines directly into their own desktop or online software. This offers flexibility and customization, preventing customers from needing to develop such complex engines in-house.",
    ]
  },
  {
    id: 5,
    title: " Focus on Efficiency and Business Transformation",
    icon: Lightbulb,
    color: {
      bg: 'bg-pink-800',
      border: 'border-pink-700'
    },
    description: "Their overarching mission is to ' Discover our Software, Save Time & transform your business'. Their solutions are explicitly 'aimed at streamlining equipment and component design & selection' to help both technical and sales departments. AI is integrated into software, with specific plans for future AI integration within the software solutions.",
    image: USP5,
    points: ["Data governance in the era of generative artificial intelligence",
        "The AI Tour",
        "We are exploring the implications of AI, particularly generative AI, and its role in digital models and data governance. Therefore, while CST TermoSoft is engaging with the concept of AI through their blog, the sources do not provide specific information on how AI can be or is being integrated into their software products."
    ]
  },
  {
    id: 6,
    title: "Commitment to AI & Data Governance",
    icon: SlidersHorizontal,
    color: {
      bg: 'bg-orange-800',
      border: 'border-orange-700'
    },
    description: "Another card to test the horizontal scroll functionality and the new clicking feature.",
    image: USP5,
    points: []
  },

];

const USPSection: React.FC = () => {
  const [activeModule, setActiveModule] = useState<number | null>(0);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        
            How Our Selling Proposition Is Different ? 
          </h2>
           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          CST ThermoSoft's software solutions' Unique Selling Propositions (USPs) are rooted in its deep expertise, comprehensive software offerings, customer-centric approach, and commitment to innovation within the heat transfer industry.
            
          </p>
        </div>

        {/* Desktop Horizontal Accordion */}
        <div className="hidden lg:flex flex-row bg-[#111314] rounded-[35px] overflow-hidden min-h-[65vh]">
          {cardsData.map((module, index) => (
            <div
              key={module.id}
              className={`flex transition-all duration-700 ease-in-out ${
                activeModule === index ? 'flex-[12]' : 'flex-[1] cursor-pointer'
              }`}
              onClick={() => setActiveModule(index)}
            >
              {activeModule === index ? (
                <div
                  className={`${module.color.bg} rounded-[35px] p-10 flex-1 flex flex-col justify-center`}
                >
                  <div className="inline-flex items-center gap-3 mb-4">
                    <div className="bg-white/20 text-white w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <module.icon className="w-6 h-6" />
                    </div>
                    <p className="text-sm md:text-base font-mono text-gray-300">
                      USP {index+1}
                    </p>
                  </div>
                  <div className="flex flex-row items-center gap-8">
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold text-white my-2">
                        {module.title}
                      </h3>
                        <p className="text-white mt-5 italic leading-relaxed">
                    {module.description}
                  </p>
                  {module.points && module.points.length > 0 && (
                    <ul className="text-white font-semibold list-disc pl-6 mt-4 italic space-y-2">
                      {module.points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  )}
                    </div>
                    <div className="w-2/5 flex-none self-center">
                      <img
                       src={module.image} 
                      alt={module.title} 
                        className="w-full h-auto rounded-[15px] object-cover aspect-square"
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  className={`bg-[#111314] text-white w-full h-full flex items-center justify-center
                    ${index > (activeModule ?? 0) ? `border-l-2 ${module.color.border}` : `border-r-2 ${module.color.border}`}
                  `}
                >
                  <span className="transform -rotate-90 whitespace-nowrap font-mono  tracking-widest font-extrabold text-xl sm:text-sm">
                     {index+1} 
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Vertical Accordion */}
        <div className="lg:hidden space-y-4">
          {cardsData.map((item, index) => {
            const isOpen = activeModule === index;
            return (
              <div key={item.id} className={`rounded-xl border shadow-sm overflow-hidden transition-all duration-300 ${isOpen ? `${item.color.bg} text-white ${item.color.border}` : 'bg-white border-gray-200'}`}>
                <button
                  onClick={() => setActiveModule(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left focus:outline-none"
                >
                  <div className={`flex items-center gap-4 ${isOpen ? 'text-white' : 'text-gray-900'}`}>
                    <div className={`text-white w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${isOpen ? 'scale-110 bg-white/20' : item.color.bg}`}>
                      <item.icon className="w-5 h-5" />
                    </div>
                    <span className="text-base sm:text-lg font-semibold ">{item.title}</span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden px-6 pb-5 pt-2">
                    <img
                      src={item.image}
                      alt={`Pain Point ${index+1} visual`}
                      className="w-full h-auto rounded-lg object-cover mb-4"
                    />
                    <p className={`${isOpen ? 'text-gray-200' : 'text-gray-700'} leading-relaxed`}>
                      {item.description}
                    </p>
                    {item.points && item.points.length > 0 && (
                      <ul className={`${isOpen ? 'text-white' : 'text-gray-700'} list-disc pl-6 mt-4 space-y-2`}>
                        {item.points.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default USPSection;