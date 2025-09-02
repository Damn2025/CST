import React, { useEffect, useRef } from 'react';
import { Database, Settings, BarChart, CheckCircle } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HowItWorks: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the cards individually
      const cards = gsap.utils.toArray('.step-card');
      cards.forEach((card) => {
        gsap.from(card as gsap.TweenTarget, {
          scrollTrigger: {
            trigger: card as gsap.DOMTarget,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
          opacity: 0,
          y: 100,
          duration: 0.8,
          ease: 'power3.out',
        });
      });

      // Animate the connecting line
      gsap.from('.connection-line', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          end: 'top 40%',
          scrub: 1,
        },
        scaleX: 0,
        transformOrigin: 'left center',
        ease: 'none',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const steps = [
    {
      icon: Database,
      title: 'Data Collection',
      description: 'Connect your sensors and data sources for comprehensive environmental monitoring',
      iconBg: 'bg-[#274F71]',
      hoverBg: 'from-blue-50 to-gray-100',
      numberBg: 'bg-gray-900',
    },
    {
      icon: Settings,
      title: 'Configure & Customize',
      description: 'Set up alerts, thresholds, and compliance parameters tailored to your needs',
      iconBg: 'bg-pink-500',
      hoverBg: 'from-pink-50 to-pink-100',
      numberBg: 'bg-pink-600',
    },
    {
      icon: BarChart,
      title: 'Analyze & Visualize',
      description: 'View real-time dashboards and generate detailed reports with AI insights',
      iconBg: 'bg-orange-500',
      hoverBg: 'from-orange-50 to-orange-100',
      numberBg: 'bg-orange-600',
    },
    {
      icon: CheckCircle,
      title: 'Act & Optimize',
      description: 'Receive automated recommendations and take action to improve performance',
      iconBg: 'bg-blue-500',
      hoverBg: 'from-blue-50 to-blue-100',
      numberBg: 'bg-blue-600',
    }
  ];

  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our streamlined process gets you from setup to insights in just four simple steps
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="connection-line hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-300 via-pink-300 to-orange-300 transform -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="step-card relative bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="relative z-10">
                  <div className={`${step.iconBg} w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className={`absolute -top-2 -right-2 ${step.numberBg} text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold`}>
                    {index + 1}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
                
                {/* Decorative element */}
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${step.hoverBg} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;