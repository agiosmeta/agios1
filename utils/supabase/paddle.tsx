'use client'

import { useEffect, useState } from 'react'

export const usePaddle = () => {
  const [paddle, setPaddle] = useState<any>(null)

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://cdn.paddle.com/paddle/paddle.js'
    script.async = true
    script.onload = () => {
      // Replace 'YOUR_PADDLE_VENDOR_ID' with your actual Paddle Vendor ID
      const paddleInstance = paddle.Setup({ vendor: "18989" })
      setPaddle(paddleInstance)
    }
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return paddle
}
