import React from 'react';
import { Package2, Smartphone, BookOpen, Car, Camera, ShoppingBag, Music, Star, Heart, Grid3X3 } from 'lucide-react';

const Hero = () => {
  const categories = [
    { name: 'Essentials', icon: Package2, active: true, color: 'bg-emerald-100 text-emerald-700' },
    { name: 'Electronics', icon: Smartphone, active: false, color: 'bg-blue-100 text-blue-700' },
    { name: 'Fashion', icon: ShoppingBag, active: false, color: 'bg-pink-100 text-pink-700' },
    { name: 'Vehicles', icon: Car, active: false, color: 'bg-purple-100 text-purple-700' },
    { name: 'Home & Garden', icon: Star, active: false, color: 'bg-yellow-100 text-yellow-700' },
    { name: 'Sports', icon: Music, active: false, color: 'bg-orange-100 text-orange-700' },
    { name: 'Books', icon: BookOpen, active: false, color: 'bg-indigo-100 text-indigo-700' },
    { name: 'Arts & Baby', icon: Camera, active: false, color: 'bg-red-100 text-red-700' }
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

  const latestListings = [
    {
      id: 1,
      title: 'Modern Sectional Sofa',
      price: '$450',
      originalPrice: '$650',
      location: 'San Francisco',
      rating: 4.8,
      reviews: 24,
      image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=300',
      seller: 'John D.',
      time: '2 hours ago'
    },
    {
      id: 2,
      title: 'iPhone 14 Pro - 256GB',
      price: '$899',
      originalPrice: '$1,099',
      location: 'New York',
      rating: 4.9,
      reviews: 18,
      image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=300',
      seller: 'Sarah M.',
      time: '4 hours ago'
    },
    {
      id: 3,
      title: 'Vintage Dining Set',
      price: '$650',
      originalPrice: '$850',
      location: 'Los Angeles',
      rating: 4.7,
      reviews: 31,
      image: 'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=300',
      seller: 'Mike R.',
      time: '6 hours ago'
    },
    {
      id: 4,
      title: 'Electric Mountain Bike',
      price: '$1,200',
      originalPrice: '$1,500',
      location: 'Seattle',
      rating: 4.9,
      reviews: 12,
      image: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=300',
      seller: 'Lisa K.',
      time: '8 hours ago'
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
                      : `${category.color} hover:shadow-md`
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

        {/* Latest Listings */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Latest Listings</h2>
            <div className="flex items-center space-x-4">
              <select className="border border-gray-300 rounded-lg px-3 py-1 text-sm">
                <option>Sort by: Newest</option>
                <option>Sort by: Price Low to High</option>
                <option>Sort by: Price High to Low</option>
                <option>Sort by: Distance</option>
              </select>
              <div className="flex space-x-2">
                <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <Grid3X3 className="h-4 w-4" />
                </button>
                <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <Package2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {latestListings.map((item) => (
              <div key={item.id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden">
                <div className="relative">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                  <button className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
                    <Heart className="h-4 w-4 text-gray-600" />
                  </button>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{item.title}</h3>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-lg font-bold text-emerald-600">{item.price}</span>
                    {item.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">{item.originalPrice}</span>
                    )}
                  </div>
                  <div className="flex items-center space-x-1 mb-2">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600">{item.rating}</span>
                    <span className="text-sm text-gray-500">({item.reviews})</span>
                  </div>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>{item.seller}</span>
                    <span>{item.time}</span>
                  </div>
                  <div className="text-sm text-gray-500 mt-1">{item.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Load More Button */}
        <div className="text-center mb-8">
          <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-200">
            Load More Listings
          </button>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-emerald-50 to-orange-50 rounded-2xl p-8">
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