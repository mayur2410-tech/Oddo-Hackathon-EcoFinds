"use client"

import { auth } from "../firebase"
import { onAuthStateChanged } from "firebase/auth"
import { useEffect, useState } from "react"
import Navbar from "../LandingPage/components/Navbar"
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
  X,
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

export default function Profile() {
  const [user, setUser] = useState(null)
  const [isEditing, setIsEditing] = useState({})
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [profileData, setProfileData] = useState({
    name: "",
    title: "Community Manager since March 2023",
    location: "New York",
    email: "",
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

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser({
          name: currentUser.displayName || "No Name",
          email: currentUser.email,
          photoURL: currentUser.photoURL || "/default-avatar.png",
        })
        setProfileData((prev) => ({
          ...prev,
          name: currentUser.displayName || "No Name",
          email: currentUser.email,
        }))
      } else {
        setUser(null)
      }
      setIsLoading(false)
    })

    return () => unsubscribe()
  }, [])

  const validateField = (field, value) => {
    const errors = {}
    if (field === "name" && !value.trim()) errors.name = "Name is required"
    if (field === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) errors.email = "Invalid email format"
    if (field === "phone" && !/^\+?\d{10,15}$/.test(value.replace(/\s/g, ""))) errors.phone = "Invalid phone number"
    if (field === "dateOfBirth" && !/^\d{4}-\d{2}-\d{2}$/.test(value)) errors.dateOfBirth = "Invalid date format (YYYY-MM-DD)"
    if (field === "zipCode" && !/^\d{5}(-\d{4})?$/.test(value)) errors.zipCode = "Invalid ZIP code"
    return errors
  }

  const handleEdit = (section) => {
    setIsEditing((prev) => ({ ...prev, [section]: !prev[section] }))
    if (isEditing[section]) {
      setErrors((prev) => ({ ...prev, [section]: null }))
    }
  }

  const handleSave = (section) => {
    const sectionFields = {
      personal: ["name", "email", "phone", "dateOfBirth"],
      location: ["address", "city", "zipCode"],
      professional: ["jobTitle", "company", "department", "yearsOfExperience", "workLocation", "bio"],
      social: Object.keys(socialLinks),
    }

    const fieldsToValidate = sectionFields[section] || []
    const newErrors = {}
    fieldsToValidate.forEach((field) => {
      const fieldErrors = validateField(field, profileData[field] || socialLinks[field] || "")
      Object.assign(newErrors, fieldErrors)
    })

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setIsEditing((prev) => ({ ...prev, [section]: false }))
    setErrors({})
    alert(`${section.charAt(0).toUpperCase() + section.slice(1)} section saved successfully!`)
  }

  const handleInputChange = (field, value) => {
    setProfileData((prev) => ({ ...prev, [field]: value }))
    setErrors((prev) => ({ ...prev, [field]: null }))
  }

  const handleSocialLinkChange = (platform, value) => {
    setSocialLinks((prev) => ({ ...prev, [platform]: value }))
    setErrors((prev) => ({ ...prev, [platform]: null }))
  }

  const togglePreference = (key) => {
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  const toggleSecurity = (key) => {
    setSecurity((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-xl text-gray-600">Loading...</div>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <Card className="p-6 shadow-lg rounded-2xl">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Please Sign In</h2>
          <p className="text-gray-600 mb-6">You need to be logged in to view your profile.</p>
          <Button as={Link} to="/login" className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold">
            Sign In
          </Button>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="w-full px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Header */}
        <Card className="p-6 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-xl rounded-2xl">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <Avatar className="w-24 h-24 border-4 border-white shadow-md">
                <AvatarImage src={user.photoURL} />
                <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-3xl font-bold">{user.name}</h1>
                <p className="text-white/90 text-lg mt-1">{profileData.title}</p>
              </div>
            </div>
            <div className="flex space-x-3 mt-4 sm:mt-0">
              <Button variant="secondary" size="sm" className="bg-white/20 hover:bg-white/30 text-white font-semibold">
                <Download className="w-4 h-4 mr-2" />
                Export Data
              </Button>
              <Button variant="secondary" size="sm" className="bg-white/20 hover:bg-white/30 text-white font-semibold">
                Share Profile
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { icon: Eye, label: "Profile Views", value: stats.profileViews.toLocaleString() },
              { icon: Users, label: "Connections", value: stats.connections },
              { icon: FileText, label: "Posts", value: stats.posts },
              { icon: Award, label: "Achievements", value: stats.achievements },
            ].map((stat, index) => (
              <div key={index} className="text-center bg-white/10 p-4 rounded-lg hover:bg-white/20 transition-colors">
                <div className="flex items-center justify-center space-x-2">
                  <stat.icon className="w-6 h-6 text-emerald-200" />
                  <span className="text-2xl font-bold">{stat.value}</span>
                </div>
                <p className="text-white/80 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Personal Information */}
          <Card className="p-6 shadow-md hover:shadow-lg transition-shadow duration-300 rounded-2xl bg-white">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-xl font-semibold flex items-center">
                <div className="w-7 h-7 bg-emerald-500 rounded-full mr-2 flex items-center justify-center">
                  <span className="text-white text-sm">👤</span>
                </div>
                Personal Information
              </h2>
              <Button
                variant="outline"
                size="sm"
                onClick={() => (isEditing.personal ? handleSave("personal") : handleEdit("personal"))}
                className="hover:bg-emerald-50 text-emerald-600 border-emerald-200"
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
                    <label className="text-sm text-gray-600 font-medium">{item.label}</label>
                    {isEditing.personal ? (
                      <Input
                        value={profileData[item.field]}
                        onChange={(e) => handleInputChange(item.field, e.target.value)}
                        className="mt-1 focus:ring-emerald-500 focus:border-emerald-500"
                        disabled={item.field === "email" && user.email} // Prevent editing Firebase email
                      />
                    ) : (
                      <p className="font-semibold text-gray-800 mt-1">{profileData[item.field]}</p>
                    )}
                    {errors[item.field] && <p className="text-red-500 text-sm mt-1">{errors[item.field]}</p>}
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Location & Contact */}
          <Card className="p-6 shadow-md hover:shadow-lg transition-shadow duration-300 rounded-2xl bg-white">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-xl font-semibold">Location & Contact</h2>
              <Button
                variant="outline"
                size="sm"
                onClick={() => (isEditing.location ? handleSave("location") : handleEdit("location"))}
                className="hover:bg-emerald-50 text-emerald-600 border-emerald-200"
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
                  <label className="text-sm text-gray-600 font-medium">{item.label}</label>
                  {isEditing.location ? (
                    <Input
                      value={profileData[item.field]}
                      onChange={(e) => handleInputChange(item.field, e.target.value)}
                      className="mt-1 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  ) : (
                    <p className="font-semibold text-gray-800 mt-1">{profileData[item.field]}</p>
                  )}
                  {errors[item.field] && <p className="text-red-500 text-sm mt-1">{errors[item.field]}</p>}
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Preferences & Interests */}
        <Card className="p-6 shadow-md hover:shadow-lg transition-shadow duration-300 rounded-2xl bg-white">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-xl font-semibold flex items-center">
              <div className="w-7 h-7 bg-emerald-500 rounded-full mr-2 flex items-center justify-center">
                <span className="text-white text-sm">⚙️</span>
              </div>
              Preferences & Interests
            </h2>
            <Button variant="outline" size="sm" className="hover:bg-emerald-50 text-emerald-600 border-emerald-200">
              Edit Profile
            </Button>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-base mb-4">Preferred Categories</h3>
              <div className="flex flex-wrap gap-2">
                {preferences.categories.map((category, index) => (
                  <Badge key={index} variant="secondary" className="bg-emerald-100 text-emerald-800 font-medium">
                    {category}
                  </Badge>
                ))}
                <Button variant="outline" size="sm" className="hover:bg-emerald-50 text-emerald-600 border-emerald-200">
                  + Add Category
                </Button>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-base mb-4">Privacy Settings</h3>
              <div className="space-y-3">
                {[
                  { label: "Public Profile", key: "publicProfile" },
                  { label: "Email Notifications", key: "emailNotifications" },
                  { label: "SMS Notifications", key: "smsNotifications" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-800">{item.label}</span>
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
        <Card className="p-6 shadow-md hover:shadow-lg transition-shadow duration-300 rounded-2xl bg-white">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-xl font-semibold flex items-center">
              <div className="w-7 h-7 bg-emerald-500 rounded-full mr-2 flex items-center justify-center">
                <span className="text-white text-sm">🔗</span>
              </div>
              Social Media Links
            </h2>
            <Button
              variant="outline"
              size="sm"
              onClick={() => (isEditing.social ? handleSave("social") : handleEdit("social"))}
              className="hover:bg-emerald-50 text-emerald-600 border-emerald-200"
            >
              {isEditing.social ? <Save className="w-4 h-4" /> : <Edit className="w-4 h-4" />}
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(socialLinks).map(([platform, url]) => (
              <div key={platform} className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-emerald-50">
                <div className="w-8 h-8 bg-emerald-100 rounded flex items-center justify-center">
                  <span className="text-emerald-600 text-sm font-bold">{platform.charAt(0).toUpperCase()}</span>
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-sm capitalize">{platform}</p>
                  {isEditing.social ? (
                    <Input
                      value={url}
                      onChange={(e) => handleSocialLinkChange(platform, e.target.value)}
                      className="mt-1 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  ) : (
                    <p className="text-sm text-gray-600 truncate">{url}</p>
                  )}
                  {errors[platform] && <p className="text-red-500 text-sm mt-1">{errors[platform]}</p>}
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Professional Information */}
        <Card className="p-6 shadow-md hover:shadow-lg transition-shadow duration-300 rounded-2xl bg-white">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-xl font-semibold flex items-center">
              <div className="w-7 h-7 bg-emerald-500 rounded-full mr-2 flex items-center justify-center">
                <span className="text-white text-sm">💼</span>
              </div>
              Professional Information
            </h2>
            <Button
              variant="outline"
              size="sm"
              onClick={() => (isEditing.professional ? handleSave("professional") : handleEdit("professional"))}
              className="hover:bg-emerald-50 text-emerald-600 border-emerald-200"
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
                  <label className="text-sm text-gray-600 font-medium">{item.label}</label>
                  {isEditing.professional ? (
                    <Input
                      value={profileData[item.field]}
                      onChange={(e) => handleInputChange(item.field, e.target.value)}
                      className="mt-1 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  ) : (
                    <p className="font-semibold text-gray-800 mt-1">{profileData[item.field]}</p>
                  )}
                  {errors[item.field] && <p className="text-red-500 text-sm mt-1">{errors[item.field]}</p>}
                </div>
              ))}
            </div>
            <div className="space-y-4">
              {[
                { label: "Years of Experience", field: "yearsOfExperience" },
                { label: "Work Location", field: "workLocation" },
              ].map((item, index) => (
                <div key={index}>
                  <label className="text-sm text-gray-600 font-medium">{item.label}</label>
                  {isEditing.professional ? (
                    <Input
                      value={profileData[item.field]}
                      onChange={(e) => handleInputChange(item.field, e.target.value)}
                      className="mt-1 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  ) : (
                    <p className="font-semibold text-gray-800 mt-1">{profileData[item.field]}</p>
                  )}
                  {errors[item.field] && <p className="text-red-500 text-sm mt-1">{errors[item.field]}</p>}
                </div>
              ))}
              <div>
                <label className="text-sm text-gray-600 font-medium">Bio/Description</label>
                {isEditing.professional ? (
                  <Textarea
                    value={profileData.bio}
                    onChange={(e) => handleInputChange("bio", e.target.value)}
                    rows={4}
                    className="mt-1 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                ) : (
                  <p className="text-sm text-gray-700 mt-1 leading-relaxed">{profileData.bio}</p>
                )}
                {errors.bio && <p className="text-red-500 text-sm mt-1">{errors.bio}</p>}
              </div>
            </div>
          </div>
        </Card>

        {/* Skills & Expertise */}
        <Card className="p-6 shadow-md hover:shadow-lg transition-shadow duration-300 rounded-2xl bg-white">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-xl font-semibold flex items-center">
              <div className="w-7 h-7 bg-emerald-500 rounded-full mr-2 flex items-center justify-center">
                <span className="text-white text-sm">🎯</span>
              </div>
              Skills & Expertise
            </h2>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-base mb-4">Technical Skills</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-semibold text-gray-800">{skill.name}</span>
                      <span className="text-sm text-gray-600">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2 bg-emerald-100" indicatorClassName="bg-emerald-500" />
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-base mb-4">Certifications & Awards</h3>
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
                      <p className="font-semibold text-sm">{cert.title}</p>
                      <p className="text-sm text-gray-600">{cert.issuer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>

        {/* Security Settings */}
        <Card className="p-6 shadow-md hover:shadow-lg transition-shadow duration-300 rounded-2xl bg-white">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-xl font-semibold flex items-center">
              <div className="w-7 h-7 bg-emerald-500 rounded-full mr-2 flex items-center justify-center">
                <Shield className="w-4 h-4 text-white" />
              </div>
              Security Settings
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-base mb-4">Password & Authentication</h3>
              <div className="space-y-4">
                {[
                  { title: "Current Password", desc: "Last changed 3 months ago", action: "Change Password" },
                  { title: "Two-Factor Authentication", desc: "Add an extra layer of security", key: "twoFactorAuth", type: "switch" },
                  { title: "Login Notifications", desc: "Get notified of new sign-ins", key: "loginNotifications", type: "switch" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg hover:bg-emerald-50">
                    <div>
                      <p className="font-semibold text-sm">{item.title}</p>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                    {item.type === "switch" ? (
                      <Switch
                        checked={security[item.key]}
                        onCheckedChange={() => toggleSecurity(item.key)}
                        className="data-[state=checked]:bg-emerald-500"
                      />
                    ) : (
                      <Button variant="outline" size="sm" className="hover:bg-emerald-50 text-emerald-600 border-emerald-200">
                        {item.action}
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-base mb-4">Account Security</h3>
              <div className="space-y-4">
                {[
                  { title: "Active Sessions", desc: "Manage your active sessions", action: "Manage" },
                  { title: "Delete Account", desc: "Permanently delete your account", action: "Delete Account", variant: "destructive" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg hover:bg-emerald-50">
                    <div>
                      <p className="font-semibold text-sm">{item.title}</p>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                    <Button
                      variant={item.variant || "outline"}
                      size="sm"
                      className={item.variant === "destructive" ? "hover:bg-red-600 text-white" : "hover:bg-emerald-50 text-emerald-600 border-emerald-200"}
                    >
                      {item.action}
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>

        {/* Recent Activity */}
        <Card className="p-6 shadow-md hover:shadow-lg transition-shadow duration-300 rounded-2xl bg-white">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-xl font-semibold flex items-center">
              <div className="w-7 h-7 bg-emerald-500 rounded-full mr-2 flex items-center justify-center">
                <Activity className="w-4 h-4 text-white" />
              </div>
              Recent Activity
            </h2>
            <Button variant="outline" size="sm" className="hover:bg-emerald-50 text-emerald-600 border-emerald-200">
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
                  <p className="font-semibold text-sm text-gray-800">{activity.action}</p>
                  <p className="text-sm text-gray-600">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4 pt-6">
          <Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold">
            <Save className="w-4 h-4 mr-2" />
            Save All Changes
          </Button>
          <Button variant="outline" className="hover:bg-emerald-50 text-emerald-600 border-emerald-200 font-semibold">
            <X className="w-4 h-4 mr-2" />
            Discard Changes
          </Button>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold">
            <Upload className="w-4 h-4 mr-2" />
            Reset to Default
          </Button>
        </div>

        {/* Footer */}
        <div className="bg-gray-900 text-white p-6 rounded-2xl shadow-lg mt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold text-lg mb-3 flex items-center">
                <div className="w-7 h-7 bg-emerald-500 rounded-full mr-2 flex items-center justify-center">
                  <span className="text-white text-sm">P</span>
                </div>
                ProfileHub
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Manage your profile and security. Connect with your community. Continue your professional journey.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-base mb-3">Quick Links</h4>
              <ul className="text-sm text-gray-300 space-y-2">
                <li><a href="#" className="hover:text-emerald-300 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-emerald-300 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-emerald-300 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-emerald-300 transition-colors">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-base mb-3">Support</h4>
              <ul className="text-sm text-gray-300 space-y-2">
                <li><a href="#" className="hover:text-emerald-300 transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-emerald-300 transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-emerald-300 transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-emerald-300 transition-colors">Status</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm text-gray-300">
            © 2025 ProfileHub. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  )
}