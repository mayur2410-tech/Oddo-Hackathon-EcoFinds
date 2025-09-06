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
  Edit,
  Eye,
  Users,
  FileText,
  Award,
  Shield,
  Activity,
  Save,
  Download,
  Upload,
  
} from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
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
                  <Link
                    to="/"
                    className="flex items-center space-x-3 text-white hover:text-emerald-100 w-full text-left"
                  >
                    <Store className="h-5 w-5" />
                    <span>Marketplace</span>
                  </Link>
                  <div className="border-t border-white/40 my-2"></div>
                  <Link
                    to="/profile"
                    className="flex items-center space-x-3 text-white hover:text-emerald-100 w-full text-left"
                  >
                    <User className="h-5 w-5" />
                    <span>Profile</span>
                  </Link>
                  <div className="border-t border-white/40 my-2"></div>
                  <Link
                    to="/cart"
                    className="flex items-center space-x-3 text-white hover:text-emerald-100 w-full text-left"
                  >
                    <ShoppingCart className="h-5 w-5" />
                    <span>Cart</span>
                  </Link>
                  <div className="border-t border-white/40 my-2"></div>
                  <Link
                    to="/wishlist"
                    className="flex items-center space-x-3 text-white hover:text-emerald-100 w-full text-left"
                  >
                    <Heart className="h-5 w-5" />
                    <span>Wishlist</span>
                  </Link>
                  <div className="border-t border-white/40 my-2"></div>
                  <Link
                    to="/orders"
                    className="flex items-center space-x-3 text-white hover:text-emerald-100 w-full text-left"
                  >
                    <Package className="h-5 w-5" />
                    <span>Orders</span>
                  </Link>
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

export default function Profile() {
  const [isEditing, setIsEditing] = useState({})
  const [profileData, setProfileData] = useState({
    name: "Sarah Johnson",
    title: "Community Manager since March 2023",
    location: "New York",
    email: "sarah.johnson@example.com",
    phone: "+1 (555) 123-4567",
    dateOfBirth: "March 16, 1990",
    address: "123 Main Street, Apt 4B",
    city: "New York",
    zipCode: "10001",
    jobTitle: "Senior UX Designer",
    company: "TechCorp Inc.",
    department: "Technology",
    yearsOfExperience: "8 years",
    workLocation: "Remote",
    bio: "Passionate UX designer with 8+ years of experience creating user-centered digital experiences. Specialized in mobile app design and digital systems.",
  })

  const [stats] = useState({
    profileViews: 1247,
    connections: 342,
    posts: 89,
    achievements: 23,
  })

  const [preferences, setPreferences] = useState({
    categories: ["Technology", "Design", "Marketing", "Business", "Health"],
    emailNotifications: true,
    publicProfile: true,
    smsNotifications: true,
  })

  const [socialLinks, setSocialLinks] = useState({
    linkedin: "https://linkedin.com/in/sarahjohnson",
    github: "https://github.com/sarahjohnson",
    twitter: "https://twitter.com/sarahjohnson",
    instagram: "https://instagram.com/sarahjohnson",
    website: "https://sarahjohnson.dev",
  })

  const [skills] = useState([
    { name: "Adobe Creative Suite", level: 95 },
    { name: "Figma/Sketch", level: 90 },
    { name: "Prototyping", level: 85 },
    { name: "User Research", level: 80 },
  ])

  const [security, setSecurity] = useState({
    twoFactorAuth: true,
    loginNotifications: true,
    activeSession: true,
  })

  const [activities] = useState([
    { type: "profile", action: "Profile updated", time: "2 hours ago", icon: "👤" },
    { type: "password", action: "Password changed", time: "1 day ago", icon: "🔒" },
    { type: "api", action: "API key generated", time: "3 days ago", icon: "🔑" },
    { type: "login", action: "Signed in from Chrome on Windows", time: "5 days ago", icon: "💻" },
  ])

  const handleEdit = (section) => {
    setIsEditing((prev) => ({ ...prev, [section]: !prev[section] }))
  }

  const handleSave = (section) => {
    setIsEditing((prev) => ({ ...prev, [section]: false }))
  }

  const handleInputChange = (field, value) => {
    setProfileData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSocialLinkChange = (platform, value) => {
    setSocialLinks((prev) => ({ ...prev, [platform]: value }))
  }

  const togglePreference = (key) => {
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  const toggleSecurity = (key) => {
    setSecurity((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="w-full px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Header */}
        <Card className="p-6 bg-gradient-to-r from-emerald-400 to-emerald-500 text-white shadow-lg rounded-xl">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <Avatar className="w-24 h-24 border-4 border-white shadow-md">
                <AvatarImage src="/professional-woman-diverse.png" />
                <AvatarFallback>SJ</AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-3xl font-bold">{profileData.name}</h1>
                <p className="text-white/90 text-lg">{profileData.title}</p>
              </div>
            </div>
            <div className="flex space-x-3 mt-4 sm:mt-0">
              <Button variant="secondary" size="sm" className="bg-white/20 hover:bg-white/30 text-white">
                <Download className="w-4 h-4 mr-2" />
                Export Data
              </Button>
              <Button variant="secondary" size="sm" className="bg-white/20 hover:bg-white/30 text-white">
                Share Profile
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { icon: Eye, label: "Profile Views", value: stats.profileViews.toLocaleString() },
              { icon: Users, label: "Connections", value: stats.connections },
              { icon: FileText, label: "Posts", value: stats.posts },
              { icon: Award, label: "Achievements", value: stats.achievements },
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Personal Information */}
          <Card className="p-6 shadow-md hover:shadow-lg transition-shadow rounded-xl">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold flex items-center">
                <div className="w-6 h-6 bg-emerald-500 rounded mr-2 flex items-center justify-center">
                  <span className="text-white text-xs">👤</span>
                </div>
                Personal Information
              </h2>
              <Button
                variant="outline"
                size="sm"
                onClick={() => (isEditing.personal ? handleSave("personal") : handleEdit("personal"))}
                className="hover:bg-emerald-50"
              >
                {isEditing.personal ? <Save className="w-4 h-4" /> : <Edit className="w-4 h-4" />}
              </Button>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { label: "Full Name", field: "name" },
                  { label: "Email Address", field: "email" },
                  { label: "Phone Number", field: "phone" },
                  { label: "Date of Birth", field: "dateOfBirth" },
                ].map((item, index) => (
                  <div key={index}>
                    <label className="text-sm text-gray-600">{item.label}</label>
                    {isEditing.personal ? (
                      <Input
                        value={profileData[item.field]}
                        onChange={(e) => handleInputChange(item.field, e.target.value)}
                        className="mt-1 focus:ring-emerald-500 focus:border-emerald-500"
                      />
                    ) : (
                      <p className="font-medium">{profileData[item.field]}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Location & Contact */}
          <Card className="p-6 shadow-md hover:shadow-lg transition-shadow rounded-xl">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Location & Contact</h2>
              <Button
                variant="outline"
                size="sm"
                onClick={() => (isEditing.location ? handleSave("location") : handleEdit("location"))}
                className="hover:bg-emerald-50"
              >
                {isEditing.location ? <Save className="w-4 h-4" /> : <Edit className="w-4 h-4" />}
              </Button>
            </div>
            <div className="space-y-4">
              {[
                { label: "Address", field: "address" },
                { label: "City", field: "city" },
                { label: "ZIP/Postal Code", field: "zipCode" },
              ].map((item, index) => (
                <div key={index} className={item.field === "address" ? "" : "sm:w-1/2"}>
                  <label className="text-sm text-gray-600">{item.label}</label>
                  {isEditing.location ? (
                    <Input
                      value={profileData[item.field]}
                      onChange={(e) => handleInputChange(item.field, e.target.value)}
                      className="mt-1 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  ) : (
                    <p className="font-medium">{profileData[item.field]}</p>
                  )}
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Preferences & Interests */}
        <Card className="p-6 shadow-md hover:shadow-lg transition-shadow rounded-xl">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold flex items-center">
              <div className="w-6 h-6 bg-emerald-500 rounded mr-2 flex items-center justify-center">
                <span className="text-white text-xs">⚙️</span>
              </div>
              Preferences & Interests
            </h2>
            <Button variant="outline" size="sm" className="hover:bg-emerald-50">
              Edit Profile
            </Button>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium mb-3">Preferred Categories</h3>
              <div className="flex flex-wrap gap-2">
                {preferences.categories.map((category, index) => (
                  <Badge key={index} variant="secondary" className="bg-emerald-100 text-emerald-800">
                    {category}
                  </Badge>
                ))}
                <Button variant="outline" size="sm" className="hover:bg-emerald-50">
                  + Add Category
                </Button>
              </div>
            </div>
            <div>
              <h3 className="font-medium mb-3">Privacy Settings</h3>
              <div className="space-y-3">
                {[
                  { label: "Public Profile", key: "publicProfile" },
                  { label: "Email Notifications", key: "emailNotifications" },
                  { label: "SMS Notifications", key: "smsNotifications" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm">{item.label}</span>
                    <Switch
                      checked={preferences[item.key]}
                      onCheckedChange={() => togglePreference(item.key)}
                      className="data-[state=checked]:bg-emerald-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>

        {/* Social Media Links */}
        <Card className="p-6 shadow-md hover:shadow-lg transition-shadow rounded-xl">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold flex items-center">
              <div className="w-6 h-6 bg-emerald-500 rounded mr-2 flex items-center justify-center">
                <span className="text-white text-xs">🔗</span>
              </div>
              Social Media Links
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(socialLinks).map(([platform, url]) => (
              <div key={platform} className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-emerald-50">
                <div className="w-8 h-8 bg-emerald-100 rounded flex items-center justify-center">
                  <span className="text-emerald-600 text-sm font-bold">{platform.charAt(0).toUpperCase()}</span>
                </div>
                <div className="flex-1">
                  <p className="font-medium capitalize">{platform}</p>
                  {isEditing.social ? (
                    <Input
                      value={url}
                      onChange={(e) => handleSocialLinkChange(platform, e.target.value)}
                      className="mt-1 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  ) : (
                    <p className="text-sm text-gray-600 truncate">{url}</p>
                  )}
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleEdit("social")}
                  className="hover:bg-emerald-100"
                >
                  <Edit className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        </Card>

        {/* Professional Information */}
        <Card className="p-6 shadow-md hover:shadow-lg transition-shadow rounded-xl">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold flex items-center">
              <div className="w-6 h-6 bg-emerald-500 rounded mr-2 flex items-center justify-center">
                <span className="text-white text-xs">💼</span>
              </div>
              Professional Information
            </h2>
            <Button
              variant="outline"
              size="sm"
              onClick={() => (isEditing.professional ? handleSave("professional") : handleEdit("professional"))}
              className="hover:bg-emerald-50"
            >
              {isEditing.professional ? <Save className="w-4 h-4" /> : <Edit className="w-4 h-4" />}
            </Button>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              {[
                { label: "Job Title", field: "jobTitle" },
                { label: "Company", field: "company" },
                { label: "Department", field: "department" },
              ].map((item, index) => (
                <div key={index}>
                  <label className="text-sm text-gray-600">{item.label}</label>
                  {isEditing.professional ? (
                    <Input
                      value={profileData[item.field]}
                      onChange={(e) => handleInputChange(item.field, e.target.value)}
                      className="mt-1 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  ) : (
                    <p className="font-medium">{profileData[item.field]}</p>
                  )}
                </div>
              ))}
            </div>
            <div className="space-y-4">
              {[
                { label: "Years of Experience", field: "yearsOfExperience" },
                { label: "Work Location", field: "workLocation" },
              ].map((item, index) => (
                <div key={index}>
                  <label className="text-sm text-gray-600">{item.label}</label>
                  {isEditing.professional ? (
                    <Input
                      value={profileData[item.field]}
                      onChange={(e) => handleInputChange(item.field, e.target.value)}
                      className="mt-1 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  ) : (
                    <p className="font-medium">{profileData[item.field]}</p>
                  )}
                </div>
              ))}
              <div>
                <label className="text-sm text-gray-600">Bio/Description</label>
                {isEditing.professional ? (
                  <Textarea
                    value={profileData.bio}
                    onChange={(e) => handleInputChange("bio", e.target.value)}
                    rows={4}
                    className="mt-1 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                ) : (
                  <p className="text-sm text-gray-700">{profileData.bio}</p>
                )}
              </div>
            </div>
          </div>
        </Card>

        {/* Skills & Expertise */}
        <Card className="p-6 shadow-md hover:shadow-lg transition-shadow rounded-xl">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold flex items-center">
              <div className="w-6 h-6 bg-emerald-500 rounded mr-2 flex items-center justify-center">
                <span className="text-white text-xs">🎯</span>
              </div>
              Skills & Expertise
            </h2>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="font-medium mb-4">Technical Skills</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-600">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2 bg-emerald-100" indicatorClassName="bg-emerald-500" />
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-medium mb-4">Certifications & Awards</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: "Google UX Design Certificate", issuer: "Coursera • 2023", color: "emerald" },
                  { title: "Design Excellence Award", issuer: "TechCorp • 2023", color: "purple" },
                ].map((cert, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-emerald-50">
                    <div className={`w-10 h-10 bg-${cert.color}-100 rounded flex items-center justify-center`}>
                      <Award className={`w-5 h-5 text-${cert.color}-600`} />
                    </div>
                    <div>
                      <p className="font-medium">{cert.title}</p>
                      <p className="text-sm text-gray-600">{cert.issuer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>

        {/* Security Settings */}
        <Card className="p-6 shadow-md hover:shadow-lg transition-shadow rounded-xl">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold flex items-center">
              <div className="w-6 h-6 bg-emerald-500 rounded mr-2 flex items-center justify-center">
                <Shield className="w-4 h-4 text-white" />
              </div>
              Security Settings
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium mb-4">Password & Authentication</h3>
              <div className="space-y-4">
                {[
                  { title: "Current Password", desc: "Last changed 3 months ago", action: "Change Password" },
                  { title: "Two-Factor Authentication", desc: "Add an extra layer of security", key: "twoFactorAuth", type: "switch" },
                  { title: "Login Notifications", desc: "Get notified of new sign-ins", key: "loginNotifications", type: "switch" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg hover:bg-emerald-50">
                    <div>
                      <p className="font-medium">{item.title}</p>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                    {item.type === "switch" ? (
                      <Switch
                        checked={security[item.key]}
                        onCheckedChange={() => toggleSecurity(item.key)}
                        className="data-[state=checked]:bg-emerald-500"
                      />
                    ) : (
                      <Button variant="outline" size="sm" className="hover:bg-emerald-50">
                        {item.action}
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-medium mb-4">Account Security</h3>
              <div className="space-y-4">
                {[
                  { title: "Active Sessions", desc: "Manage your active sessions", action: "Manage" },
                  { title: "Delete Account", desc: "Permanently delete your account", action: "Delete Account", variant: "destructive" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg hover:bg-emerald-50">
                    <div>
                      <p className="font-medium">{item.title}</p>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                    <Button variant={item.variant || "outline"} size="sm" className="hover:bg-emerald-50">
                      {item.action}
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>

        {/* Recent Activity */}
        <Card className="p-6 shadow-md hover:shadow-lg transition-shadow rounded-xl">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold flex items-center">
              <div className="w-6 h-6 bg-emerald-500 rounded mr-2 flex items-center justify-center">
                <Activity className="w-4 h-4 text-white" />
              </div>
              Recent Activity
            </h2>
            <Button variant="outline" size="sm" className="hover:bg-emerald-50">
              View All Activity
            </Button>
          </div>
          <div className="space-y-3">
            {activities.map((activity, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 hover:bg-emerald-50 rounded-lg">
                <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                  <span>{activity.icon}</span>
                </div>
                <div className="flex-1">
                  <p className="font-medium">{activity.action}</p>
                  <p className="text-sm text-gray-600">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4 pt-6">
          <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
            <Save className="w-4 h-4 mr-2" />
            Save All Changes
          </Button>
          <Button variant="outline" className="hover:bg-emerald-50">
            <X className="w-4 h-4 mr-2" />
            Discard Changes
          </Button>
          <Button variant="outline" className="bg-orange-500 text-white hover:bg-orange-600">
            <Upload className="w-4 h-4 mr-2" />
            Reset to Default
          </Button>
        </div>

        {/* Footer */}
        <div className="bg-gray-900 text-white p-6 rounded-xl mt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold mb-2 flex items-center">
                <div className="w-6 h-6 bg-emerald-500 rounded mr-2 flex items-center justify-center">
                  <span className="text-white text-xs">P</span>
                </div>
                ProfileHub
              </h3>
              <p className="text-sm text-gray-400">
                Manage your profile and security. Connect with your community. Continue your professional journey.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Quick Links</h4>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>Help Center</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Support</h4>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>Documentation</li>
                <li>Community</li>
                <li>Security</li>
                <li>Status</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm text-gray-400">
            © 2024 ProfileHub. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  )
}