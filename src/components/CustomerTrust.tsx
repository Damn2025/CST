import React, { useEffect, useRef } from 'react';
import { Star, Quote } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CustomerTrust: React.FC = () => {
  const trustRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate logos
      gsap.from('.company-logo', {
        scrollTrigger: {
          trigger: '.company-logos-container',
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 30,
        stagger: 0.1,
        ease: 'power3.out',
      });

      // Animate testimonial cards individually
      const testimonials = gsap.utils.toArray('.testimonial-card');
      testimonials.forEach((card) => {
        gsap.from(card as gsap.TweenTarget, {
          scrollTrigger: {
            trigger: card as gsap.DOMTarget,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
          opacity: 0,
          y: 50,
          duration: 0.8,
          ease: 'power3.out',
        });
      });

      // Animate CTA box
      gsap.from('.cta-box', {
        scrollTrigger: {
          trigger: '.cta-box',
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        scale: 0.9,
        ease: 'power3.out'
      });
    }, trustRef);

    return () => ctx.revert();
  }, []);

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Environmental Director',
      company: 'GreenTech Industries',
      content: 'CST Envirotech has transformed how we approach environmental compliance. The real-time monitoring and automated reporting have saved us countless hours.',
      rating: 5
    },
    {
      name: 'Michael Rodriguez',
      role: 'Sustainability Manager',
      company: 'EcoManufacturing Corp',
      content: 'The predictive analytics feature helped us prevent a major environmental incident. The ROI has been incredible.',
      rating: 5
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Research Lead',
      company: 'Environmental Solutions Ltd',
      content: 'Outstanding platform with exceptional support. The data insights have been invaluable for our research projects.',
      rating: 5
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50" ref={trustRef}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join hundreds of organizations that rely on CST Envirotech for their environmental monitoring needs
          </p>
        </div>

        {/* Company Logos */}
        <div className="company-logos-container mb-16">
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="company-logo bg-gray-200 rounded-lg px-8 py-4 text-gray-600 font-semibold">EcoTech Solutions</div>
            <div className="company-logo bg-gray-200 rounded-lg px-8 py-4 text-gray-600 font-semibold">GreenCorp</div>
            <div className="company-logo bg-gray-200 rounded-lg px-8 py-4 text-gray-600 font-semibold">SustainableTech</div>
            <div className="company-logo bg-gray-200 rounded-lg px-8 py-4 text-gray-600 font-semibold">EnviroWorks</div>
            <div className="company-logo bg-gray-200 rounded-lg px-8 py-4 text-gray-600 font-semibold">CleanAir Inc</div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 relative"
            >
              <Quote className="w-8 h-8 text-[#274F71] mb-4" />
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <div>
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-sm text-gray-600">{testimonial.role}</div>
                <div className="text-sm text-[#274F71] font-medium">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="cta-box bg-blue-50 rounded-2xl p-8 border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
            <p className="text-gray-600 mb-6">Join the growing community of organizations using CST Envirotech</p>
            <div className="flex justify-center gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-[#274F71]">500+</div>
                <div className="text-gray-600">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#274F71]">98%</div>
                <div className="text-gray-600">Satisfaction Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#274F71]">50+</div>
                <div className="text-gray-600">Countries Served</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerTrust;