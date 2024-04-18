'use client'

import { usePaddle } from '@paddle/paddle-js'

const ClientCheckoutButton = () => {
  const paddle = usePaddle()

  const openCheckout = async () => {
    if (paddle) {
      try {
        const productId = process.env.NEXT_PUBLIC_PADDLE_PRODUCT_ID
        const apiKey = process.env.NEXT_PUBLIC_PADDLE_API_KEY

        if (!productId || !apiKey) {
          console.error('Paddle product ID or API key not found')
          return
        }

        const checkoutLink = await paddle.Checkout.open({
          product: productId,
          auth: apiKey,
        })

        if (checkoutLink) {
          window.location.href = checkoutLink
        }
      } catch (error) {
        console.error('Error opening checkout:', error)
      }
    }
  }

  return (
    <button
      onClick={openCheckout}
      className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300"
    >
      <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-black rounded-md group-hover:bg-opacity-0">
        Subscribe
      </span>
    </button>
  )
}

export default ClientCheckoutButton
