"use client"

import { useState } from 'react'

export default function TestPage() {
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false)

  const testSignup = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          name: 'Test User',
          email: `test${Date.now()}@example.com`,
          password: 'password123'
        }),
      })

      const data = await response.json()
      setResult(`Signup: ${response.status} - ${JSON.stringify(data, null, 2)}`)
    } catch (error) {
      setResult(`Signup Error: ${error.message}`)
    }
    setLoading(false)
  }

  const testLogin = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          email: 'test@example.com',
          password: 'password123'
        }),
      })

      const data = await response.json()
      setResult(`Login: ${response.status} - ${JSON.stringify(data, null, 2)}`)
    } catch (error) {
      setResult(`Login Error: ${error.message}`)
    }
    setLoading(false)
  }

  const testProducts = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/products')
      const data = await response.json()
      setResult(`Products: ${response.status} - Found ${data.products?.length || 0} products`)
    } catch (error) {
      setResult(`Products Error: ${error.message}`)
    }
    setLoading(false)
  }

  const testCurrentUser = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/auth/me', {
        method: 'GET',
        credentials: 'include',
      })

      const data = await response.json()
      setResult(`Current User: ${response.status} - ${JSON.stringify(data, null, 2)}`)
    } catch (error) {
      setResult(`Current User Error: ${error.message}`)
    }
    setLoading(false)
  }

  const testAddToCart = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          productId: 'sofa-001',
          name: 'Modern Sofa',
          price: 45000,
          image: '/beige-fabric-sofa-three-seater-modern-interior.jpg',
          quantity: 1
        }),
      })

      const data = await response.json()
      setResult(`Add to Cart: ${response.status} - ${JSON.stringify(data, null, 2)}`)
    } catch (error) {
      setResult(`Add to Cart Error: ${error.message}`)
    }
    setLoading(false)
  }

  const testContact = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: 'Test User',
          email: 'test@example.com',
          message: 'This is a test message'
        }),
      })

      const data = await response.json()
      setResult(`Contact: ${response.status} - ${JSON.stringify(data, null, 2)}`)
    } catch (error) {
      setResult(`Contact Error: ${error.message}`)
    }
    setLoading(false)
  }

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Backend API Test</h1>
      
      <div className="space-y-4 mb-6">
        <button 
          onClick={testSignup}
          disabled={loading}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50"
        >
          Test Signup
        </button>
        
        <button 
          onClick={testLogin}
          disabled={loading}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 disabled:opacity-50 ml-2"
        >
          Test Login
        </button>
        
        <button 
          onClick={testProducts}
          disabled={loading}
          className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 disabled:opacity-50 ml-2"
        >
          Test Products
        </button>
        
        <button 
          onClick={testCurrentUser}
          disabled={loading}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 disabled:opacity-50 ml-2"
        >
          Test Current User
        </button>
        
        <button 
          onClick={testAddToCart}
          disabled={loading}
          className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 disabled:opacity-50 ml-2"
        >
          Test Add to Cart
        </button>
        
        <button 
          onClick={testContact}
          disabled={loading}
          className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 disabled:opacity-50 ml-2"
        >
          Test Contact
        </button>
      </div>

      {loading && <p>Loading...</p>}
      
      {result && (
        <div className="bg-gray-100 p-4 rounded">
          <h3 className="font-bold mb-2">Result:</h3>
          <pre className="whitespace-pre-wrap text-sm">{result}</pre>
        </div>
      )}
    </div>
  )
}