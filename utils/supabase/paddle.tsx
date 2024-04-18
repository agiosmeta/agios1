'use client'

import { useEffect, useState } from 'react'
import * as Paddle from '@paddle/paddle-js'

const usePaddle = () => {
  const [paddle, setPaddle] = useState<any>(null)

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://cdn.paddle.com/paddle/paddle.js'
    script.async = true
    script.onload = () => {
      if (window.Paddle) {
        const authToken = process.env.NEXT_PUBLIC_PADDLE_AUTH_TOKEN
        const paddleOptions: any = {
          vendor: process.env.NEXT_PUBLIC_PADDLE_VENDOR_ID,
          environment: process.env.NEXT_PUBLIC_PADDLE_ENVIRONMENT,
          authToken: authToken || undefined,
        }
        const paddleInstance = window.Paddle.Setup(paddleOptions)
        setPaddle(paddleInstance)
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

export default usePaddle
