import { useState } from "react";
import Layout from "./layout";
import { CheckCircle, X } from "lucide-react";
import { Link } from "react-router-dom";
import CheckoutFlow from "./CheckoutFlow";

function Subscription() {
  const [billingCycle, setBillingCycle] = useState("annual");
  const [showCheckout, setShowCheckout] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<any>(null);

  const features = [
    "Personalized workout plans",
    "Meal planning and nutrition tracking", 
    "Progress analytics and reports",
    "Access to workout video library",
    "Community support and forums",
    "Goal setting and tracking",
    "Integration with fitness devices",
    "Mobile app access (iOS & Android)"
  ];

  const premiumFeatures = [
    ...features,
    "1-on-1 virtual coaching sessions",
    "Priority customer support",
    "Advanced analytics and insights",
    "Exclusive premium content",
    "Early access to new features"
  ];

  const plans = [
    {
      name: "Basic",
      monthlyPrice: 9.99,
      annualPrice: 7.99,
      description: "Perfect for beginners starting their fitness journey",
      features: features.slice(0, 5),
      notIncluded: features.slice(5),
      popular: false
    },
    {
      name: "Premium",
      monthlyPrice: 14.99,
      annualPrice: 9.99,
      description: "Our most popular plan with complete access to all features",
      features: features,
      notIncluded: [],
      popular: true
    },
    {
      name: "Elite",
      monthlyPrice: 24.99,
      annualPrice: 19.99,
      description: "The ultimate fitness experience with personalized coaching",
      features: premiumFeatures,
      notIncluded: [],
      popular: false
    }
  ];

  const handleStartTrial = (plan: any) => {
    const price = billingCycle === "monthly" ? plan.monthlyPrice : plan.annualPrice;
    const productName = `${plan.name} Plan - ${billingCycle === "monthly" ? "Monthly" : "Annual"} Subscription`;
    
    setSelectedPlan({
      name: productName,
      price: price,
      plan: plan
    });
    setShowCheckout(true);
  };

  const handleCloseCheckout = () => {
    setShowCheckout(false);
    setSelectedPlan(null);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-welltrack-black text-white py-16">
        <div className="welltrack-container">
          <div className="max-w-3xl">
            <h1 className="welltrack-heading text-4xl md:text-5xl mb-4">Membership Plans</h1>
            <p className="text-gray-300 text-lg mb-6">
              Pick the membership that matches your goals — every plan starts with a 14-day free trial.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="welltrack-section bg-white">
        <div className="welltrack-container">
          {/* Billing Toggle */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-100 p-1 rounded-full inline-flex">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  billingCycle === "monthly"
                    ? "bg-welltrack-green text-white"
                    : "text-gray-700"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle("annual")}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  billingCycle === "annual"
                    ? "bg-welltrack-green text-white"
                    : "text-gray-700"
                }`}
              >
                Annual <span className="text-xs opacity-75">(Save 20%)</span>
              </button>
            </div>
          </div>
          
          {/* Plans */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div 
                key={plan.name} 
                className={`rounded-xl overflow-hidden border ${
                  plan.popular 
                    ? 'border-welltrack-green shadow-lg shadow-welltrack-green/10' 
                    : 'border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="bg-welltrack-green text-white py-2 text-center text-sm font-medium">
                    MOST POPULAR
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{plan.name} Plan</h3>
                  <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">
                      ${billingCycle === "monthly" ? plan.monthlyPrice : plan.annualPrice}
                    </span>
                    <span className="text-gray-600">/month</span>
                    {billingCycle === "annual" && (
                      <p className="text-sm text-gray-500 mt-1">
                        Billed as ${(plan.annualPrice * 12).toFixed(2)} annually
                      </p>
                    )}
                  </div>
                  
                  <button 
                    onClick={() => handleStartTrial(plan)}
                    className={`w-full py-2 rounded-md font-medium mb-6 ${
                      plan.popular 
                        ? 'bg-welltrack-green text-white hover:bg-welltrack-green-dark' 
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                  >
                    Start 14-Day Free Trial
                  </button>
                  
                  <div>
                    <p className="font-medium mb-3">Includes:</p>
                    <ul className="space-y-2 mb-6">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle size={18} className="text-welltrack-green mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {plan.notIncluded.length > 0 && (
                      <>
                        <p className="font-medium mb-3 text-gray-500">Not included:</p>
                        <ul className="space-y-2">
                          {plan.notIncluded.map((feature, index) => (
                            <li key={index} className="flex items-start text-gray-500">
                              <X size={18} className="mr-2 flex-shrink-0 mt-0.5" />
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12 max-w-2xl mx-auto">
            <p className="text-gray-600 mb-4">
              All plans include a 14-day free trial. No credit card required to start. Cancel anytime.
            </p>
            <p className="text-sm text-gray-500">
              By subscribing, you agree to our <Link to="/terms" className="text-welltrack-green hover:underline">Terms of Service</Link> and <Link to="/privacy" className="text-welltrack-green hover:underline">Privacy Policy</Link>. 
              Subscription automatically renews unless auto-renew is turned off at least 24 hours before the end of the current period.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="welltrack-section bg-welltrack-gray">
        <div className="welltrack-container">
          <div className="text-center mb-12">
            <h2 className="welltrack-heading text-3xl mb-4">Membership Questions Answered</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to know before you start your free trial.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-2">How does the free trial work?</h3>
                <p className="text-gray-600">
                  Our 14-day free trial gives you full access to all features of your selected plan. 
                  You won't be charged until the trial period ends, and you can cancel anytime before then.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-2">Can I switch plans later?</h3>
                <p className="text-gray-600">
                  Yes, you can upgrade or downgrade your plan at any time. 
                  If you upgrade, the new rate will be prorated for the remainder of your billing cycle. 
                  If you downgrade, the new rate will take effect at the start of your next billing cycle.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-2">How do I cancel my subscription?</h3>
                <p className="text-gray-600">
                  You can cancel your subscription at any time from your account settings. 
                  If you cancel, you'll still have access to your plan until the end of your current billing period.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-2">Is there a discount for annual billing?</h3>
                <p className="text-gray-600">
                  Yes, you save approximately 20% when you choose annual billing compared to monthly billing.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-2">What platforms is the app available on?</h3>
                <p className="text-gray-600">
                  Our app is available on iOS, Android, and as a web application, allowing you to access your fitness data from any device.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Checkout Modal */}
      {showCheckout && selectedPlan && (
        <CheckoutFlow
          productName={selectedPlan.name}
          productPrice={selectedPlan.price}
          onClose={handleCloseCheckout}
        />
      )}
    </Layout>
  );
}

export default Subscription;