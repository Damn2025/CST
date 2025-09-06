import React, { useState } from 'react';
import Pain1 from '../assets/Pains/Pain1.png'
import { SlidersHorizontal, Users, FileText, Cpu, Puzzle, Award, Droplets, Lightbulb, Clock, ChevronDown } from 'lucide-react';

const painPointsData = [
  {
    id: 1,
    number: '01',
    title: 'Inefficient and Complex Equipment and Component Design & Selection',
    content: "Our software streamlines the design and selection for a vast array of equipment, from heat exchangers to cooling towers. Specialized tools simplify complex daily calculations for coils and shell & tube exchangers, ensuring optimal selection of evaporators, dry coolers, and more.",
    imageUrl: Pain1,
    icon: SlidersHorizontal,
  },
  {
    id: 2,
    number: '02',
    title: 'Challenges in Providing Customer Selection Tools',
    content: 'We provide an intuitive and accessible tool that empowers your customers to select the right coils independently, enhancing their experience and reducing the workload on your sales and engineering teams.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    icon: Users,
  },
  {
    id: 3,
    number: '03',
    title: 'Difficulties in Production Documentation',
    content: 'Our software automates the creation of essential production documents, including circuitry designs and metal sheet drawings, which streamlines manufacturing and minimizes errors.',
    imageUrl: 'https://images.unsplash.com/photo-1559028006-44a3a4f364df?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    icon: FileText,
  },
  {
    id: 4,
    number: '04',
    title: 'Complexity of Thermal and Fluid Dynamic Calculations',
    content: 'Backed by our Thermodynamics Engineering team, our software provides cutting-edge solutions for complex calculations. It enables detailed simulations of chillers, heat pumps, and special refrigerant cycles, turning complexity into clarity.',
    imageUrl: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    icon: Cpu,
  },
   {
    id: 5,
    number: '05',
    title: 'Integration of Calculation Engines into Existing Systems',
    content: "Seamlessly integrate our powerful coils calculation engine into your existing desktop or online software. This eliminates the need for costly and time-consuming in-house development, leveraging our expertise directly within your ecosystem.",
    imageUrl: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    icon: Puzzle,
  },
  {
    id: 6,
    number: '06',
    title: 'Meeting Industry Certifications (AHRI/Eurovent)',
    content: "With over 25 years of experience, we provide expert support to help you navigate the significant hurdles of AHRI/Eurovent certification for coils and AHUs, ensuring your products meet international standards.",
    imageUrl: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    icon: Award,
  },
  {
    id: 7,
    number: '07',
    title: 'Keeping Up with New Refrigerants and Environmental Regulations',
    content: "Stay ahead of evolving environmental standards with our commitment to implementing the latest REFPROP 10 library. Our software supports modern, eco-conscious refrigerants like R32, R454B, Propane, and CO2, simplifying regulatory compliance.",
    imageUrl: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    icon: Droplets,
  },
  {
    id: 8,
    number: '08',
    title: 'Need for Innovation in Heat Exchanger Design',
    content: "Address the constant need for product development with INNOSuite, our specialized software designed to assist in creating innovative heat exchangers and advanced thermal solutions.",
    imageUrl: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    icon: Lightbulb,
  },
  {
    id: 9,
    number: '09',
    title: 'Time and Cost Management',
    content: "Our core mission is to 'Save Time & transform your business.' By streamlining design, selection, and certification, our software directly addresses the high costs and time sinks of traditional methods, boosting your overall efficiency.",
    imageUrl: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    icon: Clock,
  },
];

const IndustriesPainSection: React.FC = () => {
  const [activeModule, setActiveModule] = useState<number | null>(0);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Solving Core Industry Challenges
          </h2>
           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            CST ThermoSoft's software solutions address several key pain points for manufacturers operating in the HVAC&R, Energy & Power, Chemical, Pharmaceutical, Food & Beverage, and Automotive sectors. 
          </p>
        </div>

        {/* Desktop Horizontal Accordion */}
        <div className="hidden lg:flex flex-row bg-[#111314] rounded-[35px] overflow-hidden min-h-[65vh]">
          {painPointsData.map((module, index) => (
            <div
              key={module.id}
              className={`flex transition-all duration-700 ease-in-out ${
                activeModule === index ? 'flex-[12]' : 'flex-[1] cursor-pointer'
              }`}
              onClick={() => setActiveModule(index)}
            >
              {activeModule === index ? (
                <div
                  className="bg-[#274F71] rounded-[35px] p-10 flex-1 flex flex-col justify-center"
                >
                  <div className="inline-flex items-center gap-3 mb-4">
                    <div className="bg-white/20 text-white w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <module.icon className="w-6 h-6" />
                    </div>
                    <p className="text-sm md:text-base font-mono text-gray-300">
                      PAIN POINT {module.number}
                    </p>
                  </div>
                  <div className="flex flex-row items-center gap-8">
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold text-white my-2">
                        {module.title}
                      </h3>
                    </div>
                    <div className="w-3/5 flex-none self-center">
                      <img
                        src={module.imageUrl}
                        alt={`Pain Point ${module.number} visual`}
                        className="w-full h-auto rounded-[15px] object-cover aspect-square"
                      />
                    </div>
                  </div>
                  <p className="text-gray-200 mt-5 leading-relaxed">
                    {module.content}
                  </p>
                </div>
              ) : (
                <div
                  className={`bg-[#111314] text-white w-full h-full flex items-center justify-center
                    ${index > (activeModule ?? 0) ? 'border-l-2 border-[#274F71]' : 'border-r-2 border-[#274F71]'}
                  `}
                >
                  <span className="transform -rotate-90 whitespace-nowrap font-mono uppercase tracking-widest text-xs sm:text-sm">
                    Pain Point {module.number}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Vertical Accordion */}
        <div className="lg:hidden space-y-4">
          {painPointsData.map((item, index) => {
            const isOpen = activeModule === index;
            return (
              <div key={item.id} className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden transition-all duration-300">
                <button
                  onClick={() => setActiveModule(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left focus:outline-none"
                >
                  <div className="flex items-center gap-4">
                    <div className={`bg-[#274F71] text-white w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${isOpen ? 'scale-110' : ''}`}>
                      <item.icon className="w-5 h-5" />
                    </div>
                    <span className="text-base sm:text-lg font-semibold text-gray-900">{item.title}</span>
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
                      src={item.imageUrl}
                      alt={`Pain Point ${item.number} visual`}
                      className="w-full h-auto rounded-lg object-cover mb-4"
                    />
                    <p className="text-gray-700 leading-relaxed">
                      {item.content}
                    </p>
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

export default IndustriesPainSection;