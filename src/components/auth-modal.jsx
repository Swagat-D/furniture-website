"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useAuth } from "./auth-context"

export default function AuthModal({ triggerClassName }) {
  const { user, login, signup, forgot, logout, loading: authLoading, error: authError } = useAuth()
  const [open, setOpen] = useState(false)
  const [mode, setMode] = useState("login")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    setError("") // Clear errors when user types
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      let result
      if (mode === "login") {
        result = await login(formData.email, formData.password)
      } else if (mode === "signup") {
        if (!formData.name.trim()) {
          setError("Name is required")
          setLoading(false)
          return
        }
        result = await signup(formData.name, formData.email, formData.password)
      } else if (mode === "forgot") {
        result = await forgot(formData.email)
      }

      if (result.success) {
        setOpen(false)
        setFormData({ name: "", email: "", password: "" })
        setMode("login")
      } else {
        setError(result.error || "Something went wrong")
      }
    } catch (err) {
      setError("Network error. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = async () => {
    await logout()
  }

  if (authLoading) {
    return (
      <div className="flex items-center gap-3">
        <span className="text-sm">Loading...</span>
      </div>
    )
  }

  if (user) {
    return (
      <div className="flex items-center gap-3">
        <span className="text-sm">Hi, {user.name || user.email}</span>
        <Button variant="outline" size="sm" onClick={handleLogout}>
          Logout
        </Button>
      </div>
    )
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className={triggerClassName} onClick={() => setOpen(true)}>
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <span className="hidden sm:inline">Login / Sign up</span>
          <span className="sm:hidden">Login</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl">
            {mode === "login" && "Welcome back"}
            {mode === "signup" && "Create your account"}
            {mode === "forgot" && "Forgot password"}
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={onSubmit} className="grid gap-4">
          {(error || authError) && (
            <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded">
              {error || authError}
            </div>
          )}
          
          {mode === "signup" && (
            <div className="grid gap-2">
              <label className="text-sm font-medium">Name</label>
              <Input 
                name="name"
                type="text" 
                required 
                value={formData.name} 
                onChange={handleInputChange}
                disabled={loading}
              />
            </div>
          )}
          
          <div className="grid gap-2">
            <label className="text-sm font-medium">Email</label>
            <Input 
              name="email"
              type="email" 
              required 
              value={formData.email} 
              onChange={handleInputChange}
              disabled={loading}
            />
          </div>
          
          {mode !== "forgot" && (
            <div className="grid gap-2">
              <label className="text-sm font-medium">Password</label>
              <Input 
                name="password"
                type="password" 
                required 
                minLength={6}
                value={formData.password} 
                onChange={handleInputChange}
                disabled={loading}
              />
              {mode === "signup" && (
                <p className="text-xs text-muted-foreground">
                  Password must be at least 6 characters
                </p>
              )}
            </div>
          )}
          
          <Button 
            type="submit" 
            className="bg-primary text-primary-foreground"
            disabled={loading}
          >
            {loading ? "Please wait..." : (
              <>
                {mode === "login" && "Login"}
                {mode === "signup" && "Sign up"}
                {mode === "forgot" && "Send reset link"}
              </>
            )}
          </Button>
          
          <div className="text-center text-sm text-muted-foreground">
            {mode === "login" && (
              <div className="space-x-2">
                <button 
                  type="button" 
                  onClick={() => {
                    setMode("signup")
                    setError("")
                    setFormData({ name: "", email: "", password: "" })
                  }} 
                  className="underline hover:text-foreground"
                  disabled={loading}
                >
                  Create account
                </button>
                <button 
                  type="button" 
                  onClick={() => {
                    setMode("forgot")
                    setError("")
                    setFormData({ name: "", email: "", password: "" })
                  }} 
                  className="underline hover:text-foreground"
                  disabled={loading}
                >
                  Forgot password?
                </button>
              </div>
            )}
            {mode !== "login" && (
              <div>
                <button 
                  type="button" 
                  onClick={() => {
                    setMode("login")
                    setError("")
                    setFormData({ name: "", email: "", password: "" })
                  }} 
                  className="underline hover:text-foreground"
                  disabled={loading}
                >
                  Back to login
                </button>
              </div>
            )}
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
