import React, { useEffect, useRef, useState } from 'react';

import { Globe, SlidersHorizontal, Factory, Users, Calendar, ShieldCheck } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Features: React.FC = () => {
  const featuresRef = useRef<HTMLDivElement>(null);

  // Add a style block for the 3D perspective and transitions
  const style = `
    .card-container {
      perspective: 800px;
    }
    .card-inner {
      transition: transform 0.4s ease-out;
    }
    .card-container:hover .card-inner {
      transform: rotateX(8deg) rotateY(8deg) scale(1.05);
    }
  `;

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the title with a scrub effect
      gsap.from('.features-title', {
        scrollTrigger: {
          trigger: '.features-title',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
        y: 50,
        opacity: 0,
      });

      // Animate each card individually with a "pop-in" effect
      const cards = gsap.utils.toArray('.feature-card');
      cards.forEach((card) => {
        gsap.from(card as gsap.TweenTarget, {
          scrollTrigger: {
            trigger: card as gsap.DOMTarget,
            start: 'top 90%',
            
            toggleActions: 'play none none reverse',
          },
          opacity: 0,
          y: 60,
          duration: 0.3,
          ease: 'back.out(1.4)',
        });
      });
    }, featuresRef);

    return () => ctx.revert();
  }, []);

  const features = [
    {
      title: 'Web-Based Platform',
      icon: Globe,
      description: 'No installation required. Our platform runs directly in your browser for instant access anywhere.',
      iconBg: 'bg-gradient-to-br from-blue-600 to-blue-700',
      hoverBg: 'from-blue-50 to-gray-100',
      shadowColor: 'hover:shadow-blue-500/30',
    },
    {
      title: 'Dual Calculation Modes',
      icon: SlidersHorizontal,
      description: 'Design from scratch with only thermal data, or specify dimensions for precise rating calculations.',
      iconBg: 'bg-gradient-to-br from-[#661356] to-pink-600',
      hoverBg: 'from-pink-50 to-pink-100',
      shadowColor: 'hover:shadow-pink-500/30',
    },
    {
      title: 'Broad Industry Application',
      icon: Factory,
      description: 'Applicable across diverse sectors including HVAC&R, Chemical, Pharmaceutical, Energy, and Automotive.',
      iconBg: 'bg-gradient-to-br from-red-600 to-orange-500',
      hoverBg: 'from-orange-50 to-orange-100',
      shadowColor: 'hover:shadow-orange-500/30',
    },
    {
      title: 'Global User Base',
      icon: Users,
      description: 'Trusted by over 500 customers in more than 70 countries, establishing a global benchmark for reliability.',
      iconBg: 'bg-gradient-to-br from-yellow-400 to-yellow-600',
      hoverBg: 'from-yellow-50 to-yellow-100',
      shadowColor: 'hover:shadow-yellow-500/30',
    },
    {
      title: 'Flexible Usage Plans',
      icon: Calendar,
      description: 'Choose from a variety of plans to suit your project needs, from 7 days to a full year.',
      iconBg: 'bg-gradient-to-br from-green-200 to-green-500',
      hoverBg: 'from-green-500 to-green-300',
      shadowColor: 'hover:shadow-green-500/30',
    },
    {
      title: 'Proven Reliability',
      icon: ShieldCheck,
      description: 'High accuracy in technical data ensures optimized results for critical engineering projects.',
      iconBg: 'bg-gradient-to-br from-purple-600 to-blue-500',
      hoverBg: 'from-purple-50 to-purple-100',
      shadowColor: 'hover:shadow-purple-500/30',
    }
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50" ref={featuresRef}>
      <style>{style}</style>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="features-title text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Product Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive tools designed to meet the complex needs of thermal engineering professionals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card-container feature-card">
              <div
                className={`card-inner bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl ${feature.shadowColor}`}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-full ${feature.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;