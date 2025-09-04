import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'What is CST Envirotech and how does it help my business?',
    answer:
      'CST Envirotech provides real-time environmental monitoring, automated reporting, and analytics to help organizations reduce emissions, maintain compliance, and make data-driven sustainability decisions.'
  },
  {
    question: 'Do you only support heat exchanger manufacturers ?',
    answer:
      'No. Along with heat exchanger manufacturers, we also work with HVAC equipment manufacturers, including those producing chillers, heat pumps, air handling units (AHUs), fan coil units, dry coolers, and more.'
  },
  {
    question: 'Can you assist with AHRI and Eurovent certification ?',
    answer:
      'Yes. With over 25 years of experience, we specialize in guiding manufacturers through AHRI and Eurovent certification processes for coils and AHUs.'
  },
  {
    question: 'What are the benefits of certification?',
    answer:
      'Certification ensures compliance with international standards, improves product credibility, enhances market acceptance, and builds trust with customers worldwide.'
  },
  {
    question: 'How do you ensure sustainability? ',
    answer:
      'We prioritize environmentally friendly refrigerants and advanced technologies to help manufacturers reduce environmental impact while maintaining performance and efficiency.'
  },
  {
    question: 'What makes your company different from other software providers?',
    answer:
      'We are an experienced, independent, and unique software house that combines programming and AI expertise with dedicated thermal engineering knowledge. This allows us to deliver tailored solutions for complex thermodynamic challenges—ranging from custom software and calculation engines to data analysis and technical training. With over 500 customers in 70+ countries, we are recognized as a global benchmark for innovation and accuracy.'
  }
];

const FAQs: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <section id="faqs" className="bg-white py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#274F71]">Frequently Asked Questions</h2>
          <p className="mt-3 text-gray-600">Answers to common questions about our platform, security, and integrations.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            const contentId = `faq-content-${idx}`;
            const buttonId = `faq-button-${idx}`;
            return (
              <div key={idx} className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
                <h3>
                  <button
                    id={buttonId}
                    aria-controls={contentId}
                    aria-expanded={isOpen}
                    onClick={() => toggle(idx)}
                    className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  >
                    <span className="text-base sm:text-lg font-semibold text-gray-900">{item.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : 'rotate-0'
                      }`}
                    />
                  </button>
                </h3>
                <div
                  id={contentId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 pb-5 text-gray-700 leading-relaxed">
                      {item.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
