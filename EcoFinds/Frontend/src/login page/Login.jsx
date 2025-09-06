import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  Shield,
  ArrowRight
} from 'lucide-react';
import loginimg from '../assets/img/loginimg.png';

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // ✅ hook for navigation

  return (
    <div className="min-h-screen flex">
      {/* Left Panel */}
      <div className="w-[%] relative overflow-hidden">
        <img
          src={loginimg}
          alt="Marketplace"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Panel */}
      <div className="w-[55%] bg-white flex flex-col justify-center px-8 py-12">
        <div className="w-full max-w-sm mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Sign in to your account to continue
          </h2>

          {/* ✅ Only one form */}
          <form
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              navigate("/"); // redirect after login
            }}
          >
            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors duration-200 outline-none"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full pl-12 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors duration-200 outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              <div className="text-right mt-2">
                <a href="#" className="text-sm text-teal-600 hover:text-teal-700 transition-colors duration-200">
                  Forgot your password?
                </a>
              </div>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-teal-500 to-orange-500 text-white py-3 rounded-lg font-semibold hover:from-teal-600 hover:to-orange-600 transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg"
            >
              <span>Sign In</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            {/* Divider */}
            <div className="flex items-center my-6">
              <div className="flex-1 border-t border-gray-300"></div>
              <span className="px-4 text-gray-500 text-sm">OR</span>
              <div className="flex-1 border-t border-gray-300"></div>
            </div>

            {/* Social Login Buttons */}
            <div className="space-y-3">
              <button className="w-full flex items-center justify-center space-x-3 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">G</span>
                </div>
                <span className="text-gray-700">Continue with Google</span>
              </button>

              <button className="w-full flex items-center justify-center space-x-3 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                <div className="w-5 h-5 bg-black rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">A</span>
                </div>
                <span className="text-gray-700">Continue with Apple</span>
              </button>

              <button className="w-full flex items-center justify-center space-x-3 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                <div className="w-5 h-5 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">S</span>
                </div>
                <span className="text-gray-700">Sign in with SSO</span>
              </button>
            </div>

            {/* Create Account Link */}
            <p className="text-center text-sm text-gray-600 mt-8">
              Don't have an account?{' '}
              <a href="#" className="text-teal-600 hover:text-teal-700 font-semibold transition-colors duration-200">
                Create Account
              </a>
            </p>

            {/* Terms and Security */}
            <div className="text-center text-xs text-gray-500 space-y-2 mt-6">
              <p>
                By signing in, you agree to our{' '}
                <a href="#" className="text-teal-600 hover:underline">Terms of Service</a> and acknowledge our{' '}
                <a href="#" className="text-teal-600 hover:underline">Privacy Policy</a>
              </p>
              <p className="flex items-center justify-center space-x-1">
                <Shield className="w-3 h-3 text-green-500" />
                <span>Your data is protected with enterprise-grade security</span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
