import React, { useState, useEffect } from "react";
import {
  Search,
  ShoppingCart,
  Package2,
  User,
  Bell,
  Menu,
  X,
  Heart,
  Package,
  Store,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../components/ui/sheet";

// ✅ Firebase imports
import { auth } from "../../firebase";
import { onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [user, setUser] = useState(null);

  // Listen for auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // Google login handler
  const handleGoogleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => console.log("Google user:", result.user))
      .catch((error) => console.error(error));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  return (
    <nav className="bg-gradient-to-r from-emerald-400 to-emerald-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left Section */}
          <div className="flex items-center space-x-3">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/20 rounded-full"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64 bg-emerald-500 text-white">
                <SheetHeader>
                  <SheetTitle className="text-lg font-semibold text-white">
                    EcoFind Menu
                  </SheetTitle>
                </SheetHeader>
                <div className="mt-6 space-y-4">
                  <Link to="/" className="flex items-center space-x-3 text-white hover:text-emerald-100 w-full text-left">
                    <Store className="h-5 w-5" />
                    <span>Home</span>
                  </Link>
                  <div className="border-t border-white/40 my-2"></div>
                  <Link to="/marketplace" className="flex items-center space-x-3 text-white hover:text-emerald-100 w-full text-left">
                    <Store className="h-5 w-5" />
                    <span>Marketplace</span>
                  </Link>
                  <div className="border-t border-white/40 my-2"></div>
                  <Link to="/profile" className="flex items-center space-x-3 text-white hover:text-emerald-100 w-full text-left">
                    <User className="h-5 w-5" />
                    <span>Profile</span>
                  </Link>
                  <div className="border-t border-white/40 my-2"></div>
                  <Link to="/cart" className="flex items-center space-x-3 text-white hover:text-emerald-100 w-full text-left">
                    <ShoppingCart className="h-5 w-5" />
                    <span>Cart</span>
                  </Link>
                  <div className="border-t border-white/40 my-2"></div>
                  <Link to="/add-product" className="flex items-center space-x-3 text-white hover:text-emerald-100 w-full text-left">
                    <Package2 className="h-5 w-5" />
                    <span>Add New Product</span>
                  </Link>
                  <div className="border-t border-white/40 my-2"></div>
                  <Link to="/wishlist" className="flex items-center space-x-3 text-white hover:text-emerald-100 w-full text-left">
                    <Heart className="h-5 w-5" />
                    <span>Wishlist</span>
                  </Link>
                  <div className="border-t border-white/40 my-2"></div>
                  <Link to="/orders" className="flex items-center space-x-3 text-white hover:text-emerald-100 w-full text-left">
                    <Package className="h-5 w-5" />
                    <span>Orders</span>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>

            <h1 className="text-white text-2xl font-bold">EcoFind</h1>
          </div>

          {/* Search (Desktop) */}
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
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-emerald-500 text-white px-4 py-1.5 rounded-full transition-colors duration-200"
              >
                <Search className="h-4 w-4" />
              </button>
            </form>
          </div>

          {/* Right Section (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-white hover:text-emerald-100 relative">
              <Bell className="h-6 w-6" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </button>

            <button className="text-white hover:text-emerald-100 relative">
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-xs rounded-full h-5 w-5 flex items-center justify-center">
                2
              </span>
            </button>

            {/* ✅ User Photo + Name */}
            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1.5">
              {user && user.photoURL ? (
                <img
                  src={user.photoURL}
                  alt="User"
                  className="h-8 w-8 rounded-full border-2 border-white"
                />
              ) : (
                <button
                  onClick={handleGoogleLogin}
                  className="text-white px-2 py-1 bg-green-600 rounded-full hover:bg-green-700"
                >
                  Login
                </button>
              )}
              {user?.displayName && (
                <span className="text-white text-sm">{user.displayName}</span>
              )}
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-emerald-100"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
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
              <button className="flex items-center space-x-2 text-white hover:text-emerald-100">
                <Bell className="h-5 w-5" />
                <span>Notifications</span>
                <span className="bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  3
                </span>
              </button>
              <button className="flex items-center space-x-2 text-white hover:text-emerald-100">
                <ShoppingCart className="h-5 w-5" />
                <span>Cart</span>
                <span className="bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  2
                </span>
              </button>
              {/* Mobile User Photo + Name */}
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1.5">
                {user && user.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt="User"
                    className="h-8 w-8 rounded-full border-2 border-white"
                  />
                ) : (
                  <button
                    onClick={handleGoogleLogin}
                    className="text-white px-2 py-1 bg-green-600 rounded-full hover:bg-green-700"
                  >
                    Login
                  </button>
                )}
                {user?.displayName && (
                  <span className="text-white text-sm">{user.displayName}</span>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
