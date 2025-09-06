import React from 'react';
import { 
  Smartphone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Apple,
  Play
} from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: 'For Buyers',
      links: [
        'How to Buy',
        'Buyer Protection',
        'Payment Methods',
        'Shipping & Returns',
        'Customer Reviews',
        'Safety Tips'
      ]
    },
    {
      title: 'For Sellers',
      links: [
        'How to Sell',
        'Seller Guidelines',
        'Pricing Tips',
        'Shipping & Delivery',
        'Seller Protection',
        'Seller Hub'
      ]
    },
    {
      title: 'Support',
      links: [
        'Help Center',
        'Contact Us',
        'Community Forum',
        'Report an Issue',
        'Trust & Safety',
        'Accessibility'
      ]
    }
  ];

  const categories = [
    'Electronics', 'Fashion', 'Home & Garden', 'Sports & Outdoors',
    'Books & Media', 'Toys & Games', 'Health & Beauty', 'Automotive'
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  TrustMarket
                </h2>
                <p className="text-gray-300 mt-4 leading-relaxed">
                  Building trust in every transaction. Connect with verified sellers and buyers in your community for a safe, secure marketplace experience.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center text-gray-300">
                  <MapPin className="h-5 w-5 mr-3 text-emerald-400" />
                  <span className="text-sm">123 Market Street, San Francisco, CA 94102</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Mail className="h-5 w-5 mr-3 text-emerald-400" />
                  <span className="text-sm">support@trustmarket.com</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Smartphone className="h-5 w-5 mr-3 text-emerald-400" />
                  <span className="text-sm">1-800-TRUST-ME (1-800-878-7863)</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                    <button
                      key={index}
                      className="w-10 h-10 bg-gray-800 hover:bg-emerald-600 rounded-full flex items-center justify-center transition-colors duration-200"
                    >
                      <Icon className="h-5 w-5" />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer Links */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {footerSections.map((section, index) => (
                  <div key={index}>
                    <h3 className="text-lg font-semibold mb-6 text-emerald-400">
                      {section.title}
                    </h3>
                    <ul className="space-y-3">
                      {section.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <button className="text-gray-300 hover:text-white text-sm transition-colors duration-200">
                            {link}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile App Section */}
        <div className="border-t border-gray-700 py-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Take TrustMarket Everywhere</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Download our mobile app for the best marketplace experience on the go.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="flex items-center bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-xl transition-colors duration-200">
              <Apple className="h-8 w-8 mr-3" />
              <div className="text-left">
                <div className="text-xs">Download on the</div>
                <div className="text-lg font-semibold">App Store</div>
              </div>
            </button>
            
            <button className="flex items-center bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-xl transition-colors duration-200">
              <Play className="h-8 w-8 mr-3" />
              <div className="text-left">
                <div className="text-xs">Get it on</div>
                <div className="text-lg font-semibold">Google Play</div>
              </div>
            </button>
          </div>
        </div>

        {/* Categories */}
        <div className="border-t border-gray-700 py-8">
          <h3 className="text-lg font-semibold mb-4 text-center">Popular Categories</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className="text-gray-300 hover:text-emerald-400 text-sm transition-colors duration-200"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 TrustMarket. All rights reserved.
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
              <button className="text-gray-400 hover:text-white transition-colors duration-200">
                Privacy Policy
              </button>
              <button className="text-gray-400 hover:text-white transition-colors duration-200">
                Terms of Service
              </button>
              <button className="text-gray-400 hover:text-white transition-colors duration-200">
                Cookie Policy
              </button>
              <button className="text-gray-400 hover:text-white transition-colors duration-200">
                Sitemap
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;