import React, { useEffect, useRef } from 'react';
import { CheckCircle } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import softwareImage from '../assets/softeware.png';

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

      gsap.from('.explanation-content', {
        scrollTrigger: {
          trigger: '.explanation-content',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        x: -50,
        duration: 0.8,
        ease: 'power3.out',
      });

      gsap.from('.explanation-image', {
        scrollTrigger: {
          trigger: '.explanation-image',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        x: 50,
        scale: 0.95,
        duration: 0.8,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side: Content */}
          <div className="explanation-content">
            <h2 className="explanation-title text-4xl sm:text-5xl font-bold text-gray-900 mb-6">What is CST ThermoSoft?</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              CST ThermoSoft is an advanced, AI-driven software suite engineered for the heat transfer industry. It offers a powerful and precise platform for the design, selection, and simulation of thermal equipment, helping businesses streamline operations, enhance accuracy, and drive innovation.
            </p>
            <ul className="space-y-5">
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-pink-500 mr-4 mt-1 flex-shrink-0" />
                  <span className="text-gray-800 text-lg"><strong className="font-semibold">No Installation Required:</strong> Just enter the webpage, log in, and start calculating.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-pink-500 mr-4 mt-1 flex-shrink-0" />
                  <span className="text-gray-800 text-lg"><strong className="font-semibold">Two Powerful Modes:</strong> Specify all exchanger dimensional data to calculate, or design from scratch with only thermal data—no dimensions required.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-pink-500 mr-4 mt-1 flex-shrink-0" />
                  <span className="text-gray-800 text-lg"><strong className="font-semibold">Use It When You Need It:</strong> Flexible plans available for 7 days, 15 days, or 1 year.</span>
                </li>
              </ul>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a
                  href="/plans"
                  className="inline-block text-center bg-pink-600 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-pink-700 hover:shadow-lg hover:scale-105"
                >
                  Explore Our Plans
                </a>
                <a
                  href="/signup"
                  className="inline-block text-center bg-gray-200 text-gray-800 px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-gray-300 hover:shadow-lg hover:scale-105"
                >
                  Sign Up for a Free Trial
                </a>
              </div>
          </div>

          {/* Right Side: Image */}
          <div className="explanation-image">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-pink-400 to-blue-500 rounded-2xl opacity-20 blur-2xl"></div>
              <div className="relative bg-white p-4 rounded-2xl shadow-2xl">
                <img src={softwareImage} alt="CST ThermoSoft Software Interface" className="rounded-xl w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoftwareExplanation;