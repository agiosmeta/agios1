'use client'

import { useEffect, useState } from 'react'

export const usePaddle = () => {
  const [paddle, setPaddle] = useState<any>(null)

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://cdn.paddle.com/paddle/paddle.js'
    script.async = true
    script.onload = () => {
      if (window.Paddle) {
        const paddleInstance = window.Paddle.Setup({
          vendor: process.env.NEXT_PUBLIC_PADDLE_VENDOR_ID, // Use the environment variable
          environment: "sandbox", // or 'production'
          token: "test_c2d0ccf5a6158d9dee25c51ce59", // Replace with your Paddle Sandbox auth token if required
        })
        setPaddle(paddleInstance)

        // Initialize the Paddle instance
        paddleInstance.Paddle.initialize({
          vendor: process.env.NEXT_PUBLIC_PADDLE_VENDOR_ID, // Use the environment variable
        })
      } else {
        console.error('Paddle object not available')
      }
    }
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return paddle
}
