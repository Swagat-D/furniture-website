"use client"

import { createContext, useContext, useEffect, useMemo, useState } from "react"

const AuthCtx = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [token, setToken] = useState(null) // Add token state
  const [isInitialized, setIsInitialized] = useState(false)

  // Check if user is already logged in on mount
  useEffect(() => {
    // Only run once after component mounts
    if (!isInitialized) {
      checkAuthStatus()
      setIsInitialized(true)
    }
  }, [isInitialized])

  const checkAuthStatus = async () => {
    try {
      setLoading(true)
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

      // Set token immediately to prevent timing issues
      setToken(storedToken)

      const response = await fetch('/api/auth/me', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${storedToken}`,
          'Content-Type': 'application/json',
        },
        cache: 'no-cache', // Don't cache auth checks
      })

      if (response.ok) {
        const data = await response.json()
        setUser(data.user)
        console.log('Auth check successful:', data.user.email)
      } else {
        console.log('Auth check failed with status:', response.status)
        // Only remove token if it's actually invalid (401)
        if (response.status === 401) {
          setUser(null)
          setToken(null)
          localStorage.removeItem('authToken')
        }
      }
    } catch (error) {
      console.error('Auth check failed:', error)
      // Don't clear auth on network errors, only on actual auth failures
      if (error.message.includes('Invalid token')) {
        setUser(null)
        setToken(null)
        if (typeof window !== 'undefined') {
          localStorage.removeItem('authToken')
        }
      }
    } finally {
      setLoading(false)
    }
  }

  const login = async (email, password) => {
    try {
      setError(null)
      setLoading(true)
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
    } finally {
      setLoading(false)
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
      setLoading(true)
      
      console.log('Auth context: sending forgot password request for:', email)
      const response = await fetch('/api/auth/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      console.log('Auth context: forgot password response status:', response.status)
      const data = await response.json()
      console.log('Auth context: forgot password response data:', data)

      if (response.ok) {
        return { success: true, message: data.message }
      } else {
        setError(data.error)
        return { success: false, error: data.error }
      }
    } catch (error) {
      console.error('Forgot password failed:', error)
      const errorMessage = 'Network error. Please try again.'
      setError(errorMessage)
      return { success: false, error: errorMessage }
    } finally {
      setLoading(false)
    }
  }

  const verifyResetCode = async (email, code) => {
    try {
      setError(null)
      setLoading(true)
      
      const response = await fetch('/api/auth/verify-reset-code', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, code }),
      })

      const data = await response.json()

      if (response.ok) {
        return { success: true, message: data.message }
      } else {
        setError(data.error)
        return { success: false, error: data.error }
      }
    } catch (error) {
      console.error('Verify reset code failed:', error)
      const errorMessage = 'Network error. Please try again.'
      setError(errorMessage)
      return { success: false, error: errorMessage }
    } finally {
      setLoading(false)
    }
  }

  const resetPassword = async (email, code, newPassword) => {
    try {
      setError(null)
      setLoading(true)
      
      const response = await fetch('/api/auth/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, code, newPassword }),
      })

      const data = await response.json()

      if (response.ok) {
        return { success: true, message: data.message }
      } else {
        setError(data.error)
        return { success: false, error: data.error }
      }
    } catch (error) {
      console.error('Reset password failed:', error)
      const errorMessage = 'Network error. Please try again.'
      setError(errorMessage)
      return { success: false, error: errorMessage }
    } finally {
      setLoading(false)
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
    verifyResetCode,
    resetPassword,
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
