import Link from "next/link"

export function SiteFooter() {
  // Data that can be easily updated
  const collections = [
    { name: "Living Room", href: "#products" },
    { name: "Bedroom", href: "#products" },
    { name: "Dining Room", href: "#products" },
    { name: "Office & Study", href: "#products" },
    { name: "Kitchen & Bath", href: "#products" },
    { name: "Outdoor", href: "#products" }
  ]

  const popularCategories = [
    { name: "Queen Size Beds" },
    { name: "King Size Beds" },
    { name: "Coffee Tables" },
    { name: "Dining Sets" },
    { name: "Recliners" }
  ]

  const deliveryCities = [
    { name: "Mumbai" },
    { name: "Delhi" },
    { name: "Bangalore" },
    { name: "Hyderabad" },
    { name: "Chennai" },
    { name: "Pune" },
    { name: "Kolkata" },
    { name: "Ahmedabad" }
  ]

  const socialLinks = [
    { 
      name: "Facebook", 
      href: "#", 
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    { 
      name: "Instagram", 
      href: "#", 
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.404-5.96 1.404-5.96s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.357-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001.012.017z"/>
        </svg>
      )
    },
    { 
      name: "LinkedIn", 
      href: "#", 
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    }
  ]

  return (
    <footer className="border-t bg-slate-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src="/placeholder-logo.png" alt="" className="h-8 w-8" />
              <span className="font-bold text-xl text-white">ARCHIK HOMES</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Premium furniture and interior design solutions for luxury living.
            </p>
            <div className="flex gap-3">
              <a href="tel:+919876543210" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>
              <a href="mailto:hello@archik.com" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Collections */}
          <div>
            <h3 className="font-semibold mb-4 text-white border-b border-gray-600 pb-2 inline-block">Collections</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              {collections.map((item, index) => (
                <li key={index}>
                  <a href={item.href} className="hover:text-white transition-colors">{item.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Categories */}
          <div>
            <h3 className="font-semibold mb-4 text-white border-b border-gray-600 pb-2 inline-block">Popular Categories</h3>
            <div className="h-32 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
              <ul className="space-y-3 text-gray-300 text-sm pr-2">
                {popularCategories.map((item, index) => (
                  <li key={index}>
                    <span className="hover:text-white transition-colors cursor-pointer">{item.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Cities We Deliver To */}
          <div>
            <h3 className="font-semibold mb-4 text-white border-b border-gray-600 pb-2 inline-block">Cities We Deliver To</h3>
            <div className="h-32 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
              <ul className="space-y-3 text-gray-300 text-sm pr-2">
                {deliveryCities.map((city, index) => (
                  <li key={index}>
                    <span className="hover:text-white transition-colors cursor-pointer">{city.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-white border-b border-gray-600 pb-2 inline-block">Contact</h3>
            <div className="space-y-3 text-gray-300 text-sm">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Mumbai, India</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>hello@archik.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Payment */}
        <div className="border-t border-slate-700 mt-8 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Social Media */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
                  target={social.name === "WhatsApp" ? "_blank" : "_self"}
                  rel={social.name === "WhatsApp" ? "noopener noreferrer" : undefined}
                >
                  {social.icon}
                  {social.name}
                </a>
              ))}
            </div>

            {/* Payment Methods */}
            <div className="flex flex-col items-center lg:items-end gap-3">
              <p className="text-sm text-gray-400">We Accept Secure Payment:</p>
              <div className="flex gap-3 items-center">
                <div className="px-3 py-1 bg-white rounded text-xs font-bold text-gray-800">UPI</div>
                <div className="px-3 py-1 bg-gray-600 rounded text-xs font-bold text-white">PhonePe</div>
                <div className="px-2 py-1 bg-gray-500 rounded text-xs text-white">EMI Available</div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-700 mt-6 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Archik Constructions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
