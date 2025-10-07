"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactSection() {
  const [status, setStatus] = useState("")
  const [showSuccess, setShowSuccess] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })

  function onSubmit(e) {
    e.preventDefault()
    setStatus("Thanks! We'll get back to you within 24 hours.")
    setShowSuccess(true)
    setTimeout(() => {
      setShowSuccess(false)
      setStatus("")
      setFormData({ name: "", email: "", message: "" })
    }, 800)
  }

  return (
    <div>
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold">Contact Us</h2>
        <p className="text-muted-foreground mt-2 mx-auto max-w-prose">
          Tell us about your space and we'll help you get started.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-blue-50 to-amber-50 rounded-2xl p-6 border border-amber-100">
            <h3 className="text-xl font-semibold text-slate-800 mb-4">📍 Get in Touch</h3>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span>hello@Archik.example</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span>+91 90000 00000</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span>Kolkata, India</span>
              </li>
            </ul>
          </div>
        </div>
        <form onSubmit={onSubmit} className="bg-white rounded-2xl border border-amber-100 p-6 shadow-lg space-y-4">
          <div className="grid gap-2">
            <label className="text-sm font-medium text-slate-700">Name</label>
            <Input 
              required 
              placeholder="Your name" 
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="border-amber-200 focus:border-amber-400"
            />
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-medium text-slate-700">Email</label>
            <Input 
              required 
              type="email" 
              placeholder="you@example.com" 
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="border-amber-200 focus:border-amber-400"
            />
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-medium text-slate-700">Project Details</label>
            <Textarea 
              required 
              rows={4} 
              placeholder="Describe your project..." 
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="border-amber-200 focus:border-amber-400"
            />
          </div>
          <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium py-3 rounded-xl transition-all duration-200 transform hover:scale-105">
            Send message
          </Button>
          {status && !showSuccess && <p className="text-sm text-green-600">{status}</p>}
        </form>
      </div>

      {/* Success Animation */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 text-center animate-bounce shadow-2xl max-w-md mx-4">
            <div className="text-6xl mb-4">📧</div>
            <h3 className="text-2xl font-bold text-green-600 mb-2">Message Sent!</h3>
            <p className="text-slate-600">Thanks! We'll get back to you within 24 hours.</p>
          </div>
        </div>
      )}
    </div>
  )
}

export { ContactSection }