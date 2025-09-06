import React from 'react';
import { Shield, Users, Star, Clock, Truck, CreditCard, Award, HeartHandshake } from 'lucide-react';

const Features = () => {
  const mainFeatures = [
    {
      icon: Shield,
      title: 'Secure Transactions',
      description: 'Advanced encryption and secure payment systems to protect your transactions',
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-100'
    },
    {
      icon: Users,
      title: 'Trusted Community',
      description: 'Verified sellers and buyers with comprehensive rating systems',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      icon: Star,
      title: 'Quality Guaranteed',
      description: 'Only premium products from verified sellers with return policies',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100'
    },
    {
      icon: Clock,
      title: 'Fast Delivery',
      description: 'Quick and reliable shipping options to get your items when you need them',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    }
  ];

  const additionalFeatures = [
    {
      icon: Truck,
      title: 'Free Shipping',
      description: 'Free delivery on orders over $50'
    },
    {
      icon: CreditCard,
      title: 'Flexible Payments',
      description: 'Multiple payment options available'
    },
    {
      icon: Award,
      title: 'Best Prices',
      description: 'Competitive pricing guaranteed'
    },
    {
      icon: HeartHandshake,
      title: '24/7 Support',
      description: 'Round-the-clock customer assistance'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose TrustMarket?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide a secure, reliable, and user-friendly platform that connects buyers and sellers with confidence
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {mainFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="text-center group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className={`${feature.bgColor} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-shadow duration-300`}>
                  <IconComponent className={`h-10 w-10 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-3xl p-8 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="transform hover:scale-105 transition-transform duration-200">
              <div className="text-4xl font-bold text-emerald-600 mb-2">250K+</div>
              <div className="text-gray-700 font-medium">Active Users</div>
            </div>
            <div className="transform hover:scale-105 transition-transform duration-200">
              <div className="text-4xl font-bold text-emerald-600 mb-2">1.2M+</div>
              <div className="text-gray-700 font-medium">Products Sold</div>
            </div>
            <div className="transform hover:scale-105 transition-transform duration-200">
              <div className="text-4xl font-bold text-emerald-600 mb-2">98%</div>
              <div className="text-gray-700 font-medium">Satisfaction Rate</div>
            </div>
            <div className="transform hover:scale-105 transition-transform duration-200">
              <div className="text-4xl font-bold text-emerald-600 mb-2">$50M+</div>
              <div className="text-gray-700 font-medium">Total Sales</div>
            </div>
          </div>
        </div>

        {/* Additional Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {additionalFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 text-center hover:bg-emerald-50 hover:shadow-md transition-all duration-300 group"
              >
                <IconComponent className="h-8 w-8 text-emerald-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-200" />
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;