import React, { useState, useRef, useEffect } from 'react';
import { Check, Star, ArrowLeft } from 'lucide-react';
import SimpleNavigation from './SimpleNavigation';
import SignupPromptModal from './SignupPromptModal';
import { useNavigate } from 'react-router-dom';

interface PlansProps {
  onContactClick: () => void;
}

const plans = [
  {
    name: 'Trial',
    duration: '7 Days',
    price: 'Free',
    priceDetails: 'for a week',
    description:
      'Explore our platform risk-free. Get access to core features to validate your workflow and see how CST can accelerate your analysis.',
    perks: [
      'Quick start templates',
      'Community & email support',
      'Starter analytics pack',
      'Guided onboarding checklist',
    ],
    features: [
      'Access to all basic features',
      'Limited to 5 projects',
      'Email support',
      'Standard analytics',
    ],
    buttonText: 'Start Free Trial',
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-900',
    buttonColor: 'bg-blue-600 hover:bg-blue-700 text-white',
    borderColor: 'border-blue-200',
    isDark: false,
  },
  {
    name: 'Short Term',
    duration: '15 Days',
    price: '$49',
    priceDetails: 'billed once',
    description:
      'Designed for short cycles, proofs-of-concept, or urgent sprints. Get more capacity and faster support response times.',
    perks: [
      'Priority email support',
      'Extended project limits',
      'Advanced analytics starter',
      'Export & reporting tools',
    ],
    features: [
      'Access to all basic features',
      'Up to 20 projects',
      'Priority email support',
      'Advanced analytics',
    ],
    buttonText: 'Choose Plan',
    bgColor: 'bg-orange-50',
    textColor: 'text-orange-900',
    buttonColor: 'bg-orange-500 hover:bg-orange-600 text-white',
    borderColor: 'border-orange-200',
    isDark: false,
  },
  {
    name: 'Semi-Annual',
    duration: '6 Months',
    price: '$249',
    priceDetails: 'billed every 6 months',
    description:
      'The best balance of value and flexibility. Ideal for teams scaling their analysis workloads with collaboration needs.',
    perks: [
      'Team collaboration tools',
      '24/7 priority support',
      'Predictive analytics suite',
      'Role-based access control',
    ],
    features: [
      'Access to all pro features',
      'Unlimited projects',
      '24/7 phone & email support',
      'Predictive analytics',
      'Team collaboration tools',
    ],
    buttonText: 'Choose Plan',
    bgColor: 'bg-[#274F71]',
    textColor: 'text-white',
    buttonColor: 'bg-white hover:bg-gray-200 text-[#274F71]',
    borderColor: 'border-blue-400',
    isDark: true,
    popular: true,
  },
  {
    name: 'Annual',
    duration: '1 Year',
    price: '$499',
    priceDetails: 'billed annually',
    description:
      'For organizations committed to continuous optimization. Get dedicated support and enterprise-grade capabilities.',
    perks: [
      'Dedicated account manager',
      'Custom onboarding program',
      'API access & integrations',
      'Quarterly strategy reviews',
    ],
    features: [
      'All features from Semi-Annual',
      'Dedicated account manager',
      'API access for integration',
      'Custom onboarding',
    ],
    buttonText: 'Choose Plan',
    bgColor: 'bg-pink-50',
    textColor: 'text-pink-900',
    buttonColor: 'bg-pink-500 hover:bg-pink-600 text-white',
    borderColor: 'border-pink-200',
    isDark: false,
  },
  {
    name: 'Lifetime',
    duration: 'Unlimited',
    price: '$1,999',
    priceDetails: 'one-time payment',
    description:
      'One purchase, unlimited access. Own the full suite forever with VIP priority and early feature access.',
    perks: [
      'Lifetime updates',
      'VIP support queue',
      'Beta features access',
      'Long-term cost savings',
    ],
    features: [
      'All features, forever',
      'Lifetime updates',
      'VIP support queue',
      'Access to beta features',
    ],
    buttonText: 'Get Lifetime Access',
    bgColor: 'bg-gray-900',
    textColor: 'text-white',
    buttonColor: 'bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white',
    borderColor: 'border-orange-500',
    isDark: true,
  },
];

const Plans: React.FC<PlansProps> = ({ onContactClick }) => {
  const [selectedPlan, setSelectedPlan] = useState<string>('');
  const planRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (selectedPlan) {
      const selectedIndex = plans.findIndex((p) => p.name === selectedPlan);
      if (selectedIndex !== -1 && planRefs.current[selectedIndex]) {
        planRefs.current[selectedIndex]?.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }
    }
  }, [selectedPlan]);

  const handleChoosePlan = (planName: string) => {
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    if (isAuthenticated) {
      const selectedPlanData = plans.find(p => p.name === planName);
      navigate('/payment', { state: { plan: selectedPlanData } });
    } else {
      setIsSignupModalOpen(true);
    }
  };

  return (
    <>
      <style>{`
      @keyframes slideInFromLeft {
        0% { transform: translateX(-100%); opacity: 0; }
        100% { transform: translateX(0); opacity: 1; }
      }
      .animate-slide-in { animation: slideInFromLeft 0.5s ease-out forwards; }
    `}</style>
      <SignupPromptModal isOpen={isSignupModalOpen} onClose={() => setIsSignupModalOpen(false)} />
      <SimpleNavigation onContactClick={onContactClick} />
      <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8 pt-28">
        <div className="max-w-full mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
              Flexible Plans for Every Need
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect plan to unlock powerful thermal analysis tools and transform your business.
            </p>
          </div>

          {/* Plan selector buttons */}
          <div className="flex justify-center items-center flex-wrap gap-3 mb-10">
            <button
              onClick={() => setSelectedPlan('')}
              className={`px-6 py-3 rounded-full text-base font-semibold transition-all duration-300 ${
                !selectedPlan
                  ? `bg-gray-800 text-white shadow-lg scale-105`
                  : 'bg-white hover:bg-gray-200 text-gray-700 border border-gray-200'
              }`}
            >
              All Plans
            </button>
            {plans.map((plan, index) => (
              <button
                key={plan.name}
                onClick={() => setSelectedPlan(plan.name)}
              className={`px-6 py-3 rounded-full text-base font-semibold transition-all duration-300 ${
                  selectedPlan === plan.name
                    ? `${plan.bgColor} ${plan.textColor} shadow-lg scale-105 border-2 ${plan.borderColor}`
                    : 'bg-white hover:bg-gray-200 text-gray-700 border border-gray-200'
                }`}
              >
                {plan.name}
              </button>
            ))}
          </div>

          {/* Selected plan full-width card with left-to-right animation */}
          {selectedPlan ? (
            <div key={selectedPlan} className="w-full flex justify-center">
              {plans
                .filter((p) => p.name === selectedPlan)
                .map((plan, index) => (
                  <div
                    ref={(el) => (planRefs.current[index] = el)}
                    key={plan.name}
                    className={`relative rounded-2xl shadow-xl border-2 overflow-hidden w-full max-w-4xl ${
                      plan.borderColor 
                    } ${plan.bgColor}`}
                  >
                   

                    {/* Back */}
                    <div className="flex items-center justify-between px-6 sm:px-10 pt-6">
                      <button
                        onClick={() => setSelectedPlan('')}
                        className={`inline-flex items-center gap-2 text-sm font-semibold rounded-md px-3 py-2 border transition-colors ${
                          plan.isDark
                            ? 'text-white border-white/30 hover:bg-white/10'
                            : 'text-gray-700 border-gray-300 hover:bg-gray-100'
                        }`}
                        aria-label="Back to all plans"
                      >
                        <ArrowLeft className="w-4 h-4" /> Back
                      </button>
                    </div>

                    {/* Content */}
                    <div className="px-4 sm:px-10 pb-10 pt-4">
                      {/* Header */}
                      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 border-b border-gray-200/60 pb-6">
                        <div>
                          <h2 className={`text-3xl font-extrabold ${plan.textColor}`}>{plan.name}</h2>
                          <p className={`${plan.textColor} opacity-80 mt-1`}>{plan.duration}</p>
                        </div>
                        <div className="md:text-right">
                          <div className={`text-5xl font-extrabold leading-none ${plan.textColor}`}>{plan.price}</div>
                          <div className={`${plan.textColor} opacity-70 mt-1`}>{plan.priceDetails}</div>
                        </div>
                      </div>

                      {/* Two-column detail */}
                      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Left: Description + main features */}
                        <div className="md:col-span-2">
                          <p className={`${plan.textColor} ${plan.isDark ? 'opacity-90' : 'text-opacity-80'} text-lg mb-6`}>
                            {plan.description}
                          </p>
                          <h3 className={`text-lg font-semibold mb-3 ${plan.textColor}`}>Core Features</h3>
                          <ul className="space-y-3">
                            {plan.features.map((feature, i) => (
                              <li key={i} className={`flex items-start ${plan.textColor}`}>
                                <Check className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Right: Perks / extras */}
                        <div>
                          <div className={`rounded-xl p-5 border ${plan.isDark ? 'bg-white/10 border-white/20' : 'bg-white border-gray-200'} backdrop-blur-sm`}>
                            <h3 className={`text-lg font-semibold mb-3 ${plan.textColor}`}>What’s included</h3>
                            <ul className="space-y-2 mb-4">
                              {plan.perks.map((perk, i) => (
                                <li key={i} className={`flex items-start ${plan.textColor}`}>
                                  <Check className="w-4 h-4 text-emerald-400 mr-2 mt-1 flex-shrink-0" />
                                  <span className="text-sm">{perk}</span>
                                </li>
                              ))}
                            </ul>
                            <div className={`${plan.textColor} text-sm opacity-80 space-y-2`}>
                              <p>Support: {plan.name === 'Trial' ? 'Email' : plan.name === 'Short Term' ? 'Priority email' : '24/7 phone & email'}</p>
                              <p>Guarantee: 7-day satisfaction guarantee</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="mt-8">
                        <button
                          onClick={() => handleChoosePlan(plan.name)}
                          className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg ${plan.buttonColor}`}
                        >
                          {plan.buttonText}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          ) : (
            // All plans row
            <div className="flex justify-center gap-8 items-stretch overflow-x-auto pb-4">
              {plans.map((plan, index) => (
                <div
                  ref={(el) => (planRefs.current[index] = el)}
                  key={plan.name}
                  className={`relative flex-none w-[300px] md:w-[300px] rounded-2xl shadow-lg p-4 flex flex-col transition-all duration-500 border-2 ${plan.borderColor} ${plan.bgColor} }`}
                >
                  <h2 className={`text-2xl font-bold ${plan.textColor}`}>{plan.name}</h2>
                  <p className={`text-lg mt-1 mb-6 ${plan.textColor} opacity-80`}>{plan.duration}</p>
                  <div className="mb-8">
                    <span className={`text-5xl font-extrabold ${plan.textColor}`}>{plan.price}</span>
                    <span className={`ml-2 ${plan.textColor} opacity-70`}>{plan.priceDetails}</span>
                  </div>
                  <ul className="space-y-4 mb-10 flex-grow">
                    {plan.features.map((feature, i) => (
                      <li key={i} className={`flex items-start ${plan.textColor}`}>
                        <Check className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className='w-full flex justify-center'>
                  <button
                    onClick={() => handleChoosePlan(plan.name)}
                    className={`w-2/3  py-3 px-6 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg ${plan.buttonColor}`}
                  >
                    {plan.buttonText}
                  </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Plans;
