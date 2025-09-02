import React, { useEffect, useRef } from 'react';
import { ArrowRight, ShieldCheck, Headset, Globe, Sparkles } from 'lucide-react';
import Navigation from './Navigation';
import CSTvideo from '../assets/CSTvideo.mp4';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Backvideo from '../assets/Hvac.mp4';

gsap.registerPlugin(ScrollTrigger);

interface HeroProps {
  onContactClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: 'power3.out', duration: 1.2 }
      });

      tl.from('.hero-content-left', {
        xPercent: -50,
        scrub: true,
        opacity: 0,
        delay: 0.3
      })
      .from('.hero-video-right', {
        xPercent: 50,
        scrub: true,
        opacity: 0,
      }, '<'); // Starts at the same time as the previous animation

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
      <div className="w-full mx-auto relative z-10  pt-2 pb-10 md:pt-24 md:pb-12 lg:pt-0 lg:pb-0 sm:mt-10 " ref={heroRef}>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-12">
          <div className="hero-content-left w-full lg:w-1/2 text-center lg:text-center">
            <div className="inline-flex items-center gap-2 text-sm border border-white/50 text-white/90 rounded-full px-4 py-1 mb-4 backdrop-blur-sm  text-transparent bg-clip-text bg-gradient-to-l from-pink-500 via-orange-500 to-blue-500 text-base">
              <Sparkles className="w-4 h-4 text-blue-300" />
              The Leading AI-Powered
            </div>
            <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-5 leading-tight uppercase">
              Heat Transfer and Thermal Analysis Software
            </h1>
            <p className="text-base xs:text-lg sm:text-xl text-center text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed">
              Advanced software solutions for environmental monitoring, compliance, and sustainability. 
              Transform your data into actionable insights with CST Envirotech.
            </p>
            <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 items-center justify-center">
              <button
                onClick={onContactClick}
                className="group bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center gap-2"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
            <div className="mt-8 md:mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-md mx-auto lg:max-w-none lg:mx-0">
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
          {/* <div className="hero-video-right w-full lg:w-1/2 mt-12 lg:mt-0 relative lg:h-[500px] flex items-center justify-center">
            <video
              autoPlay
              loop
              muted
              className="rounded-2xl shadow-2xl w-full h-full object-cover"
              src={CSTvideo}
            />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;