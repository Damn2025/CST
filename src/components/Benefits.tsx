import React, { useEffect, useRef } from 'react';
import { Shield, BarChart3, Clock, Zap } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Benefits: React.FC = () => {
  const benefitsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.benefit-card');
      cards.forEach((card) => {
        gsap.from(card as gsap.TweenTarget, {
          scrollTrigger: {
            trigger: card as gsap.DOMTarget,
            start: 'top 90%',
            scrub: true,
            toggleActions: 'play none none none',
          },
          opacity: 0,
          y: 50,
          duration: 0.8,
          ease: 'power3.out',
        });
      });
    }, benefitsRef);

    return () => ctx.revert();
  }, []);

  const benefits = [
    {
      icon: Shield,
      title: 'Regulatory Compliance',
      description: 'Stay ahead of environmental regulations with automated compliance monitoring and reporting.',
      tooltip: 'Real-time regulatory updates and automated report generation ensure you never miss a deadline.',
      color: 'blue'
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Transform environmental data into actionable insights with AI-powered analytics.',
      tooltip: 'Machine learning algorithms identify patterns and predict environmental trends before they become issues.',
      color: 'blue'
    },
    {
      icon: Clock,
      title: 'Real-Time Monitoring',
      description: 'Monitor air, water, and soil quality in real-time with instant alerts and notifications.',
      tooltip: 'IoT sensors provide continuous data streams with millisecond response times for critical alerts.',
      color: 'blue'
    },
    {
      icon: Zap,
      title: 'Instant Response',
      description: 'Rapid deployment and immediate response to environmental incidents and changes.',
      tooltip: 'Automated incident response protocols activate within seconds of detection.',
      color: 'blue'
    }
  ];

  const colorClasses = {
    blue: 'bg-blue-100 text-[#274F71] border-blue-200',
  };

  return (
    <section id="benefits" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50" ref={benefitsRef}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Key Benefits
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our environmental technology solutions deliver measurable value to your organization
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="benefit-card relative group bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className={`w-16 h-16 rounded-full ${colorClasses[benefit.color as keyof typeof colorClasses]} border-2 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <benefit.icon className="w-8 h-8" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              
              {/* Tooltip */}
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 -translate-y-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none">
                <div className="bg-gray-900 text-white text-sm rounded-lg px-4 py-2 max-w-xs text-center relative">
                  {benefit.tooltip}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;