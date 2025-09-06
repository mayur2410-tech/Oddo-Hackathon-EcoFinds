import React from 'react';
import { Package2, Smartphone, BookOpen, Car, Camera, ShoppingBag, Music, Star } from 'lucide-react';

const Hero = () => {
  const categories = [
    { name: 'Essentials', icon: Package2, active: false },
    { name: 'Electronics', icon: Smartphone, active: true },
    { name: 'Fashion', icon: ShoppingBag, active: false },
    { name: 'Vehicles', icon: Car, active: false },
    { name: 'Home & Garden', icon: Star, active: false },
    { name: 'Sports', icon: Music, active: false },
    { name: 'Books', icon: BookOpen, active: false },
    { name: 'Arts & Baby', icon: Camera, active: false }
  ];

  const featuredDeals = [
    {
      id: 1,
      title: 'Flash Sale',
      subtitle: 'Up to 70% Off',
      description: 'Don\'t miss out!',
      price: '$1,249',
      originalPrice: null,
      color: 'from-blue-400 to-blue-600',
      textColor: 'text-white'
    },
    {
      id: 2,
      title: 'Flash Sale',
      subtitle: 'Special Discount',
      description: 'Limited time offer!',
      price: '$899',
      originalPrice: '$1,299',
      color: 'from-orange-400 to-red-500',
      textColor: 'text-white'
    },
    {
      id: 3,
      title: 'Eco-Friendly',
      subtitle: 'Green Products',
      description: 'Sustainable choices',
      price: '$549',
      originalPrice: null,
      color: 'from-emerald-400 to-green-600',
      textColor: 'text-white'
    }
  ];

  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Main Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Discover Amazing Deals
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find trusted sellers in your community
          </p>
        </div>

        {/* Browse Categories */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Browse Categories</h2>
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            {categories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={index}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-200 ${
                    category.active
                      ? 'bg-emerald-500 text-white shadow-lg'
                      : 'bg-white text-gray-700 border border-gray-300 hover:border-emerald-400 hover:text-emerald-600'
                  }`}
                >
                  <IconComponent className="h-4 w-4" />
                  <span className="text-sm font-medium">{category.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Featured Deals */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Deals</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredDeals.map((deal) => (
              <div
                key={deal.id}
                className={`bg-gradient-to-br ${deal.color} rounded-2xl p-6 ${deal.textColor} transform hover:scale-105 transition-transform duration-200 cursor-pointer shadow-lg`}
              >
                <div className="mb-4">
                  <h3 className="text-xl font-bold">{deal.title}</h3>
                  <p className="text-sm opacity-90">{deal.subtitle}</p>
                </div>
                <div className="mb-4">
                  <p className="text-sm opacity-90">{deal.description}</p>
                </div>
                <div className="flex items-baseline space-x-2">
                  <span className="text-2xl font-bold">{deal.price}</span>
                  {deal.originalPrice && (
                    <span className="text-sm opacity-75 line-through">{deal.originalPrice}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Join Our Growing Community
          </h2>
          <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
            Connect with trusted sellers and buyers in your area. Discover unique items, great deals, and build lasting relationships in our marketplace community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-200 transform hover:scale-105">
              Start Shopping Today
            </button>
            <button className="border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-500 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-200">
              Become a Seller
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;