"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useAuth } from "./auth-context"

export default function AuthModal({ triggerClassName }) {
  const { user, login, signup, forgot, logout } = useAuth()
  const [open, setOpen] = useState(false)
  const [mode, setMode] = useState("login")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const onSubmit = (e) => {
    e.preventDefault()
    if (mode === "login") login(email, password)
    if (mode === "signup") signup(email, password)
    if (mode === "forgot") forgot(email)
    setOpen(false)
  }

  if (user) {
    return (
      <div className="flex items-center gap-3">
        <span className="text-sm">Hi, {user.email}</span>
        <Button variant="outline" size="sm" onClick={logout}>
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
          <div className="grid gap-2">
            <label className="text-sm font-medium">Email</label>
            <Input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          {mode !== "forgot" && (
            <div className="grid gap-2">
              <label className="text-sm font-medium">Password</label>
              <Input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
          )}
          <Button type="submit" className="bg-primary text-primary-foreground">
            {mode === "login" && "Login"}
            {mode === "signup" && "Sign up"}
            {mode === "forgot" && "Send reset link"}
          </Button>
          <div className="text-center text-sm text-muted-foreground">
            {mode === "login" && (
              <div className="space-x-2">
                <button type="button" onClick={() => setMode("signup")} className="underline">
                  Create account
                </button>
                <button type="button" onClick={() => setMode("forgot")} className="underline">
                  Forgot password?
                </button>
              </div>
            )}
            {mode !== "login" && (
              <div>
                <button type="button" onClick={() => setMode("login")} className="underline">
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
