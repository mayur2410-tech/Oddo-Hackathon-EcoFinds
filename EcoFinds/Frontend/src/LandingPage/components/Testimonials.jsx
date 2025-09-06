import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Martinez',
      role: 'Frequent Buyer',
      avatar: 'SM',
      rating: 5,
      text: 'I found an amazing vintage desk at just $750 that would have cost thousands at traditional stores. The seller was incredibly helpful, and the quality exceeded my expectations. TrustMarket has become my go-to platform for unique finds.',
      highlight: 'Found vintage desk for $750'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Power Seller',
      avatar: 'MC',
      rating: 5,
      text: 'As a seller, TrustMarket has revolutionized my business. The platform makes it easy to reach customers, the payment system is seamless, and the support team is always there when I need help. I\'ve sold over 200 items this year alone!',
      highlight: 'Sold 200+ items this year'
    },
    {
      id: 3,
      name: 'Jessica Rodriguez',
      role: 'Art Collector',
      avatar: 'JR',
      rating: 5,
      text: 'The buyer protection gave me confidence to make larger purchases. When I bought a $2,000 painting, everything was handled professionally from verification to secure delivery. The seller was verified and the transaction was flawless.',
      highlight: 'Secure $2,000 art purchase'
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-gray-700 leading-relaxed mb-6">
                "{testimonial.text}"
              </blockquote>

              {/* User Info */}
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>

              {/* Highlight Badge */}
              <div className="inline-block bg-emerald-100 text-emerald-800 text-xs px-3 py-1 rounded-full font-medium">
                ✨ {testimonial.highlight}
              </div>
            </div>
          ))}
        </div>

        {/* Join Community CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-emerald-50 to-orange-50 rounded-3xl p-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Join Our Growing Community
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-2">250K+</div>
              <div className="text-gray-700">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-2">1.2M+</div>
              <div className="text-gray-700">Products Sold</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-2">98%</div>
              <div className="text-gray-700">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-2">$50M+</div>
              <div className="text-gray-700">Total Sales</div>
            </div>
          </div>
          <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-200 transform hover:scale-105">
            Start Selling Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;