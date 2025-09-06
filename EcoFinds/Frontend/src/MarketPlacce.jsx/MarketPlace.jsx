"use client"

import React, { useState } from "react"
import Navbar from "../LandingPage/components/Navbar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Package,
  DollarSign,
  ShoppingCart,
  TrendingUp,
  Edit,
  Share,
  Trash2,
  Plus,
  Star,
  AlertTriangle,
  CheckCircle,
} from "lucide-react"

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
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="w-full px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Header */}
        <Card className="p-6 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-xl rounded-2xl">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold flex items-center">
                <Package className="w-8 h-8 mr-3" />
                MarketPlace
              </h1>
              <p className="text-white/90 mt-2 text-lg">Manage your products and boost your sales</p>
            </div>
            <Button onClick={handleAddProduct} className="bg-white text-emerald-600 hover:bg-gray-100 mt-4 sm:mt-0 font-semibold">
              <Plus className="w-5 h-5 mr-2" />
              Add Product
            </Button>
          </div>

          {/* Navigation Tabs */}
          <div className="flex flex-wrap gap-3 mb-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-white text-emerald-600 shadow-md"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {tab.label}
                {tab.count !== null && <span className="ml-2 text-xs font-semibold">{tab.count}</span>}
              </button>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { icon: Package, label: "Total Products", value: stats.totalProducts },
              { icon: DollarSign, label: "Total Revenue", value: `$${stats.totalRevenue.toLocaleString()}` },
              { icon: ShoppingCart, label: "Total Orders", value: stats.totalOrders },
              { icon: TrendingUp, label: "Avg. Order", value: `$${stats.averageOrder}` },
            ].map((stat, index) => (
              <div key={index} className="text-center bg-white/10 p-4 rounded-lg">
                <div className="flex items-center justify-center space-x-2">
                  <stat.icon className="w-6 h-6 text-emerald-200" />
                  <span className="text-2xl font-bold">{stat.value}</span>
                </div>
                <p className="text-white/80 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 rounded-2xl bg-white">
              <div className="relative">
                <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-full h-48 object-cover" />
                <Badge
                  className={`absolute top-3 right-3 text-sm font-medium ${
                    product.status === "active" ? "bg-emerald-500 hover:bg-emerald-600" : "bg-gray-500 hover:bg-gray-600"
                  } text-white`}
                >
                  {product.status}
                </Badge>
              </div>
              <div className="p-5">
                {isEditing[product.id] ? (
                  <div className="space-y-3">
                    <Input
                      value={product.name}
                      onChange={(e) => updateProduct(product.id, "name", e.target.value)}
                      className="font-semibold text-base focus:ring-emerald-500 focus:border-emerald-500"
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
                    <h3 className="font-semibold text-base mb-2 line-clamp-2 leading-tight">{product.name}</h3>
                    <p className="text-xl font-bold text-emerald-600 mb-3">${product.price}</p>
                  </>
                )}
                <div className="flex items-center space-x-1 mb-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-gray-500">({product.reviews})</span>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="secondary" className="text-xs bg-emerald-100 text-emerald-800 font-medium">
                    {product.category}
                  </Badge>
                  <span className="text-xs text-gray-500 font-medium">Stock: {product.stock}</span>
                </div>
                <div className="flex space-x-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 bg-transparent hover:bg-emerald-50 text-emerald-600 border-emerald-200"
                    onClick={() => handleEdit(product.id)}
                  >
                    <Edit className="w-4 h-4 mr-1" />
                    {isEditing[product.id] ? "Save" : "Edit"}
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="hover:bg-emerald-50 text-emerald-600 border-emerald-200"
                    onClick={() => handleShare(product)}
                  >
                    <Share className="w-4 h-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="hover:bg-red-50 text-red-600 border-red-200"
                    onClick={() => handleDelete(product.id)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Activity */}
          <Card className="p-6 shadow-md hover:shadow-lg transition-shadow duration-300 rounded-2xl bg-white">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-xl font-semibold flex items-center">
                <div className="w-7 h-7 bg-emerald-500 rounded-full mr-2 flex items-center justify-center">
                  <span className="text-white text-sm">📋</span>
                </div>
                Recent Activity
              </h2>
              <Button variant="outline" size="sm" className="hover:bg-emerald-50 text-emerald-600 border-emerald-200">
                View All
              </Button>
            </div>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 hover:bg-emerald-50 rounded-lg transition-colors">
                  <div className="w-9 h-9 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">{activity.icon}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm text-gray-800">{activity.action}</p>
                    {activity.description && <p className="text-xs text-gray-600 mt-1">{activity.description}</p>}
                    <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Performance Insights */}
          <Card className="p-6 shadow-md hover:shadow-lg transition-shadow duration-300 rounded-2xl bg-white">
            <h2 className="text-xl font-semibold mb-5 flex items-center">
              <div className="w-7 h-7 bg-emerald-500 rounded-full mr-2 flex items-center justify-center">
                <span className="text-white text-sm">📊</span>
              </div>
              Performance Insights
            </h2>
            <div className="space-y-6">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <TrendingUp className="w-5 h-5 text-emerald-600" />
                  <h3 className="font-semibold text-base">Top Selling</h3>
                </div>
                <div className="space-y-3">
                  {performanceInsights.topSelling.map((item, index) => (
                    <div key={index} className="flex items-center justify-between text-sm">
                      <span className="truncate font-medium text-gray-800">{item.name}</span>
                      <div className="flex items-center space-x-2">
                        <span className="font-semibold">{item.sales}</span>
                        <TrendingUp className={`w-4 h-4 ${item.trend === "up" ? "text-emerald-500" : "text-gray-400"}`} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <AlertTriangle className="w-5 h-5 text-orange-600" />
                  <h3 className="font-semibold text-base">Need Attention</h3>
                </div>
                <div className="space-y-3">
                  {performanceInsights.needAttention.map((item, index) => (
                    <div key={index} className="flex items-center justify-between text-sm">
                      <span className="font-medium text-gray-800">{item.name}</span>
                      <Badge
                        variant={item.type === "warning" ? "destructive" : "secondary"}
                        className={`text-xs font-semibold ${
                          item.type === "warning" ? "bg-red-500 hover:bg-red-600" : "bg-emerald-100 text-emerald-800 hover:bg-emerald-200"
                        }`}
                      >
                        {item.count}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                  <h3 className="font-semibold text-base">Quick Actions</h3>
                </div>
                <div className="space-y-3">
                  {performanceInsights.quickActions.map((action, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      className="w-full justify-start bg-transparent hover:bg-emerald-50 text-emerald-600 border-emerald-200 font-semibold"
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
        <div className="bg-gray-900 text-white p-6 rounded-2xl shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold text-lg mb-3 flex items-center">
                <div className="w-7 h-7 bg-emerald-500 rounded-full mr-2 flex items-center justify-center">
                  <Package className="w-4 h-4 text-white" />
                </div>
                MarketPlace
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Streamline your e-commerce with powerful tools to manage products and track sales effortlessly.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-base mb-3">Quick Links</h4>
              <ul className="text-sm text-gray-300 space-y-2">
                <li><a href="#" className="hover:text-emerald-300 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-emerald-300 transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-emerald-300 transition-colors">API Reference</a></li>
                <li><a href="#" className="hover:text-emerald-300 transition-colors">Contact Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-base mb-3">Support</h4>
              <ul className="text-sm text-gray-300 space-y-2">
                <li><a href="#" className="hover:text-emerald-300 transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-emerald-300 transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-emerald-300 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-emerald-300 transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm text-gray-300">
            © 2024 MarketPlace. All rights reserved. Crafted with ❤️ by developers.
          </div>
        </div>
      </div>
    </div>
  )
}