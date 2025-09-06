import React, { useState } from 'react';
import { Check, X, Star, Zap, Crown } from 'lucide-react';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: 'Basic Seller',
      icon: Star,
      description: 'Perfect for getting started',
      monthlyPrice: 0,
      annualPrice: 0,
      popular: false,
      features: [
        { name: 'List up to 10 items', included: true },
        { name: 'Basic seller profile', included: true },
        { name: 'Standard customer support', included: true },
        { name: 'Mobile app access', included: true },
        { name: '5% transaction fee', included: true },
        { name: 'Advanced analytics', included: false },
        { name: 'Priority listing', included: false },
        { name: 'Bulk upload tools', included: false },
        { name: 'Custom branding', included: false }
      ],
      buttonText: 'Start Free',
      buttonStyle: 'border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-500 hover:text-white'
    },
    {
      name: 'Pro Seller',
      icon: Zap,
      description: 'Best for growing businesses',
      monthlyPrice: 29,
      annualPrice: 290,
      popular: true,
      features: [
        { name: 'List up to 100 items', included: true },
        { name: 'Enhanced seller profile', included: true },
        { name: 'Priority customer support', included: true },
        { name: 'Mobile app access', included: true },
        { name: '3% transaction fee', included: true },
        { name: 'Advanced analytics', included: true },
        { name: 'Priority listing', included: true },
        { name: 'Bulk upload tools', included: true },
        { name: 'Custom branding', included: false }
      ],
      buttonText: 'Choose Pro',
      buttonStyle: 'bg-emerald-500 text-white hover:bg-emerald-600'
    },
    {
      name: 'Enterprise',
      icon: Crown,
      description: 'For large scale operations',
      monthlyPrice: 99,
      annualPrice: 990,
      popular: false,
      features: [
        { name: 'Unlimited listings', included: true },
        { name: 'Premium seller profile', included: true },
        { name: 'Dedicated account manager', included: true },
        { name: 'Mobile app access', included: true },
        { name: '2% transaction fee', included: true },
        { name: 'Advanced analytics', included: true },
        { name: 'Priority listing', included: true },
        { name: 'Bulk upload tools', included: true },
        { name: 'Custom branding', included: true }
      ],
      buttonText: 'Contact Sales',
      buttonStyle: 'border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your Selling Plan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Start selling today with our flexible plans designed to grow with your business
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 focus:outline-none ${
                isAnnual ? 'bg-emerald-500' : 'bg-gray-300'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
                  isAnnual ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Annual
            </span>
            {isAnnual && (
              <span className="bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded-full font-medium">
                Save 20%
              </span>
            )}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
            const originalPrice = isAnnual ? plan.monthlyPrice * 12 : null;

            return (
              <div
                key={index}
                className={`relative bg-white border-2 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${
                  plan.popular 
                    ? 'border-emerald-500 transform scale-105' 
                    : 'border-gray-200 hover:border-emerald-300'
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-emerald-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center ${
                    plan.popular ? 'bg-emerald-100' : 'bg-gray-100'
                  }`}>
                    <IconComponent className={`h-8 w-8 ${
                      plan.popular ? 'text-emerald-600' : 'text-gray-600'
                    }`} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  
                  <div className="flex items-baseline justify-center space-x-2 mb-2">
                    <span className="text-4xl font-bold text-gray-900">
                      ${price}
                    </span>
                    <span className="text-gray-600">
                      /{isAnnual ? 'year' : 'month'}
                    </span>
                  </div>
                  
                  {isAnnual && originalPrice && price > 0 && (
                    <div className="text-sm text-gray-500">
                      <span className="line-through">${originalPrice}/year</span>
                      <span className="text-emerald-600 ml-1 font-medium">Save ${originalPrice - price}</span>
                    </div>
                  )}
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      {feature.included ? (
                        <Check className="h-5 w-5 text-emerald-500 mr-3 flex-shrink-0" />
                      ) : (
                        <X className="h-5 w-5 text-gray-300 mr-3 flex-shrink-0" />
                      )}
                      <span className={`text-sm ${feature.included ? 'text-gray-900' : 'text-gray-400'}`}>
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-full font-semibold transition-all duration-200 ${plan.buttonStyle}`}>
                  {plan.buttonText}
                </button>
              </div>
            );
          })}
        </div>

        {/* FAQ Section */}
        <div className="bg-gray-50 rounded-3xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Frequently Asked Questions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-left">
              <h4 className="font-semibold text-gray-900 mb-2">Can I change plans anytime?</h4>
              <p className="text-gray-600 text-sm">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
            </div>
            <div className="text-left">
              <h4 className="font-semibold text-gray-900 mb-2">What payment methods do you accept?</h4>
              <p className="text-gray-600 text-sm">We accept all major credit cards, PayPal, and bank transfers for annual plans.</p>
            </div>
            <div className="text-left">
              <h4 className="font-semibold text-gray-900 mb-2">Is there a setup fee?</h4>
              <p className="text-gray-600 text-sm">No, there are no setup fees or hidden charges. You only pay the subscription fee.</p>
            </div>
            <div className="text-left">
              <h4 className="font-semibold text-gray-900 mb-2">Can I get a refund?</h4>
              <p className="text-gray-600 text-sm">Yes, we offer a 30-day money-back guarantee for all paid plans.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;