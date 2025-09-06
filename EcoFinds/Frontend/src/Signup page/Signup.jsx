

import { Link } from "react-router-dom";
import loginimg from '../assets/img/loginimg.png';
import React, { useState } from 'react';
import {
    ShoppingBag,
    Mail,
    Lock,
    Eye,
    EyeOff,
    Shield,
    Zap,
    Globe,
    ArrowRight
} from 'lucide-react';

function Signup() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [agreeToTerms, setAgreeToTerms] = useState(false);

    return (
        <div className="min-h-screen flex">
            {/* Left Panel */}
            <div className="w-[45%] relative overflow-hidden">
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
                        Create your account to get started
                    </h2>

                    <form className="space-y-6">
                        {/* Name Fields */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    placeholder="Enter your first name"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors duration-200 outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    placeholder="Enter your last name"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors duration-200 outline-none"
                                />
                            </div>
                        </div>
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
                        </div>

                        {/* Confirm Password Field */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Confirm Password
                            </label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    placeholder="Confirm your password"
                                    className="w-full pl-12 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors duration-200 outline-none"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                                >
                                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                </button>
                            </div>
                        </div>

                        {/* Terms Agreement */}
                        <div className="flex items-start space-x-3">
                            <input
                                type="checkbox"
                                id="agreeToTerms"
                                checked={agreeToTerms}
                                onChange={(e) => setAgreeToTerms(e.target.checked)}
                                className="mt-1 w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
                            />
                            <label htmlFor="agreeToTerms" className="text-sm text-gray-600">
                                I agree to the{' '}
                                <a href="#" className="text-teal-600 hover:text-teal-700 transition-colors duration-200">
                                    Terms of Service
                                </a>{' '}
                                and{' '}
                                <a href="#" className="text-teal-600 hover:text-teal-700 transition-colors duration-200">
                                    Privacy Policy
                                </a>
                            </label>
                        </div>

                        {/* Sign Up Button */}
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-teal-500 bg-emerald-500 text-white py-3 rounded-lg font-semibold hover:from-teal-600 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg"
                        >
                            <span>Create Account</span>
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
                                <span className="text-gray-700">Sign up with Google</span>
                            </button>

                            <button className="w-full flex items-center justify-center space-x-3 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                                <div className="w-5 h-5 bg-black rounded flex items-center justify-center">
                                    <span className="text-white text-xs font-bold">A</span>
                                </div>
                                <span className="text-gray-700">Sign up with Apple</span>
                            </button>

                            <button className="w-full flex items-center justify-center space-x-3 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                                <div className="w-5 h-5 bg-blue-600 rounded flex items-center justify-center">
                                    <span className="text-white text-xs font-bold">S</span>
                                </div>
                                <span className="text-gray-700">Sign up with SSO</span>
                            </button>
                        </div>

                        {/* Sign In Link */}
                        <p className="text-center text-sm text-gray-600 mt-8">
                            Already have an account?{' '}
                            <Link
                                to="/Login"
                                className="text-teal-600 hover:text-teal-700 font-semibold transition-colors duration-200"
                            >
                                Sign In
                            </Link>
                        </p>

                        {/* Terms and Security */}
                        <div className="text-center text-xs text-gray-500 space-y-2 mt-6">
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

export default Signup;