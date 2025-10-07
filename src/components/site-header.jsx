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

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [authModalOpen, setAuthModalOpen] = useState(false)
  const [cartPanelOpen, setCartPanelOpen] = useState(false)
  const [authMode, setAuthMode] = useState("login") // "login", "signup", "forgot", "otp", "reset"
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [otp, setOtp] = useState("")
  const [forgotEmail, setForgotEmail] = useState("")
  const [newPassword, setNewPassword] = useState("")
  
  const { items, updateQty, removeFromCart, total, clearCart } = useCart()
  const { user, login, signup, logout } = useAuth()
  
  const handleAuthSubmit = (e) => {
    e.preventDefault()
    if (authMode === "login") {
      login(email, password)
      setAuthModalOpen(false)
    } else if (authMode === "signup") {
      signup(email, password)
      setAuthModalOpen(false)
    } else if (authMode === "forgot") {
      // Simulate sending OTP
      console.log("Sending OTP to:", forgotEmail)
      setAuthMode("otp")
    } else if (authMode === "otp") {
      // Verify OTP
      console.log("Verifying OTP:", otp)
      setAuthMode("reset")
    } else if (authMode === "reset") {
      // Reset password
      if (newPassword === confirmPassword) {
        console.log("Password reset successful")
        setAuthModalOpen(false)
        resetForm()
      } else {
        alert("Passwords don't match!")
      }
    }
  }
  
  const resetForm = () => {
    setEmail("")
    setPassword("")
    setConfirmPassword("")
    setOtp("")
    setForgotEmail("")
    setNewPassword("")
    setAuthMode("login")
  }
  
  const handleModalClose = () => {
    setAuthModalOpen(false)
    resetForm()
  }
  
  const NavLinks = () => (
    <ul className="flex flex-col lg:flex-row gap-4 lg:gap-6 xl:gap-8 text-sm lg:text-[14px] xl:text-[15px]">
      <li>
        <a href="#story" className="hover:text-amber-300 transition-colors">
          Our Story
        </a>
      </li>
      <li>
        <a href="#timeline" className="hover:text-amber-300 transition-colors">
          Timeline
        </a>
      </li>
      <li>
        <a href="#products" className="hover:text-amber-300 transition-colors">
          Products
        </a>
      </li>
      <li>
        <a href="#services" className="hover:text-amber-300 transition-colors">
          Services
        </a>
      </li>
      <li>
        <a href="#contact" className="hover:text-amber-300 transition-colors">
          Contact
        </a>
      </li>
      <li>
        <Link href="/estimate" className="hover:text-amber-300 transition-colors">
          Estimate
        </Link>
      </li>
    </ul>
  )

  return (
    <header className="sticky top-0 z-50 border-b bg-slate-800 backdrop-blur text-white">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 h-14 sm:h-16 flex items-center justify-between max-w-full">
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

        <div className="flex items-center gap-1 sm:gap-2 lg:gap-2 xl:gap-3 flex-shrink-0">
          {/* Login Button or User Info */}
          {user ? (
            <div className="hidden md:flex items-center gap-2">
              <span className="text-sm text-white truncate max-w-[100px] lg:max-w-[120px]">Hi, {user.email}</span>
              <Button 
                onClick={logout}
                variant="outline" 
                size="sm"
                className="border-white text-black hover:bg-white hover:text-slate-800 text-xs px-2 py-1 font-medium"
              >
                Logout
              </Button>
            </div>
          ) : (
            <Button 
              onClick={() => setAuthModalOpen(true)}
              className="hidden sm:flex bg-blue-600 hover:bg-blue-700 text-white px-2 sm:px-3 py-1.5 sm:py-2 rounded-md text-xs sm:text-sm font-medium transition-colors"
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
            className="border-white text-white hover:bg-white hover:text-slate-800 relative bg-transparent px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm"
          >
            <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-0 sm:mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 8m1.5-8h10m0 0v8a2 2 0 01-2 2H9a2 2 0 01-2-2v-8m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
            </svg>
            <span className="hidden lg:inline xl:inline">Cart</span>
            {items.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full text-xs w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center animate-pulse">
                {items.reduce((n, i) => n + i.qty, 0)}
              </span>
            )}
          </Button>

          {/* Get Estimate Button */}
          <Link href="/estimate" className="hidden xl:block">
            <Button size="sm" className="bg-amber-600 hover:bg-amber-700 text-white font-medium transition-colors text-xs px-3 py-2">
              Get estimate
            </Button>
          </Link>

          {/* mobile menu */}
          <div className="lg:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" aria-label="Open menu" className="border-white text-white hover:bg-white hover:text-slate-800 transition-colors p-1.5 sm:p-2 h-8 w-8 sm:h-10 sm:w-10">
                  <span className="sr-only">Open menu</span>
                  <svg width="16" height="16" className="sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[320px] p-4 sm:p-6">
                <div className="mt-6 space-y-6">
                  <div className="flex items-center gap-2 pb-4 border-b">
                    <img src="/placeholder-logo.png" alt="Archik Constructions logo" className="h-8 w-8" />
                    <span className="font-semibold text-lg">Archik Constructions</span>
                  </div>
                  <NavLinks />
                  <div className="pt-4 border-t space-y-3">
                    {!user && (
                      <Button 
                        onClick={() => {setAuthModalOpen(true); setOpen(false)}}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded font-medium transition-colors"
                      >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        Login / Sign up
                      </Button>
                    )}
                    <Button 
                      onClick={() => {setCartPanelOpen(true); setOpen(false)}}
                      variant="outline"
                      className="w-full px-4 py-3 rounded font-medium transition-colors relative"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 8m1.5-8h10m0 0v8a2 2 0 01-2 2H9a2 2 0 01-2-2v-8m8 0V9a2 2 0 00-2 2H9a2 2 0 00-2 2v4.01" />
                      </svg>
                      Cart {items.length > 0 && `(${items.reduce((n, i) => n + i.qty, 0)})`}
                    </Button>
                    <Link href="/estimate" className="block" onClick={() => setOpen(false)}>
                      <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 transition-colors">
                        Get estimate
                      </Button>
                    </Link>
                    {user && (
                      <Button 
                        onClick={() => {logout(); setOpen(false)}}
                        variant="outline"
                        className="w-full px-4 py-3 rounded font-medium text-black transition-colors border-gray-300 hover:bg-gray-50"
                      >
                        Logout
                      </Button>
                    )}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
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
                  className="w-full h-12 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02]"
                >
                  Sign In
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
                  className="w-full h-12 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02]"
                >
                  Create Account
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
                  className="w-full h-12 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02]"
                >
                  Send Reset Code
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
                  className="w-full h-12 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02]"
                >
                  Verify Code
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
                  className="w-full h-12 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02]"
                >
                  Update Password
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
          <div className="p-6 pb-4 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white">
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
                      src={item.imageUrl || "/placeholder.svg"}
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
                <Button className="flex-1 h-12 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02]">
                  Proceed to Checkout
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
    </header>
  )
}
