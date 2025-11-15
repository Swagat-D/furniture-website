"use client"

import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"
import { ChevronLeft, ChevronRight, Calculator, Home, Building2, Ruler, Wrench, Palette, Package2, Clock } from "lucide-react"

const steps = [
  {
    id: 1,
    title: "Project Type",
    subtitle: "What type of project are you planning?",
    icon: Calculator
  },
  {
    id: 2,
    title: "Property Type", 
    subtitle: "What kind of property is this?",
    icon: Home
  },
  {
    id: 3,
    title: "Area",
    subtitle: "What's the total area of your project?",
    icon: Ruler
  },
  {
    id: 4,
    title: "Service Type",
    subtitle: "Which service do you need?",
    icon: Wrench
  },
  {
    id: 5,
    title: "Finish Quality",
    subtitle: "What level of finish do you prefer?",
    icon: Palette
  },
  {
    id: 6,
    title: "Add-ons",
    subtitle: "Any additional services?",
    icon: Package2
  },
  {
    id: 7,
    title: "Timeline",
    subtitle: "When do you want to start?",
    icon: Clock
  },
  {
    id: 8,
    title: "Your Estimate",
    subtitle: "Here's your personalized quote",
    icon: Calculator
  }
]

export default function QuickCalculator() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    projectType: "",
    propertyType: "", 
    area: 1000,
    serviceType: "",
    finishQuality: "",
    addOns: {
      smartHome: false,
      landscaping: false,
      solarPanel: false,
      security: false
    },
    timeline: ""
  })

  const progress = ((currentStep - 1) / (steps.length - 1)) * 100

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleProjectTypeSelect = (type) => {
    setFormData({ ...formData, projectType: type })
  }

  const handlePropertyTypeSelect = (type) => {
    setFormData({ ...formData, propertyType: type })
  }

  const handleServiceTypeSelect = (type) => {
    setFormData({ ...formData, serviceType: type })
  }

  const handleFinishQualitySelect = (quality) => {
    setFormData({ ...formData, finishQuality: quality })
  }

  const handleTimelineSelect = (timeline) => {
    setFormData({ ...formData, timeline: timeline })
  }

  const handleAddOnToggle = (addOn) => {
    setFormData({
      ...formData,
      addOns: {
        ...formData.addOns,
        [addOn]: !formData.addOns[addOn]
      }
    })
  }

  const calculateEstimate = useMemo(() => {
    let basePrice = 0
    let multiplier = 1

    // Service type base prices
    if (formData.serviceType === "civil") basePrice = 1200 * formData.area
    else if (formData.serviceType === "interior") basePrice = 800 * formData.area
    else if (formData.serviceType === "mep") basePrice = 400 * formData.area
    else if (formData.serviceType === "furniture") basePrice = 600 * formData.area

    // Property type multiplier
    if (formData.propertyType === "commercial") multiplier *= 1.3
    else if (formData.propertyType === "industrial") multiplier *= 1.5

    // Finish quality multiplier
    if (formData.finishQuality === "premium") multiplier *= 1.5
    else if (formData.finishQuality === "luxury") multiplier *= 2.2

    // Add-ons
    let addOnCost = 0
    if (formData.addOns.smartHome) addOnCost += 150000
    if (formData.addOns.landscaping) addOnCost += 80000
    if (formData.addOns.solarPanel) addOnCost += 200000
    if (formData.addOns.security) addOnCost += 75000

    const totalBase = basePrice * multiplier
    const total = totalBase + addOnCost
    
    return {
      min: Math.round(total * 0.85),
      max: Math.round(total * 1.15)
    }
  }, [formData])

  const renderStepContent = () => {
    const IconComponent = steps[currentStep - 1].icon

    switch (currentStep) {
      case 1:
        return (
          <div className="text-center space-y-6">
            <div className="flex justify-center mb-6">
              <div 
                className="w-20 h-20 rounded-full flex items-center justify-center"
                style={{ background: "color-mix(in oklab, var(--brand) 14%, white)" }}
              >
                <IconComponent className="w-10 h-10" style={{ color: "var(--brand)" }} />
              </div>
            </div>
            <div className="space-y-4">
              {["New Construction", "Renovation", "Interior Only"].map((type) => (
                <button
                  key={type}
                  onClick={() => handleProjectTypeSelect(type.toLowerCase().replace(" ", "_"))}
                  className={`w-full p-4 rounded-xl border-2 text-left hover:shadow-md transition-all ${
                    formData.projectType === type.toLowerCase().replace(" ", "_")
                      ? "border-slate-400 bg-slate-50 shadow-md"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <span className="font-medium">{type}</span>
                </button>
              ))}
            </div>
          </div>
        )

      case 2:
        return (
          <div className="text-center space-y-6">
            <div className="flex justify-center mb-6">
              <div 
                className="w-20 h-20 rounded-full flex items-center justify-center"
                style={{ background: "color-mix(in oklab, var(--brand) 14%, white)" }}
              >
                <IconComponent className="w-10 h-10" style={{ color: "var(--brand)" }} />
              </div>
            </div>
            <div className="space-y-4">
              {[
                { type: "residential", label: "Residential" },
                { type: "commercial", label: "Commercial" },
                { type: "industrial", label: "Industrial" }
              ].map(({ type, label }) => (
                <button
                  key={type}
                  onClick={() => handlePropertyTypeSelect(type)}
                  className={`w-full p-4 rounded-xl border-2 text-left hover:shadow-md transition-all ${
                    formData.propertyType === type
                      ? "border-slate-400 bg-slate-50 shadow-md"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <span className="font-medium">{label}</span>
                </button>
              ))}
            </div>
          </div>
        )

      case 3:
        return (
          <div className="text-center space-y-6">
            <div className="flex justify-center mb-6">
              <div 
                className="w-20 h-20 rounded-full flex items-center justify-center"
                style={{ background: "color-mix(in oklab, var(--brand) 14%, white)" }}
              >
                <IconComponent className="w-10 h-10" style={{ color: "var(--brand)" }} />
              </div>
            </div>
            <div className="space-y-6">
              <div className="text-3xl md:text-4xl font-bold text-slate-700">
                {formData.area.toLocaleString()} sq ft
              </div>
              <p className="text-gray-600">Drag the slider to set your project area</p>
              <div className="px-4 space-y-4">
                <div className="relative">
                  <input
                    type="range"
                    min={500}
                    max={10000}
                    step={100}
                    value={formData.area}
                    onChange={(e) => setFormData({ ...formData, area: Number(e.target.value) })}
                    className="w-full h-2 rounded-lg appearance-none cursor-pointer slider"
                    style={{
                      background: `linear-gradient(to right, #475569 0%, #475569 ${((formData.area - 500) / (10000 - 500)) * 100}%, #e5e7eb ${((formData.area - 500) / (10000 - 500)) * 100}%, #e5e7eb 100%)`
                    }}
                  />
                </div>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>500 sq ft</span>
                  <span>10,000 sq ft</span>
                </div>
              </div>
            </div>
          </div>
        )

      case 4:
        return (
          <div className="text-center space-y-6">
            <div className="flex justify-center mb-6">
              <div 
                className="w-20 h-20 rounded-full flex items-center justify-center"
                style={{ background: "color-mix(in oklab, var(--brand) 14%, white)" }}
              >
                <IconComponent className="w-10 h-10" style={{ color: "var(--brand)" }} />
              </div>
            </div>
            <div className="space-y-4">
              {[
                { type: "civil", label: "Civil Construction", price: "₹1,200/sq.ft" },
                { type: "interior", label: "Interior Design", price: "₹800/sq.ft" },
                { type: "mep", label: "MEP Services", price: "₹400/sq.ft" },
                { type: "furniture", label: "Custom Furniture", price: "₹600/sq.ft" }
              ].map(({ type, label, price }) => (
                <button
                  key={type}
                  onClick={() => handleServiceTypeSelect(type)}
                  className={`w-full p-4 rounded-xl border-2 text-left hover:shadow-md transition-all ${
                    formData.serviceType === type
                      ? "border-slate-400 bg-slate-50 shadow-md"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{label}</span>
                    <span className="text-sm text-slate-600 font-medium">{price}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )

      case 5:
        return (
          <div className="text-center space-y-6">
            <div className="flex justify-center mb-6">
              <div 
                className="w-20 h-20 rounded-full flex items-center justify-center"
                style={{ background: "color-mix(in oklab, var(--brand) 14%, white)" }}
              >
                <IconComponent className="w-10 h-10" style={{ color: "var(--brand)" }} />
              </div>
            </div>
            <div className="space-y-4">
              {[
                { type: "basic", label: "Basic", desc: "Standard materials and finishes" },
                { type: "premium", label: "Premium", desc: "High-quality materials and finishes" },
                { type: "luxury", label: "Luxury", desc: "Premium imported materials and luxury finishes" }
              ].map(({ type, label, desc }) => (
                <button
                  key={type}
                  onClick={() => handleFinishQualitySelect(type)}
                  className={`w-full p-4 rounded-xl border-2 text-left hover:shadow-md transition-all ${
                    formData.finishQuality === type
                      ? "border-slate-400 bg-slate-50 shadow-md"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className="space-y-1">
                    <span className="font-medium">{label}</span>
                    <p className="text-sm text-gray-600">{desc}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )

      case 6:
        return (
          <div className="text-center space-y-6">
            <div className="flex justify-center mb-6">
              <div 
                className="w-20 h-20 rounded-full flex items-center justify-center"
                style={{ background: "color-mix(in oklab, var(--brand) 14%, white)" }}
              >
                <IconComponent className="w-10 h-10" style={{ color: "var(--brand)" }} />
              </div>
            </div>
            <div className="space-y-4">
              {[
                { key: "smartHome", label: "Smart Home Integration", price: "₹1,50,000" },
                { key: "landscaping", label: "Landscaping", price: "₹80,000" },
                { key: "solarPanel", label: "Solar Panel Installation", price: "₹2,00,000" },
                { key: "security", label: "Security System", price: "₹75,000" }
              ].map(({ key, label, price }) => (
                <label
                  key={key}
                  className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer hover:shadow-md transition-all ${
                    formData.addOns[key] ? "border-slate-400 bg-slate-50 shadow-md" : "border-gray-200"
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <Checkbox
                      checked={formData.addOns[key]}
                      onCheckedChange={() => handleAddOnToggle(key)}
                    />
                    <span className="font-medium">{label}</span>
                  </div>
                  <span className="text-sm font-medium text-slate-600">{price}</span>
                </label>
              ))}
            </div>
          </div>
        )

      case 7:
        return (
          <div className="text-center space-y-6">
            <div className="flex justify-center mb-6">
              <div 
                className="w-20 h-20 rounded-full flex items-center justify-center"
                style={{ background: "color-mix(in oklab, var(--brand) 14%, white)" }}
              >
                <IconComponent className="w-10 h-10" style={{ color: "var(--brand)" }} />
              </div>
            </div>
            <div className="space-y-4">
              {[
                "Within 1 month",
                "1-3 months", 
                "3-6 months"
              ].map((timeline) => (
                <button
                  key={timeline}
                  onClick={() => handleTimelineSelect(timeline)}
                  className={`w-full p-4 rounded-xl border-2 text-left hover:shadow-md transition-all ${
                    formData.timeline === timeline
                      ? "border-slate-400 bg-slate-50 shadow-md"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <span className="font-medium">{timeline}</span>
                </button>
              ))}
            </div>
          </div>
        )

      case 8:
        return (
          <div className="text-center space-y-6">
            <div className="flex justify-center mb-6">
              <div 
                className="w-20 h-20 rounded-full flex items-center justify-center"
                style={{ background: "color-mix(in oklab, var(--brand) 14%, white)" }}
              >
                <IconComponent className="w-10 h-10" style={{ color: "var(--brand)" }} />
              </div>
            </div>
            
            {/* Estimate Display */}
            <div className="bg-slate-700 text-white rounded-2xl p-6 mb-6">
              <h3 className="text-xl font-semibold mb-2">Your Project Estimate</h3>
              <div className="text-2xl md:text-3xl font-bold">
                ₹{calculateEstimate.min.toLocaleString()} - ₹{calculateEstimate.max.toLocaleString()}
              </div>
              <p className="text-slate-300 text-sm mt-2">Based on your specifications</p>
            </div>

            {/* Project Summary */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 text-left">
              <h4 className="font-semibold mb-4 text-center text-slate-800">Project Summary</h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span>Area:</span>
                  <span className="font-medium">{formData.area.toLocaleString()} sq ft</span>
                </div>
                <div className="flex justify-between">
                  <span>Services:</span>
                  <span className="font-medium">
                    {Object.values(formData.addOns).filter(Boolean).length + 1} selected
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Quality:</span>
                  <span className="font-medium capitalize">{formData.finishQuality}</span>
                </div>
                <div className="flex justify-between">
                  <span>Add-ons:</span>
                  <span className="font-medium">
                    {Object.values(formData.addOns).filter(Boolean).length} selected
                  </span>
                </div>
              </div>
            </div>

            {/* What's Included */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 text-left">
              <h4 className="font-semibold mb-4 text-center text-slate-800">What's Included</h4>
              <div className="space-y-2 text-sm text-slate-700">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-slate-600 rounded-full"></div>
                  <span>Project planning & design</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-slate-600 rounded-full"></div>
                  <span>Quality materials</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-slate-600 rounded-full"></div>
                  <span>Professional installation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-slate-600 rounded-full"></div>
                  <span>5-year warranty</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid gap-4 sm:grid-cols-2">
              <Button className="w-full bg-slate-700 hover:bg-slate-600 text-white py-3 rounded-xl hover:shadow-lg transition-all">
                📞 Schedule a Visit
              </Button>
              <Button variant="outline" className="w-full border-slate-600 text-slate-600 hover:bg-slate-50 py-3 rounded-xl hover:shadow-lg transition-all">
                💬 Talk to Consultant
              </Button>
            </div>

            <Button 
              variant="ghost" 
              onClick={() => {setCurrentStep(1); setFormData({projectType: "", propertyType: "", area: 1000, serviceType: "", finishQuality: "", addOns: {smartHome: false, landscaping: false, solarPanel: false, security: false}, timeline: ""})}}
              className="w-full text-gray-600 hover:text-gray-800"
            >
              Start New Calculation
            </Button>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="bg-slate-700 text-white p-6">
        <div className="text-center mb-4">
          <h2 className="text-2xl font-bold mb-2">Project Cost Calculator</h2>
          <p className="text-slate-300 text-sm">
            Answer a few questions to get an accurate estimate for your construction project in just 2 minutes.
          </p>
        </div>
        
        {/* Progress Bar */}
        <div className="space-y-3">
          <div className="flex justify-between text-sm text-slate-300">
            <span className="font-medium">Step {currentStep} of {steps.length}</span>
            <span className="font-medium">{Math.round(progress)}% Complete</span>
          </div>
          <div className="w-full bg-slate-600 rounded-full h-2">
            <div 
              className="bg-white h-2 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Step Content */}
      <div className="p-6 md:p-8">
        <div className="mb-6 text-center">
          <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-2">
            {steps[currentStep - 1].title}
          </h3>
          <p className="text-slate-600 text-sm md:text-base">
            {steps[currentStep - 1].subtitle}
          </p>
        </div>

        {renderStepContent()}
      </div>

      {/* Navigation */}
      {currentStep < steps.length && (
        <div className="flex justify-between p-6 bg-gray-50 border-t border-gray-200">
          <Button
            variant="ghost"
            onClick={prevStep}
            disabled={currentStep === 1}
            className="flex items-center space-x-2 text-slate-600 hover:text-slate-800 hover:bg-gray-100"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous</span>
          </Button>
          
          <Button
            onClick={nextStep}
            disabled={
              (currentStep === 1 && !formData.projectType) ||
              (currentStep === 2 && !formData.propertyType) ||
              (currentStep === 4 && !formData.serviceType) ||
              (currentStep === 5 && !formData.finishQuality) ||
              (currentStep === 7 && !formData.timeline)
            }
            className="flex items-center space-x-2 bg-slate-700 hover:bg-slate-600 text-white hover:shadow-lg transition-all"
          >
            <span>Next</span>
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      )}
    </div>
  )
}
