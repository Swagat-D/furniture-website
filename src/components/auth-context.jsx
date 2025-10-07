"use client"

import { createContext, useContext, useEffect, useMemo, useState } from "react"

const AuthCtx = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [token, setToken] = useState(null) // Add token state

  // Check if user is already logged in on mount
  useEffect(() => {
    checkAuthStatus()
  }, [])

  const checkAuthStatus = async () => {
    try {
      // Check if localStorage is available (client-side only)
      if (typeof window === 'undefined') {
        setLoading(false)
        return
      }

      const storedToken = localStorage.getItem('authToken')
      if (!storedToken) {
        setUser(null)
        setToken(null)
        setLoading(false)
        return
      }

      setToken(storedToken) // Set token in state

      const response = await fetch('/api/auth/me', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${storedToken}`,
          'Content-Type': 'application/json',
        },
      })

      if (response.ok) {
        const data = await response.json()
        setUser(data.user)
      } else {
        console.log('Auth check failed with status:', response.status)
        setUser(null)
        setToken(null)
        localStorage.removeItem('authToken')
      }
    } catch (error) {
      console.error('Auth check failed:', error)
      setUser(null)
      setToken(null)
      if (typeof window !== 'undefined') {
        localStorage.removeItem('authToken')
      }
    } finally {
      setLoading(false)
    }
  }

  const login = async (email, password) => {
    try {
      setError(null)
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })

      const data = await response.json()

      if (response.ok) {
        // Store token in localStorage and state
        const receivedToken = data.token
        if (typeof window !== 'undefined') {
          localStorage.setItem('authToken', receivedToken)
        }
        setToken(receivedToken) // Set token in state immediately
        setUser(data.user)
        
        return { success: true, user: data.user }
      } else {
        setError(data.error)
        return { success: false, error: data.error }
      }
    } catch (error) {
      console.error('Login failed:', error)
      const errorMessage = 'Network error. Please try again.'
      setError(errorMessage)
      return { success: false, error: errorMessage }
    }
  }

  const signup = async (name, email, password) => {
    try {
      setError(null)
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ name, email, password }),
      })

      const data = await response.json()

      if (response.ok) {
        setUser(data.user)
        return { success: true, user: data.user }
      } else {
        setError(data.error)
        return { success: false, error: data.error }
      }
    } catch (error) {
      console.error('Signup failed:', error)
      const errorMessage = 'Network error. Please try again.'
      setError(errorMessage)
      return { success: false, error: errorMessage }
    }
  }

  const forgot = async (email) => {
    try {
      setError(null)
      // TODO: Implement forgot password API endpoint
      console.log('Forgot password for:', email)
      return { success: true, message: 'Password reset email sent' }
    } catch (error) {
      console.error('Forgot password failed:', error)
      const errorMessage = 'Network error. Please try again.'
      setError(errorMessage)
      return { success: false, error: errorMessage }
    }
  }

  const logout = async () => {
    try {
      // Remove token from localStorage and state
      if (typeof window !== 'undefined') {
        localStorage.removeItem('authToken')
      }
      setToken(null)
      await fetch('/api/auth/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      setUser(null)
      return { success: true }
    } catch (error) {
      console.error('Logout failed:', error)
      // Still clear user state and token even if API call fails
      if (typeof window !== 'undefined') {
        localStorage.removeItem('authToken')
      }
      setToken(null)
      setUser(null)
      return { success: true }
    }
  }

  const value = useMemo(() => ({ 
    user, 
    token, // Add token to context
    loading, 
    error, 
    login, 
    signup, 
    forgot, 
    logout,
    checkAuthStatus 
  }), [user, token, loading, error])
  
  return <AuthCtx.Provider value={value}>{children}</AuthCtx.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthCtx)
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider")
  return ctx
}
