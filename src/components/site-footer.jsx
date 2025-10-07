import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t bg-slate-800 text-white">
      <div className="container mx-auto px-4 py-10 grid gap-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <img src="/placeholder-logo.png" alt="" className="h-7 w-7" />
            <span className="font-semibold tracking-wide text-white">Archik Constructions</span>
          </div>
          <p className="text-gray-300 mt-3 max-w-prose">
            Furniture and interior solutions designed to last — crafted with precision and care.
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-3 text-white">Explore</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="#products" className="hover:text-amber-300 transition-colors">Products</a>
            </li>
            <li>
              <a href="#services" className="hover:text-amber-300 transition-colors">Services</a>
            </li>
            <li>
              <Link href="/estimate" className="hover:text-amber-300 transition-colors">Estimate</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-3 text-white">Contact</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="#contact" className="hover:text-amber-300 transition-colors">Contact form</a>
            </li>
            <li>Email: hello@Archik.example</li>
            <li>Phone: +91 90000 00000</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-700 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Archik Constructions. All rights reserved.
      </div>
    </footer>
  )
}
