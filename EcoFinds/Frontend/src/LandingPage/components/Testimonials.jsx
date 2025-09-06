import React from 'react';
import { Star,Shield, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Martinez',
      role: 'Frequent Buyer',
      avatar: 'SM',
      rating: 5,
      reviews: 124,
      text: 'I found an amazing vintage desk at just $750 that would have cost thousands at traditional stores. The seller was incredibly helpful, and the quality exceeded my expectations. TrustMarket has become my go-to platform for unique finds.',
      highlight: 'Found vintage desk for $750'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Power Seller',
      avatar: 'MC',
      rating: 5,
      reviews: 89,
      text: 'As a seller, TrustMarket has revolutionized my business. The platform makes it easy to reach customers, the payment system is seamless, and the support team is always there when I need help. I\'ve sold over 200 items this year alone!',
      highlight: 'Sold 200+ items this year'
    },
    {
      id: 3,
      name: 'Jessica Rodriguez',
      role: 'Art Collector',
      avatar: 'JR',
      rating: 5,
      reviews: 156,
      text: 'The buyer protection gave me confidence to make larger purchases. When I bought a $2,000 painting, everything was handled professionally from verification to secure delivery. The seller was verified and the transaction was flawless.',
      highlight: 'Secure $2,000 art purchase'
    }
  ];

  const sellerStats = [
    {
      name: 'Sarah Martinez',
      image: 'SM',
      sales: '1.1k',
      rating: 4.9,
      reviews: 234
    },
    {
      name: 'Michael Chen',
      image: 'MC',
      sales: '892',
      rating: 4.8,
      reviews: 178
    },
    {
      name: 'Jessica Rodriguez',
      image: 'JR',
      sales: '756',
      rating: 4.9,
      reviews: 145
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Users Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of satisfied customers who trust TrustMarket for their buying and selling needs
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
            >
              <div className="absolute top-6 right-6 text-emerald-200">
                <Quote className="h-8 w-8" />
              </div>
              
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                    }`}
                  />
                ))}
                <span className="ml-2 text-sm text-gray-600">
                  {testimonial.rating}.0 ({testimonial.reviews} reviews)
                </span>
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-gray-700 leading-relaxed mb-6">
                "{testimonial.text}"
              </blockquote>

              {/* User Info */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>

              {/* Highlight Badge */}
              <div className="mt-4 inline-block bg-emerald-100 text-emerald-800 text-xs px-3 py-1 rounded-full font-medium">
                ✨ {testimonial.highlight}
              </div>
            </div>
          ))}
        </div>

        {/* Top Sellers Section */}
        <div className="bg-white rounded-3xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Top Sellers This Month
            </h3>
            <p className="text-gray-600">
              Meet our most successful community members
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sellerStats.map((seller, index) => (
              <div
                key={index}
                className="text-center group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="relative inline-block mb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    {seller.image}
                  </div>
                  {index === 0 && (
                    <div className="absolute -top-2 -right-2 bg-yellow-400 text-yellow-900 text-xs px-2 py-1 rounded-full font-bold">
                      #1
                    </div>
                  )}
                </div>
                
                <h4 className="font-semibold text-gray-900 mb-2">{seller.name}</h4>
                
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

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Shop with Confidence
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-8 w-8 text-emerald-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Buyer Protection</h4>
              <p className="text-gray-600 text-sm text-center">Money back guarantee if your purchase doesn't match the description</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Star className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Verified Sellers</h4>
              <p className="text-gray-600 text-sm text-center">All sellers go through identity verification and background checks</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <Quote className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Secure Payments</h4>
              <p className="text-gray-600 text-sm text-center">Advanced encryption protects your payment information</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <Star className="h-8 w-8 text-orange-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">24/7 Support</h4>
              <p className="text-gray-600 text-sm text-center">Our customer service team is always ready to help</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;