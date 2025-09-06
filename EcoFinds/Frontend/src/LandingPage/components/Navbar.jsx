import React, { useState } from 'react';
import { Search, ShoppingCart, User, Bell, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  return (
    <nav className="bg-gradient-to-r from-emerald-400 to-teal-500 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-white text-2xl font-bold">TrustMarket</h1>
            </div>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:block flex-1 max-w-2xl mx-8">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search for apps - toys, gifts, idea, people"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pr-12 rounded-full border-0 focus:outline-none focus:ring-2 focus:ring-emerald-300 text-gray-700"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-orange-400 hover:bg-orange-500 text-white px-4 py-1.5 rounded-full transition-colors duration-200"
              >
                <Search className="h-4 w-4" />
              </button>
            </form>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-white hover:text-emerald-100 transition-colors duration-200 relative">
              <Bell className="h-6 w-6" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </button>
            <button className="text-white hover:text-emerald-100 transition-colors duration-200 relative">
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                2
              </span>
            </button>
            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1.5">
              <User className="h-5 w-5 text-white" />
              <span className="text-white text-sm">Profile</span>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-emerald-100 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden pb-4">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="Search for apps - toys, gifts, idea, people"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 pr-12 rounded-full border-0 focus:outline-none focus:ring-2 focus:ring-emerald-300 text-gray-700"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-orange-400 hover:bg-orange-500 text-white px-4 py-1.5 rounded-full transition-colors duration-200"
            >
              <Search className="h-4 w-4" />
            </button>
          </form>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              <button className="flex items-center space-x-2 text-white hover:text-emerald-100 transition-colors duration-200">
                <Bell className="h-5 w-5" />
                <span>Notifications</span>
                <span className="bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
              </button>
              <button className="flex items-center space-x-2 text-white hover:text-emerald-100 transition-colors duration-200">
                <ShoppingCart className="h-5 w-5" />
                <span>Cart</span>
                <span className="bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">2</span>
              </button>
              <button className="flex items-center space-x-2 text-white hover:text-emerald-100 transition-colors duration-200">
                <User className="h-5 w-5" />
                <span>Profile</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;