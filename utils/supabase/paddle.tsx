'use client'

import { useEffect, useState } from 'react'

export const usePaddle = () => {
  const [paddle, setPaddle] = useState<any>(null)

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://cdn.paddle.com/paddle/paddle.js'
    script.async = true
    script.onload = () => {
      const paddleInstance = paddle.Setup({
        environment: "sandbox", // or 'production'
        token: "test_c2d0ccf5a6158d9dee25c51ce59", // Replace with your Paddle Sandbox auth token if required
      })
      setPaddle(paddleInstance)
    }
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  const generateCheckoutLink = async (productId: string) => {
    if (paddle) {
      try {
        // Replace with your Paddle Sandbox API Key
        const apiKey = '11095391802005acb28091770d0e1af559d20f322b68e181cc'
        const checkoutLink = await paddle.Checkout.open({
          product: productId,
          auth: apiKey,
        })
        return checkoutLink
      } catch (error) {
        console.error('Error generating checkout link:', error)
      }
    }
  }

  const initializePaddle = () => {
    if (paddle) {
      paddle.Paddle.initialize({
        // Replace with your Paddle Sandbox Vendor ID
        vendor: '18989',
      })
    }
  }

  useEffect(() => {
    initializePaddle()
  }, [paddle])

  return { paddle, generateCheckoutLink }
}
