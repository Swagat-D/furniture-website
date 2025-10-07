"use client"

import { createContext, useContext, useEffect, useMemo, useState } from "react"

const AuthCtx = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    try {
      const raw = localStorage.getItem("arAuth:user")
      if (raw) setUser(JSON.parse(raw))
    } catch {}
  }, [])

  const login = (email, password) => {
    const u = { email }
    localStorage.setItem("arAuth:user", JSON.stringify(u))
    setUser(u)
  }
  const signup = (email, password) => {
    const u = { email }
    localStorage.setItem("arAuth:user", JSON.stringify(u))
    setUser(u)
  }
  const forgot = (email) => {
    // could show toast in future
    return true
  }
  const logout = () => {
    localStorage.removeItem("arAuth:user")
    setUser(null)
  }

  const value = useMemo(() => ({ user, login, signup, forgot, logout }), [user])
  return <AuthCtx.Provider value={value}>{children}</AuthCtx.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthCtx)
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider")
  return ctx
}
