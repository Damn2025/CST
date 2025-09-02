import React, { useEffect, useRef } from 'react';
import { Target, Users, Award } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title
      gsap.from('.about-title', {
        scrollTrigger: {
          trigger: '.about-title',
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 50,
        duration: 0.5,
        ease: 'power3.out',
      });

      // Animate each section
      const sections = gsap.utils.toArray('.about-section');
      sections.forEach((section, index) => {
        const content = (section as HTMLElement).querySelector('.about-content');

        // Animate cards from off-screen. Left cards from left, right cards from right.
        // The xPercent determines the starting position relative to the element's own width.
        const contentXPercent = (index % 2 === 0) ? -100 : 100;
  

        gsap.from(content, {
          scrollTrigger: {
            trigger: section as gsap.DOMTarget,
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          },
          opacity: 0,
          xPercent: contentXPercent,
          duration: 0.3,
          ease: 'bounce(0.3)'
        });
      });
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  const aboutItems = [
    {
      Icon: Target,
      title: 'Our Mission',
      description: 'To empower industries with efficient and customized engineering solutions while driving environmental sustainability. By assisting end users in finding the right products and helping manufacturers create equipment that meets industrial demands, we aim to reduce environmental impact and foster a healthier planet for future generations.',
      cardClass: 'bg-gradient-to-br from-white to-blue-100 border-blue-200',
      iconColor: 'text-[#274F71]',
    },
    {
      Icon: Users,
      title: 'Our Team',
      description: 'Our team of experienced environmental engineers and scientists are highly skilled in the areas of air quality, water resources, and hazardous materials management. We use the latest technology and scientific methods to ensure the most effective and efficient solutions for our clients.',
      cardClass: 'bg-gradient-to-br from-white to-pink-100 border-pink-200',
      iconColor: 'text-pink-500',
    },
    {
      Icon: Award,
      title: 'Our Excellence',
      description: 'Industry-recognized expertise with certifications from leading environmental and technology organizations worldwide. We are committed to delivering the highest quality of service and innovation.',
      cardClass: 'bg-gradient-to-br from-white to-orange-100 border-orange-200',
      iconColor: 'text-orange-500',
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto" ref={aboutRef}>
        <div className="about-title text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              About CST Envirotech
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              For over two decades, CST Envirotech has been at the forefront of environmental technology,
              providing cutting-edge software solutions that help organizations monitor, analyze, and optimize
              their environmental impact.
            </p>
          </div>

        <div className="space-y-24">
          {aboutItems.map((item, index) => (
            <div key={item.title} className="about-section grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className={`about-content rounded-2xl p-8 md:p-12 shadow-lg hover:shadow-xl transition-all duration-300 border ${item.cardClass} ${index % 2 !== 0 ? 'lg:col-start-2' : ''}`}>
                <div className='flex items-center justify-center gap-5 mb-4'>
                  <item.Icon className={`w-10 h-10 ${item.iconColor}`} />
                  <h3 className="text-3xl font-bold text-[#274F71] ">{item.title}</h3>
                </div>
                <p className="text-gray-700 text-center text-lg leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;