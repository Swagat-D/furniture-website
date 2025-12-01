"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CtaBanner() {
  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownloadBrochure = async () => {
    setIsDownloading(true)
    try {
      // Simulate brochure download
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Create a mock PDF download
      const link = document.createElement('a')
      link.href = '#'
      link.download = 'Archik-Construction-Brochure.pdf'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      
      // Show success message
      alert('Brochure download started! Check your downloads folder.')
    } catch (error) {
      alert('Download failed. Please try again.')
    } finally {
      setIsDownloading(false)
    }
  }

  const handleBookConsultation = () => {
    // Redirect to Cal.com booking page
    window.open('https://cal.com/swagat-dash-8nt1wl/discovery-call', '_blank')
  }

  return (
    <section className="bg-gray-50 border-y border-gray-200">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Transform your space with our premium furniture and interior design solutions. 
            Let's bring your vision to life.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            onClick={handleBookConsultation}
            size="lg"
            className="bg-slate-700 hover:bg-slate-600 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 0h6a2 2 0 012 2v10a2 2 0 01-2 2H8a2 2 0 01-2-2V9a2 2 0 012-2zM9 9l2 2 4-4" />
            </svg>
            Book a Free Consultation
          </Button>
          
          {/* <Button 
            onClick={handleDownloadBrochure}
            disabled={isDownloading}
            variant="outline"
            size="lg"
            className="border-2 border-gray-300 text-slate-700 hover:bg-gray-100 font-semibold px-8 py-3 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            {isDownloading ? 'Downloading...' : 'Download Brochure'}
          </Button> */}
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-sm text-slate-500">
            ✨ Free consultation • No obligations • Expert advice
          </p>
        </div>
      </div>
    </section>
  )
}
