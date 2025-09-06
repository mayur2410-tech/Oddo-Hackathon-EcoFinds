// src/pages/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup
} from 'firebase/auth';
import { auth, googleProvider } from '../firebase';
import { ArrowRight, Mail, Lock, Eye, EyeOff } from 'lucide-react';
import loginimg from '../assets/img/loginimg.png';

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false); // ✅ Toggle between Sign In & Sign Up
  const navigate = useNavigate();

  // ✅ Email + Password Authentication
  const handleAuth = async (e) => {
    e.preventDefault();
    try {
      let userCredential;
      if (isSignUp) {
        // Sign Up
        userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log("Signed up user:", userCredential.user);
      } else {
        // Sign In
        userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log("Logged in user:", userCredential.user);
      }
      navigate("/");
    } catch (error) {
      console.error("Auth error:", error.message);
      alert(error.message);
    }
  };

  // ✅ Google Sign-In
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("Google user:", result.user);
      navigate("/");
    } catch (error) {
      console.error("Google sign-in error:", error.message);
      alert(error.message);
    }
  };

  // ✅ Apple Sign-In
  const handleAppleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, appleProvider);

      // Apple does not always return email/displayName on subsequent logins
      console.log("Apple user:", result.user);

      navigate("/");
    } catch (error) {
      console.error("Apple sign-in error:", error.message);
      alert(error.message);
    }
  };


  return (
    <div className="min-h-screen flex">
      {/* Left Panel */}
      <div className="w-[50%] relative overflow-hidden">
        <img src={loginimg} alt="Marketplace" className="w-full h-full object-cover" />
      </div>

      {/* Right Panel */}
      <div className="w-[55%] bg-white flex flex-col justify-center px-8 py-12">
        <div className="w-full max-w-sm mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {isSignUp ? "Create a new account" : "Sign in to your account"}
          </h2>

          <form className="space-y-6" onSubmit={handleAuth}>
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
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
                  required
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
                  className="w-full pl-12 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-teal-500 to-orange-500 text-white py-3 rounded-lg font-semibold hover:from-teal-600 hover:to-orange-600 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg"
            >
              <span>{isSignUp ? "Sign Up" : "Sign In"}</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>

          {/* Toggle Sign In / Sign Up */}
          <p className="mt-4 text-sm text-gray-600 text-center">
            {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
            <button
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-teal-600 hover:underline font-medium"
            >
              {isSignUp ? "Sign In" : "Sign Up"}
            </button>
          </p>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 border-t border-gray-300"></div>
            <span className="px-4 text-gray-500 text-sm">OR</span>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>

          {/* Google Login Button */}
          <button
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center space-x-3 py-3 border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">G</span>
            </div>
            <span className="text-gray-700">
              Continue with Google
            </span>
          </button>

          <button
            onClick={handleAppleLogin}
            className="w-full flex items-center justify-center space-x-3 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 mt-3"
          >
            <div className="w-5 h-5 bg-black rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold"></span>
            </div>
            <span className="text-gray-700">Continue with Apple</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
