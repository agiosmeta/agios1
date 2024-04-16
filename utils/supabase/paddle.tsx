import { initializePaddle, Paddle } from '@paddle/paddle-js'
import { useState, useEffect } from 'react'

export const usePaddle = () => {
  const [paddle, setPaddle] = useState<Paddle>()

  useEffect(() => {
    initializePaddle({
      environment: 'sandbox', // Replace with your Paddle environment (e.g., 'sandbox' or 'production')
      token: 'test_c2d0ccf5a6158d9dee25c51ce59', // Replace with your Paddle authentication token
    }).then((paddleInstance: Paddle | undefined) => {
      if (paddleInstance) {
        setPaddle(paddleInstance)
      }
    })
  }, [])

  return paddle
}
