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
        //vendor: '18989', // Replace with your Paddle Vendor ID
        environment: "sandbox", // or 'production'
        token: "test_c2d0ccf5a6158d9dee25c51ce59", // Replace with your auth token
      })
      setPaddle(paddleInstance)
    }
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return paddle
}
