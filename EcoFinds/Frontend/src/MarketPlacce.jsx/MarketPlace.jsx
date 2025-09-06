"use client"

import React, { useState } from "react"
import {
  Search,
  ShoppingCart,
  User,
  Bell,
  Menu,
  X,
  Heart,
  Package,
  Store,
  DollarSign,
  TrendingUp,
  Edit,
  Share,
  Trash2,
  Plus,
  Star,
  AlertTriangle,
  CheckCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e) => {
    e.preventDefault()
    console.log("Searching for:", searchQuery)
  }

  return (
    <nav className="bg-gradient-to-r from-emerald-400 to-emerald-500 w-full">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
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
                  <button className="flex items-center space-x-3 text-white hover:text-emerald-100 w-full text-left">
                    <Store className="h-5 w-5" />
                    <span>Marketplace</span>
                  </button>
                  <div className="border-t border-white/40 my-2"></div>
                  <button className="flex items-center space-x-3 text-white hover:text-emerald-100 w-full text-left">
                    <User className="h-5 w-5" />
                    <span>Profile</span>
                  </button>
                  <div className="border-t border-white/40 my-2"></div>
                  <button className="flex items-center space-x-3 text-white hover:text-emerald-100 w-full text-left">
                    <ShoppingCart className="h-5 w-5" />
                    <span>Cart</span>
                  </button>
                  <div className="border-t border-white/40 my-2"></div>
                  <button className="flex items-center space-x-3 text-white hover:text-emerald-100 w-full text-left">
                    <Heart className="h-5 w-5" />
                    <span>Wishlist</span>
                  </button>
                  <div className="border-t border-white/40 my-2"></div>
                  <button className="flex items-center space-x-3 text-white hover:text-emerald-100 w-full text-left">
                    <Package className="h-5 w-5" />
                    <span>Orders</span>
                  </button>
                </div>
              </SheetContent>
            </Sheet>
            <h1 className="text-white text-2xl font-bold">EcoFind</h1>
          </div>
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
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-emerald-600 text-white px-4 py-1.5 rounded-full transition-colors duration-200 hover:bg-emerald-700"
              >
                <Search className="h-4 w-4" />
              </button>
            </form>
          </div>
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
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-emerald-100 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
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
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-emerald-600 text-white px-4 py-1.5 rounded-full transition-colors duration-200 hover:bg-emerald-700"
            >
              <Search className="h-4 w-4" />
            </button>
          </form>
        </div>
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              <button className="flex items-center space-x-2 text-white hover:text-emerald-100 transition-colors duration-200">
                <Bell className="h-5 w-5" />
                <span>Notifications</span>
                <span className="bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  3
                </span>
              </button>
              <button className="flex items-center space-x-2 text-white hover:text-emerald-100 transition-colors duration-200">
                <ShoppingCart className="h-5 w-5" />
                <span>Cart</span>
                <span className="bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  2
                </span>
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
  )
}

export default function MarketPlace() {
  const [activeTab, setActiveTab] = useState("all")
  const [isEditing, setIsEditing] = useState({})

  const [stats] = useState({
    totalProducts: 24,
    totalRevenue: 12450,
    totalOrders: 18,
    averageOrder: 89,
  })

  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: 149,
      image: "/premium-wireless-headphones.png",
      rating: 4.8,
      reviews: 124,
      status: "active",
      category: "Electronics",
      stock: 45,
    },
    {
      id: 2,
      name: "Designer Leather Handbag",
      price: 299,
      image: "/designer-leather-handbag.jpg",
      rating: 4.9,
      reviews: 89,
      status: "active",
      category: "Fashion",
      stock: 12,
    },
    {
      id: 3,
      name: "Latest Smartphone",
      price: 899,
      image: "/latest-smartphone.png",
      rating: 4.7,
      reviews: 256,
      status: "active",
      category: "Electronics",
      stock: 8,
    },
    {
      id: 4,
      name: "Vintage Coffee Maker",
      price: 179,
      image: "/placeholder-mi33f.png",
      rating: 4.6,
      reviews: 67,
      status: "active",
      category: "Home",
      stock: 23,
    },
    {
      id: 5,
      name: "Fitness Smartwatch",
      price: 249,
      image: "/fitness-smartwatch.png",
      rating: 4.5,
      reviews: 143,
      status: "active",
      category: "Electronics",
      stock: 31,
    },
    {
      id: 6,
      name: "Ceramic Decorative Vase",
      price: 79,
      image: "/placeholder-jiecf.png",
      rating: 4.4,
      reviews: 34,
      status: "active",
      category: "Home",
      stock: 15,
    },
    {
      id: 7,
      name: "Professional Camera Lens",
      price: 599,
      image: "/professional-camera-lens.jpg",
      rating: 4.9,
      reviews: 78,
      status: "active",
      category: "Electronics",
      stock: 6,
    },
    {
      id: 8,
      name: "Cozy Winter Sweater",
      price: 89,
      image: "/placeholder-l5liw.png",
      rating: 4.3,
      reviews: 92,
      status: "active",
      category: "Fashion",
      stock: 28,
    },
  ])

  const [recentActivity] = useState([
    {
      type: "product",
      action: "Premium Wireless Headphones was added to your catalog",
      time: "2 hours ago",
      icon: "📦",
    },
    {
      type: "order",
      action: "Order received",
      description: "New order for Designer Leather Handbag",
      time: "4 hours ago",
      icon: "🛒",
    },
    {
      type: "stock",
      action: "Low stock alert",
      description: "Professional Camera Lens is running low (6 items left)",
      time: "6 hours ago",
      icon: "⚠️",
    },
  ])

  const [performanceInsights] = useState({
    topSelling: [
      { name: "Premium Wireless Headphones", sales: 45, trend: "up" },
      { name: "Latest Smartphone", sales: 32, trend: "up" },
      { name: "Fitness Smartwatch", sales: 28, trend: "stable" },
    ],
    needAttention: [
      { name: "Low Stock Items", count: 3, type: "warning" },
      { name: "No Recent Sales", count: 2, type: "alert" },
      { name: "Price Reviews", count: 1, type: "info" },
    ],
    quickActions: [
      { name: "Add New Product", action: "add", icon: Plus },
      { name: "Export Catalog", action: "export", icon: Package },
      { name: "Analytics Report", action: "analytics", icon: TrendingUp },
    ],
  })

  const handleEdit = (productId) => {
    setIsEditing((prev) => ({ ...prev, [productId]: !prev[productId] }))
  }

  const handleDelete = (productId) => {
    setProducts((prev) => prev.filter((p) => p.id !== productId))
  }

  const handleShare = (product) => {
    navigator.clipboard?.writeText(`Check out ${product.name} for $${product.price}`)
    alert(`Product link copied to clipboard!`)
  }

  const handleAddProduct = () => {
    const newProduct = {
      id: Date.now(),
      name: "New Product",
      price: 0,
      image: "/new-product-launch.png",
      rating: 0,
      reviews: 0,
      status: "draft",
      category: "Uncategorized",
      stock: 0,
    }
    setProducts((prev) => [newProduct, ...prev])
    setIsEditing((prev) => ({ ...prev, [newProduct.id]: true }))
  }

  const updateProduct = (productId, field, value) => {
    setProducts((prev) => prev.map((p) => (p.id === productId ? { ...p, [field]: value } : p)))
  }

  const filteredProducts = products.filter((product) => {
    switch (activeTab) {
      case "sale":
        return product.price < 100
      case "draft":
        return product.status === "draft"
      default:
        return true
    }
  })

  const tabs = [
    { id: "all", label: "All Products", count: products.length },
    { id: "sale", label: "On Sale", count: products.filter((p) => p.price < 100).length },
    { id: "draft", label: "Draft", count: products.filter((p) => p.status === "draft").length },
    { id: "analytics", label: "Analytics", count: null },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="w-full px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Header */}
        <Card className="p-6 bg-gradient-to-r from-emerald-400 to-emerald-500 text-white shadow-lg rounded-xl">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold flex items-center">
                <Package className="w-8 h-8 mr-3" />
                MarketPlace
              </h1>
              <p className="text-white/90 mt-1 text-lg">Manage your products and sales</p>
            </div>
            <Button onClick={handleAddProduct} className="bg-white text-emerald-600 hover:bg-gray-100 mt-4 sm:mt-0">
              <Plus className="w-4 h-4 mr-2" />
              Add Product
            </Button>
          </div>

          {/* Navigation Tabs */}
          <div className="flex flex-wrap gap-2 mb-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === tab.id ? "bg-white text-emerald-600" : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {tab.label}
                {tab.count !== null && <span className="ml-2 text-xs">{tab.count}</span>}
              </button>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { icon: Package, label: "Total Products", value: stats.totalProducts },
              { icon: DollarSign, label: "Total Revenue", value: `$${stats.totalRevenue.toLocaleString()}` },
              { icon: ShoppingCart, label: "Total Orders", value: stats.totalOrders },
              { icon: TrendingUp, label: "Average Order", value: `$${stats.averageOrder}` },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center space-x-2">
                  <stat.icon className="w-5 h-5" />
                  <span className="text-2xl font-bold">{stat.value}</span>
                </div>
                <p className="text-white/80 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow rounded-xl">
              <div className="relative">
                <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-full h-48 object-cover" />
                <Badge
                  className={`absolute top-2 right-2 ${product.status === "active" ? "bg-emerald-500" : "bg-gray-500"} text-white`}
                >
                  {product.status}
                </Badge>
              </div>
              <div className="p-4">
                {isEditing[product.id] ? (
                  <div className="space-y-2">
                    <Input
                      value={product.name}
                      onChange={(e) => updateProduct(product.id, "name", e.target.value)}
                      className="font-medium focus:ring-emerald-500 focus:border-emerald-500"
                    />
                    <Input
                      type="number"
                      value={product.price}
                      onChange={(e) => updateProduct(product.id, "price", Number(e.target.value))}
                      className="text-lg font-bold text-emerald-600 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                ) : (
                  <>
                    <h3 className="font-medium text-sm mb-2 line-clamp-2">{product.name}</h3>
                    <p className="text-lg font-bold text-emerald-600 mb-2">${product.price}</p>
                  </>
                )}
                <div className="flex items-center space-x-1 mb-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${
                          i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-gray-600">({product.reviews})</span>
                </div>
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary" className="text-xs bg-emerald-100 text-emerald-800">
                    {product.category}
                  </Badge>
                  <span className="text-xs text-gray-600">Stock: {product.stock}</span>
                </div>
                <div className="flex space-x-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 bg-transparent hover:bg-emerald-50"
                    onClick={() => handleEdit(product.id)}
                  >
                    <Edit className="w-3 h-3 mr-1" />
                    Edit
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="hover:bg-emerald-50"
                    onClick={() => handleShare(product)}
                  >
                    <Share className="w-3 h-3" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="hover:bg-red-50"
                    onClick={() => handleDelete(product.id)}
                  >
                    <Trash2 className="w-3 h-3" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Activity */}
          <Card className="p-6 shadow-md hover:shadow-lg transition-shadow rounded-xl">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold flex items-center">
                <div className="w-6 h-6 bg-emerald-500 rounded mr-2 flex items-center justify-center">
                  <span className="text-white text-xs">📋</span>
                </div>
                Recent Activity
              </h2>
              <Button variant="outline" size="sm" className="hover:bg-emerald-50">
                View All
              </Button>
            </div>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 hover:bg-emerald-50 rounded-lg">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span>{activity.icon}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm">{activity.action}</p>
                    {activity.description && <p className="text-xs text-gray-600 mt-1">{activity.description}</p>}
                    <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Performance Insights */}
          <Card className="p-6 shadow-md hover:shadow-lg transition-shadow rounded-xl">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <div className="w-6 h-6 bg-emerald-500 rounded mr-2 flex items-center justify-center">
                <span className="text-white text-xs">📊</span>
              </div>
              Performance Insights
            </h2>
            <div className="space-y-6">
              <div>
                <div className="flex items-center space-x-2 mb-3">
                  <TrendingUp className="w-4 h-4 text-emerald-600" />
                  <h3 className="font-medium">Top Selling</h3>
                </div>
                <div className="space-y-2">
                  {performanceInsights.topSelling.map((item, index) => (
                    <div key={index} className="flex items-center justify-between text-sm">
                      <span className="truncate">{item.name}</span>
                      <div className="flex items-center space-x-2">
                        <span className="font-medium">{item.sales}</span>
                        <TrendingUp className={`w-3 h-3 ${item.trend === "up" ? "text-emerald-500" : "text-gray-500"}`} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="flex items-center space-x-2 mb-3">
                  <AlertTriangle className="w-4 h-4 text-orange-600" />
                  <h3 className="font-medium">Need Attention</h3>
                </div>
                <div className="space-y-2">
                  {performanceInsights.needAttention.map((item, index) => (
                    <div key={index} className="flex items-center justify-between text-sm">
                      <span>{item.name}</span>
                      <Badge
                        variant={item.type === "warning" ? "destructive" : "secondary"}
                        className={`text-xs ${item.type === "warning" ? "bg-red-500" : "bg-emerald-100 text-emerald-800"}`}
                      >
                        {item.count}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="flex items-center space-x-2 mb-3">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  <h3 className="font-medium">Quick Actions</h3>
                </div>
                <div className="space-y-2">
                  {performanceInsights.quickActions.map((action, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      className="w-full justify-start bg-transparent hover:bg-emerald-50"
                    >
                      <action.icon className="w-4 h-4 mr-2" />
                      {action.name}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Footer */}
        <div className="bg-gray-900 text-white p-6 rounded-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold mb-2 flex items-center">
                <div className="w-6 h-6 bg-emerald-500 rounded mr-2 flex items-center justify-center">
                  <Package className="w-4 h-4" />
                </div>
                MarketPlace
              </h3>
              <p className="text-sm text-gray-400">
                Powerful e-commerce management system. Manage products and track sales with ease.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Quick Links</h4>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>Help Center</li>
                <li>Documentation</li>
                <li>API Reference</li>
                <li>Contact Support</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Support</h4>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>Community</li>
                <li>Security</li>
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm text-gray-400">
            © 2024 MarketPlace. All rights reserved. Made with ❤️ by developers.
          </div>
        </div>
      </div>
    </div>
  )
}