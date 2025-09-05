import React, { useEffect, useRef } from 'react';
import { ArrowRight, ShieldCheck, Headset, Globe, Sparkles } from 'lucide-react';
import Navigation from './Navigation';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import Backvideo from '../assets/Hvac.mp4';

gsap.registerPlugin(ScrollTrigger);

interface HeroProps {
  onContactClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (h1Ref.current) {
        // Split the text into individual characters
        const split = new SplitType(h1Ref.current, { types: 'chars' });
        const chars = split.chars;

        // Set initial state (all characters invisible)
        gsap.set(chars, { opacity: 0 });

        // Create the looping animation
        gsap.to(chars, {
          opacity: 1,
          stagger: 0.05, // Time between each character appearing
          duration: 0.1,
          ease: 'none',
          repeat: -1, // Loop indefinitely
          repeatDelay: 0.5, // Wait 2 seconds before repeating
        });
      }

      // You can add other non-looping animations here if needed

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-2 sm:px-4 md:px-6 lg:px-8">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none z-10"
        src={Backvideo}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#274F71]/100 to-gray-900/90 z-0"></div>
      <Navigation onContactClick={onContactClick} />
      <div className="w-full mx-auto relative z-10 pt-20 pb-10 md:pt-24 md:pb-12 lg:pt-0 lg:pb-0" ref={heroRef}>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-12">
          <div className="hero-content-left w-full text-center">
            <div className=" animate-float inline-flex items-center gap-2 text-sm border border-white/50 text-white/90 rounded-full px-4 py-1 mb-4 backdrop-blur-sm  text-transparent bg-clip-text bg-gradient-to-l from-pink-500 via-orange-500 to-blue-500 text-base">
              <Sparkles className="w-4 h-4 text-blue-300" />
              The Leading AI-Powered
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 md:mb-5 leading-tight uppercase">
              Heat Transfer and <br className="sm:hidden" /> Thermal Analysis
              <br />
              <span ref={h1Ref} className='font-Inter text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold leading-tight uppercase text-transparent bg-clip-text bg-gradient-to-l from-pink-500 via-orange-500 to-blue-500'>AI-Powered</span>
              <span> SOFTWARE</span>
            </h1>
            <p className="text-base xs:text-lg sm:text-xl text-center text-gray-300 mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed">
              Advanced software solutions for environmental monitoring, compliance, and sustainability. 
              Transform your data into actionable insights with CST Envirotech.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center">
              <button
                onClick={onContactClick}
                className="group bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center gap-2"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
            <div className="mt-8 md:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 max-w-md mx-auto sm:max-w-3xl lg:max-w-4xl">
              <div className="text-center animate-float p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white shadow-lg">
                <Globe className="w-8 h-8 mx-auto mb-2 text-white font-bold" />
                <div className="text-xl md:text-3xl font-bold text-white mb-2">Sustainability</div>
                <div className="text-gray-300 text-sm md:text-base">Reduce environmental impact for a healthier planet</div>
              </div>
              <div className="text-center animate-float p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white shadow-lg" style={{animationDelay: '0.2s'}}>
                <ShieldCheck className="w-8 h-8 mx-auto mb-2 text-white font-bold" />
                <div className="text-xl md:text-3xl font-bold text-white mb-2">Customization</div>
                <div className="text-gray-300 text-sm md:text-base">Tailored solutions for industry-specific challenges.</div>
              </div>
              <div className="text-center animate-float p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white shadow-lg" style={{animationDelay: '0.4s'}}>
                <Headset className="w-8 h-8 mx-auto mb-2 text-white font-bold" />
                <div className="text-xl md:text-3xl font-bold text-white mb-2">Expert Team</div>
                <div className="text-gray-300 text-sm md:text-base">Environmental engineers & scientists with proven expertise.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;