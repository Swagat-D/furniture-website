import Link from "next/link"

export function SiteFooter() {
  // Data that can be easily updated
  const collections = [
    { name: "Living Room", href: "/products?category=living-room" },
    { name: "Bedroom", href: "/products?category=bedroom" },
    { name: "Dining Room", href: "/products?category=dining-room" },
    { name: "Storage", href: "/products?category=storage" }
  ]

  const popularCategories = [
    { name: "Modern Oak Lounge Chair", href: "/products/1" },
    { name: "Walnut Coffee Table", href: "/products/2" },
    { name: "Beige Three-Seater Sofa", href: "/products/3" },
    { name: "Oak Bedside Table", href: "/products/4" },
    { name: "Wooden Dining Chair Set", href: "/products/5" },
    { name: "Modern Sideboard Console", href: "/products/6" }
  ]

  const deliveryCities = [
    { name: "Bhubaneswar" },
    { name: "Cuttack" },
    { name: "Puri" },
    { name: "Khordha" },
    { name: "Kolkata" },
    { name: "All Over Odisha" }
  ]

  const socialLinks = []

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
              <a href="tel:+919583530095" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>
              <a href="mailto:info@archikconstruction.com" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors">
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
            <h3 className="font-semibold mb-4 text-white border-b border-gray-600 pb-2 inline-block">Popular Products</h3>
            <div className="h-32 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
              <ul className="space-y-3 text-gray-300 text-sm pr-2">
                {popularCategories.map((item, index) => (
                  <li key={index}>
                    <Link href={item.href} className="hover:text-white transition-colors cursor-pointer">{item.name}</Link>
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
            <div className="space-y-4 text-gray-300 text-sm">
              <div>
                <div className="flex items-start gap-2 mb-2">
                  <svg className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <span className="font-semibold text-white block mb-1">Bhubaneswar Office</span>
                    <span className="leading-relaxed">Plot no-B/32, Sidhivihar, New Jagamara Road, Infront of Pabitra Mandap, Bhubaneswar, Khurda, Odisha, 751030</span>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-start gap-2 mb-2">
                  <svg className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <span className="font-semibold text-white block mb-1">Bengaluru Office</span>
                    <span className="leading-relaxed">J304 Icon Happy Living, Electronic City Phase 2, Ecity, Bengaluru - 560100</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+91 95835 30095</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@archikconstruction.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="border-t border-slate-700 mt-8 pt-8">
          <div className="flex flex-col items-center gap-3">
            <p className="text-sm text-gray-400">We Accept Secure Payment:</p>
            <div className="flex gap-3 items-center">
              <div className="px-3 py-1 bg-white rounded text-xs font-bold text-gray-800">UPI</div>
              <div className="px-3 py-1 bg-gray-600 rounded text-xs font-bold text-white">PhonePe</div>
              <div className="px-2 py-1 bg-gray-500 rounded text-xs text-white">EMI Available</div>
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
