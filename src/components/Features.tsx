import React, { useEffect, useRef } from 'react';
import { Cloud, Globe, Shield, Smartphone, AlertTriangle, TrendingUp } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Features: React.FC = () => {
  const featuresRef = useRef<HTMLDivElement>(null);

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
      icon: Cloud,
      title: 'Cloud-Based Platform',
      description: 'Secure, scalable cloud infrastructure with 99.9% uptime guarantee',
       iconBg: 'bg-[#274F71]',
      hoverBg: 'from-blue-50 to-gray-100',
    },
    {
      icon: Globe,
      title: 'Global Monitoring',
      description: 'Monitor multiple locations worldwide from a single dashboard',
       iconBg: 'bg-pink-500',
      hoverBg: 'from-pink-50 to-pink-100',
    },
    {
      icon: Shield,
      title: 'Data Security',
      description: 'Enterprise-grade security with end-to-end encryption and compliance',
       iconBg: 'bg-orange-500',
      hoverBg: 'from-orange-50 to-orange-100',
    },
    {
      icon: Smartphone,
      title: 'Mobile Access',
      description: 'Access your data anywhere with our responsive mobile application',
       iconBg: 'bg-blue-500',
      hoverBg: 'from-blue-50 to-blue-100',
    },
    {
      icon: AlertTriangle,
      title: 'Smart Alerts',
      description: 'AI-powered alerts that learn from your patterns and reduce false positives',
       iconBg: 'bg-green-500',
      hoverBg: 'from-green-50 to-green-100',
    },
    {
      icon: TrendingUp,
      title: 'Predictive Analytics',
      description: 'Forecast environmental trends and potential issues before they occur',
       iconBg: 'bg-yellow-500',
      hoverBg: 'from-yellow-50 to-yellow-100',
    }
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50" ref={featuresRef}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="features-title text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Product Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive tools designed to meet the complex needs of environmental professionals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`feature-card  bg-white hover:bg-gradient-to-br ${feature.hoverBg}  rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 group`}
            >
              <div className={`${feature.iconBg} w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
            
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;