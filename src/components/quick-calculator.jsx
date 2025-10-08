"use client"

import { useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Card } from "@/components/ui/card"
import { useCart } from "./cart-context"

export default function QuickCalculator() {
  const { addToCart } = useCart()

  // Basics
  const [propertyType, setPropertyType] = useState("apartment")
  const [area, setArea] = useState(800) // sq.ft.
  const [bedrooms, setBedrooms] = useState(2)
  const [bathrooms, setBathrooms] = useState(2)
  const [finish, setFinish] = useState("standard") // basic, standard, premium
  const [showSuccess, setShowSuccess] = useState(false)

  // Add-ons
  const [modularKitchen, setModularKitchen] = useState(true)
  const [wardrobes, setWardrobes] = useState(2)
  const [falseCeiling, setFalseCeiling] = useState(true)
  const [painting, setPainting] = useState(true)
  const [lighting, setLighting] = useState(false)
  const [smartHome, setSmartHome] = useState(false)

  const price = useMemo(() => {
    const rateByFinish = { basic: 1400, standard: 2000, premium: 2800 }
    const propertyMultiplier = propertyType === "villa" ? 1.2 : 1
    const base = (rateByFinish[finish] || 2000) * Number(area) * propertyMultiplier

    // room-linked adds
    const bathAddon = bathrooms * 18000
    const wardrobeAddon = wardrobes * 12000

    // toggles
    const kitchenAddon = modularKitchen ? 120000 : 0
    const ceilingAddon = falseCeiling ? Number(area) * 120 : 0
    const paintingAddon = painting ? Number(area) * 80 : 0
    const lightingAddon = lighting ? Number(area) * 60 : 0
    const smartAddon = smartHome ? 45000 : 0

    return Math.max(
      0,
      base + bathAddon + wardrobeAddon + kitchenAddon + ceilingAddon + paintingAddon + lightingAddon + smartAddon,
    )
  }, [propertyType, area, bathrooms, wardrobes, modularKitchen, falseCeiling, painting, lighting, smartHome, finish])

  const rateByFinish = { basic: 1400, standard: 2000, premium: 2800 }

  const addPackageToCart = () => {
    addToCart({
      id: "interior-package-" + finish,
      name: `Interior ${finish[0].toUpperCase() + finish.slice(1)} Package (${propertyType})`,
      imageUrl: "/interior-package.jpg",
      priceNumber: Math.round(price),
      qty: 1,
    })
    setShowSuccess(true)
    setTimeout(() => setShowSuccess(false), 750)
  }

  return (
    <div className="bg-gray-50 rounded-3xl p-6 shadow-lg border border-gray-200">

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Left Column - Inputs */}
        <div className="space-y-4">
          <div className="bg-white rounded-2xl p-4 shadow-md border border-gray-200">
            <h4 className="text-lg font-semibold text-slate-800 mb-4 flex items-center">
              🏡 Property Details
            </h4>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Property Type</label>
                <Select value={propertyType} onValueChange={setPropertyType}>
                  <SelectTrigger className="border-gray-200 focus:border-gray-400 h-10 bg-white">
                    <SelectValue placeholder="Select property type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="apartment">🏢 Apartment</SelectItem>
                    <SelectItem value="villa">🏘️ Villa</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Finish Quality</label>
                <Select value={finish} onValueChange={setFinish}>
                  <SelectTrigger className="border-gray-200 focus:border-gray-400 h-10 bg-white">
                    <SelectValue placeholder="Select finish quality" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="basic">💫 Basic</SelectItem>
                    <SelectItem value="standard">⭐ Standard</SelectItem>
                    <SelectItem value="premium">🌟 Premium</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Carpet Area (sq.ft)</label>
                <Input 
                  type="number" 
                  min={200} 
                  value={area} 
                  onChange={(e) => setArea(Number(e.target.value || 0))} 
                  className="border-gray-200 focus:border-gray-400 h-10 text-lg font-semibold"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Bedrooms</label>
                <Input 
                  type="number" 
                  min={0} 
                  value={bedrooms} 
                  onChange={(e) => setBedrooms(Number(e.target.value || 0))} 
                  className="border-gray-200 focus:border-gray-400 h-10 text-lg font-semibold"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Bathrooms</label>
                <Input 
                  type="number" 
                  min={0} 
                  value={bathrooms} 
                  onChange={(e) => setBathrooms(Number(e.target.value || 0))} 
                  className="border-gray-200 focus:border-gray-400 h-10 text-lg font-semibold"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Wardrobes</label>
                <Input 
                  type="number" 
                  min={0} 
                  value={wardrobes} 
                  onChange={(e) => setWardrobes(Number(e.target.value || 0))} 
                  className="border-gray-200 focus:border-gray-400 h-10 text-lg font-semibold"
                />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow-md border border-gray-200">
            <h4 className="text-lg font-semibold text-slate-800 mb-4 flex items-center">
              ✨ Premium Add-ons
            </h4>
            <div className="grid gap-3 sm:grid-cols-2">
              <label className="flex items-center gap-3 p-3 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors cursor-pointer">
                <Checkbox checked={modularKitchen} onCheckedChange={setModularKitchen} className="w-5 h-5" />
                <span className="font-medium text-slate-700">🍳 Modular Kitchen</span>
              </label>
              <label className="flex items-center gap-3 p-3 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors cursor-pointer">
                <Checkbox checked={falseCeiling} onCheckedChange={setFalseCeiling} className="w-5 h-5" />
                <span className="font-medium text-slate-700">🏛️ False Ceiling</span>
              </label>
              <label className="flex items-center gap-3 p-3 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors cursor-pointer">
                <Checkbox checked={painting} onCheckedChange={setPainting} className="w-5 h-5" />
                <span className="font-medium text-slate-700">🎨 Premium Painting</span>
              </label>
              <label className="flex items-center gap-3 p-3 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors cursor-pointer">
                <Checkbox checked={lighting} onCheckedChange={setLighting} className="w-5 h-5" />
                <span className="font-medium text-slate-700">💡 Lighting Package</span>
              </label>
              <label className="flex items-center gap-3 p-3 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors cursor-pointer col-span-2">
                <Checkbox checked={smartHome} onCheckedChange={setSmartHome} className="w-5 h-5" />
                <span className="font-medium text-slate-700">🏠 Smart Home Add-on</span>
              </label>
            </div>
          </div>
        </div>

        {/* Right Column - Results */}
        <div className="space-y-4">
          <div className="bg-slate-700 rounded-2xl p-6 text-white shadow-lg">
            <div className="text-center">
              <p className="text-gray-300 text-lg mb-2">Estimated Total Cost</p>
              <div className="text-4xl font-bold mb-4">
                ₹{Math.round(price).toLocaleString("en-IN")}
              </div>
              <p className="text-gray-300 text-sm">*Inclusive of materials and labor</p>
              <p className="text-gray-300 text-xs mt-1">Taxes and site variations may apply</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow-md border border-gray-200">
            <h4 className="text-lg font-semibold text-slate-800 mb-4">📊 Cost Breakdown</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-slate-600">Base Construction</span>
                <span className="font-semibold">₹{Math.round((rateByFinish[finish] || 2000) * Number(area) * (propertyType === "villa" ? 1.2 : 1)).toLocaleString("en-IN")}</span>
              </div>
              {bathrooms > 0 && (
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-slate-600">Bathroom Fittings</span>
                  <span className="font-semibold">₹{(bathrooms * 18000).toLocaleString("en-IN")}</span>
                </div>
              )}
              {wardrobes > 0 && (
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-slate-600">Wardrobes</span>
                  <span className="font-semibold">₹{(wardrobes * 12000).toLocaleString("en-IN")}</span>
                </div>
              )}
              {modularKitchen && (
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-slate-600">Modular Kitchen</span>
                  <span className="font-semibold">₹1,20,000</span>
                </div>
              )}
              {falseCeiling && (
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-slate-600">False Ceiling</span>
                  <span className="font-semibold">₹{(Number(area) * 120).toLocaleString("en-IN")}</span>
                </div>
              )}
              {painting && (
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-slate-600">Premium Painting</span>
                  <span className="font-semibold">₹{(Number(area) * 80).toLocaleString("en-IN")}</span>
                </div>
              )}
              {lighting && (
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-slate-600">Lighting Package</span>
                  <span className="font-semibold">₹{(Number(area) * 60).toLocaleString("en-IN")}</span>
                </div>
              )}
              {smartHome && (
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-slate-600">Smart Home</span>
                  <span className="font-semibold">₹45,000</span>
                </div>
              )}
            </div>
          </div>

          <Button 
            onClick={addPackageToCart} 
            className="w-full bg-slate-700 hover:bg-slate-600 text-white font-bold py-3 text-lg rounded-2xl transition-all duration-200"
          >
            🛒 Add to Cart & Continue
          </Button>

          {/* Success Animation */}
          {showSuccess && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white rounded-2xl p-8 text-center animate-pulse shadow-2xl max-w-md mx-4">
                <div className="text-6xl mb-4">🎉</div>
                <h3 className="text-2xl font-bold text-green-600 mb-2">Success!</h3>
                <p className="text-slate-600">Package added to cart successfully!</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
