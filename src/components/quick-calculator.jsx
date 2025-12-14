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
    area: 10000,
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
    let baseRate = 0
    let serviceMultiplier = 1
    let finishMultiplier = 1
    let timelineMultiplier = 1

    // Step 1: Get base rate from Project Type
    const projectRates = {
      "construction": 1800,
      "interior": 2000,
      "renovation": 1900
    }
    
    // Step 2: Override with Property Type rate if available
    const propertyRates = {
      "1bhk": 1650,
      "2bhk": 1750,
      "3bhk": 1900,
      "villa": 2200,
      "duplex": 2000,
      "commercial": 2000,
      "office": 1850,
      "retail": 1900
    }

    // Use property type rate if available, otherwise use project type rate
    if (formData.propertyType && propertyRates[formData.propertyType]) {
      baseRate = propertyRates[formData.propertyType]
    } else if (formData.projectType && projectRates[formData.projectType]) {
      baseRate = projectRates[formData.projectType]
    }

    // Step 3: Apply Service Type multiplier
    const serviceMultipliers = {
      "shell_core": 0.8,
      "design_only": 0.6,
      "turnkey": 1,
      "custom_furniture": 1 // Will add per sq.ft later
    }
    
    if (formData.serviceType && serviceMultipliers[formData.serviceType] !== undefined) {
      serviceMultiplier = serviceMultipliers[formData.serviceType]
    }

    // Step 4: Apply Finish Quality multiplier
    const finishMultipliers = {
      "basic": 1,
      "standard": 1.1,
      "premium": 1.25,
      "luxury": 1.4
    }
    
    if (formData.finishQuality && finishMultipliers[formData.finishQuality]) {
      finishMultiplier = finishMultipliers[formData.finishQuality]
    }

    // Step 5: Apply Timeline multiplier
    const timelineMultipliers = {
      "3_6_months": 1,
      "1_3_months": 1.1,
      "within_1_month": 1.15
    }
    
    if (formData.timeline && timelineMultipliers[formData.timeline]) {
      timelineMultiplier = timelineMultipliers[formData.timeline]
    }

    // Calculate base cost
    let baseCost = baseRate * formData.area * serviceMultiplier * finishMultiplier * timelineMultiplier

    // Add Custom Furniture cost if selected
    if (formData.serviceType === "custom_furniture") {
      baseCost += 500 * formData.area
    }

    // Step 6: Calculate Add-ons as percentage of base cost
    let addOnPercentage = 0
    if (formData.addOns.smartHome) addOnPercentage += 0.10 // 10%
    if (formData.addOns.landscaping) addOnPercentage += 0.08 // 8%
    if (formData.addOns.solarPanel) addOnPercentage += 0.06 // 6%
    if (formData.addOns.security) addOnPercentage += 0.05 // 5%

    const addOnCost = baseCost * addOnPercentage
    const total = baseCost + addOnCost
    
    return {
      min: Math.round(total * 0.90),
      max: Math.round(total * 1.10)
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
              {[
                { label: "Construction", value: "construction", rate: "₹1,800/sq.ft" },
                { label: "Interior Design", value: "interior", rate: "₹2,000/sq.ft" },
                { label: "Renovation", value: "renovation", rate: "₹1,900/sq.ft" }
              ].map((type) => (
                <button
                  key={type.value}
                  onClick={() => handleProjectTypeSelect(type.value)}
                  className={`w-full p-4 rounded-xl border-2 text-left hover:shadow-md transition-all ${
                    formData.projectType === type.value
                      ? "border-slate-400 bg-slate-50 shadow-md"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{type.label}</span>
                    <span className="text-sm text-slate-600 font-medium">{type.rate}</span>
                  </div>
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
                { label: "1 BHK", value: "1bhk", rate: "₹1,650/sq.ft" },
                { label: "2 BHK", value: "2bhk", rate: "₹1,750/sq.ft" },
                { label: "3 BHK", value: "3bhk", rate: "₹1,900/sq.ft" },
                { label: "Villa", value: "villa", rate: "₹2,200/sq.ft" },
                { label: "Duplex", value: "duplex", rate: "₹2,000/sq.ft" },
                { label: "Commercial", value: "commercial", rate: "₹2,000/sq.ft" },
                { label: "Office", value: "office", rate: "₹1,850/sq.ft" },
                { label: "Retail", value: "retail", rate: "₹1,900/sq.ft" }
              ].map(({ label, value, rate }) => (
                <button
                  key={value}
                  onClick={() => handlePropertyTypeSelect(value)}
                  className={`w-full p-4 rounded-xl border-2 text-left hover:shadow-md transition-all ${
                    formData.propertyType === value
                      ? "border-slate-400 bg-slate-50 shadow-md"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{label}</span>
                    <span className="text-sm text-slate-600 font-medium">{rate}</span>
                  </div>
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
                    min={10000}
                    max={100000}
                    step={1000}
                    value={formData.area}
                    onChange={(e) => setFormData({ ...formData, area: Number(e.target.value) })}
                    className="w-full h-2 rounded-lg appearance-none cursor-pointer slider"
                    style={{
                      background: `linear-gradient(to right, #475569 0%, #475569 ${((formData.area - 10000) / (100000 - 10000)) * 100}%, #e5e7eb ${((formData.area - 10000) / (100000 - 10000)) * 100}%, #e5e7eb 100%)`
                    }}
                  />
                </div>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>₹10,000</span>
                  <span>₹1,00,000</span>
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
                { value: "shell_core", label: "Shell & Core", desc: "Only structural (0.8x multiplier)" },
                { value: "design_only", label: "Design Only", desc: "No execution (0.6x multiplier)" },
                { value: "turnkey", label: "Turnkey", desc: "Complete end-to-end delivery (1x)" },
                { value: "custom_furniture", label: "Custom Furniture", desc: "Add-on: ₹500/sq.ft" }
              ].map(({ value, label, desc }) => (
                <button
                  key={value}
                  onClick={() => handleServiceTypeSelect(value)}
                  className={`w-full p-4 rounded-xl border-2 text-left hover:shadow-md transition-all ${
                    formData.serviceType === value
                      ? "border-slate-400 bg-slate-50 shadow-md"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className="space-y-1">
                    <span className="font-medium block">{label}</span>
                    <span className="text-sm text-slate-600">{desc}</span>
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
                { value: "basic", label: "Basic", desc: "Entry-level quality (1x multiplier)" },
                { value: "standard", label: "Standard", desc: "Balanced materials & finish (1.1x)" },
                { value: "premium", label: "Premium", desc: "High-end finish, luxury detailing (1.25x)" },
                { value: "luxury", label: "Luxury", desc: "Ultra premium materials (1.4x)" }
              ].map(({ value, label, desc }) => (
                <button
                  key={value}
                  onClick={() => handleFinishQualitySelect(value)}
                  className={`w-full p-4 rounded-xl border-2 text-left hover:shadow-md transition-all ${
                    formData.finishQuality === value
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
                { key: "smartHome", label: "Smart Home Integration", percentage: "10% of total" },
                { key: "landscaping", label: "Landscaping", percentage: "8% of total" },
                { key: "solarPanel", label: "Solar Panel Installation", percentage: "6% of total" },
                { key: "security", label: "Security System", percentage: "5% of total" }
              ].map(({ key, label, percentage }) => (
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
                  <span className="text-sm font-medium text-slate-600">{percentage}</span>
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
                { value: "3_6_months", label: "3-6 months", desc: "Standard timeline (1x)" },
                { value: "1_3_months", label: "1-3 months", desc: "Fast track (1.1x multiplier)" },
                { value: "within_1_month", label: "Within 1 month", desc: "Very fast (1.15x multiplier)" }
              ].map(({ value, label, desc }) => (
                <button
                  key={value}
                  onClick={() => handleTimelineSelect(value)}
                  className={`w-full p-4 rounded-xl border-2 text-left hover:shadow-md transition-all ${
                    formData.timeline === value
                      ? "border-slate-400 bg-slate-50 shadow-md"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className="space-y-1">
                    <span className="font-medium block">{label}</span>
                    <span className="text-sm text-slate-600">{desc}</span>
                  </div>
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
