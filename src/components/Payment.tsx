import React,{useState} from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { Lock, CreditCard, Calendar, User, ArrowLeft } from 'lucide-react';
import emailjs from '@emailjs/browser';
import SimpleNavigation from './SimpleNavigation';

const RedirectToPlans: React.FC = () => {
  const navigate = useNavigate();
  React.useEffect(() => {
    const timer = setTimeout(() => navigate('/plans'), 2000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return null; // This component doesn't render anything
};

const Payment: React.FC<{ onContactClick: () => void }> = ({ onContactClick }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { plan } = location.state || {}; // Get plan data from navigation state
  const [cardholderName, setCardholderName] = useState('');
  const [email, setEmail] = useState(''); // Assuming we need email for sending credentials

  const generatePassword = (length = 12) => {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@";
    let password = "";
    for (let i = 0, n = charset.length; i < n; ++i) {
      password += charset.charAt(Math.floor(Math.random() * n));
    }
    // Simple check to ensure it has some complexity, not cryptographically secure.
    // For a real app, use a library like `generate-password`.
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@])/.test(password)) {
      return generatePassword(length);
    }
    return password.slice(0, length);
  };

  const calculateValidityDate = (duration: string): string => {
    const now = new Date();
    if (duration.toLowerCase().includes('lifetime')) {
      // Set a far-future date for lifetime plans, e.g., 100 years from now
      now.setFullYear(now.getFullYear() + 100);
    } else {
      const parts = duration.split(' ');
      const amount = parseInt(parts[0], 10);
      const unit = parts[1].toLowerCase();

      if (!isNaN(amount)) {
        if (unit.startsWith('day')) {
          now.setDate(now.getDate() + amount);
        } else if (unit.startsWith('month')) {
          now.setMonth(now.getMonth() + amount);
        } else if (unit.startsWith('year')) {
          now.setFullYear(now.getFullYear() + amount);
        }
      }
    }
    return now.toISOString().split('T')[0]; // Return in YYYY-MM-DD format
  };

  if (!plan) {
    // Redirect back to plans if no plan was selected
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <p className="text-xl text-gray-700 mb-4">No plan selected. Redirecting...</p>
        <Link to="/plans" className="text-blue-600 hover:underline">Go to Plans</Link>        
        <RedirectToPlans />
      </div>
    );
  }

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate payment processing
    console.log('Processing payment...');

    // 1. Generate credentials
    const password = generatePassword();
    const loginId = email; // Using email as login ID

    // 2. Send email with credentials using EmailJS
    const serviceID = "service_cyfaq8j"; // Replace with your EmailJS Service ID
    const templateID = "template_credentials"; // Create a new template in EmailJS for this
    const publicKey = "mPRCApbLXDf7hPgxz"; // Replace with your EmailJS Public Key

    const templateParams = {
      user_name: cardholderName,
      user_email: email,
      login_id: loginId,
      password: password,
      plan_name: plan.name,
      plan_price: plan.price,
      valid:plan.duration,
      valid_until: calculateValidityDate(plan.duration),
      login_link: 'https://cstsoft.netlify.app/login'
    };

    try {

      // await emailjs.send(serviceID, templateID, templateParams, publicKey);
      await fetch("http://localhost:5678/webhook-test/74a055a5-16c0-4b20-b597-1d27bf76634d", {
      method: "POST",
       headers: { "Content-Type": "application/json" },
     body: JSON.stringify(templateParams), // formData includes {name, email, message}
});

      alert(`Payment successful for ${plan.name} plan! Your login credentials have been sent to ${email}.`);
      navigate('/login'); // Redirect to login page after success
    } catch (err) {
      console.error("FAILED to send email...", err);
      alert("Payment was successful, but we failed to send your credentials. Please contact support.");
    }
  };

  return (
    <>
      <SimpleNavigation onContactClick={onContactClick} />
      <div className="min-h-screen bg-gray-100 flex items-center justify-center pt-28 pb-12 px-4">
        <div className="w-full max-w-4xl mx-auto">
          <button onClick={() => navigate('/plans')} className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 font-semibold">
            <ArrowLeft className="w-5 h-5" />
            Back to Plans
          </button>
          <div className=" rounded-2xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
            {/* Left Side: Order Summary - Darker BG for contrast */}
            <div className={`p-8 md:p-10 ${plan.textColor} ${plan.bgColor}`}>
              <h2 className="text-3xl font-extrabold mb-2">Order Summary</h2>
              <p className="opacity-80 mb-8">You are purchasing the {plan.name} plan.</p>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-baseline">
                  <span className="text-lg font-medium opacity-90">{plan.name} Plan</span>
                  <span className="text-2xl font-bold">{plan.price}</span>
                </div>
                <p className="text-right opacity-70 text-sm -mt-2">{plan.priceDetails}</p>
                <div className="flex justify-between items-baseline text-green-300">
                  <span className="text-lg font-medium">Discount</span>
                  <span className="text-2xl font-bold">-$0.00</span>
                </div>
              </div>

              <div className="border-t border-white/20 my-6"></div>

              <div className="flex justify-between items-baseline">
                <span className="text-xl font-semibold">Total</span>
                <span className="text-4xl font-extrabold">{plan.price}</span>
              </div>

              <div className="mt-10">
                <h3 className="text-lg font-semibold mb-4">Services Included:</h3>
                <ul className="space-y-2 text-sm opacity-90">
                  {plan.features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-4 h-4 mr-2 mt-1 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Side: Payment Form */}
            <div className="p-8 md:p-10 bg-gray-50">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Payment Details</h2>
              <form onSubmit={handlePayment} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Cardholder Name</label>
                  <div className="relative">
                    <User className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input type="text" value={cardholderName} onChange={(e) => setCardholderName(e.target.value)} required className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500" placeholder="John Doe" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email for Credentials</label>
                  <div className="relative">
                    <User className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500" placeholder="you@company.com" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
                  <div className="relative">
                    <CreditCard className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input type="text" required className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500" placeholder="•••• •••• •••• ••••" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
                    <div className="relative">
                      <Calendar className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input type="text" required className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500" placeholder="MM / YY" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">CVC</label>
                    <div className="relative">
                      <Lock className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input type="text" required className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500" placeholder="•••" />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className={`w-full ${plan.buttonColor}  hover:${plan.bgColor} text-black px-6 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-xl flex items-center justify-center gap-2 group mt-4`}
                >
                  Pay {plan.price}
                  <Lock className="w-5 h-5" />
                </button>

                <p className="text-xs text-gray-500 text-center">
                  Secure payment powered by Stripe. By paying, you agree to the Terms of Service.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
