import React, { useEffect, useRef } from 'react';
import { Factory, Building, Droplets, TreePine, Truck, Wrench } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Industries: React.FC = () => {
  const industriesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.industry-card');
      cards.forEach((card) => {
        gsap.from(card as gsap.TweenTarget, {
          scrollTrigger: {
            trigger: card as gsap.DOMTarget,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
          opacity: 0,
          y: 60,
          duration: 0.8,
          ease: 'back.out(1.4)',
        });
      });
    }, industriesRef);

    return () => ctx.revert();
  }, []);

  const industries = [
    {
      icon: Factory,
      title: 'Manufacturing',
      description: 'Monitor emissions, waste streams, and energy consumption in real-time'
    },
    {
      icon: Building,
      title: 'Commercial Buildings',
      description: 'Optimize HVAC systems and indoor air quality for occupant health'
    },
    {
      icon: Droplets,
      title: 'Water Treatment',
      description: 'Track water quality parameters and treatment process efficiency'
    },
    {
      icon: TreePine,
      title: 'Forestry & Agriculture',
      description: 'Monitor soil health, pest management, and crop optimization'
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="industry-card group bg-gradient-to-br from-white to-gray-50 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
            >
                <div className="bg-[#274F71] w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <industry.icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">{industry.title}</h3>
                <p className="text-gray-600 leading-relaxed">{industry.description}</p>
              </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;