"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { PasswordInput } from "@/components/ui/password-input"
import { useCart } from "@/components/cart-context"
import { useAuth } from "@/components/auth-context"
import { hardcodedProducts } from "@/data/products"

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [authModalOpen, setAuthModalOpen] = useState(false)
  const [cartPanelOpen, setCartPanelOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const [authMode, setAuthMode] = useState("login") // "login", "signup", "forgot", "otp", "reset"
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [otp, setOtp] = useState("")
  const [forgotEmail, setForgotEmail] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [authLoading, setAuthLoading] = useState(false)
  
  const { items, updateQty, removeFromCart, total, clearCart } = useCart()
  const { user, login, signup, logout } = useAuth()
  
  const handleAuthSubmit = async (e) => {
    e.preventDefault()
    setAuthLoading(true)
    
    try {
      if (authMode === "login") {
        const result = await login(email, password)
        if (result.success) {
          setAuthModalOpen(false)
          resetForm()
        } else {
          alert(result.error || 'Login failed')
        }
      } else if (authMode === "signup") {
        if (password !== confirmPassword) {
          alert("Passwords don't match!")
          setAuthLoading(false)
          return
        }
        const result = await signup(name, email, password)
        if (result.success) {
          setAuthModalOpen(false)
          resetForm()
        } else {
          alert(result.error || 'Signup failed')
        }
      } else if (authMode === "forgot") {
        // Send OTP to email
        const response = await fetch('/api/auth/forgot-password', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: forgotEmail }),
        })
        
        const data = await response.json()
        
        if (response.ok) {
          alert(data.message || 'Reset code sent to your email!')
          setAuthMode("otp")
        } else {
          alert(data.error || 'Failed to send reset code')
        }
      } else if (authMode === "otp") {
        // Verify OTP by attempting to reset password with dummy data first
        // This is a workaround since the current API combines verification and reset
        setAuthMode("reset")
      } else if (authMode === "reset") {
        // Reset password
        if (newPassword !== confirmPassword) {
          alert("Passwords don't match!")
          setAuthLoading(false)
          return
        }
        
        const response = await fetch('/api/auth/reset-password', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ 
            email: forgotEmail, 
            code: otp, 
            newPassword: newPassword 
          }),
        })
        
        const data = await response.json()
        
        if (response.ok) {
          alert(data.message || 'Password reset successful!')
          setAuthModalOpen(false)
          resetForm()
        } else {
          alert(data.error || 'Failed to reset password')
        }
      }
    } catch (error) {
      console.error('Auth error:', error)
      alert(error.message || 'An error occurred')
    } finally {
      setAuthLoading(false)
    }
  }
  
  const resetForm = () => {
    setName("")
    setEmail("")
    setPassword("")
    setConfirmPassword("")
    setOtp("")
    setForgotEmail("")
    setNewPassword("")
    setAuthMode("login")
    setAuthLoading(false)
  }
  
  const handleModalClose = () => {
    setAuthModalOpen(false)
    resetForm()
  }
  
  const handleCheckout = () => {
    if (!user) {
      setAuthModalOpen(true)
      setCartPanelOpen(false)
      return
    }

    if (items.length === 0) {
      alert('Your cart is empty!')
      return
    }

    // Redirect to checkout page
    setCartPanelOpen(false)
    window.location.href = '/checkout'
  }

  const handleSearch = (query) => {
    if (!query.trim()) {
      setSearchResults([])
      return
    }

    const results = hardcodedProducts.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.description.toLowerCase().includes(query.toLowerCase()) ||
      product.category.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 5) // Limit to 5 results

    setSearchResults(results)
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      setSearchOpen(false)
      setSearchQuery("")
      setSearchResults([])
      // Scroll to products section
      const productsSection = document.getElementById('products')
      if (productsSection) {
        productsSection.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  const handleSearchInputChange = (e) => {
    const value = e.target.value
    setSearchQuery(value)
    handleSearch(value)
  }

  const NavLinks = () => (
    <ul className="flex flex-col lg:flex-row gap-4 lg:gap-6 xl:gap-8 text-sm lg:text-[14px] xl:text-[15px]">
      <li>
        <Link href="/" className="hover:text-amber-300 transition-colors" onClick={() => setOpen(false)}>
          Home
        </Link>
      </li>
      <li>
        <a href="#story" className="hover:text-amber-300 transition-colors" onClick={() => setOpen(false)}>
          Our Story
        </a>
      </li>
      <li>
        <a href="#timeline" className="hover:text-amber-300 transition-colors" onClick={() => setOpen(false)}>
          Timeline
        </a>
      </li>
      <li>
        <a href="#products" className="hover:text-amber-300 transition-colors" onClick={() => setOpen(false)}>
          Products
        </a>
      </li>
      <li>
        <a href="#services" className="hover:text-amber-300 transition-colors" onClick={() => setOpen(false)}>
          Services
        </a>
      </li>
      <li>
        <a href="#contact" className="hover:text-amber-300 transition-colors" onClick={() => setOpen(false)}>
          Contact
        </a>
      </li>
    </ul>
  )

  return (
    <header className="sticky top-0 z-50 border-b bg-slate-800 backdrop-blur text-white">
      <div className="site-header-container container mx-auto px-3 sm:px-4 lg:px-6 h-14 sm:h-16 flex items-center justify-between max-w-full">
        <Link href="/" className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0 min-w-0">
          <img src="/placeholder-logo.png" alt="Archik Constructions logo" className="h-6 w-6 sm:h-7 sm:w-7 flex-shrink-0" />
          <span className="font-semibold tracking-wide text-white text-sm sm:text-base truncate">
            <span className="hidden lg:inline xl:inline">Archik Constructions</span>
            <span className="lg:hidden xl:hidden">Archik</span>
          </span>
        </Link>

        <nav className="hidden lg:block flex-shrink-0">
          <NavLinks />
        </nav>

        <div className="flex items-center justify-end gap-2 sm:gap-2 lg:gap-2 xl:gap-3 flex-shrink-0 relative z-50">
          {/* Mobile Menu Button - First item for maximum visibility */}
          <div className="lg:hidden block relative z-[100]">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="outline" 
                  size="sm"
                  aria-label="Open navigation menu" 
                  className="mobile-menu-btn border-2 border-amber-300 text-amber-300 hover:bg-amber-300 hover:text-slate-800 bg-slate-800 transition-all duration-200 p-2 h-11 w-11 flex items-center justify-center shadow-lg hover:shadow-xl ring-1 ring-amber-300/20"
                >
                  <span className="sr-only">Open menu</span>
                  {/* Three horizontal lines icon - hamburger menu */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-current" role="img" aria-label="Menu">
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                  </svg>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[350px] p-6">
                <div className="mt-6 space-y-6">
                  <div className="flex items-center gap-3 pb-4 border-b">
                    <img src="/placeholder-logo.png" alt="Archik Constructions logo" className="h-8 w-8" />
                    <span className="font-semibold text-lg">Archik Constructions</span>
                  </div>
                  
                  {/* Navigation Links */}
                  <div className="space-y-1">
                    <h3 className="font-medium text-gray-900 mb-3">Navigation</h3>
                    <NavLinks />
                  </div>
                  
                  {/* Quick Actions */}
                  <div className="pt-4 border-t space-y-3">
                    <h3 className="font-medium text-gray-900 mb-3">Quick Actions</h3>
                    
                    <Button 
                      onClick={() => {setSearchOpen(true); setOpen(false)}}
                      variant="outline"
                      className="w-full px-4 py-3 rounded font-medium transition-colors"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                      Search Products
                    </Button>
                    
                    {user ? (
                      <Button 
                        onClick={() => {logout(); setOpen(false)}}
                        variant="outline"
                        className="w-full px-4 py-3 rounded font-medium transition-colors"
                      >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013 3v1" />
                        </svg>
                        Logout ({user.name || user.email.split('@')[0]})
                      </Button>
                    ) : (
                      <Button 
                        onClick={() => {setAuthModalOpen(true); setOpen(false)}}
                        variant="outline"
                        className="w-full px-4 py-3 rounded font-medium transition-colors"
                      >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        Login / Sign Up
                      </Button>
                    )}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Search Button */}
          <Button 
            onClick={() => setSearchOpen(true)}
            variant="outline" 
            size="sm"
            className="hidden sm:flex border-white text-white hover:bg-white hover:text-slate-800 bg-transparent px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm"
          >
            <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span className="hidden lg:inline xl:inline ml-1">Search</span>
          </Button>

          {/* Login Button or User Info */}
          {user ? (
            <>
              {/* Desktop User Info */}
              <div className="hidden lg:flex items-center gap-2">
                <span className="text-sm text-white truncate max-w-[100px] lg:max-w-[120px]">Hi, {user.name || user.email}</span>
                <Button 
                  onClick={logout}
                  variant="outline" 
                  size="sm"
                  className="border-white text-white hover:bg-white hover:text-slate-800 bg-transparent px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm font-medium transition-colors"
                >
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013 3v1" />
                  </svg>
                  <span className="hidden lg:inline xl:inline">Logout</span>
                </Button>
              </div>
              {/* Mobile/Tablet Logout Button */}
              <Button 
                onClick={logout}
                variant="outline" 
                size="sm"
                className="lg:hidden border-white text-white hover:bg-white hover:text-slate-800 bg-transparent px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm font-medium transition-colors"
              >
                <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013 3v1" />
                </svg>
              </Button>
            </>
          ) : (
            <Button 
              onClick={() => setAuthModalOpen(true)}
              className="hidden lg:flex bg-slate-700 hover:bg-slate-600 text-white px-2 sm:px-3 py-1.5 sm:py-2 rounded-md text-xs sm:text-sm font-medium transition-colors"
            >
              <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span className="hidden lg:inline xl:inline">Login / Sign up</span>
              <span className="lg:hidden xl:hidden">Login</span>
            </Button>
          )}

          {/* Cart Button with real item count */}
          <Button 
            onClick={() => setCartPanelOpen(true)}
            variant="outline" 
            size="sm"
            className="border-white text-white hover:bg-white hover:text-slate-800 relative bg-transparent px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm flex-shrink-0"
          >
            <svg className="w-4 h-4 mr-0 sm:mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 8m1.5-8h10m0 0v8a2 2 0 01-2 2H9a2 2 0 01-2-2v-8m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
            </svg>
            <span className="hidden sm:inline">Cart</span>
            {items.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full text-xs w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center animate-pulse">
                {items.reduce((n, i) => n + i.qty, 0)}
              </span>
            )}
          </Button>
        </div>
      </div>

      {/* Auth Modal */}
      <Dialog open={authModalOpen} onOpenChange={handleModalClose}>
        <DialogContent className="modal-content">
          <DialogHeader className="text-center mb-6">
            <DialogTitle className="text-2xl font-bold text-gray-900 mb-2">
              {authMode === "login" && "Welcome Back!"}
              {authMode === "signup" && "Join Archik Constructions"}
              {authMode === "forgot" && "Reset Your Password"}
              {authMode === "otp" && "Verify Your Email"}
              {authMode === "reset" && "Create New Password"}
            </DialogTitle>
            <p className="text-gray-600 text-sm">
              {authMode === "login" && "Sign in to your account to continue"}
              {authMode === "signup" && "Create your account to get started"}
              {authMode === "forgot" && "Enter your email to receive a reset code"}
              {authMode === "otp" && "Enter the verification code sent to your email"}
              {authMode === "reset" && "Choose a strong password for your account"}
            </p>
          </DialogHeader>
          <form onSubmit={handleAuthSubmit} className="space-y-5">
            {authMode === "login" && (
              <>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Email Address</label>
                  <Input 
                    type="email" 
                    placeholder="Enter your email address" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full h-12 px-4 text-base border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Password</label>
                  <PasswordInput 
                    placeholder="Enter your password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full h-12 px-4 text-base border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                  />
                </div>
                <Button 
                  type="submit" 
                  disabled={authLoading}
                  className="w-full h-12 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {authLoading ? 'Signing In...' : 'Sign In'}
                </Button>
                <div className="text-center pt-4 border-t border-gray-100">
                  <div className="space-y-3">
                    <button 
                      type="button" 
                      onClick={() => setAuthMode("signup")} 
                      className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
                    >
                      Don't have an account? Create one
                    </button>
                    <div className="text-gray-400">|</div>
                    <button 
                      type="button" 
                      onClick={() => setAuthMode("forgot")}
                      className="text-gray-500 hover:text-gray-700 font-medium transition-colors duration-200"
                    >
                      Forgot your password?
                    </button>
                  </div>
                </div>
              </>
            )}

            {authMode === "signup" && (
              <>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Full Name</label>
                  <Input 
                    type="text" 
                    placeholder="Enter your full name" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full h-12 px-4 text-base border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Email Address</label>
                  <Input 
                    type="email" 
                    placeholder="Enter your email address" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full h-12 px-4 text-base border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Password</label>
                  <PasswordInput 
                    placeholder="Enter your password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full h-12 px-4 text-base border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Confirm Password</label>
                  <PasswordInput 
                    placeholder="Confirm your password" 
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    className="w-full h-12 px-4 text-base border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                  />
                </div>
                <Button 
                  type="submit" 
                  disabled={authLoading}
                  className="w-full h-12 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {authLoading ? 'Creating Account...' : 'Create Account'}
                </Button>
                <div className="text-center pt-4 border-t border-gray-100">
                  <button 
                    type="button" 
                    onClick={() => setAuthMode("login")} 
                    className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
                  >
                    Already have an account? Sign in
                  </button>
                </div>
              </>
            )}

            {authMode === "forgot" && (
              <>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Email Address</label>
                  <Input 
                    type="email" 
                    placeholder="Enter your email address" 
                    value={forgotEmail}
                    onChange={(e) => setForgotEmail(e.target.value)}
                    required
                    className="w-full h-12 px-4 text-base border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                  />
                </div>
                <Button 
                  type="submit" 
                  disabled={authLoading}
                  className="w-full h-12 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {authLoading ? 'Sending...' : 'Send Reset Code'}
                </Button>
                <div className="text-center pt-4 border-t border-gray-100">
                  <button 
                    type="button" 
                    onClick={() => setAuthMode("login")} 
                    className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
                  >
                    Remember your password? Sign in
                  </button>
                </div>
              </>
            )}

            {authMode === "otp" && (
              <>
                <div className="text-center p-4 bg-blue-50 rounded-lg mb-4">
                  <p className="text-sm text-blue-800">
                    Verification code sent to{" "}
                    <span className="font-semibold">{forgotEmail}</span>
                  </p>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Verification Code</label>
                  <Input 
                    type="text" 
                    placeholder="Enter 6-digit code" 
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    maxLength={6}
                    required
                    className="w-full h-12 px-4 text-base border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 text-center tracking-widest font-mono"
                  />
                </div>
                <Button 
                  type="submit" 
                  disabled={authLoading}
                  className="w-full h-12 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {authLoading ? 'Verifying...' : 'Verify Code'}
                </Button>
                <div className="text-center pt-4 border-t border-gray-100">
                  <button 
                    type="button" 
                    onClick={() => setAuthMode("forgot")} 
                    className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
                  >
                    Didn't receive the code? Resend
                  </button>
                </div>
              </>
            )}

            {authMode === "reset" && (
              <>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">New Password</label>
                  <PasswordInput 
                    placeholder="Enter new password" 
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                    className="w-full h-12 px-4 text-base border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Confirm New Password</label>
                  <PasswordInput 
                    placeholder="Confirm new password" 
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    className="w-full h-12 px-4 text-base border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                  />
                </div>
                <Button 
                  type="submit" 
                  disabled={authLoading}
                  className="w-full h-12 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {authLoading ? 'Updating...' : 'Update Password'}
                </Button>
              </>
            )}
          </form>
        </DialogContent>
      </Dialog>

      {/* Cart Panel */}
      <Sheet open={cartPanelOpen} onOpenChange={setCartPanelOpen}>
        <SheetContent 
          side="right" 
          className="w-full sm:w-[400px] md:w-[450px] lg:w-[500px] max-w-[100vw] p-0 flex flex-col"
        >
          {/* Header */}
          <div className="p-6 pb-4 border-b border-gray-100 bg-slate-50">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Shopping Cart</h2>
              <button 
                onClick={() => setCartPanelOpen(false)}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
              >
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            {items.length > 0 && (
              <p className="text-sm text-gray-600 mt-1">
                {items.reduce((n, i) => n + i.qty, 0)} item{items.reduce((n, i) => n + i.qty, 0) !== 1 ? 's' : ''} in your cart
              </p>
            )}
          </div>

          {/* Content */}
          <div className="flex-1 overflow-hidden">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full p-8 text-center">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 8m1.5-8h10m0 0v8a2 2 0 01-2 2H9a2 2 0 01-2-2v-8m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Your cart is empty</h3>
                <p className="text-gray-500 text-sm">Add some beautiful furniture to get started!</p>
              </div>
            ) : (
              <div className="p-6 space-y-4 overflow-y-auto max-h-[calc(100vh-280px)]">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4 p-4 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200">
                    <img
                      src={item.imageUrl || "/placeholder-logo.png"}
                      alt={item.name}
                      className="h-16 w-16 sm:h-20 sm:w-20 rounded-lg object-cover flex-shrink-0 border border-gray-200"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-gray-900 text-sm sm:text-base leading-tight mb-1">
                        {item.name}
                      </h4>
                      <p className="text-lg font-bold text-blue-600 mb-3">
                        ₹{(item.priceNumber || 0).toLocaleString("en-IN")}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1 border border-gray-200">
                          <Button 
                            type="button" 
                            size="icon" 
                            variant="ghost" 
                            className="h-8 w-8 rounded-md bg-white hover:bg-gray-50 border border-gray-200 shadow-sm transition-all duration-200"
                            onClick={() => updateQty(item.id, item.qty - 1)}
                          >
                            <span className="text-lg font-bold text-gray-700">−</span>
                          </Button>
                          <span className="w-8 text-center text-sm font-semibold text-gray-900 bg-white px-2 py-1 rounded border border-gray-200">{item.qty}</span>
                          <Button 
                            type="button" 
                            size="icon" 
                            variant="ghost" 
                            className="h-8 w-8 rounded-md bg-white hover:bg-gray-50 border border-gray-200 shadow-sm transition-all duration-200"
                            onClick={() => updateQty(item.id, item.qty + 1)}
                          >
                            <span className="text-lg font-bold text-gray-700">+</span>
                          </Button>
                        </div>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          onClick={() => removeFromCart(item.id)} 
                          className="text-red-500 hover:text-red-700 hover:bg-red-50 px-3 py-1 rounded-lg transition-all duration-200"
                        >
                          Remove
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-gray-200 bg-white p-6 space-y-4">
              <div className="flex items-center justify-between text-lg">
                <span className="font-semibold text-gray-700">Subtotal</span>
                <span className="font-bold text-2xl text-gray-900">₹{total.toLocaleString("en-IN")}</span>
              </div>
              <div className="flex gap-3">
                <Button 
                  onClick={() => handleCheckout()}
                  disabled={!user}
                  className="flex-1 h-12 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {user ? 'Proceed to Checkout' : 'Login to Checkout'}
                </Button>
                <Button 
                  variant="outline" 
                  onClick={clearCart}
                  className="px-6 h-12 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-200"
                >
                  Clear
                </Button>
              </div>
              <p className="text-xs text-gray-500 text-center">
                Free shipping on orders over ₹50,000
              </p>
            </div>
          )}
        </SheetContent>
      </Sheet>

      {/* Search Modal */}
      <Dialog open={searchOpen} onOpenChange={setSearchOpen}>
        <DialogContent className="modal-content max-w-2xl">
          <DialogHeader className="text-center mb-6">
            <DialogTitle className="text-2xl font-bold text-gray-900 mb-2">
              Search Products
            </DialogTitle>
            <p className="text-gray-600 text-sm">
              Find the perfect furniture for your space
            </p>
          </DialogHeader>
          <form onSubmit={handleSearchSubmit} className="space-y-4">
            <div className="relative">
              <Input 
                type="text" 
                placeholder="Search for furniture..." 
                value={searchQuery}
                onChange={handleSearchInputChange}
                className="w-full h-14 pl-12 pr-4 text-base border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                autoFocus
              />
              <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            
            {/* Search Results */}
            {searchResults.length > 0 && (
              <div className="max-h-64 overflow-y-auto border border-gray-200 rounded-lg">
                {searchResults.map((product) => (
                  <div key={product.id} className="flex items-center gap-3 p-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0">
                    <img 
                      src={product.image || "/placeholder-logo.png"} 
                      alt={product.name} 
                      className="w-12 h-12 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{product.name}</h4>
                      <p className="text-sm text-gray-600">₹{product.price.toLocaleString("en-IN")}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            <div className="flex gap-3">
              <Button 
                type="submit" 
                className="flex-1 h-12 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-all duration-200"
              >
                Search Products
              </Button>
              <Button 
                type="button"
                variant="outline"
                onClick={() => {setSearchOpen(false); setSearchQuery(""); setSearchResults([])}}
                className="px-6 h-12 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-200"
              >
                Cancel
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </header>
  )
}
