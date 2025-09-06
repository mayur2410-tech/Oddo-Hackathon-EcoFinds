"use client"

import { useState } from "react"
import Navbar from "../LandingPage/components/Navbar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Upload, Plus, Star, Shield, Clock, MapPin, Camera, Trash2 } from "lucide-react"

export default function ProductListingForm() {
  const [formData, setFormData] = useState({
    productName: "",
    productTitle: "",
    category: "",
    condition: "",
    description: "",
    brand: "",
    model: "",
    color: "",
    price: "",
    stockOptions: "",
    negotiable: false,
    location: "",
    deliveryOptions: [],
    contactPhone: "",
    contactEmail: "",
    preferredContact: "",
    availability: {
      morning: false,
      afternoon: false,
      evening: false,
      weekend: false,
    },
    verificationOptions: [],
    agreeToTerms: false,
    privacyPolicy: false,
    marketingConsent: false,
  })

  const [uploadedImages, setUploadedImages] = useState([])
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateForm = () => {
    const newErrors = {}
    if (!formData.productName) newErrors.productName = "Product title is required"
    if (!formData.category) newErrors.category = "Category is required"
    if (!formData.condition) newErrors.condition = "Condition is required"
    if (!formData.description) newErrors.description = "Description is required"
    if (!formData.price || isNaN(formData.price) || Number(formData.price) <= 0) {
      newErrors.price = "Valid price is required"
    }
    if (!formData.stockOptions) newErrors.stockOptions = "Stock option is required"
    if (!formData.location) newErrors.location = "Location is required"
    if (!formData.contactPhone) newErrors.contactPhone = "Phone number is required"
    if (!formData.preferredContact) newErrors.preferredContact = "Preferred contact method is required"
    if (!formData.agreeToTerms) newErrors.agreeToTerms = "You must agree to the Terms of Service"
    return newErrors
  }

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    setErrors((prev) => ({ ...prev, [field]: null }))
  }

  const handleCheckboxChange = (field, checked) => {
    setFormData((prev) => ({ ...prev, [field]: checked }))
    setErrors((prev) => ({ ...prev, [field]: null }))
  }

  const handleAvailabilityChange = (timeSlot, checked) => {
    setFormData((prev) => ({
      ...prev,
      availability: { ...prev.availability, [timeSlot]: checked },
    }))
  }

  const handleDeliveryOptionChange = (option, checked) => {
    setFormData((prev) => ({
      ...prev,
      deliveryOptions: checked
        ? [...prev.deliveryOptions, option]
        : prev.deliveryOptions.filter((item) => item !== option),
    }))
  }

  const handleVerificationChange = (option, checked) => {
    setFormData((prev) => ({
      ...prev,
      verificationOptions: checked
        ? [...prev.verificationOptions, option]
        : prev.verificationOptions.filter((item) => item !== option),
    }))
  }

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files).slice(0, 5 - uploadedImages.length)
    if (files.length + uploadedImages.length > 5) {
      alert("You can upload a maximum of 5 images.")
      return
    }
    setUploadedImages((prev) => [...prev, ...files])
  }

  const handleRemoveImage = (index) => {
    setUploadedImages((prev) => prev.filter((_, i) => i !== index))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validateForm()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    setIsSubmitting(true)
    setTimeout(() => {
      console.log("Form submitted:", formData)
      alert("Product listing created successfully!")
      setIsSubmitting(false)
    }, 1000)
  }

  const handleSaveDraft = () => {
    console.log("Saving draft:", formData)
    alert("Draft saved successfully!")
  }

  const handleCancel = () => {
    setFormData({
      productName: "",
      productTitle: "",
      category: "",
      condition: "",
      description: "",
      brand: "",
      model: "",
      color: "",
      price: "",
      stockOptions: "",
      negotiable: false,
      location: "",
      deliveryOptions: [],
      contactPhone: "",
      contactEmail: "",
      preferredContact: "",
      availability: { morning: false, afternoon: false, evening: false, weekend: false },
      verificationOptions: [],
      agreeToTerms: false,
      privacyPolicy: false,
      marketingConsent: false,
    })
    setUploadedImages([])
    setErrors({})
    alert("Form reset successfully!")
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white py-6 px-4 sm:px-6 lg:px-8 shadow-lg">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold flex items-center gap-3">
            <Plus className="w-8 h-8" />
            Add New Product
          </h1>
          <p className="text-white/90 mt-2 text-lg">Create a listing to sell your item quickly and securely</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Product Details */}
        <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 rounded-2xl bg-white">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Product Details</CardTitle>
            <p className="text-sm text-gray-600">Tell us about your item</p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <Label htmlFor="productName" className="font-medium text-gray-800">Product Title</Label>
              <Input
                id="productName"
                placeholder="e.g. Bluetooth Headphones"
                value={formData.productName}
                onChange={(e) => handleInputChange("productName", e.target.value)}
                className="mt-1 focus:ring-emerald-500 focus:border-emerald-500"
              />
              {errors.productName && <p className="text-red-500 text-sm mt-1">{errors.productName}</p>}
            </div>

            <div>
              <Label htmlFor="category" className="font-medium text-gray-800">Category</Label>
              <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                <SelectTrigger className="mt-1 focus:ring-emerald-500 focus:border-emerald-500">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="electronics">Electronics</SelectItem>
                  <SelectItem value="clothing">Clothing</SelectItem>
                  <SelectItem value="home">Home & Garden</SelectItem>
                  <SelectItem value="sports">Sports & Recreation</SelectItem>
                  <SelectItem value="books">Books</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category}</p>}
            </div>

            <div>
              <Label className="font-medium text-gray-800">Condition</Label>
              <RadioGroup
                value={formData.condition}
                onValueChange={(value) => handleInputChange("condition", value)}
                className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-2"
              >
                {["Like New", "Good", "Fair", "Poor"].map((cond) => (
                  <div key={cond} className="flex items-center space-x-2">
                    <RadioGroupItem value={cond.toLowerCase()} id={cond.toLowerCase()} />
                    <Label htmlFor={cond.toLowerCase()} className="text-sm">{cond}</Label>
                  </div>
                ))}
              </RadioGroup>
              {errors.condition && <p className="text-red-500 text-sm mt-1">{errors.condition}</p>}
            </div>
          </CardContent>
        </Card>

        {/* Description */}
        <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 rounded-2xl bg-white">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Description</CardTitle>
            <p className="text-sm text-gray-600">Provide detailed information about your item</p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <Label htmlFor="description" className="font-medium text-gray-800">Product Description</Label>
              <Textarea
                id="description"
                placeholder="Describe your item in detail..."
                rows={5}
                value={formData.description}
                onChange={(e) => handleInputChange("description", e.target.value)}
                className="mt-1 focus:ring-emerald-500 focus:border-emerald-500"
              />
              {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
            </div>
          </CardContent>
        </Card>

        {/* Brand/Options */}
        <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 rounded-2xl bg-white">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Brand/Options</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="brand" className="font-medium text-gray-800">Brand</Label>
                <Input
                  id="brand"
                  placeholder="e.g. Apple, Samsung"
                  value={formData.brand}
                  onChange={(e) => handleInputChange("brand", e.target.value)}
                  className="mt-1 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
              <div>
                <Label htmlFor="model" className="font-medium text-gray-800">Model</Label>
                <Input
                  id="model"
                  placeholder="e.g. iPhone 13"
                  value={formData.model}
                  onChange={(e) => handleInputChange("model", e.target.value)}
                  className="mt-1 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="color" className="font-medium text-gray-800">Color</Label>
              <Input
                id="color"
                placeholder="e.g. Midnight, Silver"
                value={formData.color}
                onChange={(e) => handleInputChange("color", e.target.value)}
                className="mt-1 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>
          </CardContent>
        </Card>

        {/* Pricing */}
        <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 rounded-2xl bg-white">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Pricing</CardTitle>
            <p className="text-sm text-gray-600">Set your selling price</p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <Label htmlFor="price" className="font-medium text-gray-800">Price</Label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                <Input
                  id="price"
                  type="number"
                  placeholder="0.00"
                  className="pl-8 mt-1 focus:ring-emerald-500 focus:border-emerald-500"
                  value={formData.price}
                  onChange={(e) => handleInputChange("price", e.target.value)}
                />
              </div>
              {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price}</p>}
            </div>

            <div>
              <Label className="font-medium text-gray-800">Stock/Availability</Label>
              <RadioGroup
                value={formData.stockOptions}
                onValueChange={(value) => handleInputChange("stockOptions", value)}
                className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-2"
              >
                {["In Stock", "Limited", "Sold"].map((option) => (
                  <div key={option} className="flex items-center space-x-2">
                    <RadioGroupItem value={option.toLowerCase()} id={option.toLowerCase()} />
                    <Label htmlFor={option.toLowerCase()} className="text-sm">{option}</Label>
                  </div>
                ))}
              </RadioGroup>
              {errors.stockOptions && <p className="text-red-500 text-sm mt-1">{errors.stockOptions}</p>}
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="negotiable"
                checked={formData.negotiable}
                onCheckedChange={(checked) => handleCheckboxChange("negotiable", checked)}
              />
              <Label htmlFor="negotiable" className="text-sm font-medium text-gray-800">Price is negotiable</Label>
            </div>
          </CardContent>
        </Card>

        {/* Product Photos */}
        <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 rounded-2xl bg-white">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Product Photos</CardTitle>
            <p className="text-sm text-gray-600">Add up to 5 photos to showcase your item</p>
          </CardHeader>
          <CardContent>
            <label htmlFor="image-upload" className="block">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:bg-gray-50 transition-colors cursor-pointer">
                <Camera className="w-12 h-12 mx-auto text-gray-400 mb-4" />
                <div className="space-y-2">
                  <Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold">
                    <Upload className="w-4 h-4 mr-2" />
                    Add Photos
                  </Button>
                  <p className="text-sm text-gray-500">Drag and drop or click to browse (max 5 images)</p>
                </div>
              </div>
              <input
                id="image-upload"
                type="file"
                multiple
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </label>
            {uploadedImages.length > 0 && (
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {uploadedImages.map((image, index) => (
                  <div key={index} className="relative group">
                    <img
                      src={URL.createObjectURL(image)}
                      alt={`Upload ${index + 1}`}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                    <Button
                      variant="destructive"
                      size="icon"
                      className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={() => handleRemoveImage(index)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Location & Delivery */}
        <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 rounded-2xl bg-white">
          <CardHeader>
            <CardTitle className="text-xl font-semibold flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              Location & Delivery
            </CardTitle>
            <p className="text-sm text-gray-600">Where can buyers find your item</p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <Label htmlFor="location" className="font-medium text-gray-800">Your Location</Label>
              <Input
                id="location"
                placeholder="City, State"
                value={formData.location}
                onChange={(e) => handleInputChange("location", e.target.value)}
                className="mt-1 focus:ring-emerald-500 focus:border-emerald-500"
              />
              {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location}</p>}
            </div>

            <div>
              <Label className="font-medium text-gray-800">Delivery Options</Label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
                {["Pick-up only", "Local Delivery", "Shipping Available"].map((option) => (
                  <div key={option} className="flex items-center space-x-2">
                    <Checkbox
                      id={option}
                      checked={formData.deliveryOptions.includes(option)}
                      onCheckedChange={(checked) => handleDeliveryOptionChange(option, checked)}
                    />
                    <Label htmlFor={option} className="text-sm font-medium text-gray-800">{option}</Label>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 rounded-2xl bg-white">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Contact Information</CardTitle>
            <p className="text-sm text-gray-600">How should buyers reach you?</p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="phone" className="font-medium text-gray-800">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  value={formData.contactPhone}
                  onChange={(e) => handleInputChange("contactPhone", e.target.value)}
                  className="mt-1 focus:ring-emerald-500 focus:border-emerald-500"
                />
                {errors.contactPhone && <p className="text-red-500 text-sm mt-1">{errors.contactPhone}</p>}
              </div>
              <div>
                <Label htmlFor="email" className="font-medium text-gray-800">Email (Optional)</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.contactEmail}
                  onChange={(e) => handleInputChange("contactEmail", e.target.value)}
                  className="mt-1 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
            </div>

            <div>
              <Label className="font-medium text-gray-800">Preferred Contact Method</Label>
              <RadioGroup
                value={formData.preferredContact}
                onValueChange={(value) => handleInputChange("preferredContact", value)}
                className="flex gap-6 mt-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="call" id="call" />
                  <Label htmlFor="call" className="text-sm font-medium text-gray-800">Call</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="message" id="message" />
                  <Label htmlFor="message" className="text-sm font-medium text-gray-800">Message</Label>
                </div>
              </RadioGroup>
              {errors.preferredContact && <p className="text-red-500 text-sm mt-1">{errors.preferredContact}</p>}
            </div>
          </CardContent>
        </Card>

        {/* Availability */}
        <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 rounded-2xl bg-white">
          <CardHeader>
            <CardTitle className="text-xl font-semibold flex items-center gap-2">
              <Clock className="w-5 h-5" />
              Availability
            </CardTitle>
            <p className="text-sm text-gray-600">When are you available for contact?</p>
          </CardHeader>
          <CardContent>
            <div>
              <Label className="font-medium text-gray-800">Best Time to Contact</Label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-2">
                {[
                  { key: "morning", label: "Morning" },
                  { key: "afternoon", label: "Afternoon" },
                  { key: "evening", label: "Evening" },
                  { key: "weekend", label: "Weekend" },
                ].map((time) => (
                  <div key={time.key} className="flex items-center space-x-2">
                    <Checkbox
                      id={time.key}
                      checked={formData.availability[time.key]}
                      onCheckedChange={(checked) => handleAvailabilityChange(time.key, checked)}
                    />
                    <Label htmlFor={time.key} className="text-sm font-medium text-gray-800">{time.label}</Label>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Safety & Trust */}
        <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 rounded-2xl bg-white">
          <CardHeader>
            <CardTitle className="text-xl font-semibold flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Safety & Trust
            </CardTitle>
            <p className="text-sm text-gray-600">Build trust with potential buyers</p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <Label className="font-medium text-gray-800">Verification Options</Label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                {["Verify phone number", "Add social media profile", "Government ID verification"].map((option) => (
                  <div key={option} className="flex items-center space-x-2">
                    <Checkbox
                      id={option}
                      checked={formData.verificationOptions.includes(option)}
                      onCheckedChange={(checked) => handleVerificationChange(option, checked)}
                    />
                    <Label htmlFor={option} className="text-sm font-medium text-gray-800">{option}</Label>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <div className="flex items-start gap-3">
                <Shield className="w-6 h-6 text-yellow-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-yellow-800">Safety Reminder</h4>
                  <ul className="text-sm text-yellow-700 mt-2 list-disc list-inside">
                    <li>Meet in public places for transactions</li>
                    <li>Don’t share personal financial information</li>
                    <li>Trust your instincts if something feels wrong</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Terms & Conditions */}
        <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 rounded-2xl bg-white">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Terms & Conditions</CardTitle>
            <p className="text-sm text-gray-600">Please review and accept our terms</p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-start space-x-2">
              <Checkbox
                id="terms"
                checked={formData.agreeToTerms}
                onCheckedChange={(checked) => handleCheckboxChange("agreeToTerms", checked)}
              />
              <Label htmlFor="terms" className="text-sm font-medium text-gray-800 leading-relaxed">
                I agree to the Terms of Service
                <br />
                <span className="text-gray-500 text-sm">By checking this box, I agree to all terms and conditions of this marketplace.</span>
              </Label>
            </div>
            {errors.agreeToTerms && <p className="text-red-500 text-sm mt-1">{errors.agreeToTerms}</p>}

            <div className="flex items-start space-x-2">
              <Checkbox
                id="privacy"
                checked={formData.privacyPolicy}
                onCheckedChange={(checked) => handleCheckboxChange("privacyPolicy", checked)}
              />
              <Label htmlFor="privacy" className="text-sm font-medium text-gray-800 leading-relaxed">
                Privacy Policy Acknowledgment
                <br />
                <span className="text-gray-500 text-sm">I understand how my data will be used and stored.</span>
              </Label>
            </div>

            <div className="flex items-start space-x-2">
              <Checkbox
                id="marketing"
                checked={formData.marketingConsent}
                onCheckedChange={(checked) => handleCheckboxChange("marketingConsent", checked)}
              />
              <Label htmlFor="marketing" className="text-sm font-medium text-gray-800 leading-relaxed">
                Marketing Communications
                <br />
                <span className="text-gray-500 text-sm">I agree to receive marketing emails and notifications.</span>
              </Label>
            </div>
          </CardContent>
        </Card>

        {/* Review Your Listing */}
        <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 rounded-2xl bg-white">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Review Your Listing</CardTitle>
            <p className="text-sm text-gray-600">Double-check your information before publishing</p>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4 p-4 border rounded-lg bg-gray-50">
              <div className="w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center">
                {uploadedImages[0] ? (
                  <img
                    src={URL.createObjectURL(uploadedImages[0])}
                    alt="Preview"
                    className="w-full h-full object-cover rounded-lg"
                  />
                ) : (
                  <Camera className="w-8 h-8 text-gray-400" />
                )}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg text-gray-800">{formData.productName || "Product Title"}</h3>
                <div className="flex items-center gap-2 mt-1">
                  <Badge variant="secondary" className="bg-emerald-100 text-emerald-800">
                    {formData.condition ? formData.condition.charAt(0).toUpperCase() + formData.condition.slice(1) : "Condition"}
                  </Badge>
                  <span className="text-sm text-gray-500">•</span>
                  <span className="text-sm text-gray-500">{formData.category ? formData.category.charAt(0).toUpperCase() + formData.category.slice(1) : "Category"}</span>
                </div>
                <p className="text-sm text-gray-600 mt-1 line-clamp-2">{formData.description || "No description provided"}</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-emerald-600">${formData.price || "0.00"}</div>
                <div className="flex items-center gap-1 text-sm text-gray-500">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span>4.8/5</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4 pt-6">
          <Button
            type="submit"
            size="lg"
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-12 py-3 text-lg font-semibold"
            disabled={!formData.agreeToTerms || isSubmitting}
          >
            {isSubmitting ? "Creating..." : "Create Listing"}
          </Button>
          <Button
            type="button"
            variant="outline"
            size="lg"
            className="hover:bg-emerald-50 text-emerald-600 border-emerald-200 font-semibold"
            onClick={handleSaveDraft}
          >
            Save Draft
          </Button>
          <Button
            type="button"
            variant="outline"
            size="lg"
            className="hover:bg-red-50 text-red-600 border-red-200 font-semibold"
            onClick={handleCancel}
          >
            Cancel
          </Button>
        </div>
      </form>

      {/* Footer */}
      <div className="bg-gray-900 text-white p-6 mt-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-semibold text-lg mb-3 flex items-center">
              <div className="w-7 h-7 bg-emerald-500 rounded-full mr-2 flex items-center justify-center">
                <span className="text-white text-sm">M</span>
              </div>
              Marketplace
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Sell your items quickly and securely with our easy-to-use platform.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-base mb-3">Quick Links</h4>
            <ul className="text-sm text-gray-300 space-y-2">
              <li><a href="#" className="hover:text-emerald-300 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-emerald-300 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-emerald-300 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-emerald-300 transition-colors">Contact Support</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-base mb-3">Support</h4>
            <ul className="text-sm text-gray-300 space-y-2">
              <li><a href="#" className="hover:text-emerald-300 transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-emerald-300 transition-colors">Security</a></li>
              <li><a href="#" className="hover:text-emerald-300 transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-emerald-300 transition-colors">Status</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm text-gray-300">
          © 2025 Marketplace. All rights reserved.
        </div>
      </div>
    </div>
  )
}
