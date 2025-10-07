import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Suspense } from "react"
import { AuthProvider } from "@/components/auth-context"
import { CartProvider } from "@/components/cart-context"

export const metadata = {
  title: "Archik Constructions",
  description: "Furniture and interior solutions.",
  generator: "v0.app",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased min-h-screen bg-background text-foreground`}
      >
        <AuthProvider>
          <CartProvider>
            <Suspense fallback={<div>Loading...</div>}>
              <SiteHeader />
              <main className="flex-1">{children}</main>
              <SiteFooter />
              <Analytics />
            </Suspense>
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
