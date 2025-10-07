"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useAuth } from "./auth-context"

export default function AuthModal({ triggerClassName }) {
  const { user, login, signup, forgot, logout, loading: authLoading, error: authError } = useAuth()
  const [open, setOpen] = useState(false)
  const [mode, setMode] = useState("login") // login, signup, forgot
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    setError("") // Clear errors when user types
    setSuccess("") // Clear success when user types
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    
    setLoading(true)
    setError("")
    setSuccess("")

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
        if (!formData.email.trim()) {
          setError("Email is required")
          setLoading(false)
          return
        }
        result = await forgot(formData.email)
      }

      if (result && result.success) {
        if (mode === "forgot") {
          setSuccess(result.message)
          // Reset form but don't close modal for forgot password
          setFormData({ name: "", email: "", password: "" })
        } else {
          setOpen(false)
          setFormData({ name: "", email: "", password: "" })
          setMode("login")
        }
      } else {
        setError(result?.error || "Something went wrong")
      }
    } catch (err) {
      setError("Network error. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = async () => {
    await logout()
    setOpen(false)
  }

  if (user) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline" className={triggerClassName}>
            Welcome, {user.name}
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl">Account</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                <strong>Name:</strong> {user.name}
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Email:</strong> {user.email}
              </p>
            </div>
            <Button onClick={handleLogout} variant="outline">
              Logout
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className={triggerClassName}>
          Login
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl">
            {mode === "login" && "Welcome back"}
            {mode === "signup" && "Create your account"}
            {mode === "forgot" && "Reset your password"}
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={onSubmit} className="grid gap-4">
          {(error || authError) && (
            <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded">
              {error || authError}
            </div>
          )}
          
          {success && (
            <div className="p-3 text-sm text-green-600 bg-green-50 border border-green-200 rounded">
              {success}
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
                {mode === "forgot" && "Send Reset Instructions"}
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
                    setSuccess("")
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
                    setSuccess("")
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
                    setSuccess("")
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