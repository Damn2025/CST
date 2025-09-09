import React, { useEffect, useRef } from 'react';
import { SlidersHorizontal, Cpu, Zap } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SoftwareExplanation: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.explanation-title', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'power3.out',
      });

      const cards = gsap.utils.toArray('.explanation-card');
      cards.forEach((card) => {
        gsap.from(card as gsap.TweenTarget, {
          scrollTrigger: {
            trigger: card as gsap.DOMTarget,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          opacity: 0,
          y: 50,
          duration: 0.6,
          ease: 'power3.out',
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const explanationPoints = [
    {
      icon: SlidersHorizontal,
      title: 'Comprehensive Design & Selection',
      description: 'Our software provides a complete suite of tools for designing, rating, and selecting a wide range of heat exchangers and HVAC equipment, from finned pack coils to complex cooling towers.',
    },
    {
      icon: Cpu,
      title: 'Advanced Thermodynamic Engine',
      description: 'Powered by a dedicated thermodynamics engineering team, our software performs complex thermal and fluid dynamic calculations with high accuracy, enabling sophisticated simulations.',
    },
    {
      icon: Zap,
      title: 'Streamlined Business Processes',
      description: 'Automate production documentation, empower customers with selection tools, and integrate our calculation engines into your systems to save time and transform your business operations.',
    },
  ];

  return (
    <section ref={sectionRef} className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="explanation-title text-4xl sm:text-5xl font-bold text-gray-900 mb-6">What is CST ThermoSoft?</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            CST ThermoSoft is an advanced, AI-driven software suite engineered for the heat transfer industry. It offers a powerful and precise platform for the design, selection, and simulation of thermal equipment, helping businesses streamline operations, enhance accuracy, and drive innovation.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {explanationPoints.map((point, index) => (
            <div key={index} className="explanation-card bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center">
              <div className="flex justify-center mb-6">
                <div className="bg-[#274F71] text-white w-16 h-16 rounded-full flex items-center justify-center"><point.icon className="w-8 h-8" /></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{point.title}</h3>
              <p className="text-gray-600 leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoftwareExplanation;