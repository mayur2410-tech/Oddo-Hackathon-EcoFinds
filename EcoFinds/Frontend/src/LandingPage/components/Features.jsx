import React from 'react';
import { Shield, Users, Star, Clock, Truck, CreditCard, Award, HeartHandshake, Smartphone, Home, Book, Gamepad2, Heart, Music } from 'lucide-react';

const Features = () => {
  const trendingCategories = [
    {
      name: 'Electronics',
      icon: Smartphone,
      color: 'bg-blue-100 text-blue-600',
      count: '2.5k items'
    },
    {
      name: 'Fashion',
      icon: Heart,
      color: 'bg-pink-100 text-pink-600',
      count: '1.8k items'
    },
    {
      name: 'Furniture',
      icon: Home,
      color: 'bg-orange-100 text-orange-600',
      count: '1.2k items'
    },
    {
      name: 'Books',
      icon: Book,
      color: 'bg-purple-100 text-purple-600',
      count: '950 items'
    },
    {
      name: 'Gaming',
      icon: Gamepad2,
      color: 'bg-green-100 text-green-600',
      count: '780 items'
    },
    {
      name: 'Music',
      icon: Music,
      color: 'bg-yellow-100 text-yellow-600',
      count: '650 items'
    }
  ];

  const mainFeatures = [
    {
      icon: Shield,
      title: 'Buyer Protection',
      description: 'Money back guarantee if your purchase doesn\'t match the description',
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-100'
    },
    {
      icon: Users,
      title: 'Verified Sellers',
      description: 'All sellers go through identity verification and background checks',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      icon: CreditCard,
      title: 'Secure Payments',
      description: 'Advanced encryption protects your payment information',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      icon: HeartHandshake,
      title: '24/7 Support',
      description: 'Our customer service team is always ready to help',
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trending This Week */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Trending This Week
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {trendingCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={index}
                  className="text-center group hover:transform hover:scale-105 transition-all duration-300 cursor-pointer"
                >
                  <div className={`${category.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-shadow duration-300`}>
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {category.count}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Top Sellers This Month */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Top Sellers This Month
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Sarah Martinez', avatar: 'SM', sales: '1.1k', rating: 4.9, reviews: 234, badge: '#1' },
              { name: 'Michael Chen', avatar: 'MC', sales: '892', rating: 4.8, reviews: 178, badge: '#2' },
              { name: 'Jessica Rodriguez', avatar: 'JR', sales: '756', rating: 4.9, reviews: 145, badge: '#3' }
            ].map((seller, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative inline-block mb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                    {seller.avatar}
                  </div>
                  <div className="absolute -top-2 -right-2 bg-yellow-400 text-yellow-900 text-xs px-2 py-1 rounded-full font-bold">
                    {seller.badge}
                  </div>
                </div>
                
                <h3 className="font-semibold text-gray-900 mb-2">{seller.name}</h3>
                
                <div className="flex items-center justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(seller.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="ml-1 text-sm text-gray-600">
                    {seller.rating} ({seller.reviews} reviews)
                  </span>
                </div>
                
                <div className="text-emerald-600 font-semibold">
                  {seller.sales} Sales • Member since 2019
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Shop with Confidence */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Shop with Confidence
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Your safety is our priority. We've built comprehensive protection systems to ensure secure transactions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-emerald-50 to-orange-50 rounded-3xl p-8">
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
      </div>
    </section>
  );
};

export default Features;